import React, { useState } from "react";

function HocCounter(WrappedComponent, incrementedby = 1) {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <>
        <WrappedComponent
          {...props}
          count={(count)}
          incrementCount={() => setCount(count + incrementedby)}
        />
      </>
    );
  };
}

export default HocCounter;