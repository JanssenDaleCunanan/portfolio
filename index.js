




window.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById("nav");
  var navbarOffset = navbar.offsetTop;

  function updateNavbarOffset() {
    navbarOffset = navbar.offsetTop;
  }

  function checkNavbarPosition() {
    if (window.pageYOffset >= navbarOffset) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  window.addEventListener('scroll', checkNavbarPosition);
  window.addEventListener('resize', updateNavbarOffset);
});





// **********************************************************************

document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('.smooth-scroll');

  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; // Set the duration in milliseconds (e.g., 10000ms = 10 seconds)
        const startTime = performance.now();

        function scrollAnimation(currentTime) {
          const elapsedTime = currentTime - startTime;
          const scrollStep = Math.round(distance * (elapsedTime / duration));
          const scrollY = startPosition + scrollStep;

          window.scrollTo(0, scrollY);

          if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
          }
        }

        requestAnimationFrame(scrollAnimation);
      }
    });
  });
});









// ***********ROTATING CIRCLE TEXT************************

const text = document.querySelector('#circular-text h2');


 text.innerHTML = text.innerText.split("").map(
  (char,i) =>
  `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
 ).join("")


// ***************EXPERIMENT 2******************


 // const text2 = document.querySelector('#circular-text2 h2');


 // text2.innerHTML = text2.innerText.split("").map(
 //  (char,i) =>
 //  `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
 // ).join("")




const text2 = document.querySelector('#circular-text2 h2');


text2.innerHTML = text2.innerText.split("").map(
(char,i) =>
`<span style="transform:rotate(${i * 6.6}deg)">${char}</span>`
).join("")


const text3 = document.querySelector('#circular-text3 h2');


text3.innerHTML = text3.innerText.split("").map(
(char,i) =>
`<span style="transform:rotate(${i * 7.4}deg)">${char}</span>`
).join("")



const text4 = document.querySelector('#circular-text4 h2');


text4.innerHTML = text4.innerText.split("").map(
(char,i) =>
`<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
).join("")


const text5 = document.querySelector('#circular-text5 h2');


text5.innerHTML = text5.innerText.split("").map(
(char,i) =>
`<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
).join("")









//  // Get the modal
//  var modal = document.getElementById("myModal");

//  // Get the button that opens the modal
//  var btn = document.getElementById("myBtn");

//  // Get the <span> element that closes the modal
//  var span = document.getElementsByClassName("close")[0];

//  // When the user clicks on the button, open the modal
//  btn.onclick = function() {
//    modal.style.display = "block";
//  }

//  // When the user clicks on <span> (x), close the modal
//  span.onclick = function() {
//    modal.style.display = "none";
//  }

//  // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//    if (event.target == modal) {
//      modal.style.display = "none";
//    }
//  }

// // ONLOAD

//  function refresh() {
//   window.replace("./capstone.html")
//  }


