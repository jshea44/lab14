'use strict';

// localStorage.clear();
function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  let valuesToStore = JSON.stringify(this.allProducts);
  localStorage.setItem('productData', valuesToStore);
  // console.log(valuesToStore);
}

AppState.prototype.returnTimesClickedData = function () {
  let numTimesClickedArray = [];

  numTimesClickedArray = [12, 19, 3, 5, 2, 3];

  return numTimesClickedArray;
}

AppState.prototype.returnTimesSeenData = function () {
  let numTimesSeenArray = [];

  numTimesSeenArray = [1, 9, 23, 1, 7, 6];

  return numTimesSeenArray;
}

AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  let rawData = localStorage.getItem('productData');
  let productData = JSON.parse(rawData);
  // console.log(productData);

  if (!productData) {
    this.instantiateProducts();

  } else {

    for (let i = 0; i < productData.length; i++){
      let currentProduct = productData[i];

      let currentName = currentProduct.name;
      let currentTimesClicked = currentProduct.timesClicked;
      let currentTimesShown = currentProduct.timesShown;
      
      if (currentName === 'sweep') {
        this.allProducts.push(new Product(currentName, 'png', currentTimesClicked, currentTimesShown));
      } else {
        this.allProducts.push(new Product(currentName, 'jpg', currentTimesClicked, currentTimesShown));
      }
    }
    // console.log(this);
  }
}


function Product(name, fileExtension = 'jpg', timesClicked = 0, timesShown = 0) {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = timesClicked;
  this.timesShown = timesShown;
}
