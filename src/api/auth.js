const tokenKey = 'ksr-auth-token';
const mylock = new window.Auth0Lock('OpXoUvqthD5rhxm6hUXHo8x3fppFbeMt', 'colinbate.auth0.com');
const storage = window.sessionStorage;

export function signin() {
  return new Promise((resolve, rej) => {
    mylock.show((err, profile, token) => {
      if (err) {
        return rej(err);
      }
      if (token) {
        storage.setItem(tokenKey, token);
      }
      resolve(profile);
    });
  });
}

export function signout() {
  storage.removeItem(tokenKey);
}