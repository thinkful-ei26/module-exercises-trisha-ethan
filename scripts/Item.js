'use strict';

/* global Item, cuid */

const Item = (function (){
  const validateName = function (name) {
    if(!name){
      throw new TypeError('Name does not exist');
    }
  }; 

  const create = function(name){
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };

  //does the order matter below?
  return {
    validateName: validateName,
    create: create
  };
}());