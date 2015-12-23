
const lpad = char => digits => val => char.repeat(digits - val.toString().length) + val.toString();
const lpad2 = lpad('0')(2);

export function dateSerialize(date) {
  return date.toJSON().replace(/\.\d{3}/, '');
}

export function dateLocalize(date) {
  let mon = lpad2(date.getMonth() + 1);
  let d = lpad2(date.getDate());
  let h = lpad2(date.getHours());
  let m = lpad2(date.getMinutes());
  let s = lpad2(date.getSeconds());
  
  return `${date.getFullYear()}-${mon}-${d} ${h}:${m}:${s}`;
}