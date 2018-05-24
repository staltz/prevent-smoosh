try {
  [].smoosh();
} catch(_) {
  Array.prototype.smoosh = function smoosh() {
    return this[0];
  };
}

try {
  [].smooshMap(function () {});
} catch(_) {
  Array.prototype.smooshMap = function smooshMap(callback) {
    return this.length > 0 ? callback(this[0]) : undefined;
  };
}
