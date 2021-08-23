// libs
import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
// locales
import { locales } from "../locales";

const LocaleContext = createContext();

export const ProvideLocale = ({ children }) => {
  const [locale, setLocale] = useState("vi");
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
