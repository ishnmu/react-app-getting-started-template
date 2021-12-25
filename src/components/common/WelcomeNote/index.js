import * as React from "react";

const WelcomeNote = ({ note }) => {
  return (
    <React.Fragment>
      <h1>
        <strong>{note}</strong>
      </h1>
    </React.Fragment>
  );
};

export default WelcomeNote;
