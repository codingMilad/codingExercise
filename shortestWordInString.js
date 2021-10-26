function findShort(s) {
  let words = s.split(" ");
  let short = words[0];
  for (let i = 0; i < words.length; i++) {
    if (short.length > words[i].length) {
      short = words[i];
    }
  }
  return short.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
