module.exports = function check(str, bracketsConfig) {

  while (str.split('')) {
    // length of the string at the beginning of each iteration
    let oldLength = str.length

    for (let i = 0; i < bracketsConfig.length; i++) {
      // remove all characters from the string that are in the config
      str = str.replace(bracketsConfig[i].join(''), '')
    }

    // сравнить длину строки после удаления из нее символов из конфига
    if (str.length === oldLength) return str.length === 0
  }
}
