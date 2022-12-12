const userKeyRef = document.getElementById("userKey");
const removeBlurRef = document.getElementById("removeBlur");

removeBlurRef.addEventListener("click", (event) =>{

    let keyFilter = getComputedStyle(userKeyRef).filter;

    if(keyFilter === "none"){
        userKeyRef.style.filter = "blur(.4rem)"
    } else {
        userKeyRef.style.filter = "none"
    }
})