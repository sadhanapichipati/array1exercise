// . Find which country has more population among all?

function problem3(anotherDataSet){
    const more = anotherDataSet.reduce((acc,cv)=>cv.population > acc.population ? cv : acc);
    console.log(more);
    }
module.exports = problem3;