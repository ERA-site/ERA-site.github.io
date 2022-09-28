const particle_layers = document.querySelectorAll(".header--particles_layer");

const moveParticles = (particle,speed) =>{
  if (speed == 3 )
    particle.style.top = particle.getBoundingClientRect().y / 7  + "px";
  else
    particle.style.top = particle.getBoundingClientRect().y / 6 * speed  +"px";
}
/**
 * Движение всех слоев с разными скоростями
 */
window.addEventListener("scroll", function() {
  [...particle_layers].forEach((layer,index) =>{
    const particles = layer.querySelectorAll(".header--particle");
    [...particles].forEach((particle) =>{
      moveParticles(particle, index%3+1);
    })
  }
  );
});



