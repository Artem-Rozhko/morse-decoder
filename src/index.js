const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let bit_TABLE = {};

  for (let key in MORSE_TABLE) {
    let bitKey = '';
    bitKey += '0'.repeat(10 - 2 * key.length);

    for (let i = 0; i < key.length; i++) {
      if (key[i] === '.') bitKey += '10';
      if (key[i] === '-') bitKey += '11';
    }

    bit_TABLE[bitKey] = MORSE_TABLE[key];
  }

  let result = '';
  let array = Array.from(expr);
  let space = '**********';

  while (array.length) {
    let character = array.splice(-10, 10).join('');

    if (character === space) {
      result = ' ' + result;
      continue;
    }

    result = bit_TABLE[character] + result
  }
  return result;
}


module.exports = {
  decode
}