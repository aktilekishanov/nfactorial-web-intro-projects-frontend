// filterItems.js

/**
 * Filters out an item from an array by its id.
 * @param {Array} arr - The array of todo items.
 * @param {number} id - The id of the todo item to filter out.
 * @returns {Array} A new array with the item removed.
 */
const filterItems = (arr, id) => {
    // If the id is not found in the array, return the original array
    if (!arr.some(item => item.id === id)) {
      return arr;
    }
    // Return a new array with the item filtered out
    return arr.filter(item => item.id !== id);
  }
  
  export default filterItems;
  