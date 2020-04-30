import React from "react";
import useDarkMode from "./useDarkMode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  const Toggle = ({ checked, onChange }) => (
    <span className="toggle-control">
      <input
        className="dmcheck"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
      />
      <label htmlFor="dmcheck" />
    </span>
  );

  return (
    <>
      <div className="dark-mode-toggle">
        <button type="button" onClick={darkMode.disable}>
          ☀
        </button>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <button type="button" onClick={darkMode.enable}>
          ☾
        </button>
      </div>
    </>
  );
};

export default DarkModeToggle;
