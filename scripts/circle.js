/**
 * Вращение круга для блока инфо
 */
let circle = document.querySelector(".info--circle-center");
let circleIn = document.querySelector(".info--circle-inside");
let circleOut = document.querySelector(".info--circle-outside");
    
(()=>{
    const throttle = (type, name, obj=window) =>{
        let running = false;
        const func = () => {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();

/**
 * Плавное появление блока
 * @param {*} entry = Object
 */
const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.style.opacity = 1;
      }
    });
  }

(()=>{
    let options = {
        threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let circleAnim = document.querySelector('.info--container');
      
    observer.observe(circleAnim);
})();

window.addEventListener("optimizedScroll", function() {
    circle.style.transform = "rotate(-"+window.pageYOffset+"deg)";
    circleIn.style.transform = "rotate("+window.pageYOffset+"deg)";
    // circleOut.style.transform = "roxtate(-"+Math.floor(window.pageYOffset/2)+"deg)";
});

