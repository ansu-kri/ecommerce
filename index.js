let btn = document.getElementById("menu-btn")
let slider = document.getElementById("slider")
let closeBtn = document.getElementById("close")

btn.addEventListener("click", function () {
    slider.style.width = "100%"
    slider.style.display = "block"
})

closeBtn.addEventListener("click", function () {
    slider.style.width = "0%"
    slider.style.display = "none"
})


let signinLS = JSON.parse(localStorage.getItem("signin"));
let nav = document.getElementById("nav1");
if (signinLS != null) {
    nav.innerHTML = null;
    let username = document.createElement("a");
    username.innerText = signinLS.name;
    username.style.color = "black";
    nav.append(username);

}




///////////////////////
let imagesLink=[
    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/102897423/original/1e94566de4d632afa588363c05a752cefe218e01/design-creative-professional-shopping-website-banners.jpg",
    "https://img.freepik.com/premium-psd/fashion-sale-banner-template_23-2148102424.jpg?w=2000","https://images.template.net/108414/fashion-sale-banner-template-85svg.jpg"
]
let leftbtn=document.getElementById("leftBtn");
let rightbtn=document.getElementById("rightBtn");
let crauser=document.getElementById("crauser");
let search=document.getElementById("search");

let imageState=0;
rightbtn.addEventListener("click",function(){
    imageState++;
    if(imageState===imagesLink.length){
        imageState=0;
    }
    crauser.src=imagesLink[imageState];
})
leftbtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imagesLink-1;
    }
    crauser.src=imagesLink[imageState];
})
////////

let productData=[
    {
        brand: "Puma",
        name: "chil pill supersoft palysuit",
        price: "799",
        size: "M,L,XX,XXS",
        productID: "women3",
        catagory: "party",
        img: "https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/BAY2022/SBO-QC3_02._SS680_QL85_.jpg",
      },
      {
        brand: "Gap",
        name: "plus size womens",
        price: "2000",
        size: "X,M,L,XXS,XXL",
        productID: "women4",
        catagory: "formal",
        img: "https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/BAY2022/SBO-QC3_04._SS680_QL85_.jpg",
      },
      {
        brand: "Bady Moo",
        name: "balck bella",
        price: "1347",
        size: "X,M,L",
        productID: "women5",
        catagory: "workout",
        img: "https://m.media-amazon.com/images/I/81djib74cOL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        brand: "Pepe jeans",
        name: "plus size womens",
        price: "979",
        size: "XXS,M,L",
        productID: "women6",
        catagory: "travel",
        img: "https://m.media-amazon.com/images/I/61TfLOUZQ-L._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        brand: "Puma",
        name: "chil pill supersoft palysuit",
        price: "2000",
        size: "XXL,M,L",
        productID: "women7",
        catagory: "sports",
        img: "https://m.media-amazon.com/images/I/41TpiwGOWoS._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        brand: "Gap",
        name: "chil pill supersoft palysuit",
        price: "1347",
        size: "X,M,L,XX",
        productID: "women8",
        catagory: "Casual",
        img: "https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/BAY2022/SBO-QC3_01._SS680_QL85_.jpg",
      }
    ]

    let container=document.getElementById("container");
    let cart=document.querySelector("#cart");
    let cartLS=JSON.parse(localStorage.getItem("cart-page"))||[]

    function display(data){
        container.innerHTML=null;
    data.forEach(function(ele){
        let product=document.createElement("div");
        let img=document.createElement("img")
        img.src=ele.img;
        let name=document.createElement("h3");
        name.innerText=ele.name;
        let price=document.createElement("p");
        price.innerText="$"+ele.price;
        let brand=document.createElement("p");
        brand.innerText=ele.brand;

        let size=document.createElement("h2");
        size.innerText=ele.size;

        let catagory=document.createElement("p");
        catagory.innerText=ele.catagory;

        let cart=document.createElement("button");
        cart.setAttribute("id","cartbtn")
        cart.innerText="View";
        cart.addEventListener("click",function(){
            AddToCart(ele);
        })
        
        product.append(img,name,price,brand,size,catagory,cart);

        product.addEventListener("click",function(){
            newPage(ele);
        })

        container.append(product);

    })
}
display(productData)

function newPage(ele){
    localStorage.setItem("newPage",JSON.stringify(ele))
    window.location.href="allData.html"
}

search.addEventListener("input", function () {
    if (search.value === null || search.value === "") {
        display(productData)
    } else {
       let  productData2 = productData.filter(function (ele) {
        return ele.brand
          .toLocaleLowerCase()
          .includes(search.value.toLocaleLowerCase());
      });
      display(productData2);
    }
  });
    