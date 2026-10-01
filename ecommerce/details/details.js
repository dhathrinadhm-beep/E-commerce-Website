document.addEventListener("DOMContentLoaded",()=>{
    let allproducts=JSON.parse(localStorage.getItem("allproducts"));
    let pid=localStorage.getItem("pid");
    let productDetails=document.getElementById("productDetails")
    console.log(allproducts,pid,productDetails);

     if (allproducts && pid) {
        let selectedproduct = allproducts.find((product) => {
            return product.id == pid;
        });
        if (selectedproduct) {
            let price = Math.round(selectedproduct.price * 90);
            productDetails.innerHTML = `
                <div class="product">
                    <div class="productImage">
                        <img src="${selectedproduct.images[0]}" alt="${selectedproduct.title}">
                    </div>
                    <div class="productInfo">
                        <h1>${selectedproduct.title}</h1>
                        <p><b>Brand:</b> ${selectedproduct.brand}</p>
                        <p><b>Category:</b> ${selectedproduct.category}</p>
                        <p><b>Description:</b> ${selectedproduct.description}</p>
                        <p><b>Price:</b><span>₹ ${price}</span></p>
                        <button onclick="addingToCart('${selectedproduct.id}')">Add to Cart</button>
                        <button onclick="backToHome()">Back to Home</button>
                    </div>
                </div>
                <div class="reviews">
                    <h1>Customer reviews</h1>
                    ${selectedproduct.reviews.map((review) => {
                        return `
                        <div class="review">
                                <div class="stars">${"❤️".repeat(review.rating)}
                                                  ${"🖤".repeat(5 - review.rating)}
                                </div>
                            <p>${review.comment}</p>
                            <p> By <b>${review.reviewerName}</b>
                            <span>on ${new Date(review.date).toString()}</span>
                            </p>
                        </div>`;
                    }).join("")}
                </div>
            `;
        }
    } else {

        productDetails.innerHTML = `
            <h2>Product not found...</h2>
        `;
    }

});

function addingToCart(productId){
    // console.log(product);
    let allproducts=JSON.parse(localStorage.getItem("allproducts")) || []
    let product = allproducts.find((item)=>item.id==productId);

    if(!product){
        alert("product not found")
        return;
    }
    let cart= JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product Added Sucessfully....!")
}

function backToHome(){
    window.location.href="../home/home.html"
}