const nameFade = () => {
    const element = document.getElementById("mainName")
    element.classList.add("animated", "fadeInDown")
}

const numberGone = () => {
    document.getElementById("numberP").style.display = "none"
}

const picGone = () => {
    document.getElementById("santaPic").style.display = "none"
    alert("I am you're computer.  I'm currently pissed at you and will be taking your image viewing privileges away now.")
    alert("Think about this next time you spill coffee on me. Good day.")
}

// const titleFun = () => {
//     document.getElementsByTagName
// }