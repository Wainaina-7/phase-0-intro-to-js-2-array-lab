// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name)
  }
function destructivelyRemoveLastCat() {
cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
  // Return a new array by copying the original array and adding the new cat at the end
  return [...cats, name];
}
function prependCat(name) {
   return [name, ...cats]
}
function removeLastCat() {
    return cats.slice(0, -1); // Creates a new array excluding the last cat
  }
  
function removeFirstCat() {
    return cats.slice(1); // Returns a new array without the first cat
  }
