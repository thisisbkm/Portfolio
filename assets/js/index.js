const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}
 
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click', linkAction));


const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header');

var skillsOpen = 'skills_content skills_open', 
    skillsClose = 'skills_content skills_close';

function toggleSkills(){
    let itemClass = this.parentNode;
    if(itemClass.className === skillsOpen){
        itemClass.className = skillsClose;
    }else{
        // console.log(skillsContent);
        Array.from(skillsContent).forEach((val)=>{
            val.className = skillsClose;
        })
        itemClass.className = skillsOpen;
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills);
})

function scrollTop(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY>=560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);


// theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = ()=> document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';



if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add':'remove'](iconTheme);
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})