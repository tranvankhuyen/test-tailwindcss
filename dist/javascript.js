let subnav = document.querySelectorAll(".sub-nav")
let dropDownBox = document.querySelectorAll(".drop-down-box")
for(let i = 0; i < subnav.length; i++) {
    // dropDownBox[i].style.transition = '0.5s'
    subnav[i].onmouseover = () => {
        dropDownBox[i].style.display = 'block';
    }
    subnav[i].onmouseout = () => {
        dropDownBox[i].style.display = 'none';
    }
}

let btn = document.querySelector('.btn')

btn.onclick = () => {
    document.documentElement.classList.toggle('dark')
}