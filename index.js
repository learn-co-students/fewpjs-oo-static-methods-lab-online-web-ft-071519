
let str = "hi, i am tashenko. nice to meet you"
let arr = [1,2,3]

class Formatter {
  static capitalize(str) {
    return str.replace(str[0], str[0].toUpperCase())
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(str){
    const smalls = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return str.split(" ").map((w, i) => {
      if (!smalls.includes(w)) {
        return Formatter.capitalize(w)
      } else {
        return i == 0 ? Formatter.capitalize(w) : w 
      }
    }).join(" ")

  }

  static test(arr){
    arr.forEach(function(ele){
      return ele * ele
    })
  }
}

