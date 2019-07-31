(function() {
    function getNumberHavingTheLargestSequenceUnder(num) {
        let longestArr = 1;
        let numWithLongestArr = 1;

        for (let ctr = 1; ctr <= num; ctr++) {
            let newLongestArr = returnCollatzArrOfNum(ctr).length;

            if (newLongestArr > longestArr) {
                longestArr = newLongestArr;
                numWithLongestArr = ctr;
            }
        }
        
        
        return numWithLongestArr;
    }

    function returnCollatzArrOfNum(num) {
        let arrNum = [num];

        while (num > 1) {
            if (num % 2 == 0) {
                num = num / 2;
            } else {
                num = (3 * num) + 1;
            }

            arrNum.push(num);
        }

        return arrNum;
    }

    function main() {
        const result = document.getElementById('result');

        const answer = getNumberHavingTheLargestSequenceUnder(999999);
        result.innerText = answer;
    }
    
    main();
})();