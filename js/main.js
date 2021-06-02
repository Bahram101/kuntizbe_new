
///ON DESKTOP

// SMOOTH SCROLL
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()    
    const blockID = anchor.getAttribute('href').substr(1) 
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


//OPEN CURTAINS
let curtainsUp = document.getElementById('curtainsUp');
let curtainsDown = document.getElementById('curtainsDown');

function openLines(){
  let lineUp = document.getElementById('line-up');
  let lineDown = document.getElementById('line-down');
  lineUp.classList.add('line-up-action');
  lineDown.classList.add('line-down-action');
}

function openCurtains(){ 
  curtainsUp.classList.add('up');
  curtainsDown.classList.add('down');
}

function deleteBackgorund(){
  curtainsUp.remove();
  curtainsDown.remove();  
}

setTimeout(openLines, 700);
setTimeout(openCurtains, 1700);
setTimeout(deleteBackgorund, 3600);


//ADD AND DELETE OVERFLOW_Y
if(window.matchMedia('(min-height: 695px)').matches){
  document.getElementById('body').classList.add('overflow-y');
}

if(window.matchMedia('(max-width: 991px)').matches){
  document.getElementById('body').classList.remove('overflow-y');
}


//ROTATE FRONT AND BACK PAGES
let btnBackPage = document.getElementById('btnBackPage')
let frontPage = document.getElementById('frontPage')
let backPage = document.getElementById('backPage')
let paygambar = document.getElementById('paygambar')
btnBackPage.addEventListener('click', function(e){
   e.preventDefault();   
   if(this.name == 'btnBack'){
      frontPage.classList.add('rotateFront');
      backPage.classList.add('rotateBack');
      this.name = 'btnFront';
      this.innerText = "Алдыңғы бет";
      // btnBackPage.insertAdjacentHTML("beforeend", 
      // "<i class='fas fa-file frontIcon'></i>");      
   }else{
      frontPage.classList.remove('rotateFront');
      backPage.classList.remove('rotateBack');
      this.name = 'btnBack';
      this.innerText = "Артқы бет";
      this.insertAdjacentHTML("beforeend", 
      "<i class='fas fa-file backIcon'></i>");
   }   
})


//OPEN CALENDAR PAGE / ON DESKTOP
let calendarBtn = document.getElementById('calendarBtn');
let calendarContent = document.getElementById('calendarContent');
let frontAndBack = document.getElementById('frontBack');
let btnNextDay = document.getElementById('btnNextDay');

calendarBtn.addEventListener('click', function(e){
  e.preventDefault();
  frontAndBack.classList.add('d-none');
  calendarContent.classList.remove('d-none');
})

btnBackPage.addEventListener('click', function(e){
  e.preventDefault();
  frontAndBack.classList.remove('d-none');
  calendarContent.classList.add('d-none');
})

btnNextDay.addEventListener('click', function(e){
  e.preventDefault();
  toFront();  
})
function toFront(){ 
    if(btnBackPage.name == 'btnFront'){      
      if(calendarContent.classList.contains('d-none') == false){
        frontPage.classList.remove('rotateFront');
        backPage.classList.remove('rotateBack');
        btnBackPage.name = 'btnBack';
        btnBackPage.innerText = "Артқы бет";  
        btnBackPage.insertAdjacentHTML("beforeend", 
        "<i class='fas fa-file backIcon'></i>");  
      }        
    }  
  frontAndBack.classList.remove('d-none');  
  calendarContent.classList.add('d-none');  
}


// ADD FADE TO BUTTON PAGES
// let buttonItems = document.querySelectorAll('.buttons-item');
// let frontBackFade = document.querySelector('.frontBackFade');
// buttonItems.forEach(function(buttonItem){
//   buttonItem.addEventListener('click', function(){
//     frontBackFade.classList.add('changeFade');
//     setTimeout(addFade, 500)
//   })
// })
// function addFade(){
//   frontBackFade.classList.add('d-none');
// }



/// ON MOBILE

//OPEN CALENDAR PAGE WITH CLICK MILADI DATE 
let miladiDateItems = document.querySelectorAll('.miladi-date');
let btnBack = document.getElementById('btnBack');
let frontContent = document.getElementById('frontContent');
let calendarContentMob = document.getElementById('calendarContentMob'); 

miladiDateItems.forEach(function(miladiDateItem){
  miladiDateItem.addEventListener('click', function(){
      miladiDateItem.classList.remove('active');    
  })
});


//CLOSE MENUCONTENT AND OPEN FRONTCONTENT
let ionIcon = document.getElementById('ion');
let menuContent = document.getElementById('menuContent');
let menuNav = document.getElementById('menuNav');
let frontNav = document.getElementById('frontNav');
ionIcon.addEventListener('click', function(){
  menuContent.classList.remove('active');
  menuContent.classList.remove('show');
  menuNav.classList.remove('active');
  frontContent.classList.add('active');
  frontContent.classList.add('show');
  frontNav.classList.add('active')
})


