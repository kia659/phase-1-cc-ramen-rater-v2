
// index.js
//! GREAT JOB WITH THE GLOBAL VARS
const url = "http://localhost:3000/ramens";
const ramenName = document.querySelector('#ramen-name')
const ramenImage = document.querySelector('#ramen-image')
const ramenRestaurant = document.querySelector('#ramen-restaurant')
const ramenRating = document.querySelector('#ramen-rating')
const ramenComment = document.querySelector('#ramen-comment')
const ramenMenu = document.querySelector('#ramen-menu')// Callbacks
const formInputRestaurant = document.querySelector('#new-restaurant')
const formInputImage = document.querySelector('#new-image')
const formInputRating = document.querySelector('#new-rating')
const formInputComment = document.querySelector('#new-comment')
const formInputName = document.querySelector('#new-name')

const handleClick = (ramenObj) => {
  ramenName.innerText = ramenObj.name
  ramenRestaurant.innerText = ramenObj.restaurant
  ramenImage.src = ramenObj.image
  ramenImage.alt = ramenObj.name
  ramenComment.innerText = ramenObj.comment
  ramenRating.innerText = ramenObj.rating
}

const addSubmitListener = () => {
  const newRamenForm = document.querySelector('#new-ramen');
  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault()//!always!!
    const newRamen = {
      name: formInputName.value,
      restaurant: formInputRestaurant.value,
      image: formInputImage.value,
      rating: formInputRating.value,
      comment: formInputComment.value,
    } //! extract data out of form inputs (.value) and put into something you can use (object)
    const ramenImg = document.createElement('img');
    ramenImg.src = newRamen.image;
    ramenImg.alt = newRamen.name;
    ramenImg.addEventListener('click', () => handleClick(newRamen));
    ramenMenu.appendChild(ramenImg);
    newRamenForm.reset()
  });
};

const displayRamen = () => {
  fetch(url)
    .then(resp => resp.json())
    .then(ramenData => {
      ramenData.forEach(ramenObj => {
        const ramenImg = document.createElement('img');
        ramenImg.src = ramenObj.image;
        ramenImg.alt = ramenObj.name;
        ramenImg.addEventListener('click', () => handleClick(ramenObj));
        ramenMenu.appendChild(ramenImg);
      });
      handleClick(ramenData[0])
    })
    .catch(error => console.log(error));
};

const main = () => {
  displayRamen();
  addSubmitListener();
}

main()