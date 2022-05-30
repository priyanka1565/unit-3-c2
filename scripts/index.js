// Add the coffee to local storage with key "coffee"

async function coffe_data(){
    try{
        let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

    let res = await fetch(url);

    let data = await res.json();
    
    let a1 = data.menu.data
    showData(a1)
    console.log(a1);

    }
    catch(error){
        console.log(error)
    }
}
coffe_data();

function showData(a1){
 a1.forEach(function(el){
     
    let main_div = document.getElementById("menu");

    let div = document.createElement("div");

    main_div.appendChild(div);

    let img = document.createElement("img");

    img.src = el.image;

   
    let title = document.createElement("p")
    title.innerText = el.title;

    let price = document.createElement("p")
    price.innerText = "Rs"+el.price;

    let btn = document.createElement("button");

    btn.innerHTML = "Add to Bucket"

    btn.addEventListener("click",function(){
        addToBuccket(el);
    })
    
    div.append(img,title,price,btn);
 })
}

function addToBuccket(el){
   let bucket = el;
   console.log(bucket);
   let  data = localStorage.setItem("coffee",JSON.stringify(bucket));
   console.log(data);
   window.location.href = "bucket.html"
}


