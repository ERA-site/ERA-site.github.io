const toursBlock = document.querySelector(".tours");


const setActiveTour = () =>{
    
    const tours = document.querySelectorAll(".tour");
    if (window.innerWidth > 900){
        setImage(tours[3],getSrc(tours[3]))
    }
    tours.forEach(tour =>{
        tour.addEventListener("mouseover",(e)=>setImage(tour,getSrc(tour)))
    })
}

const setImage = (tour,src)=>{
    tour.parentNode.style.background = src;
    tour.parentNode.style.backgroundSize = "cover";
}
const getSrc = (tour) => {
    return window.getComputedStyle( tour.querySelector(".tour--preview"),null).getPropertyValue('background'); 
}