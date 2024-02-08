// index.js
const url = `http://localhost:3000/ramens`// Add code
const ramenName = document.querySelector('#ramen-name')
const ramenImage = document.querySelector('#ramen-image')
const ramenRestaurant = document.querySelector('#ramen-restaurant')
const ramenRating = document.querySelector('#ramen-rating')
const ramenComment = document.querySelector('#ramen-comment')
const ramenMenu = document.querySelector('#ramen-menu')// Callbacks

const handleClick = () => {

}

const addSubmitListener = () => {
const newRamen = document.querySelector('#new-ramen')
newRamen.addEventListener('submit')

}

const displayRamens = () => {
  return fetch(url)
  .then (resp => resp.json())
  .then (ramenData => {
ramenData.forEach(ramenObj => { 
   //!creat img tag.set source to ramen img/append new img tag onto the DOM 
  const ramenImg = document.createElement("img")
  ramenImg.src = ramenObj.image
  ramenImage.alt = ramenObj.name
ramenMenu.appendChild(ramenImg)
}); 
handleClick()
console.log(ramenData)
    ramenName.innerText = ramenData[0].name
    ramenRestaurant.innerText = ramenData[0].restaurant
    ramenImage.src = ramenData[0].image
    ramenImage.alt = ramenData[0].name
    ramenComment.innerText = ramenData[0].comment
    ramenRating.innerText = ramenData[0].rating
    // console.log(ramenObj[0])
  })
};

const main = () => {
  // Invoke displayRamens here
displayRamens()} // Invoke addSubmitListener here}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
