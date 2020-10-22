let formElem = document.querySelector('.phrase-form');

formElem.onsubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(formElem);
    let bified = bify(formData.get('phrase'));
    console.log(bified);

    navigator.clipboard.writeText(bified).then(() => {
        document.querySelector('.copy-clipboard').classList.add('copy-clipboard__active');
        window.setTimeout(() => {
            document.querySelector('.copy-clipboard').classList.remove('copy-clipboard__active');

        }, 2000);
    });
}

// find whitespace at beginning and end b/c it makes things more complicated
// trim whitespace to focus on the actual text
// match words
// map words
function bify(str) {
    if (!str) {
        return str;
    }

    let spaceBeginning = str.match(/^(\s*)/);
    let spaceEnd = str.match(/(\s*)$/);
    let wordList = str.trim().match(/([^\s]+)(\s*)/g);
    
    return spaceBeginning[0] + wordList.map((word) => word.length ? (`${word[0].toLowerCase() === word[0] ? 'b' : 'B'}${word}`) : word).join('') + spaceEnd[0];
}


