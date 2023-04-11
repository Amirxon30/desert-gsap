const tl = gsap.timeline({defaults: {ease: 'power2.out'}});

tl.to(".slider", {y: "-100%", duration: 1.3 });
tl.to(".wrapper", {y: "0%", duration: 1.5 }, "-=1");
tl.fromTo(".navbar", {opacity: 0}, {opacity :1, duration: 1});