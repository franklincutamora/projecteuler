(function() {
    function getNthPrimeNUmber(num) {
        let primeNumbers = [];
        for (let ctr = 2; ctr <= 1000000; ctr++) {
            let ctr3 = 0;
            for (let ctr2 = 1; ctr2 <= ctr; ctr2++) {
                if (ctr % ctr2 == 0) {
                    ctr3++;
                }
            }

            if (ctr3 == 2) {
                primeNumbers.push(ctr);
            }

            if (primeNumbers.length == num){
                return primeNumbers[primeNumbers.length - 1];
            }
        }
    }

    function main() {
        const result = document.getElementById('result');

        const answer = getNthPrimeNUmber(10001);
        result.innerText = answer;
    }

    main();
})();