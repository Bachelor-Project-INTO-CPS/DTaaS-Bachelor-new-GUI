import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const constructUserLink = (baseURL: string, endpoint: string): string => {
  const userState = useSelector((state: RootState) => state.auth);
  const cleanBaseRL = baseURL.trim().endsWith('/') ? baseURL : `${baseURL}/`;
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${cleanBaseRL}${userState.user}${cleanEndpoint}`;
};

/**
 *
 * @returns the URL for the DT API
 */
export function getURLforDT(): string {
  return window.env.REACT_APP_URL_DT;
}

export function getURLforLIB(): string {
  return window.env.REACT_APP_URL_LIB;
}

export function getURLforWorkbench(): string {
  return window.env.REACT_APP_URL_WORKBENCH;
}

export interface KeyLinkPair {
  key: string;
  link: string;
}

export function getWorkbenchLinkValues(): KeyLinkPair[] {
  const prefix = 'REACT_APP_WORKBENCHLINK_';
  const workbenchLinkValues: KeyLinkPair[] = [];

  Object.keys(window.env)
    .filter((key) => key.startsWith(prefix))
    .forEach((key) => {
      const value = window.env[key];
      if (value !== undefined) {
        const keyWithoutPrefix = key.slice(prefix.length);
        workbenchLinkValues.push({
          key: keyWithoutPrefix,
          link: constructUserLink(getURLforWorkbench(), value),
        });
      }
    });

  return workbenchLinkValues;
}
