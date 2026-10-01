let productsAvailable=[];

function fetchingData(){
    fetch("https://dummyjson.com/products").then((result)=>{
        // console.log(result);
        return result.json()
    }).then((val)=>{
        // console.log(val.products);
        productsAvailable=val.products
        localStorage.setItem("allproducts",JSON.stringify(productsAvailable))
        displayProduct(productsAvailable)
    })
}

fetchingData()

function displayProduct(prod){
    let output=""
    prod.map((val,index)=>{
        output +=
        `<div class="product-card">
                <img class="product-image"src="${val.thumbnail}"alt="">
                <h2 class="product-title">${val.title}</h2>
                <div class="product-info">

                    <div class="left-content">
                        <h5 class="rating">Rating: ${val.rating}</h5>
                        <h5 class="stock">In Stock: ${val.stock}</h5>
                    </div>
                
                    <div class="right-content">
                        <h5 class="price">Price: $${val.price}</h5>
                        <button onclick="details(${val.id})" class="details-btn">Details</button>
                    </div>
                </div>
            </div>`;
    })
    document.getElementById("productContainer").innerHTML=output
}


const searchProduct = document.getElementById('searchProduct')
searchProduct.addEventListener("input", (e)=>{
    let searchTerm = e.target.value.toLowerCase();
    let filteredProduct = productsAvailable.filter((v)=>{
        return v.title.toLowerCase().includes(searchTerm) || v.category.toLowerCase().includes(searchTerm)
    })
    displayProduct(filteredProduct)
})

function details(productId){
    localStorage.setItem("pid",productId);
    window.location.href="../details/details.html"
}























































