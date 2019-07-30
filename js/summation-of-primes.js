(function() {
    function getPrimeNumbers(num) {
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

        for (let idx = 0; idx <= (primeNumbers.length - 1); idx++){
            sumOfAllPrimes = sumOfAllPrimes + primeNumbers[idx];
        }

        return sumOfAllPrimes;
    }

    function main() {
        const result = document.getElementById('result');

        const answer = getPrimeNumbers(2000000);
        result.innerText = answer;
    }

    main();
})();