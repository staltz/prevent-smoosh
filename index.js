Array.prototype.smoosh = function smoosh() {
  return this[0];
};
Array.prototype.smooshMap = function smooshMap(fn) {
  return fn(this[0]);
};
