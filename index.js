class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + 
    string.slice(1)
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let words = string.split(" ");
    let noCaps = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    function selectiveCapitalization(word) {
      if (noCaps.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    }
    return words.map(selectiveCapitalization).join(" ")
  }

}