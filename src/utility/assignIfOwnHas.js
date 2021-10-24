const assignIfHasOwn = (obj, key, value) => {
  const newObj = Object.prototype.hasOwnProperty.call(obj, key) ? obj : false;
  newObj[key] = value;
};

export default assignIfHasOwn;
