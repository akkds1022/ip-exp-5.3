function* primeGenerator(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

function generatePrimes() {
    const limit = document.getElementById('limit').value;
    const primes = primeGenerator(limit);
    const primeList = document.getElementById('prime-list');

    primeList.innerHTML = ''; 
    for (let prime of primes) {
        const listItem = document.createElement('li');
        listItem.textContent = prime;
        primeList.appendChild(listItem);
    }
}
