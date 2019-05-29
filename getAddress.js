function getAddress(obj) {
  //console.log(obj)
  const values = Object.values(obj);
  return values[1];
}

module.exports = getAddress;
