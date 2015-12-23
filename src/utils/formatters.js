
const lpad = char => digits => val => char.repeat(digits - val.toString().length) + val.toString();
const lpad2 = lpad('0')(2);

const jsDate = (date) => Object.prototype.toString.call(date) === '[object Date]' ? date : new Date(date);

export function dateSerialize(date) {
  return jsDate(date).toJSON().replace(/\.\d{3}/, '');
}

export function dateLocalize(date) {
  date = jsDate(date);
  let mon = lpad2(date.getMonth() + 1);
  let d = lpad2(date.getDate());
  let h = lpad2(date.getHours());
  let m = lpad2(date.getMinutes());
  let s = lpad2(date.getSeconds());
  
  return `${date.getFullYear()}-${mon}-${d} ${h}:${m}:${s}`;
}