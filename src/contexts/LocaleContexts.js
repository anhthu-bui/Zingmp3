// libs
import { createContext, useContext } from "react";
import PropTypes from "prop-types";
// hooks
import useLocalStorage from "../hooks/useLocaleStorage";
// locales
import { dictionaryList } from "../locales";

const LocaleContext = createContext();

export const ProvideLocale = ({ children }) => {
  const [locale, setLocale] = useLocalStorage("locale", "vi");

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, dictionary: dictionaryList[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
ProvideLocale.propTypes = {
  children: PropTypes.string,
};

export const useLocale = () => useContext(LocaleContext);
