let divs = document.querySelectorAll('.mydiv')
let body = document.querySelector('body')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
        let boxColor = this.getAttribute('data-color')
        body.style.backgroundColor = boxColor
        localStorage.setItem("bgColor", JSON.stringify(boxColor))
     

    })

} 




let selectedColor = JSON.parse(localStorage.getItem("bgColor"))
body.classList.add(selectedColor)


