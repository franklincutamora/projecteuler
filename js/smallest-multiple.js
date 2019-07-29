(function() {
    function smallestMultiple(num) {
        for (let ctr = num; ctr <= 2000000000; ctr++) {
            let ctr3 = 0;

            for (let ctr2 = 1; ctr2 <= num; ctr2++) {
                if ( ctr % ctr2 == 0 ) {
                    ctr3++;
                }
            }

            if (ctr3 == num) {
                return ctr;
            }
        }

        return 'cannot found';
    }

    function main() {
        const result = document.getElementById('result');

        const answer = smallestMultiple(20);
        result.innerText = answer;
    }
    
    main();
})();