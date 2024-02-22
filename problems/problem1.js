// 1. Store all country names in array.

function problem1(anotherDataSet){
    const date = anotherDataSet.map(element =>{
        return element.country
    });

console.log(date);
}

module.exports=problem1;