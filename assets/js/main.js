

import writer from "./writer/writer";
import hederbala from "./Heder/heder";
import hederpaein from "./Hederpaen/hederpaein";
import hedermobail from "./heder.mobail/mobil";
import siwperkol from "./siwper.col/siwper.col";
import api1 from "./api1/api1";
import api2 from "./api2/api2";
import api3 from "./api3/api3";
import api4 from "./api4/api4";
import cadr from "./caderakhar/cadr";
import foter from "./foter/foter";
writer(hederbala);
writer(hederpaein);
writer(hedermobail);
writer(siwperkol);
writer(api1);
writer(api2);
writer(api3);
writer(api4);
writer(cadr);
writer(foter);


//titr heder//

document.addEventListener('DOMContentLoaded', function () {
  const menuIds = ['menubutton', 'bot', 'otherbutton', 'buut', 'buuut', 'buuuut', 'buuuuut'];
  const dropdownIds = ['dropdownmenu', 'botDropdownMenu', 'otherDropdownMenu', 'botDropdownMenuu', 'botDropdownMenuuu', 'botDropdownMenuuuu', 'botDropdownMenuuuuu']; // آیدی‌های منوها

  menuIds.forEach((id, index) => {
    const menuButton = document.getElementById(id);
    const dropdownMenu = document.getElementById(dropdownIds[index]);
    if (menuButton && dropdownMenu) {
      // نمایش منو وقتی موس روی دکمه قرار می‌گیرد
      menuButton.addEventListener('mouseenter', () => {
        dropdownMenu.classList.remove('hidden');
      });

      // پنهان کردن منو وقتی موس از روی دکمه خارج می‌شود
      menuButton.addEventListener('mouseleave', () => {
        setTimeout(() => {
          if (!dropdownMenu.matches(':hover')) {
            dropdownMenu.classList.add('hidden');
          }
        }, 100); // تأخیر کوچک برای جلوگیری از بسته شدن فوری
      });

      // پنهان کردن منو وقتی موس از روی منو خارج می‌شود
      dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.classList.add('hidden');
      });
    }
  });
});


// باز کردن منوی کناری با کلیک روی دکمه "Menu"





var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active'
  },
  mousewheel: true,
  keyboard: true,
});







//api//
let bateel = async () => {

  let req = await fetch("https://mahrokh1547.github.io/battel1_api/bateel1.json",);
  let data = await req.json();
  let cards = data.map((elem) => {
    return `<div
        class="desktop:w-[290px] desktop:h-[440px] mobail:w-full mobail:h-[340px] bg-[#23252b] rounded-lg shadow-lg   ">
        <img  src=${elem.img} alt="img" class="w-full desktop:h-[155px] mobail:h-[114px] object-cover rounded-lg">
        

        <div class="pl-5 pr-4 inline-block text-left w-full desktop:h-[186px] mobail:h-[168px]">


          <div class="desktop:grid desktop:grid-cols-2 mobail:flex">


            <h2 class="text-[14px] desktop:w-[225px] mobail:w-[170px] h-full font-bold text-white ml-[0px] mt-[10px] desktop:inline-block mobail:hidden">
             ${elem.category} 
            </h2>
            <div class=" w-[25px] h-[25px] desktop:mr-[100px] mobail:mr-[165px] desktop:inline-block mobail:flex mobail:justify-end mt-[8px]">

              <img  src=${elem.svg} class="w-[25px] h-[25px] ">

            </div>


          </div>
          <h3 class="desktop:text-[18px] mobail:text-[16px] font-bold text-white mt-2">${elem.title}</h3>
          <p class="desktop:text-[14px] mobail:text-[12px] mt-2 text-yellow-500">${elem.matnzaed}</p>
          <p class="text-[12px] text-gray-400 mt-1">${elem.sub}</p>

          
        </div>
        <div class="w-full desktop:h-[72px] mobail:h-[56px] justify-end flex items-end pl-5 pr-4 pb-4">
          <span class="text-[16px] font-bold text-white">${elem.botten}</span>
        </div>
      </div>`
  });
  document.querySelector("#container",).insertAdjacentHTML("afterbegin", cards.join(""))
};



bateel();

