class Formatter {
  //add static methods here
  static capitalize(string){
    let arr = string.split('')
    arr[0] = arr[0].toUpperCase()
    return arr.join('');
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(string){
    const leaveLowerCase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(' ');
    let capitalizedWords = words.map(word => {
      if (!leaveLowerCase.includes(word)){
        let letters = word.split('')
        letters[0] = letters[0].toUpperCase();
        return letters.join('');
      } else {
        return word;
      }
    })
    let firstWord = capitalizedWords.shift();
    let firstWordArr = firstWord.split('');
    firstWordArr[0] = firstWordArr[0].toUpperCase();
    let firstWordJoined = firstWordArr.join('');
    capitalizedWords.unshift(firstWordJoined)
    return capitalizedWords.join(' ');
  }
}