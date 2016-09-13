function iterativeLog(array) {
  array.forEach( function(currentElement, index, array) {
    console.log(`${index}: ${currentElement}`)
  })
}

function iterate(callback) {
  var myPets = ["cat", "dog", "fish", "squirrel", "rabbit"];
  myPets.forEach(callback);
  return myPets;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
