class StorageAdapter {
  get(key) {
    let str = sessionStorage.getItem(key);
    return JSON.parse(str);
  }
  
  set(key, value) {
    let str = JSON.stringify(value);
    sessionStorage.setItem(key, str);
  }
  
  remove(key) {
    sessionStorage.removeItem(key);
  }
}

export default new StorageAdapter();