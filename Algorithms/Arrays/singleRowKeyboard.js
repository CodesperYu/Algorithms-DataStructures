var calculateTime = function(keyboard, word) {
    let prevIndex = 0
    let hash = {}
    let time = 0
    for (let i = 0; i < keyboard.length; i++) {
        hash[keyboard[i]] = i
    }
    for (let i = 0; i < word.length; i++) {
        let keyboardIndex = hash[word[i]]
        let diff = Math.abs(keyboardIndex-prevIndex)
        time += diff
        prevIndex = keyboardIndex
    }
    return time
};