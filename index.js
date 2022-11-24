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
