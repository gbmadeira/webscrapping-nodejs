/*jshint esversion: 8 */

module.exports = function removeAccents(newString) {
  var str = newString;

  var accentsHexMap = {
    a: /[\xE0-\xE6]/g,
    A: /[\xC0-\xC6]/g,
    e: /[\xE8-\xEB]/g,
    E: /[\xC8-\xCB]/g,
    i: /[\xEC-\xEF]/g,
    I: /[\xCC-\xCF]/g,
    o: /[\xF2-\xF6]/g,
    O: /[\xD2-\xD6]/g,
    u: /[\xF9-\xFC]/g,
    U: /[\xD9-\xDC]/g,
    c: /\xE7/g,
    C: /\xC7/g,
    n: /\xF1/g,
    N: /\xD1/g,
    '-': /\s/g,
  };

  for (let letter in accentsHexMap) {
    let regex = accentsHexMap[letter];
    str = str.replace(regex, letter);
  }

  return str;
};
