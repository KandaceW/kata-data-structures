function getValue(obj, key) {
  console.log(obj);
  console.log(key);
  return obj[key];
}

module.exports = getValue;

//getValue gets a nested object by key
