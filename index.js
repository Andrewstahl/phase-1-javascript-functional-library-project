function returnArrayFunc(collection) {
  let returnArray;
  if (typeof collection === "object")
    returnArray = Object.values(collection);
  else {
    returnArray = collection;
  }
  return returnArray;
}

function myEach(collection, alert) {
  let arrayCollection = returnArrayFunc(collection);
  for (let item of arrayCollection) {
    alert(item);
  }

  return collection;
}

function myMap(collection, callback) {
  let arrayCollection = returnArrayFunc(collection); 
  let returnArray = [];
  for (let item of arrayCollection) {
    returnArray.push(callback(item));
  }
  return returnArray;
}

function myReduce(collection, callback, acc) {
  let arrayCollection = returnArrayFunc(collection); 
  let len = arrayCollection.length;
  let start = 0;
  
  // Check if there's a starting point. If there isn't,
  // let's set the starting value equal to the first
  // element and have the for loop start at the second
  // element.
  if (acc === undefined) {
    acc = arrayCollection[0];
    start = 1;
  }
  
  for (let i = start; i < len; ++i) {
    acc = callback(acc, arrayCollection[i], arrayCollection);
  }
  
  return acc;
}

function myFind(collection, predicate) {
  let arrayCollection = returnArrayFunc(collection); 
  let len = arrayCollection.length;

  for (let i = 0; i < len; ++i) {
    if (predicate(arrayCollection[i])) return arrayCollection[i];
  }

  return undefined;
}

function myFilter(collection, predicate) {
  let arrayCollection = returnArrayFunc(collection); 
  let len = arrayCollection.length;
  
  let returnArray = [];

  for (let i = 0; i < len; ++i) {
    if (predicate(arrayCollection[i])) returnArray.push(arrayCollection[i]);
  }

  return returnArray;
}

function mySize(collection) {
  let arrayCollection = returnArrayFunc(collection); 
  
  return arrayCollection.length;
}

function myFirst(array, n) {
  let returnArray = [];

  if (n === undefined) {
    return array.at(0);
  } else {
    for (let i = 0; i < n; ++i) {
      returnArray.push(array[i]);
    }
  }

  return returnArray;
}

function myLast(array, n) {
  let returnArray = [];
  let len = array.length;
  if (n === undefined) {
    return array.at(-1);
  } else {
    for (let i = (len - n); i < len; ++i) {
      returnArray.push(array.at(i));
    }
  }

  return returnArray;
}

function myKeys(collection) {
  return Object.keys(collection);
}

function myValues(collection) {
  return Object.values(collection);
}

const arr = [1, 2, 3, 4, 5];
console.log(myLast(arr, 2));
// console.log(myMap([1, 2, 3], function(num){ return num * 3; }));