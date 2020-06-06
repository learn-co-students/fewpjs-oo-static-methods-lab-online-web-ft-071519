class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]+/g, '' )
  }

  static titleize(str){
    let arr = str.split(" ")
    arr.forEach (function (ele){
      return this.capitalize(ele)
    })
  }
}

let str = "hi, i am takeshi. nice to meet you"