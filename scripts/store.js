'use strict';

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
      store.items.push(this.items);
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

  // >>> here!
  const findAndDelete = function(id) {
    const index = this.findById(id);
    const item = store.items.findIndex(index);
    store.items.splice(item, 1);
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