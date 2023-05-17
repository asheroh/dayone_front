import { useState } from 'react';
import { useCookies } from 'react-cookie';

const useCookie = (cookieName) => {
  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
  const [value, setValue] = useState(cookies[cookieName]);

  const setCookieValue = (newValue, options) => {
    setCookie(cookieName, newValue, options);
    setValue(newValue);
  };

  const removeCookieValue = (options) => {
    removeCookie(cookieName, options);
    setValue(undefined);
  };

  return [value, setCookieValue, removeCookieValue];
};

export default useCookie;
