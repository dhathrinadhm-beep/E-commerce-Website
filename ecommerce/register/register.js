document.getElementById("formContainer").addEventListener("submit",(e)=>{
    e.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let password=document.getElementById("password").value;
    // console.log(name,email,password,mobile);

    let userData={
        userName:name,
        userEmail:email,
        userPassword:password,
        userMobile:mobile,
    };
    // console.log(userData);

    localStorage.setItem("userinfo",JSON.stringify(userData));
    alert("Account created successfully...!")
    window.location.href="../login/login.html"
})