// class StaticMethod {
//   static methodName() {
//       console.log('My method is static!');
//   }
// }


class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    let words = str.split(" ")
    let final = [];
    let exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    words.map(word => {
      if (words.indexOf(word) == 0) {
        final.push(this.capitalize(word))
      }
      else {
        if (exemptWords.includes(word)) {
          final.push(word)
        } else {
          final.push(this.capitalize(word))
        }   
      }
    })
    return final.join(" ");
  }
}