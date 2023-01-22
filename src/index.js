export default function orderByProps(obj, mask) {
  const arrOfMask = [];
  const arrOther = [];

  Object.keys(obj).forEach((item) => {
    if (mask.includes(item)) {
      // сортировка по маске
      arrOfMask.splice(mask.indexOf(item), 0, { key: item, value: obj[item] });
    } else {
      // сортировка по алфавиту
      let index = 0;
      for (let i = 0; i < arrOther.length; i += 1) {
        if (item <= arrOther[i].key) {
          index = i;
          break;
        }
      }
      arrOther.splice(index, 0, { key: item, value: obj[item] });
    }
  });
  return [].concat(arrOfMask, arrOther);
}
