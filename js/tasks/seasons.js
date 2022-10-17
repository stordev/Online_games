const seasons = () => {
    let n = prompt('Enter a month number: 1 - 12');
    if (n < 1 || n > 12 || isNaN(n) || n % 1 !== 0) {
        return alert('Incorrect data');
    }
    const months = `January February March April May June July August September October November December`.split(" ");
    const seasons = `winter spring summer fall`.split(" ");
    return alert(months[n - 1] + ' is ' + seasons[~~(n / 3) % 4]);
}