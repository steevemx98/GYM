/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
        calculateCm = document.getElementById('calculate-cm'),
        calculateKg = document.getElementById('calculate-kg'),
        calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()

    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = 'Fill in the Height and Weight 👆 '

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000);
    } else {
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

            if(bmi < 18.5){
                calculateMessage.classList.add('color-blue')
                calculateMessage.textContent = `Your BMI is ${bmi} and you're underweight 😞 `
            }else if(bmi < 24.9){
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent = `Your BMI is ${bmi} and you're healthy 😃 `
            }else if(bmi < 29.9){
                calculateMessage.classList.add('color-orange')
                calculateMessage.textContent = `Your BMI is ${bmi} and you're overweight 😞 `
            }else{
                calculateMessage.classList.add('color-red')
                calculateMessage.textContent = `Your BMI is ${bmi} and you're obese 🥵 `
            }

            calculateCm.value = ''
            calculateKg.value = ''

            setTimeout(() => {
                calculateMessage.textContent =''
            }, 4000);
    }
}

calculateForm.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message'),
        contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must enter an email 👆 '
        
        setTimeout(() => {
           contactMessage.textContent = '' 
        }, 3000);
    }
}

contactForm.addEventListener('submit', sendEmail )