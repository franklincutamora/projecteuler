(function() {
    function get1stTriangleNumberWithDivisor(num) {
        let divisor = 0;
        let step = 2;
        let triangleNum = 1;
        while (divisor < num) {
            let ctr = 1;
            triangleNum = triangleNum + step;
            for (let ctr2 = 1; ctr2 <= triangleNum; ctr2++) {
                if (triangleNum % ctr2 == 0) {
                    ctr++;
                }
            }
            divisor = ctr;
            step++;
        } 

        return triangleNum;
    }

    function main() {
        const result = document.getElementById('result');

        const answer = get1stTriangleNumberWithDivisor(501);
        result.innerText = answer;
    }
    
    main();
})();