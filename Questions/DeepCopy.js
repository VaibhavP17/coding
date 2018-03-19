/**
*Implement deepCopy
*/

var person = {
    name: {
        firstName: 'John',
        lastName: 'Hoffman'
    },
    age: 45,
    food: ['Pizza', 'Burger', {type: 'well done', topings: ['steak', 'onion', 'tomato']}]
};

function deepCopy(obj) {
    if(obj === null || typeof obj != "object"){
        return obj;
    } else if(Array.isArray(obj)){
        let copy = [];
        for(let i=0; i<obj.length; i++){
            copy.push(deepCopy(obj[i]))
        }
        return copy;
    }else {
        let copiedObj = {};
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                copiedObj[key] = deepCopy(obj[key]);
            }
        }
    return copiedObj;
    }
}

console.log(deepCopy(person));

var method2 = function(obj){
  return JSON.parse(JSON.stringify(obj));
}
console.log(method2(person));
