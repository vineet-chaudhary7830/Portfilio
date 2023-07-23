//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections 

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a'); 

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            //active navbar links
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    })
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    //remove toggle icon and navbar when click navbar links

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer section
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY >=document.scrollingElement.scrollHeight);
}

//form data to mail
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzooVSfJ67lgSTI4uYcX4PPIgJTzOCGTUmts9anyldu1RIO5hC4_fKnDPqIATCdu5oJng/exec'
//   const form = document.forms['submit-to-google-sheet']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message))
//   })