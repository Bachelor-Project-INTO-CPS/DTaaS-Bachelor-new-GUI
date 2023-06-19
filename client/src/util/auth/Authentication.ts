import { User } from 'oidc-client-ts';
import useUserData from 'store/UserAccess';
import { useAuth } from 'react-oidc-context';
import { getLogoutRedirectURI } from '../envUtil';

export interface CustomAuthContext {
  signoutRedirect: () => Promise<void>;
  removeUser: () => Promise<void>;
  user?: User | null | undefined;
}

export function getAndSetUsername(auth: CustomAuthContext) {
  const { actions } = useUserData();
  if (auth.user !== null && auth.user !== undefined) {
    const profileUrl = auth.user.profile.profile ?? '';
    const username = profileUrl.split('/').filter(Boolean).pop() ?? '';
    sessionStorage.setItem('username', username ?? '');
    actions.setUsername(username);
  }
}

export async function signOut() {
  const auth = useAuth();
  const LOGOUT_URL = getLogoutRedirectURI() ?? '';

  if (auth.user) {
    const idToken = auth.user.id_token; // camelCase for variable name
    localStorage.clear();
    sessionStorage.clear();

    await auth.removeUser();
    await auth.signoutRedirect({
      post_logout_redirect_uri: LOGOUT_URL.toString(),
      id_token_hint: idToken,
    });
  }
}

export function wait(milliseconds: number): Promise<void> {
  return new Promise<void>((resolve) => {
    const onTimeout = () => {
      resolve();
    };
    setTimeout(onTimeout, milliseconds);
  });
}
