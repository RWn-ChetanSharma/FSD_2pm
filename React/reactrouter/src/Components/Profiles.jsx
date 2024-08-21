import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profiles() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="container p-5 text-bg-danger " >
        <div className="row">
          <div className="col row">
            {profiles.map((profile) => (
              <Link key={profile} to={`/profiles/${profile}`}>
                Profile : {profile}
              </Link>
              // console.log(profile)
            ))}
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profiles;
