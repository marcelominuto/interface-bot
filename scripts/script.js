const rootRef = document.querySelector(":root");

const colorBtnRef = document.getElementById("currentColor");
const colorsRef = document.querySelector(".colors");

const colorOptionRef = document.querySelectorAll(".color");

const userKeyRef = document.getElementById("userKey");
const removeBlurRef = document.getElementById("removeBlur");


colorBtnRef.addEventListener("click", (event) =>{
    event.preventDefault();

    let colorsDisplay = getComputedStyle(colorsRef).display;

    if(colorsDisplay === "none"){
        colorsRef.style.display = "flex"
    } else {
        colorsRef.style.display = "none"
    }


})

console.log(colorOptionRef);

colorOptionRef.forEach(color => color.addEventListener("click", () => {

    //Trocar cores

    switch(true){
        case color.classList.contains("white"):
            changeColor("white");
            break;
        case color.classList.contains("red"):
            changeColor("#ef233c");
            break;
        case color.classList.contains("blue"):
            changeColor("#219ebc");
            break;
        case color.classList.contains("green"):
            changeColor("#99d98c");
            break;
        case color.classList.contains("purple"):
            changeColor("#844cdf");
            break;
    }
    colorsRef.style.display = "none"
}))

function changeColor(color){
    rootRef.style.setProperty("--main-color", color)
    // alert("Cor: " + getComputedStyle(rootRef).getPropertyValue("--main-color"))
}

removeBlurRef.addEventListener("click", (event) =>{

    let keyFilter = getComputedStyle(userKeyRef).filter;

    if(keyFilter === "none"){
        userKeyRef.style.filter = "blur(.4rem)"
    } else {
        userKeyRef.style.filter = "none"
    }
})

