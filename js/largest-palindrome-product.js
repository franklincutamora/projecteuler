(function() {
    function divideNumLength(num) {
        const stringNum = num.toString();
        let strLength = stringNum.length;
        let strLengthNew = strLength;

        if (strLength % 2 != 0) {
            strLengthNew = strLength - 1;
        }

        return strLengthNew/2;
    }

    function compareValue(num, val) {
        const stringVal = val.toString();
        const firstStr = stringVal.substr(0, num);
        const lastStr = stringVal.substr(stringVal.length - num, stringVal.length);
        let flag = false;

        if (firstStr === lastStr.split("").reverse().join("")) {
            flag = true;
        }

        return flag;
    }

    function largestPalindromeProduct(num) {
        let product = 1;
        let num1 = num;
        let result = 0;
        let products = [];
        for (num1; num1 > 0; num1--) {
            let num2 = num;
            for (num2; num2 > 0; num2--) {
                product= num2 * num1;
                let lastAndFirstDigits = divideNumLength(product);
                result = compareValue(lastAndFirstDigits, product);
                if (result) {
                    products.push(product);
                }
            }
        }
        products.sort((a ,b) => { return a - b });
        return products[products.length - 1];
    }

    function main() {
        const result = document.getElementById('result');

        const answer = largestPalindromeProduct(999);
        result.innerText = answer;
    }
    
    main();
})();