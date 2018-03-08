if (!Array.prototype.smoosh) {
  Array.prototype.smoosh = function smoosh() {
    return this[0];
  };
}

if (!Array.prototype.smooshMap) {
  Array.prototype.smooshMap = function smooshMap(fn) {
    return fn(this[0]);
  };
}
