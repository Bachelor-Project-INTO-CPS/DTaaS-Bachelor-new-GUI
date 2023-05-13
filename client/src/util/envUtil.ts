import { useAppSelector } from 'store/Redux/hooks';

/**
 * @param url or endpoint to clean
 * @returns a `string` with no whitespaces, leading or trailing slashes
 */
export function cleanURL(url: string): string {
  return url?.trim().replace(/^\/|\/$/g, ''); // Remove leading and trailing slashes
}

/**
 * Injects the `username` into the `baseURL` and `endpoint` to create a link.
 * @param baseURL Example `https://foo.com` Any leading or trailing slashes will be removed.
 * @param endpoint (optional). Example `bar` Any leading or trailing slashes will be removed.
 * @returns a complete URL: `baseUrl` / `username` / `endpoint`
 */
const useUserLink = (baseURL: string, endpoint?: string): string => {
  const username = useAppSelector((state) => state.auth).userName;
  const cleanBaseURL = cleanURL(baseURL);
  const cleanEndpoint = cleanURL(endpoint ?? '');
  return `${cleanBaseURL}/${username}/${cleanEndpoint}`;
};

export function useURLforDT(): string {
  return useUserLink(getAppURL(), window.env.REACT_APP_URL_DTLINK);
}

export function getURLbasename(): string {
  return cleanURL(window.env.REACT_APP_URL_BASENAME);
}

export function useURLforLIB(): string {
  return useUserLink(getAppURL(), window.env.REACT_APP_URL_LIBLINK);
}

function getAppURL(): string {
  return `${cleanURL(window.env.REACT_APP_URL)}/${getURLbasename()}`;
}

export interface KeyLinkPair {
  key: string;
  link: string;
}

/**
 * @returns an array of `KeyLinkPair` objects, where each object contains a `key` and a `link`.
 *
 * The `key` is the `key` of the environment variable, with the prefix *"REACT_APP_WORKBENCHLINK_"* removed.
 * For example, if the `key` of the environment variable is *"REACT_APP_WORKBENCHLINK_MYWORKBENCH"*, then the `key` will be *"MYWORKBENCH"*.
 *
 * The `link` is constructed by appending the `username` to the end of the *REACT_APP_URL_WORKBENCH*, and then appending the value of the environment variable to the end of that.
 * For example, if the *REACT_APP_URL_WORKBENCH* is https://foo.com, the `username` is *"user1"*, and the value of the environment variable is "/my-workbench", then the link will be https://foo.com/user1/my-workbench.
 */
export function useWorkbenchLinkValues(): KeyLinkPair[] {
  const prefix = 'REACT_APP_WORKBENCHLINK_';
  const workbenchLinkValues: KeyLinkPair[] = [];
  const appUrl = getAppURL();

  Object.keys(window.env)
    .filter((key) => key.startsWith(prefix))
    .forEach((key) => {
      const value = window.env[key];
      if (value !== undefined) {
        const keyWithoutPrefix = key.slice(prefix.length);
        workbenchLinkValues.push({
          key: keyWithoutPrefix,
          link: useUserLink(appUrl, value),
        });
      }
    });

  return workbenchLinkValues;
}
