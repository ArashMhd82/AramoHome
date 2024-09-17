const darkCont = document.getElementById('darkModeButtonContainer');
const darkModeBtn = document.createElement('button');
const body = document.querySelector('body')
const lightIcon = document.createElement('span');
const darkIcon = document.createElement('span');

lightIcon.innerHTML = ''
darkIcon.innerHTML = ''
darkModeBtn.innerHTML = ''

darkModeBtn.classList.add('btnDarkMode')
darkIcon.classList.add('material-symbols-outlined')
lightIcon.classList.add('material-symbols-outlined')

if (body.classList.contains('darkMode')){
    darkIcon.classList.add('hidden')
}else{
    lightIcon.classList.add('hidden')
}

lightIcon.innerHTML = 'light_mode'
darkIcon.innerHTML = 'dark_Mode'

darkModeBtn.append(lightIcon)
darkModeBtn.append(darkIcon)

darkCont.append(darkModeBtn)

darkModeBtn.addEventListener('click', function(){
    modeSwitch()
})

function modeSwitch(){
    body.classList.toggle('darkMode')
    lightIcon.classList.toggle('hidden')
    darkIcon.classList.toggle('hidden')
}
