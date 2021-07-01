let pos = 0

let header = document.getElementsByClassName('header')[0]

window.onscroll = () => {
    if (document.documentElement.scrollTop > pos){
        console.log('scrolling down')
        header.classList.remove('active')
    }else{
        console.log('scrolling up')
        header.classList.add('active')
    }
    pos = document.documentElement.scrollTop
}