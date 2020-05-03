'use strict'
module.exports = {
    run: function() {
        let api = {
            apiCallsCounter: 0,
            badVersion: 879737364836529,
            getMiddleValue(startVal, endVal) {
                return startVal + Math.floor((endVal - startVal) / 2);
            },
            isBadVersion(n) {
                this.apiCallsCounter++;
                return n >= this.badVersion;
            },
            getApiCallsCounter() {
                return this.apiCallsCounter;
            }
        };
        
        let n = 468365298797373;
        let i;
        let badVersionRangeStart = 0;
        let badVersionRangeEnds = n;
        while (true) {
            i = api.getMiddleValue(badVersionRangeStart, badVersionRangeEnds);
            console.log(badVersionRangeStart + '\t\t' + i + '\t\t'+ badVersionRangeEnds);
            if (i === badVersionRangeStart) {
                break;
            }
            if (api.isBadVersion(i)) {
                badVersionRangeEnds = i;
            } else {
                badVersionRangeStart = i;
            }
        }
        
        console.log("First bad version = ", badVersionRangeEnds, ". It was calculated with only ", api.getApiCallsCounter(), " API calls");
    }
};