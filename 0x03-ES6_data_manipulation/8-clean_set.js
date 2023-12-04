export default function cleanSet(set, startString) {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      strings.push(element.slice(startString.length));
    }
  });
  return strings.join('-');
}
