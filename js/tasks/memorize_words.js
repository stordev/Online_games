const memorizeWords = () => {
    const words = `Apple Pear Melon Grape Peach Orange Mandarin`.split(' ');
    let shuffleWords = words.sort(() => Math.random() - 0.5);
    alert(shuffleWords.join('  '));

    let first = prompt(`What was the first element of the array?`).toLowerCase();
    let last = prompt(`What was the last element of the array?`).toLowerCase();
    if (first === words[0].toLowerCase() && last === words[words.length - 1].toLowerCase())
        alert(`You are right!`);
    else if (first === words[0].toLowerCase() || last === words[words.length - 1].toLowerCase())
        alert(`You were close!`);
    else alert(`You are wrong!`);
}