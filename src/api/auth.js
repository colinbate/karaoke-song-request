export const tokenKey = 'ksr-auth-token';
export const emailKey = 'ksr-auth-email';
export const expiryKey = 'ksr-auth-expiry';
const mylock = new window.Auth0Lock('OpXoUvqthD5rhxm6hUXHo8x3fppFbeMt', 'colinbate.auth0.com');
const storage = window.sessionStorage;

export function signin() {
  return new Promise((resolve, rej) => {
    mylock.show({authParams: {scope: 'openid admin'}}, (err, profile, token) => {
      if (err) {
        return rej(err);
      }
      if (token) {
        storage.setItem(tokenKey, token);
      }
      if (profile.email) {
        storage.setItem(emailKey, profile.email);
      }
      resolve(profile);
    });
  });
}

export function signout() {
  storage.removeItem(tokenKey);
}