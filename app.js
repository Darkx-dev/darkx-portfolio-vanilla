const dropdown = document.querySelector('#nav-routes')


const handleDropdown = () => {
  console.log(dropdown)
  if (dropdown.classList.contains('max-sm:translate-x-56')) {
    dropdown.classList.remove('max-sm:translate-x-56')
    gsap.to(dropdown, {
      y: '-150%',
      duration: 0.2,
      ease: 'power3.out'
    })
  }
  else {
    dropdown.classList.add('max-sm:translate-x-56')
    gsap.to(dropdown, {
      y: '0',
      duration: 0.2,
      ease: 'power3.out'
    })
  }

}

Shery.textAnimate('#name span', {
  style: 1,
  duration: 1,
  delay: 0.3
})
const tl = gsap.timeline()

tl.from('.nav-belt, #nav-routes li', {
  y: "-120%",
  stagger: 0.1,
  opacity: 0.2,
  ease: "ease-in-out",
})

tl.from('#home > div h1 , #home > div h4', {
  x: -100,
  stagger: 0.3,
  opacity: 0,
  ease: "ease-in-out",
})

tl.from('#home > div > div > button,#home > div > div > a', {
  y: -50,
  opacity: 0,
  // scale: 0.5,
  duration: 0.2,
  stagger: 0.2
})

tl.from('#home > div.rounded-full', {
  rotation: 180,
  x: "+=120%",
  ease: 'ease',
})

tl.from('#main > section.text-white.flex.flex-col.items-center h1', {
  y: 150,
  opacity: 0.5,
  duration: 0.5,
  ease: 'ease',
  scrollTrigger: {
    trigger: '#main > section.text-white.flex.flex-col.items-center h1',
    start: 'top 90%',
    end: 'bottom center',
    scrub: true
  }
})

tl.from('#main > section.text-white.flex.flex-col.items-center p', {
  y: -50,
  opacity: 0,
  duration: 0.5,
  ease: 'ease',
  scrollTrigger: {
    trigger: '#main > section.text-white.flex.flex-col.items-center h1',
    start: 'top 90%',
    end: 'bottom center',
    scrub: true
  }
})

tl.from('#about > ul li', {
  y: 500,
  stagger: 1,
  opacity: 0,
  duration: 0.5,
  ease: 'ease',
  scrollTrigger: {
    trigger: '#main > section.text-white.flex.flex-col.items-center h1',
    start: 'center 50%',
    end: 'bottom 20%',
    scrub: true,
  }
})

tl.from('#what-i-do h1', {
  y: 250,
  opacity: 0,
  duration: 0.5,
  ease: 'ease',
  scrollTrigger: {
    trigger: '#what-i-do',
    start: 'top 90%',
    end: 'bottom center',
    scrub: true
  }
})

tl.from('#what-i-do ul li', {
  y: 250,
  opacity: 0,
  stagger: 1,
  duration: 1,
  ease: 'ease',
  scrollTrigger: {
    trigger: '#what-i-do',
    start: 'center 80%',
    end: 'center 50%',
    scrub: true,
  }
})

tl.from('#skills > h1', {
  y: 1000,
  opacity: 0,
  duration: 0.5,
  ease: 'ease',
  scrollTrigger: {
    trigger: '#what-i-do',
    start: 'top 90%',
    end: 'bottom center',
    scrub: true
  }
})

tl.from('#skills > ul li', {
  y: 200,
  stagger: 0.5,
  opacity: 0,
  duration: 0.5,
  ease: 'ease',
  scrollTrigger: {
    trigger: '#skills > ul li',
    start: 'top 90%',
    end: 'center 70%',
    scrub: true,
  }
})