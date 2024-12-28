var tl = new gsap.timeline();
tl.from(".logo img",{
    opacity: 0,
    delay:0.5,
    duration: 1,
    y: -100,
    ease: "power3.out"
})
tl.from(".item",{
    opacity:0,
    duration: 1,
    y: -100,
    stagger: 0.2,
    ease: "power3.out"
})
tl.from(".main",{
    opacity: 0,
    duration: 1,
    x: -100,
    ease: "power3.out"
})
tl.from(".main h1",{
    opacity: 0,
    duration: 1,
    x: -100,
    ease: "power3.out"
})
tl.from(".gallary_title",{
    opacity: 0,
    duration: 1,
    x: -100,
    ease: "power3.out"
})
tl.from(".gallery-item",{
    opacity: 0,
    duration: 1,
    x: -100,
    ease: "power3.out",
    stagger: 0.2
})
tl.from(".about_left",{
    opacity: 0,
    duration: 1,
    x: -100,
    ease: "power3.out"
})
tl.from(".about_right",{
    opacity: 0,
    duration: 1,
    x: -100,
    ease: "power3.out"
})