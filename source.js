module.exports = (length, value) => Object.defineProperty(value, "length", {
  enumerable   : false,
  configurable : false,
  writable     : false,
  value        : limit - parameters.length
});
