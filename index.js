Array.prototype.smoosh = function smoosh() {
  return this[0];
};
Array.prototype.smooshMap = function smooshMap(fn) {
  return this.length > 0 ? fn(this[0]) : undefined;
};