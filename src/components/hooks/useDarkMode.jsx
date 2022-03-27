import { useEffect, useState } from "react";

const useDarkMode = () => {
  const key = "dark-theme";
  const [isEnabled, setIsEnabled] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item === true || false ? item : false;
  });

  const setValue = (value) => {
    setIsEnabled(value);
    window.localStorage.setItem(key, value);
  };

  useEffect(() => {
    const bodyClass = window.document.body.classList;
    isEnabled ? bodyClass.add("dark") : bodyClass.remove("dark");
  }, [isEnabled]);

  return [isEnabled, setValue];
};

export default useDarkMode;
