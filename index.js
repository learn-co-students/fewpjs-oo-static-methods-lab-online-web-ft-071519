class Formatter {
  //add static methods here
     static capitalize (name) {
      return  name.charAt(0).toUpperCase() + name.slice(1);
     }
     
          static sanitize  (name) {
       return name.replace(/[^A-Za-z0-9 '-]+/g, '' );
     }
     
    static titleize   (name) {
      let words = name.split(" ")
      words[0]= this.capitalize (words[0])
       for (let i = 1; i<words.length; i++){
         if (words[i]!== "a" &&words[i]!== "an" && words[i]!== "but" && words[i]!== "of" &&words[i]!== "and" &&words[i]!== "for" &&words[i]!== "at" &&words[i]!== "by" &&words[i]!== "from"&&words[i]!== "the" ){
          words[i]= this.capitalize (words[i])
         }
       }
       return words.join(" ")
     }
}