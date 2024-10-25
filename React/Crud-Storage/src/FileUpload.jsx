// src/FileUpload.js
import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject, updateMetadata } from 'firebase/storage';
import { storage } from './firebase';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);
    const [newFileName, setNewFileName] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = () => {
        if (!file) return;
        const storageRef = ref(storage, `uploads/${file.name}`);
        uploadBytes(storageRef, file).then(() => {
            console.log('Uploaded a file!');
            fetchFiles(); // Refresh file list
            setFile(null); // Clear input
        }).catch((error) => {
            console.error('Upload failed:', error);
        });
    };

    const fetchFiles = () => {
        const listRef = ref(storage, 'uploads/');
        listAll(listRef).then((result) => {
            const promises = result.items.map(item => {
                return getDownloadURL(item).then(url => ({
                    name: item.name,
                    url,
                }));
            });
            Promise.all(promises).then(setFiles);
        }).catch((error) => {
            console.error('Fetch files failed:', error);
        });
    };

    const deleteFile = (fileName) => {
        const fileRef = ref(storage, `uploads/${fileName}`);
        deleteObject(fileRef).then(() => {
            console.log(`${fileName} deleted successfully`);
            fetchFiles(); // Refresh file list
        }).catch((error) => {
            console.error('Error deleting file:', error);
        });
    };

    const updateFileName = (oldName) => {
        const fileRef = ref(storage, `uploads/${oldName}`);
        const newRef = ref(storage, `uploads/${newFileName}`);

        updateMetadata(fileRef, { customMetadata: { newName: newFileName } }).then(() => {
            // Rename file by uploading a copy and deleting the old one
            uploadBytes(newRef, fileRef).then(() => {
                deleteFile(oldName);
                fetchFiles(); // Refresh file list
                setNewFileName(''); // Clear input
            });
        }).catch((error) => {
            console.error('Error updating file name:', error);
        });
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div>
            <h2>File Upload</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadFile}>Upload</button>

            <h3>Files:</h3>
            <ul>
                {files.map((file) => (
                    <li key={file.name}>
                        <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
                        <button onClick={() => deleteFile(file.name)}>Delete</button>
                        <input 
                            type="text" 
                            placeholder="New file name" 
                            value={newFileName} 
                            onChange={(e) => setNewFileName(e.target.value)} 
                        />
                        <button onClick={() => updateFileName(file.name)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileUpload;
