const apiKey = "AIzaSyCOodDbg2KraWyfcmwGP9sKAdMxEO9J8XM"; 
let startIndex = 0;
let active_category = "Architecture";

let parseStorageData = JSON.parse(localStorage.getItem('add')) ?? [];

fetchBooks();
   

function fetchBooks(){
    
    let query = `subject:${active_category}`;
   
    
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data)=>{
            const booksContainer = document.querySelector('.books_card');
            booksContainer.innerHTML = '';
            data.items.forEach(book => {

                let bookElement = document.createElement('div');
                bookElement.classList.add('book');
                const imageLinks = book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail: ''; 
                const authors =  book.volumeInfo.authors ? book.volumeInfo.authors: ''; 
                const title = book.volumeInfo.title? book.volumeInfo.title: '';
                let description = book.volumeInfo.description ? book.volumeInfo.description : '';
                // const rating = book.saleInfo.listPrice? (book.saleInfo.listPrice.amount /10)+"%": "40%";
                const rating = Math.random().toFixed(1) * (100 - 1) + 1 +"%";
                const ratingsCount = book.volumeInfo.ratingsCount? book.volumeInfo.ratingsCount +"m rating": '';
                const maxLength = 100; 
                if (description.length > maxLength) {
                    description = description.substring(0, maxLength) + '...';
                }
                // const price = `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`;
                const price =book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : '';  
                
                
                bookElement.innerHTML = `
                        <img class ="img-book"src="${imageLinks}" alt="Thumbnail">
                        <div class="book-info">
                            <p class="authors">${authors}</p>
                            <h2 class="book-title">${title}</h2>
                            <div class= "section_rating">
                                <svg width="70" height="32" viewBox="0 0 160 32">
                                    <defs>
                                        <mask id="perc${book.id}">
                                            <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                            <rect x="${rating}" y="0" width="100%" height="100%" fill="grey" />
                                        </mask>

                                        <symbol viewBox="0 0 32 32" id="star">
                                            <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                                        </symbol>
                                        <symbol viewBox="0 0 160 32" id="stars">
                                            <use xlink:href="#star" x="-64" y="0"></use>
                                            <use xlink:href="#star" x="-32" y="0"></use>
                                            <use xlink:href="#star" x="0" y="0"></use>
                                            <use xlink:href="#star" x="32" y="0"></use>
                                            <use xlink:href="#star" x="64" y="0"></use>
                                        </symbol>
                                    </defs>

                                    <use xlink:href="#stars" fill="green" stroke="black" mask="url(#perc${book.id})"></use>
                                </svg>
                                <p class="rating">${ratingsCount}</p>
                            </div> 
                            <p class="description">${description}</p>
                            <p class="price">${price}</p>
                            <button data-number="${book.id}" class ="button-buy ">${parseStorageData.includes(book.id)? "IN THE CART":"BUY NOW"}</button>
                            
                        </div>
                    `;
                booksContainer.appendChild(bookElement)
            })
        });
};


document.addEventListener('DOMContentLoaded', () => {
    let number_busket = document.querySelector(".number-busket");
    function number_busket_update() {
        number_busket.innerText = parseStorageData.length;
        if (parseStorageData.length > 0) {
            number_busket.style.display = 'block'; 
        } else {
            number_busket.style.display = 'none'; 
        }
    }
    number_busket_update();
    const category_list = document.querySelectorAll(".category");

    category_list.forEach(item =>{
        item.addEventListener("click", ()=>{
            document.querySelector('.category-active').classList.remove('category-active');
            item.classList.add("category-active");
            startIndex =0;
            active_category = item.textContent.trim();
            fetchBooks();
            
        })
    });

    const button_laod= document.querySelector(".button-load");
    button_laod.addEventListener("click",()=>{
        startIndex+=6;
        fetchBooks();
    });
    
    document.addEventListener('click', (event) => {
        if(event.target.classList.contains('button-buy')){
            let id = event.target.dataset.number;
            if (event.target.textContent === 'BUY NOW') {
                event.target.textContent = 'IN THE CART';
                parseStorageData.push(id); 
            }else { 
                event.target.textContent = 'BUY NOW';
                parseStorageData.splice(parseStorageData.indexOf(id), 1);
            }
            number_busket_update();
            localStorage.setItem("add", JSON.stringify(parseStorageData));
            console.log(localStorage);
        }
        
    })
});  

module.exports = fetchBooks;