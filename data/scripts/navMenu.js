const burgerMenuBtn = document.getElementById('navMenuTogglere')
const burgerMenucontain = document.createElement('div')
const navMenu = document.getElementById('navMenu')
const canceler = document.createElement('div')
const burgerMenu = document.getElementById('burgerMenuCont')


const menuList = {
    'Home': '#Home',
    'About Me': '#AboutMe',
    'showCase': '#ShowCase',
    'Blog': '#Blog',
    'Contact': '#Contact',
}


const menuUl = document.createElement('ul');

for (const key in menuList) {

    const menuItemLi = document.createElement('li');
    const itemA = document.createElement('a')
    
    if (menuList.hasOwnProperty(key)) {

        const value = menuList[key];
        itemA.href = value;
        itemA.textContent = key;

        menuItemLi.append(itemA)
    }
    menuUl.append(menuItemLi)

}

canceler.addEventListener('click', function(){    
    smallScaleMenuToggle()
})

deviceChoose()
window.addEventListener('resize', function(){
    deviceChoose()
})


burgerMenuBtn.addEventListener('click', function(){
    smallScaleMenuToggle()
})

var isSmall;

smallScaleMenuToggle()
function deviceChoose(){
    if(window.innerWidth < 1024){
        isSmall = true;
        smallScale()
    }else{
        isSmall = false;

        if(!(burgerMenu.classList.contains = 'hidden')){
            burgerMenu.classList.add('hidden')
        }

        largeMenu()
    }
}

function largeMenu(){
    burgerMenucontain.classList.remove('smallScaleMenu')
    menuUl.classList.add('largeScaleMenu')
    navMenu.innerHTML = ''
    navMenu.append(menuUl)
}

function smallScale(){

    menuUl.classList.remove('largeScaleMenu')

    burgerMenu.innerHTML = ''

    canceler.classList.add('canceler')
    burgerMenu.append(canceler)

    burgerMenucontain.classList.add('smallScaleMenu')
    burgerMenucontain.classList.add('shadow-md')
    burgerMenucontain.append(menuUl)
    burgerMenu.append(burgerMenucontain)
}

function smallScaleMenuToggle(){
    burgerMenu.classList.toggle('hidden')
    
}