//api2//
let bateell = async () => {

  let req = await fetch("https://mahrokh1547.github.io/battel2_api/battel2.json",);
  let data = await req.json();
  let cards = data.map((elem) => {
    return `<div
        class="desktop:w-[290px] desktop:h-[440px] mobail:w-full mobail:h-[340px] bg-[#23252b] rounded-lg shadow-lg   ">
        <img  src=${elem.img} alt="img" class="w-full desktop:h-[155px] mobail:h-[114px] object-cover rounded-lg">
        

        <div class="pl-5 pr-4 inline-block text-left w-full desktop:h-[186px] mobail:h-[168px]">


          <div class="desktop:grid desktop:grid-cols-2 mobail:flex">


            <h2 class="text-[14px] desktop:w-[225px] mobail:w-[170px] h-full font-bold text-white ml-[0px] mt-[10px] desktop:inline-block mobail:hidden">
             ${elem.category} 
            </h2>
            <div class=" w-[25px] h-[25px] desktop:mr-[100px] mobail:mr-[165px] desktop:inline-block mobail:flex mobail:justify-end mt-[8px]">

              <img  src=${elem.svg} class="w-[25px] h-[25px] ">

            </div>


          </div>
          <h3 class="desktop:text-[18px] mobail:text-[16px] font-bold text-white mt-2">${elem.title}</h3>
          <p class="desktop:text-[14px] mobail:text-[12px] mt-2 text-yellow-500">${elem.matnzaed}</p>
          <p class="text-[12px] text-gray-400 mt-1">${elem.sub}</p>

          
        </div>
        <div class="w-full desktop:h-[72px] mobail:h-[56px] justify-end flex items-end pl-5 pr-4 pb-4">
          <span class="text-[16px] font-bold text-white">${elem.botten}</span>
        </div>
      </div>`
  });
  document.querySelector("#containerr",).insertAdjacentHTML("afterbegin", cards.join(""))
};
bateell();


///api3//

let bateelll = async () => {

  let req = await fetch("https://mahrokh1547.github.io/battel3.json/battel3.json",);
  let data = await req.json();
  let cards = data.map((elem) => {
    return `<div
        class="desktop:w-[290px] desktop:h-[440px] mobail:w-full mobail:h-[340px] bg-[#23252b] rounded-lg shadow-lg   ">
        <img  src=${elem.img} alt="img" class="w-full desktop:h-[155px] mobail:h-[114px] object-cover rounded-lg">
        

        <div class="pl-5 pr-4 inline-block text-left w-full desktop:h-[186px] mobail:h-[168px]">


          <div class="desktop:grid desktop:grid-cols-2 mobail:flex">


            <h2 class="text-[14px] desktop:w-[225px] mobail:w-[170px] h-full font-bold text-white ml-[0px] mt-[10px] desktop:inline-block mobail:hidden">
             ${elem.category} 
            </h2>
            <div class=" w-[25px] h-[25px] desktop:mr-[100px] mobail:mr-[165px] desktop:inline-block mobail:flex mobail:justify-end mt-[8px]">

              <img  src=${elem.svg} class="w-[25px] h-[25px] ">

            </div>


          </div>
          <h3 class="desktop:text-[18px] mobail:text-[16px] font-bold text-white mt-2">${elem.title}</h3>
          <p class="desktop:text-[14px] mobail:text-[12px] mt-2 text-yellow-500">${elem.matnzaed}</p>
          <p class="text-[12px] text-gray-400 mt-1">${elem.sub}</p>

          
        </div>
        <div class="w-full desktop:h-[72px] mobail:h-[56px] justify-end flex items-end pl-5 pr-4 pb-4">
          <span class="text-[16px] font-bold text-white">${elem.botten}</span>
        </div>
      </div>`
  });
  document.querySelector("#containerrr",).insertAdjacentHTML("afterbegin", cards.join(""))
};
bateelll();
//api4//

let bateellll = async () => {

  let req = await fetch("https://mahrokh1547.github.io/battel4.json/battel4.json",);
  let data = await req.json();
  let cards = data.map((elem) => {
    return `<div
        class="desktop:w-[290px] desktop:h-[440px] mobail:w-full mobail:h-[340px] bg-[#23252b] rounded-lg shadow-lg   ">
        <img  src=${elem.img} alt="img" class="w-full desktop:h-[155px] mobail:h-[114px] object-cover rounded-lg">
        

        <div class="pl-5 pr-4 inline-block text-left w-full desktop:h-[186px] mobail:h-[168px]">


          <div class="desktop:grid desktop:grid-cols-2 mobail:flex">


            <h2 class="text-[14px] desktop:w-[225px] mobail:w-[170px] h-full font-bold text-white ml-[0px] mt-[10px] desktop:inline-block mobail:hidden">
             ${elem.category} 
            </h2>
            <div class=" w-[25px] h-[25px] desktop:mr-[100px] mobail:mr-[165px] desktop:inline-block mobail:flex mobail:justify-end mt-[8px]">

              <img  src=${elem.svg} class="w-[25px] h-[25px] ">

            </div>


          </div>
          <h3 class="desktop:text-[18px] mobail:text-[16px] font-bold text-white mt-2">${elem.title}</h3>
          <p class="desktop:text-[14px] mobail:text-[12px] mt-2 text-yellow-500">${elem.matnzaed}</p>
          <p class="text-[12px] text-gray-400 mt-1">${elem.sub}</p>

          
        </div>
        <div class="w-full desktop:h-[72px] mobail:h-[56px] justify-end flex items-end pl-5 pr-4 pb-4">
          <span class="text-[16px] font-bold text-white">${elem.botten}</span>
        </div>
      </div>`
  });
  document.querySelector("#containerrrr",).insertAdjacentHTML("afterbegin", cards.join(""))
};
bateellll();










