async function typeSentence(word, id, delay) {
    const letters = word.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        document.getElementById(id).innerHTML += letters[i];
        i++
    }
    return;
}

async function deleteSentence(id) {
    const word = document.getElementById(id).innerHTML;
    const letters = word.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        document.getElementById(id).innerHTML = letters.join("");
    }
}

async function hiFunction() {
    var i = 0;
    updateFontColor('herro', '#0A2C5C');
    await typeSentence("Hello Photo!", 'herro', 50);
}

function updateFontColor(id, color) {
    document.getElementById(id).style.color = color;
}

async function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