// CLICK MENU ITEMS
let menuButtons = document.querySelectorAll('.menuButton');

menuButtons.forEach(function(menuButton){
  menuButton.addEventListener('click', function(){
    openContent(this.id, this);
  })
})

function openContent(id, obj){
    switch(id){
        case 'namaztimesButton':
            let namaztimesNav = document.getElementById('namaztimesNav');
            addRemoveActive(namaztimesNav);
            break;
        case 'frontButton':
            let frntNav = document.getElementById('frontNav');
            addRemoveActive(frontNav);
            break;
        case 'backButton':
            let backNav = document.getElementById('backNav');
            addRemoveActive(backNav);
            break;
        default:
            menuNav.classList.remove('active')
            setTimeout(delActv, 1000)
    }
        
    function addRemoveActive(navItem){
        menuNav.classList.remove('active')
        navItem.classList.add('active')            
        setTimeout(delActv, 1000)
    }    
    function delActv(){
        obj.classList.remove('active')
    }
}


// INFO ACCORDION

let infoItems = document.querySelectorAll('.info-item')
let infoItemTitles = document.querySelectorAll('.info-item__title')
let bookItems = document.querySelectorAll('.book-item')
let bookItemTitles = document.querySelectorAll('.book-item__title')
let cityItems = document.querySelectorAll('.city-item')
let cityItemTitles = document.querySelectorAll('.city-item__title')

infoItemTitles.forEach((infoTitle)=>
  infoTitle.addEventListener('click', () => { 
    const parent = infoTitle.parentNode.parentNode;
    if(parent.classList.contains('active')){
      parent.classList.remove('active')
    }else{      
      infoItems.forEach((infoItem) => 
        infoItem.classList.remove('active')
      )     
      parent.classList.add('active')
    }
  })
)

bookItemTitles.forEach((bookTitle)=>
  bookTitle.addEventListener('click', () => { 
    const parent = bookTitle.parentNode.parentNode;    
    if(parent.classList.contains('active')){
      parent.classList.remove('active')
    }else{      
      bookItems.forEach((bookItem) => 
        bookItem.classList.remove('active')
      )     
      parent.classList.add('active')
    }
  })
)

cityItemTitles.forEach((cityTitle)=>
  cityTitle.addEventListener('click', () => { 
    const parent2 = cityTitle.parentNode.parentNode;
    const pnc = cityTitle.parentNode.nextElementSibling.childNodes;     

    if(parent2.classList.contains('active')){
      parent2.classList.remove('active')
    }else{      
      cityItems.forEach((cityItem) => 
        cityItem.classList.remove('active')
      )     
      parent2.classList.add('active')
      pnc.forEach((col) =>{
      })
    }
  })
)

// SHARE BUTTON
let shareButton = document.querySelector("#share-button");
let shareIcons = document.querySelector("#shareIcons");
let iconFace = document.querySelector(".fa-facebook-f");
let iconTel = document.querySelector(".fa-telegram-plane");
let iconWhat = document.querySelector(".fa-whatsapp");
shareButton.addEventListener('click', function(){
  // iconWhat.classList.toggle('whatTr');
  // iconTel.classList.toggle('telTr');
  // iconFace.classList.toggle('faceTr');
  shareIcons.classList.toggle('pushToLeft')
  
})

  


// infoItemTitles.forEach((itemTitle)=>{
//   let attr = itemTitle.getAttribute('class') 
//   let res = attr.substr(0, 9) 
//     if(res == "info-item"){
//       accordion(itemTitle, infoItems)
//     }else{
//       accordion(itemTitle, bookItems)
//     }
//   }  
// )

// function accordion(item, itemTitle){
//   item.addEventListener('click', () => {
//     console.log(item)
//     const parent = item.parentNode.parentNode;
//     if(parent.classList.contains('active')){
//       parent.classList.remove('active')
//     }else{
//       parent.classList.add('active')
//       infoItems.forEach((infoItem) => 
//         infoItem.classList.remove('active')
//       );
      
//     }
//   })  
// }






// JQuery

// $(document).ready(function(){
//   $(".info-item__title").on('click', function(){
//      $(this).next('.info-item__content').slideToggle();
//     $(this).next('.info-item__content').addClass('active');
//     $(this).parent().toggleClass('active');  

//     const parent = $(this).parent();
//     if(parent.hasClass('active')){
//       parent.removeClass('active');
//     }else{
//       $('.info-item').removeClass('active');
//       parent.addClass('active');
//     }    

//   })
// })










