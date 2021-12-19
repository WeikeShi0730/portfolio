import { useEffect, useState } from "react";

const useDarkMode = () => {
  const key = "dark-theme";
  const [isEnabled, setIsEnabled] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? item : undefined;
  });

  const setValue = (value) => {
    setIsEnabled(value);
    window.localStorage.setItem(key, value);
  };

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [isEnabled]);

  return [isEnabled, setValue];
};

export default useDarkMode;
