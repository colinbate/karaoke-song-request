import { tokenKey } from './auth';
import storage from 'storage';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
};

const parse = r => r.json();

const getHeaders = (initial = {}) => {
  let token = storage.get(tokenKey);
  if (token) {
    initial['Authorization'] = 'Bearer ' + token;
  }
  return initial;
}

export default class FetchWrap {
  get(url) {
    
    return fetch(url, {
      method: 'get',
      headers: getHeaders()
    }).then(checkStatus).then(parse);
  }
  
  post(url, data) {
    return fetch(url, {
      method: 'post',
      headers: getHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    }).then(checkStatus).then(parse);
  }
}