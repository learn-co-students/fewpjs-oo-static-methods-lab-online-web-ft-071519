class Formatter {
    static capitalize(string) {
        const first = string[0].toUpperCase();
        const rest = [...string].slice(1).join('');
        return first + rest
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9-\s']+/g, '')
    }

    static titleize(string) {
        const lowerArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        let array = string.split(' ');
        const titleArray = [this.capitalize(array[0])];
        array = array.slice(1);

        for (const word of array) {
            if (!lowerArray.find(w => w === word)) {
                titleArray.push(this.capitalize(word))
            } else {
                titleArray.push(word)
            }
        }

        return titleArray.join(' ')
    }

}