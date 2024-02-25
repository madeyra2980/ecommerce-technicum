const cards = document.querySelector(".cards");

const products = [
  {
    category: "phones",
    items: [
      {
        id: 1,
        marks: "Смартфон Iphone 15 pro",
        price: 130000,
        img: "assets/products/phones/phone1.webp",
      },
      {
        id: 2,
        marks: "Смартфон POCO z20px",
        price: 230000,
        img: "assets/products/phones/phone2.webp",
      },
      {
        id: 3,
        marks: "Смартфон Iphone 13",
        price: 330000,
        img: "assets/products/phones/phone3.webp",
      },
      {
        id: 4,
        marks: "Смартфон Samsung Galaxy z-flip",
        price: 430000,
        img: "assets/products/phones/phone4.webp",
      },
      {
        id: 5,
        marks: "Смартфон Xiaomi Redmi Note 11",
        price: 530000,
        img: "assets/products/phones/phone5.webp",
      },
      {
        id: 6,
        marks: "Смартфон OnePlus 10 Pro",
        price: 630000,
        img: "assets/products/phones/phone6.webp",
      },
      {
        id: 7,
        marks: "Смартфон Google Pixel 7",
        price: 730000,
        img: "assets/products/phones/phone7.webp",
      },
      {
        id: 8,
        marks: "Смартфон Sony Xperia 5 III",
        price: 830000,
        img: "assets/products/phones/phone8.webp",
      },
      {
        id: 9,
        marks: "Смартфон Huawei P50 Pro",
        price: 930000,
        img: "assets/products/phones/phone9.webp",
      },
      {
        id: 10,
        marks: "Смартфон Oppo Find X5 Pro",
        price: 1130000,
        img: "./assets/products/phones/phone10.webp",
      },
    ],
  },
  {
    category: "laptops",
    items: [
      {
        id: 1,
        marks: "Ноутбук Apple MacBook Pro 2023",
        price: 223000,
        img: "./assets/products/laptops/5.webp",
      },
      {
        id: 2,
        marks: "Ноутбук Dell XPS 15",
        price: 393333,
        img: "./assets/products/laptops/nout1.webp",
      },
      {
        id: 3,
        marks: "Ноутбук HP Spectre x360",
        price: 393333,
        img: "./assets/products/laptops/nout2.webp",
      },
      {
        id: 4,
        marks: "Ноутбук Lenovo ThinkPad X1 Carbon",
        price: 393333,
        img: "./assets/products/laptops/nout3.webp",
      },
      {
        id: 5,
        marks: "Ноутбук Asus ROG Zephyrus G14",
        price: 393333,
        img: "./assets/products/laptops/nout4.webp",
      },
      {
        id: 6,
        marks: "Ноутбук Microsoft Surface Laptop 4",
        price: 393333,
        img: "./assets/products/laptops/nout6.webp",
      },
      {
        id: 7,
        marks: "Ноутбук Acer Swift 5",
        price: 393333,
        img: "./assets/products/laptops/nout7.webp",
      },
      {
        id: 8,
        marks: "Ноутбук Razer Blade 15",
        price: 393333,
        img: "./assets/products/laptops/nout1.webp",
      },
      {
        id: 9,
        marks: "Ноутбук Huawei MateBook X Pro",
        price: 393333,
        img: "./assets/products/laptops/nout9.webp",
      },
      {
        id: 10,
        marks: "Ноутбук MSI GS66 Stealth",
        price: 393333,
        img: "./assets/products/laptops/nout10.webp",
      },
    ],
  },
  {
    category: "watch_tv",
    items: [
      {
        id: 1,
        marks: "Телевизор Samsung QLED QN90A",
        price: 311003,
        img: "./assets/products/watch_tv/tv1.webp",
      },
      {
        id: 2,
        marks: "Телевизор LG OLED C1",
        price: 422421,
        img: "./assets/products/watch_tv/tv2.webp",
      },
      {
        id: 3,
        marks: "Телевизор Sony Bravia XR A90J",
        price: 353142,
        img: "./assets/products/watch_tv/tv3.webp",
      },
      {
        id: 4,
        marks: "Телевизор TCL 6-Series",
        price: 424224,
        img: "./assets/products/watch_tv/tv4.webp",
      },
      {
        id: 5,
        marks: "Телевизор Hisense U8G",
        price: 4224145,
        img: "./assets/products/watch_tv/tv5.webp",
      },
      {
        id: 6,
        marks: "Телевизор Vizio OLED55-H1",
        price: 5764636,
        img: "./assets/products/watch_tv/tv6.webp",
      },
      {
        id: 7,
        marks: "Телевизор Panasonic JZ2000",
        price: 363222,
        img: "./assets/products/watch_tv/tv7.webp",
      },
      {
        id: 8,
        marks: "Телевизор Philips OLED+935",
        price: 346711,
        img: "./assets/products/watch_tv/tv8.webp",
      },
      {
        id: 9,
        marks: "Телевизор Xiaomi Mi TV Q1",
        price: 16163333,
        img: "./assets/products/watch_tv/tv9.webp",
      },
      {
        id: 10,
        marks: "Телевизор Skyworth Q71",
        price: 6594495,
        img: "./assets/products/watch_tv/tv10.webp",
      },
    ],
  },
];

const displayProducts = (product) => {
  for (let i = 0; i < product.length; i++) {
    const items = product[i].items;

    for (let j = 0; j < items.length; j++) {
      const item = items[j];

      cards.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="">
                <h2>${item.marks}</h2>
                <p><strong>${item.price}</strong> <span>тенге</span></p>
 
                <div class="basket_add">
                    <button data-id = '${item.id}'>В корзину 
                        <img src="./assets/basket.png">
                    </button>
                    <img class="heart_point" src="./assets/heart.png" alt="">
                </div>
            </div>
            `;
    }
  }
};

displayProducts(products);


const searchProductItem = (productId) => {
    for(let i = 0; i < products.length; i++){
        const category = products[i].items;

        for(j = 0; j < category.length; j++){
            const item = category[j]

            if(productId === item.id){
              return addBasketProduct(item)
            }
          
        }
    }
    return null;
}

const addBasketProduct = (product) => {
    const basket_item = document.querySelector('#basket_item');

    const table = `
       <div class = "table_product">
          <img src = "${product.img}"/>

          <p>${product.marks}</p>
          <p>${product.price}тг</p>
          <input type = "number">
          <button>Удалить</button>
       </div>
    `;

    basket_item.innerHTML += table;
}



const addtoBasket = () =>{
    const basket_icon = document.querySelector('.basket_icon')
    const modal_basket = document.querySelector('.modal_basket')
    const close_modal = document.querySelector('#close_modal')
    basket_icon.addEventListener('click', ()=>{
        modal_basket.style.display = 'block'
    })

    close_modal.addEventListener('click', ()=>{
        modal_basket.style.display = "none"
    })
}

addtoBasket()



const addToItemBasket = () => {
    const btns = document.querySelectorAll('.basket_add button')
    const basket_count = document.querySelector('#basket_count')

    for(let i = 0; i < btns.length; i++){
        const button = btns[i]

        button.addEventListener('click',(event)=>{
            const productId = parseInt(event.target.getAttribute('data-id'))
            const product = searchProductItem(productId)

            if(product){
              console.log("Товар найден")
            }
            else{
              console.error("Ошибка")
            }
            basket_count.style.display = "block"
            console.log(basket_count.value)
        })
    }
}

addToItemBasket()

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
