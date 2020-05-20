function createRange(min, max) {
    const range = [];
    for(let i = min; i <= max; i++) {
        range.push(i);
    }
  
    return range;
}

function generateRandomRange(min, max) {
    const range = [];
    const random = Math.random();
    const maxRandomNumber = Math.floor(min + ((max - min) * random));

    for (let i = min; i <= maxRandomNumber; i++) {
        range.push(i);
    }

    return range;
}

function getStarsCount(toSkip) {
    var newIds = createRange(1, 9);
    newIds = newIds.filter(x => toSkip.find(y => y === x) === undefined);
    var propositions = [...newIds];

    if (propositions.length === 0) {
      return 0;
    }

    for (let i of newIds) {          
      for (let j of newIds) {
        if (i === j) {
            continue;
        }
        
        if (i + j <= 9) {
          propositions.push(i + j);
        }
      }
    }

    propositions = [...new Set(propositions)]; 
    const index = Math.floor((propositions.length-1) * Math.random());
    return propositions[index];
}

const utils = {
    createRange: createRange,
    generateRandomRange: generateRandomRange,
    getStarsCount: getStarsCount,
}

export default utils;