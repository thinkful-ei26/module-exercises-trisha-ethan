'use strict';

/* global shoppingList, cuid */

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  let hideCheckedItems = false;
  const searchTerm = '';

  const addItem = function(name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item:' + error.message);
    }
  };

  const findById = function(id){
    return store.items.find(item => item.id === id);
  };

  const findAndToggleChecked = function(id) {
    this.findById(id).checked = !this.findById(id).checked;
  };

  // >>> becareful of cuids. do not copy the actual value because the value changes. just pass in store.items[0].id like instead of "cjo4pagt900003g5meshyfqrd"
  const findAndDelete = function(id) {
    console.log('findAndDelete fired!');
    //const index = this.items.findIndex(item => item.id === id);
    const index = this.findById(id);
    console.log(index);
    const item = store.items.findIndex(item => item.id === id);
    console.log(item);
    store.items.splice(index, 1);
  };


  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(name);
      store.items.findById(id).name = newName; 
      
    } catch(error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  };


  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findById,
    findAndToggleChecked,
    findAndDelete,
    findAndUpdateName
  };

}() );