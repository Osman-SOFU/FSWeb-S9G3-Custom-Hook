import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('geceModu', false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleDarkMode];
};
