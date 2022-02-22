import React from "react";

const Header = ({ isDarkMode, dark }) => {
  let styleName = dark ? "#fff" : "#000";

  return (
    <div className="header">
      <h1 title="Your Notes" style={{ color: styleName }}>
        Notes
      </h1>
      <button
        onClick={() =>
          isDarkMode((prev) => {
            return !prev;
          })
        }
        className="save"
      >
        Night Mode
      </button>
    </div>
  );
};

export default Header;
