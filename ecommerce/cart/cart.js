document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
})

function displayCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let cartContent = document.getElementById("cartContent");
    let totalPrice = document.getElementById("totalPrice");
    // console.log(cart,cartContent,totalPrice)

    let totalBill=0;
    cartContent.innerHTML=""

    if(cart.length==0){
        cartContent.innerHTML=`<p class="cartProducts">Your Cart is empty.  Start shopping........!😞😞</p>`
    }else{
        cart.map((val,index)=>{
            totalBill += val.price*90;
            let newElement=document.createElement("div");
            newElement.setAttribute("class","prod-info");
            newElement.innerHTML=`
            <main>
                <div>
                    <img src="${val.thumbnail}"/>
                </div>
                    <div class="about">
                        <h2>${val.title}</h2>
                        <p>Availability:${val.availabilityStatus}</p>
                        <p>Category:${val.category}</p>
                        <p>Return Policy:${val.returnPolicy}</p>
                        <p>Stock:${val.stock}</p>
                        <p>Warrenty Information:${val.warrantyInformation}</p>
                        <p>price:$ ${val.price}</p>
                    </div>
                <div class="btn">
                <button onClick="removeFromCart(${index})">Remove</button>
            </div>
            </main> 
            `;
            cartContent.append(newElement);
            totalPrice.innerHTML=`
            <h2>Your Total Bill is ${totalBill.toFixed(2)}</h2>
            `
        })
    }
}

function removeFromCart(index){
    // console.log(index);
    let cart=JSON.parse(localStorage.getItem("cart"));
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    window.location.reload();
}


