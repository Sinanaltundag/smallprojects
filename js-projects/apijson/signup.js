const mail = document.querySelector("#email");
const password = document.querySelector("#password");
const sbmtBtn = document.querySelector("#submit");

window.addEventListener("load",()=>{
    mail.value = "eve.holt@reqres.in"
    password.value = "pistol"
})

sbmtBtn.addEventListener("click", e=>{
    postCustomerRegister();
})

const postCustomerRegister= async ()=>{
const bodyData = {
    email: mail.value,
    password: password.value
}
console.log(bodyData)
try {
    showLoading()
    const response= await axios ({
        url:"https://reqres.in/api/register",
        method: "post",
        data: bodyData
    })
    const {data:userData}= response;
    console.log(userData)
    if (userData.token==undefined) {
        alert("undefined hatası")
        removeLoading()
    } else {
        localStorage.setItem("baseUrl",EncryptStringAES("https://reqres.in"))
        localStorage.setItem("apiKey", EncryptStringAES(userData.token) )
        removeLoading()
        window.location.href="userList.html"
    }
} catch (error) {
    alert(error)
    removeLoading()
}
}