'use strict';

/* global Item, cuid */

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
      console.error('Cannot add item:' + error.message);
    }
  };

  const findById = function(id){
    return store.items.find(item => item.id === id);
  };

  const findAndToggleChecked = function(id) {
    this.findById(id).checked = !this.findById(id).checked;
  };

  // >>> becareful of cuids. do not copy the actual value because the value changes upon refreshing the app. just pass in store.items[0].id like instead of "cjo4pagt900003g5meshyfqrd"
  const findAndDelete = function(id) {
    store.items.splice(this.items.findIndex(item => item.id === id), 1);
  };


  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch(error) {
      console.error(`Cannot update name: ${error.message}`);
    }
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(search) {
    this.searchTerm = search;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findById,
    findAndToggleChecked,
    findAndDelete,
    findAndUpdateName,
    toggleCheckedFilter,
    setSearchTerm
  };

}() );