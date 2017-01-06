import storage from 'storage';
export const tokenKey = 'ksr-auth-token';
export const profileKey = 'ksr-auth-profile';
const mylock = new window.Auth0Lock(
  'OpXoUvqthD5rhxm6hUXHo8x3fppFbeMt',
  'colinbate.auth0.com',
  {
    auth: {
      redirect: false,
      params: {scope: 'openid admin'}
    }
  }
);

let showResolve;
let showReject;
mylock.on('authenticated', result => {
  if (!showResolve || !showReject) {
    return;
  }
  mylock.getProfile(result.idToken, function(error, profile) {
    if (error) {
      return showReject(error);
    }
    if (result.idToken) {
      storage.set(tokenKey, result.idToken);
    }
    if (profile) {
      storage.set(profileKey, profile);
    }
    showResolve(profile);
  });
});


export function signin() {
  return new Promise((resolve, rej) => {
    showReject = rej;
    showResolve = resolve;
    mylock.show();
  });
}

export function signout() {
  storage.remove(tokenKey);
  storage.remove(profileKey);
}