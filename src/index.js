const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = [];
    const arr1 = []
    for (let i = 0; i <= expr.length; i+=10) {
        arr.push(expr.slice(i, i + 10));
    }

    arr.forEach((el) => {
        let temp = []
        if (el[0] === '*' && el[el.length-1] === '*') {
        arr1.push(' ');
        } else {
            for (let i = 0; i <= el.length; i+=2) {
                if (el.slice(i,i+2) == 10) {
                    temp.push('.')
                } else if (el.slice(i,i+2) == 11) {
                    temp.push('-');
                }
            }
        }
            arr1.push(MORSE_TABLE[`${temp.join('')}`])
    })
return(arr1.join(''))
}

module.exports = {
    decode
}