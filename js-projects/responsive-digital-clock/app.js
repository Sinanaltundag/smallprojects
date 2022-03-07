const dateBox = document.querySelector(".date-box")
const clockBox= document.querySelector(".time-box")

let dateNow = new Date();



setInterval(()=>{
    dateNow = new Date();
dateBox.textContent= dateNow.toLocaleDateString('tr-TR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

clockBox.textContent= dateNow.toLocaleTimeString('en-US', {hour:"numeric", minute:"numeric", second:"numeric"})

},1000)

