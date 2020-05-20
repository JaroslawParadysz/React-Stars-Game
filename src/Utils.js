const utils = {
    createRange: function(min, max) {
        const range = [];
        for(let i = min; i <= max; i++) {
            range.push(i);
        }
      
        return range;
    },
    generateRandomRange: function(min, max) {
        const range = [];
        const random = Math.random();
        const maxRandomNumber = Math.floor(min + ((max - min) * random));

        for (let i = min; i <= maxRandomNumber; i++) {
            range.push(i);
        }

        return range;
    }
}

export default utils;