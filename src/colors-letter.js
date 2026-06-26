export function evaluateWord(word , hidden_word){
    let boxColors = ["gray","gray","gray","gray","gray"];

    let hint = hidden_word.toLowerCase().split("");
    let userWords = word.toLowerCase().split("");

    for (let i = 0; i < 5; i++) {
        if (userWords[i] === hint[i]) {
            boxColors[i] = "green";
            hint[i] = null;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        if (boxColors[i] === "green") continue;

        let targetIndex = hint.indexOf(userWords[i]);
        if (targetIndex !== -1) {
            boxColors[i] = "yellow";
           hint[targetIndex] = null;
        }
    }

    return boxColors

}