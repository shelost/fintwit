let pos = 0

let header = document.getElementsByClassName('header')[0]

let expos = document.getElementsByClassName('expo')
let pfps = document.getElementsByClassName('pfp')

let p = document.getElementsByClassName('right')


let loop = () => {

    if (window.innerWidth < 900){
        for (let i=0; i<p.length; i++){

            let index = i*2+1

            let expo = p[i].childNodes[1]
            let pfp = p[i].childNodes[3]

            expo.style.transform = `translateY(${pfp.getBoundingClientRect().height}px)`
            pfp.style.transform = `translateY(-${expo.getBoundingClientRect().height}px) `

        }

        document.getElementById('bars').onclick = () => {
            document.getElementsByClassName('header')[0].classList.toggle('active')
        }

        for (let i=0; i< document.getElementsByClassName('navbtn').length; i++){
            let btn = document.getElementsByClassName('navbtn')[i]
            btn.onclick = () => {
                document.getElementsByClassName('header')[0].classList.remove('active')
                console.log('yo')
            }
        }

    }else{
        for (let i=0; i<2; i++){
            let index = i*2+1

            let expo = expos[index]
            let pfp = pfps[index]

            expo.style.transform = ``
            pfp.style.transform = ``
        }

        if (window.innerWidth > 900){
            window.onscroll = () => {

                if (window.scrollY > window.innerHeight){
                    if (document.documentElement.scrollTop > pos){
                        console.log('scrolling down')
                        header.classList.remove('active')
                    }else{
                        console.log('scrolling up')
                        header.classList.add('active')
                    }
                }

                pos = document.documentElement.scrollTop
            }
        }

    }

    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)

