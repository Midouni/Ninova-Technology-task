let myMouse = document.querySelector('.mouse');


// function for detect touch device or desktop
const isTouchDevice = () => {
    try {
        document.createEvent('TouchEvent');
        return true;
    } catch (e) {
        return false;
    }
}

const move = (e) => {
    let x, y;
    try {
        x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (error) {
    }
    myMouse.style.left = x + "px"
    myMouse.style.top = y + "px"
}


document.addEventListener("mousemove", (e) => {
    move(e);
})


// drom menu
// let menu = document.querySelector('.menu')

// const changeMenuPosition = () => {
//     if (window.scrollY > 70) {
//         menu.style.position = 'fixed';
//         menu.style.top = 0;
//         menu.style.left = 0;
//     } else {
//         menu.style.position = 'static';
//     }
// }

// document.addEventListener('scroll', changeMenuPosition)

