// Find the average population among all countries.

function problem2(anotherDataSet){
    const population = anotherDataSet.reduce((acc,cv)=> {
       return acc += cv.population },0);
    return population/anotherDataSet.length;
    console.log(population);
}

module.exports = problem2;