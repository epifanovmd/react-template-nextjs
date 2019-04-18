//tslint:disable
export function getCookie(name: string): string {
  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, "\\$1") + "=([^;]*)",
  ));

  return matches ? decodeURIComponent(matches[1]) : "";
}

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");

  for (let cookieIndexItem = 0; cookieIndexItem < cookies.length; cookieIndexItem++) {
    const cookie = cookies[cookieIndexItem];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
};

// eslint-disable-next-line max-statements
export const setCookie = (name: string, value: string, options: any) => {
  // eslint-disable-next-line no-param-reassign
  options = options || {};

  let {expires} = options;

  if (typeof expires === "number" && expires) {
    const date = new Date();
    date.setTime(date.getTime() + (expires * 1000));
    // eslint-disable-next-line no-multi-assign
    expires = options.expires = date;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  // eslint-disable-next-line no-param-reassign
  value = encodeURIComponent(value);

  let updatedCookie = `${name}=${value}`;

  for (const propName in options) {
    if (Object.prototype.hasOwnProperty.call(options, propName)) {
      updatedCookie += `; ${propName}`;
      const propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += `=${propValue}`;
      }
    }
  }

  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
  setCookie(name, "", {expires: -1});
};
