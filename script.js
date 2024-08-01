// import "./src/js/slider.js"
import "./src/scss/style.scss"
import { initImages } from "./src/js/slider.js"
import { fetchBooks } from "./src/js/BooksApi.js"




    // const apiKey = "AIzaSyCOodDbg2KraWyfcmwGP9sKAdMxEO9J8XM"; 
    // let startIndex = 0;
    // // const query = `subject:${category}`;
    // const query = "Architecture";

    // const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}
    // &printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;

    // fetch(apiUrl)
    //     .then((response) => response.json())
    //     .then((data)=>{
    //         const booksContainer = document.querySelector('.books_card');
    //         booksContainer.innerHTML = '';
    //         data.items.forEach(book => {

    //             let bookElement = document.createElement('div');
    //             bookElement.classList.add('book');
    //             const imageLinks = book.volumeInfo.imageLinks.thumbnail; 
    //             const authors =  book.volumeInfo.authors; 
    //             const title = book.volumeInfo.title;
    //             const description = book.volumeInfo.description;
    //             // const price = `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`;
    //             const price =book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : '';  
    //             console.log(authors);
                
                
    //             bookElement.innerHTML = `
    //                     <img src="${imageLinks}" alt="Thumbnail">
    //                     <div class="book-info">
    //                         <p class="authors">${authors}</p>
    //                         <h2 class="book-title">${title}</h2>
    //                         <p class="description">${description}</p>
    //                         <p class="price">${price}</p>
    //                     </div>
    //                 `;
    //             booksContainer.appendChild(bookElement)
    //         })
    //     })






























// let Banner = [{
//     url:"img/banner_one.png"
// },
// {
//     url:"img/banner_two.png"
// },
// {
//     url:"img/banner_three.png"
// }
// ];

// const img = document.querySelector(".images");
// const sliderArrows = document.querySelector(".arrows");
// const wordPicture = document.querySelector(".picture_word");
// const dots = document.querySelector(".dots_slider");

// initImages();
// // dots_slider();
// // initAutoplay();

// function initImages() {
//     Banner.forEach((image, index) => {
//         let imageDiv = `<div class="img n${index} ${index === 0 ? "active" : ""}""
//         style="background-image:url(${Banner [index].url});" data-index="${index}"></div>`;
//         img.innerHTML += imageDiv;
//     });
//     dots_slider();
//     initAutoplay();
// }

// function moveSlider(num){
//     img.querySelector(".active").classList.remove("active");
//     img.querySelector(".n"+num).classList.add("active");
//     dots.querySelector(".dots_after").classList.remove("dots_after");
//     dots.querySelector(".n"+num).classList.add("dots_after");
// }

// function dots_slider(){
//     Banner.forEach((image, index) => {
//         let sliderDots = `<div class = "dots n${index} ${index ===0 ? "dots_after":""}"" data-index="${index}" ></div>`;
//         dots.innerHTML +=sliderDots; 
//     }) 
//     dots.querySelectorAll(".dots").forEach(dots_item =>{
//         dots_item.addEventListener("click", ()=>{
//             moveSlider(dots_item.dataset.index);
//         })
//     })  
// }

// function initAutoplay() {
//     setInterval(() => {
//     let curNumber = +img.querySelector(".active").dataset.index;
//     let nextNumber = curNumber === Banner.length - 1? 0 : curNumber + 1;
//     moveSlider(nextNumber);
//     }, 5000);
// }




