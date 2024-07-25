import React from "react";
import Drive from "./Drive";

function Conditional() {
  const user = 10;
//   if (ans > 18) {
//     return <Drive age={ans} allow="can" />;
//   } else {
//     return <Drive age={ans} allow="can't" />;
//   }

    return (
      <>

        {/* Ternaray Operator  */}

        <Drive age={user} allow={user > 18 ? "can" : "can't"}/>

        {/* In Ternaray Operator if we want to write JSX  */}

        <Drive age={user} allow={user > 18 ? (<b>"can"</b>) : (<b><i>"can't"</i></b>)}/>
      </>
    )
}

export default Conditional;
