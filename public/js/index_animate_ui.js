 



// Observe logic
const obsrv = new IntersectionObserver((ent)=>{
    ent.forEach((ent)=>{
        if (ent.isIntersecting) ent.target.classList.add("animate");
    });
});

const target = document.querySelectorAll("[invisible]");
target.forEach((target)=> obsrv.observe(target));