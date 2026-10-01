document.getElementById("formContainer").addEventListener("submit",(e)=>{
    e.preventDefault();

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let userData=JSON.parse(localStorage.getItem("userinfo"));

    if(userData.userEmail==email && userData.userPassword==password){
        window.location.href="../home/home.html"
    }else{
        alert("Invalid Credentials....");
        window.location.reload();
    }
})