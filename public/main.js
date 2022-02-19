const adoptDogs = require('./seed')
const sectionCenter = document.querySelector('.section-center');
window.addEventListener("DOMContentLoaded", function () {
    console.log('hit3')
   displayAllDogs(adoptDogs)
});

   function displayAllDogs(adoptItems){
       let displayAllDogs = adoptItems.map(function (item) {
           return `
           <article class="dog-profile">
            <img src = ${item.img} class = "photo" alt = "puppy"/>  
        <div class="dog-info">
            <header>
                <h4>${item.name}/h4>
                <ul>
                <li>${item.breed}</li>
                <li>${item.sex}</li>
                <li>${item.age}</li>
                <li>${item.size}</li>
                </ul>
            </header>
            <p class="item-text">${personality}</p>
        </div>
        </article>
           `
       });
       displayAllDogs = displayAllDogs.join("")
       sectionCenter.innerHTML = displayAllDogs;
   }
