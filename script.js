const btns = document.querySelectorAll(".button");
console.log(btns);

btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        console.log(e)
    });
});