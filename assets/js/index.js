/* make cursor design */
let mouseX = 0, mouseY = 0, posX = 0, posY = 0, alpha = 1;
const cursor = document.querySelector(".cursor");
const targetSection = document.querySelector(".target-section");

addEventListener("mousemove", (event) => {
  const rect = targetSection.getBoundingClientRect();
  if (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  ) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    alpha = 5;
  } else {
    alpha = 0;
  }
});

let prev = 0;
requestAnimationFrame(function render(now) {
  requestAnimationFrame(render);
  const factor = (now - prev) / 16;
  prev = now;
  posX += factor * 0.125 * (mouseX - posX);
  posY += factor * 0.125 * (mouseY - posY);
  alpha *= Math.pow(0.95, factor);
  cursor.style.transform = `translate(${posX}px, ${posY}px)`;
  cursor.style.opacity = Math.min(1, alpha).toFixed(2);
});

//slick slider js
$(document).ready(function(){

    $('.slider_wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

      $('.portfolio_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
  });
