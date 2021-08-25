// libs
import { createContext, useContext } from "react";
import PropTypes from "prop-types";
// hooks
import useLocalStorage from "../hooks/useLocalStorage";
// locales
import { locales } from "../locales";

const LocaleContext = createContext();

export const ProvideLocale = ({ children }) => {
  const [locale, setLocale] = useLocalStorage("locale", "vi");
  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        localeDataSource: locales[locale],
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

ProvideLocale.propTypes = {
  children: PropTypes.string,
};
