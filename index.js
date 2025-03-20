function myEach(collection, cb){
    if(typeof collection === Object){
        collection.forEach(element => cb(element))
    } else {
        for (let key in collection){
            cb(collection[key]);
        }
    }
    return collection;
}

function myMap(collection, cb){
    let newArray = [];
    if(typeof collection === Object){
        collection.forEach(element => {
            newArray.push(cb(element));
        })
    } else {
        for (let key in collection){
            newArray.push(cb(collection[key]));
        }
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let keys = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;

    if (acc === undefined) {
        acc = keys[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < keys.length; i++) {
        acc = callback(acc, keys[i], collection);
    }

    return acc;
}

function myFind(collection, predicate){
    if(Array.isArray(collection) === true){
        return collection.find(element => predicate(element))
    } else {
        Object.values(collection);
        for (let key in collection){
            return predicate(collection[key]);
        }
    }
}

function myFilter(collection, predicate) {
    let result = []; 
    if (Array.isArray(collection)) {
        return collection.filter(element => predicate(element));
    } else if (typeof collection === "object") {
        for (let key in collection) {
            if (predicate(collection[key])) {
                result.push(collection[key]); 
            }
        }
    } 
    return result; 
}

function mySize(collection){
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n){
    if (n === undefined) {
        return array[0]; 
    }
    return array.slice(0, n); 
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1]; 
    }
    return array.slice(-n); 
}

function myKeys(object){
    return Object.keys(object);
}

function myValues(object){
    return Object.values(object);
}