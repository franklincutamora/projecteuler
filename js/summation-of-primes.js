(function() {
    function getPrimeNumbersOf(num) {
        let primeNumbers = [];
        let sumOfAllPrimes = 0;

        for (let ctr = 2; ctr <= num; ctr++) {
            let ctr3 = 0;
            let ctr2 = 1;

            for (ctr2; ctr2 <= ctr && ctr3 <= 2; ctr2++) {
                if (ctr % ctr2 == 0) {
                    ctr3++;
                }
            }

            if (ctr3 == 2) {
                primeNumbers.push(ctr);
            } else {
                continue;
            }
        }

        return primeNumbers;
    }

    function getSumOfAllPrimes(primes) {
        let sumOfAllPrimes = 0;
        for (let idx = 0; idx <= (primes.length - 1); idx++){
            sumOfAllPrimes = sumOfAllPrimes + primes[idx];
        }

        return sumOfAllPrimes;
    }

    function main() {
        const result = document.getElementById('result');

        const primes = getPrimeNumbersOf(10);
        const answer = getSumOfAllPrimes(primes);
        result.innerText = answer;
    }

    main();
})();