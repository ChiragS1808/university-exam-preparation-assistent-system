let loginBtn =
document.getElementById("loginBtn");

loginBtn.addEventListener("click",function(){

    let userName =
    document.getElementById("userName").value;

    sessionStorage.setItem(
        "userName",
        userName
    );

    alert("Login Successful");

});