const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Rhude",
    price: 20000,
    colors: [
      {
        code: "white",
        img: "./img/c1.jpg",
      },
      {
        code: "white",
        img: "./img/c1.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Balenciaga",
    price: 25000,
    colors: [
      {
        code: "white",
        img: "./img/c4.jpg",
      },
      {
        code: "white",
        img: "./img/c4.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Gucci",
    price: 20000,
    colors: [
      {
        code: "white",
        img: "./img/c3.jpg",
      },
      {
        code: "white",
        img: "./img/c3.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "NakedWolfe",
    price: 15000,
    colors: [
      {
        code: "black",
        img: "./img/c6.jpg",
      },
      {
        code: "white",
        img: "./img/c6.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Adidas",
    price: 23000,
    colors: [
      {
        code: "white",
        img: "./img/c8.jpg",
      },
      {
        code: "white",
        img: "./img/c8.jpg",
      },
    ],
  },

 
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});



           
var h = document.getElementsByClassName("wears");
isblue = false;
iswhite = false;

setInterval(function(){
    if(isblue) {
        h.style.color = "purple";
    } else {
        h.style.color = "blue";
    }
    isblue = !isblue;
    iswhite = !iswhite;
}, 500);
