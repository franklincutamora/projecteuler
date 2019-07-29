(function(){
    function sumOfTheSquares(num) {
        let result = 0;
        for (let ctr = 1; ctr <= num; ctr++) {
            result = result + Math.pow(ctr, 2);
        }
        return result;
    }

    function squareOfTheSum(num) {
        let result = 0;
        for (let ctr = 1; ctr <= num; ctr++) {
            result = result + ctr;
        }
        result = Math.pow(result, 2);
        return result;
    }

    function sumSquareDifference(num) {
        let result = squareOfTheSum(num) - sumOfTheSquares(num);
        return result;
    }

    function main() {
        const result = document.getElementById('result');

        const answer = sumSquareDifference(100);
        result.innerText = answer;
    }
    
    main();
})();