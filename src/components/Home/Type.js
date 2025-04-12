import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-wrapper">
      <Typewriter
        options={{
          strings: [
            "DevOps Engineer",
            "Network and System Administrator"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
