// capitalize each first letter from a sentence

String.prototype.toJadenCase = function () {
  let a = this;
  let str = a.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join(" ");
};
