const cityHeader = document.querySelector(".location-header");
const citiesDesktop = document.querySelector(".cities-desktop");
const citiesMobile = document.querySelector(".cities-mobile");
const body = document.querySelector("body");
const telBlockModalWindow = document.querySelector(".popup-outer");
const popUpBlock = document.querySelector(".tel-block-visible");
const btnPromo = document.querySelector(".btn-promo");
const citiesNames = document.querySelectorAll(".a-cities");
const sections = document.querySelectorAll(".sections");
const btnClose = document.querySelector(".cross");
const cityHeaderName = document.querySelector("[data-city-header]");
const btnOffer = document.querySelector(".btn-offer");
const footer = document.querySelector(".footer");


const url = 'https://api.github.com/users?q=';



async function getUsers(url) {
   
   const response = await fetch(url);
   const responseJSON = await response.json();
   const users = JSON.parse(JSON.stringify(responseJSON, ['login', 'avatar_url']));   
    
   return users;
   
}



async function main() {

   Pagination.drawPagination();

}



const Pagination = {
   
   usersOnPage: 6,
   pageAmount: 0,
   allUsersAmount: 0,
   mainPage: null,
   spanPaginationArr: [],

   async showPage(span) {
   
      if(this.mainPage) this.mainPage.classList.remove("pagination-active");
      this.mainPage = span;
      this.mainPage.classList.add("pagination-active");

   },

   async drawPagination() {
      const users = await getUsers(url);
      const paginator = document.querySelector("#pagination");
      paginator.innerHTML = "";
      
      Rendering.drawCards(users.slice(0, this.usersOnPage));
   

      this.pageAmount = Math.ceil(users.length / this.usersOnPage);
      
      for (let j = 0; j < this.pageAmount; j++) {
         let span = document.createElement("span");
         span.setAttribute("data-index", j+1);
         span.classList.add("pagination-span");
         paginator.appendChild(span);
         

         this.spanPaginationArr.push(span);
         

         for (let item of this.spanPaginationArr) {
            this.showPage(paginator.childNodes[0]);
            item.addEventListener("click", () => {
               this.showPage(item);
               let pageNum = +item.dataset.index;
               let start = (pageNum-1) * this.usersOnPage;
               let end = start + this.usersOnPage;
               users.slice(start, end);
               Rendering.drawCards(users.slice(start, end));
               
            }) 
            
         }
      }
   }

}


const Rendering = {
   newCard: null,

   createCard() {
      
      const usersDivWrap = document.querySelector(".usersDivWrap");
      
      
      
      const userDiv = document.createElement('div'); // card
      userDiv.classList.add('userDiv'); // add class to card
      usersDivWrap.appendChild(userDiv);

      const cardImg = document.createElement("img"); // avatar
      cardImg.classList.add("userAvatar"); // add class to avatar
      
      const cardLogin = document.createElement("p"); // login
      cardLogin.classList.add("userName"); // add class to login

      userDiv.append(cardImg, cardLogin);

      this.newCard = userDiv;
   },

   drawCards(items) {
      const allCards = document.querySelector(".usersDivWrap"); 

      
      allCards.innerHTML = "";

      for (let i=0; i < items.length; i++) {
         this.createCard();
         this.newCard.setAttribute("data-index-number", i + 1);
         let img = [...this.newCard.childNodes].find(
            x => x.className === "userAvatar"
         );
         img.setAttribute("src", items[i].avatar_url);
         

         let nameString = [...this.newCard.childNodes].find(
            x => x.className === "userName"
         )
         nameString.innerHTML = `${items[i].login}`;

         allCards.appendChild(this.newCard);

      }
      
      
   }
   

}

main()
