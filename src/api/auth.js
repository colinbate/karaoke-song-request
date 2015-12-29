import storage from 'storage';
export const tokenKey = 'ksr-auth-token';
export const profileKey = 'ksr-auth-profile';
const mylock = new window.Auth0Lock('OpXoUvqthD5rhxm6hUXHo8x3fppFbeMt', 'colinbate.auth0.com');


export function signin() {
  return new Promise((resolve, rej) => {
    mylock.show({authParams: {scope: 'openid admin'}}, (err, profile, token) => {
      if (err) {
        return rej(err);
      }
      if (token) {
        storage.set(tokenKey, token);
      }
      if (profile) {
        storage.set(profileKey, profile);
      }
      resolve(profile);
    });
  });
}

export function signout() {
  storage.remove(tokenKey);
  storage.remove(profileKey);
}