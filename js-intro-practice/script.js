const disappear = (element) => {
    console.log("element was clicked and the shape deleted was " + element.className)
    // console.log(element.style)

    document.getElementById(element.id).style.display= "none"
}