// On clicking remove button the item should be removed from DOM as well as localstorage.

let cofee = JSON.parse(localStorage.getItem("coffee")) || [];
ShowCofee(cofee)
console.log(cofee);

function ShowCofee(cofee){
  let main_div = document.getElementById("bucket");
  let div = document.createElement("div");

  main_div.appendChild(div);

  let img = document.createElement("img");

  img.src = cofee.image;

  let title = document.createElement("p")
  title.innerText = cofee.title;

  let price = document.createElement("p")
  price.innerText = "Rs"+cofee.price;

  let removebtn = document.createElement("button");

  removebtn.innerHTML = "remove"

  removebtn.addEventListener("click",function(){
      remove();
  })
  
  let checkbtn = document.createElement("button");
 checkbtn.innerHTML = "checkout";

 checkbtn.addEventListener("click",function(){
     addToCart();
 })

  div.append(img,title,price,removebtn,checkbtn);
}

function remove(){

    localStorage.removeItem("coffee");
    alert("item deleted sucsefully")

}


function addToCart(){
    
   window.location.href = "checkout.html"
}