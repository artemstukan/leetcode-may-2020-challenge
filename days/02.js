module.exports = {
    run() {
        const jewels = 'aA';
        // let jewels = 'z';

        const stones = 'aAAbbbb';
        // let stones = "aAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbbaAAbbbb";
        // let stones = 'ZZ';

        console.time('jewels');

        // 1st approach
        const numJewelsInStones = function(jewels, stones) {
            let counter = 0;
            const jewelsSet = new Set(jewels);
            stones.split('').forEach(element => {
                if (jewelsSet.has(element)) {
                    counter++;
                }
            });
            return counter;
        };

        // 2nd approach (I think should be slightly faster than the 1st one)
        // var numJewelsInStones = function(jewels, stones) {
        // 	let counter = 0;
        // 	let jewelsSet = new Set(jewels);
        // 	// let stonesMap = new Map(stones);
        // 	let objMap = {};
        // 	stones.split('').forEach(element => {
        // 		if (objMap[element]) {
        // 			objMap[element]++;
        // 		} else {
        // 			objMap[element] = 1;
        // 		}
        // 	});
        // 	jewelsSet.forEach(element => {
        // 		if (objMap[element]) {
        // 			counter += objMap[element]
        // 		}
        // 	});
        // 	return counter;
        // };

        // 3rd approach (supposedly the fastest)
        // var numJewelsInStones = function(J, S) {
        //     let count = 0
        //     for (let i = 0; i < S.length; i += 1) {
        //         count += Number(J.includes(S[i]))
        //     }
        //     return count
        // };

        console.log(numJewelsInStones(jewels, stones));
        console.log('It took:');
        console.timeEnd('jewels');
    },
};
