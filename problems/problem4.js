// 4. Store all attractions in an array


function problem4(anotherDataSet){
    const store = anotherDataSet.map(element =>{
        return element.attractions
    })
    console.log(store);
}

module.exports = problem4;