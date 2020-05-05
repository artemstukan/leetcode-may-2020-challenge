module.exports = {
    run() {
        const s = 'dddccdbba'; // return 8

        //   const firstUniqChar = function(s) {
        //       const uniqueLettersObjMap = {};
        //       s.split('').forEach(letter => {
        //           if (uniqueLettersObjMap[letter]) {
        //               uniqueLettersObjMap[letter]++;
        //           } else {
        //               uniqueLettersObjMap[letter] = 1;
        //           }
        //       });
        //       let count;
        //       let letter;
        //       for ([letter, count] of Object.entries(uniqueLettersObjMap)) {
        //           if (count === 1) {
        //               return s.indexOf(letter);
        //           }
        //       }
        //       return -1;
        //   };

        //   const firstUniqChar = function(s) {
        //       for (let i = 0; i < s.length; i++) {
        //           if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
        //               return i;
        //           }
        //       }
        //       return -1;
        //   };

        const firstUniqChar = function(s) {
            if (!s) return -1;
            const uniq = new Map();
            const dupes = new Map();
            let cnt = 0;
            for (const c of s) {
                if (dupes.has(c)) {
                    uniq.delete(c);
                } else {
                    uniq.set(c, cnt);
                    dupes.set(c, cnt);
                }
                cnt++;
            }
            return uniq.size === 0 ? -1 : uniq.values().next().value;
        };

        console.time('executionTimer');
        console.log(firstUniqChar(s));
        console.log('It took:');
        console.timeEnd('executionTimer');
    },
};