//janebi//


// تعریف لیست منوها
const menus1 = [
  { buttonId: 'menuButton', menuId: 'sideMenu', closeButtonId: 'closeMenu', openFromLeft: true },  // باز شدن از چپ
  { buttonId: 'menuButton2', menuId: 'sideMenu2', closeButtonId: 'closeMenu2', openFromLeft: false } // باز شدن از راست
];

const menus2 = [
  { buttonId: 'menuButton3', menuId: 'sideMenu3', closeButtonId: 'closeMenu3', openFromLeft: true },  // باز شدن از چپ
  { buttonId: 'menuButton4', menuId: 'sideMenu4', closeButtonId: 'closeMenu4', openFromLeft: false } // باز شدن از راست
];

// حلقه برای افزودن رویداد کلیک به دکمه‌های باز کردن منو (برای menus1)
menus1.forEach(({ buttonId, menuId, openFromLeft }) => {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  // اطمینان از اینکه دکمه باز کردن و منو موجود باشند
  if (button && menu) {
      button.addEventListener('click', function () {
          if (openFromLeft) {
              // نمایش منو از سمت چپ
              menu.style.left = '0';
              menu.classList.remove('-translate-x-full');
              menu.classList.add('translate-x-0');
          } else {
              // نمایش منو از سمت راست
              menu.style.right = '0';
              menu.classList.remove('translate-x-full');
              menu.classList.add('translate-x-0');
          }
          menu.classList.remove('hidden');
          menu.style.transition = 'transform 0.3s ease';
      });
  }
});

// حلقه برای افزودن رویداد کلیک به دکمه‌های بستن منو (برای menus1)
menus1.forEach(({ menuId, closeButtonId, openFromLeft }) => {
  const menu = document.getElementById(menuId);
  const closeButton = document.getElementById(closeButtonId);

  // اطمینان از اینکه دکمه بستن و منو موجود باشند
  if (closeButton && menu) {
      closeButton.addEventListener('click', function () {
          if (openFromLeft) {
              // بستن منو از سمت چپ
              menu.classList.add('-translate-x-full');
              menu.classList.remove('translate-x-0');
          } else {
              // بستن منو از سمت راست
              menu.classList.add('translate-x-full');
              menu.classList.remove('translate-x-0');
          }
          setTimeout(() => {
              menu.classList.add('hidden');
          }, 300);
      });
  }
});

// حلقه برای افزودن رویداد کلیک به دکمه‌های باز کردن منو (برای menus2)
menus2.forEach(({ buttonId, menuId, openFromLeft }) => {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  // اطمینان از اینکه دکمه باز کردن و منو موجود باشند
  if (button && menu) {
      button.addEventListener('click', function () {
          if (openFromLeft) {
              // نمایش منو از سمت چپ
              menu.style.left = '0';
              menu.classList.remove('-translate-x-full');
              menu.classList.add('translate-x-0');
          } else {
              // نمایش منو از سمت راست
              menu.style.right = '0';
              menu.classList.remove('translate-x-full');
              menu.classList.add('translate-x-0');
          }
          menu.classList.remove('hidden');
          menu.style.transition = 'transform 0.3s ease';
      });
  }
});

// حلقه برای افزودن رویداد کلیک به دکمه‌های بستن منو (برای menus2)
menus2.forEach(({ menuId, closeButtonId, openFromLeft }) => {
  const menu = document.getElementById(menuId);
  const closeButton = document.getElementById(closeButtonId);

  // اطمینان از اینکه دکمه بستن و منو موجود باشند
  if (closeButton && menu) {
      closeButton.addEventListener('click', function () {
          if (openFromLeft) {
              // بستن منو از سمت چپ
              menu.classList.add('-translate-x-full');
              menu.classList.remove('translate-x-0');
          } else {
              // بستن منو از سمت راست
              menu.classList.add('translate-x-full');
              menu.classList.remove('translate-x-0');
          }
          setTimeout(() => {
              menu.classList.add('hidden');
          }, 300);
      });
  }
  });








