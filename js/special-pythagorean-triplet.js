(function() {
    function specialPythagoreanTriplet(num) {
        let a, b, c = 1;
        let answer = 0;

        for (let a = 1; a < num; a++) {
            for (let b = a + 1; b < num; b++) {
                c = Math.pow(a, 2) + Math.pow(b, 2);
                let newC = Math.sqrt(c);
                if (newC > b && a + b + newC == num) {
                    answer = a * b * newC;
                }
            }
        }

        return answer;
    }

    function main() {
        const result = document.getElementById('result');

        const answer = specialPythagoreanTriplet(1000);
        result.innerText = answer;
    }
    
    main();
})();