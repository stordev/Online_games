const guessTheNumber = () => {
    let number = Math.floor(Math.random() * 100) + 1;
    let guess = 0;
    let tries = 0;
    while (true) {
        guess = prompt("Guess a number between 1 and 100");
        if (guess === 'q') return;
        tries++;
        if (isNaN(guess)) {
            alert('Please enter a number');
            continue;
        }
        if (guess > number) {
            alert("Too high!");
        } else if (guess < number) {
            alert("Too low!");
        } else {
            alert(`You got it in ${tries} tries!`);
            break;
        }
    }
    if (tries <= 10) {
        alert("You are a wizard!");
    } else alert("You're not very good at this, are you?");
}
