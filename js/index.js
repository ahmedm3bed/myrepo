$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    center: true,
    nav: true,
    loop: true,
    responsive: {
      600: {
        items: 4,
      },
    },
  });
});

let divsidelandings = document.querySelectorAll(".divsidelanding");
let counter = 0;
function rotateDivs() {
  counter = (counter + 1) % divsidelandings.length;

  for (let i = 0; i < divsidelandings.length; i++) {
    const div = divsidelandings[i];
    div.style.transitionDuration = i === counter ? "0.5s" : "";
    div.classList.toggle("displayOpacity", i === counter);
    div.classList.toggle("hideOpacity", i !== counter);
  }
}
setInterval(rotateDivs, 2300);

let contactusicon = document.querySelector(".contactusicons button");
let opened = 0;
contactusicon.onclick = function () {
  document.querySelector(".subcontact").classList.toggle("translate0");
};

//  var viewer = OpenSeadragon({
//   id: "openseadragon-viewer",
//   prefixUrl:location.origin+location.pathname+(location.pathname.endsWith("/")?"":"/")+ "image/openseadragon/", // Path to OpenSeadragon images
//   tileSources: {
//       type: 'image',
//       url: location.origin+location.pathname+(location.pathname.endsWith("/")?"":"/")+"image/sertficat.jpg", // URL to your JPEG image
//       width: 500, // Width of the image
//       height: 300 // Height of the image
//   },
//   // showNavigator: true // Show the navigator control
// });

const imgCerts = document.querySelectorAll(".img-cert");
const imgCert1 = imgCerts[0];
const imgCert2 = imgCerts[1];
imgCert1.onclick = function (e) {
  // if(e.target.classList.contains("zoom"))
  e.target.parentElement.classList.toggle("zoom");
  if (e.target.parentElement.classList.contains("zoom")) {
    if (window.matchMedia("(min-width:992px)").matches) {
    
      
      e.target.parentElement.classList.remove("justify-content-lg-end");
      e.target.parentElement.classList.add("justify-content-lg-center");
    }
  
  } else {
    if (window.matchMedia("(min-width:992px)").matches) {


      e.target.parentElement.classList.add("justify-content-lg-end");
      e.target.parentElement.classList.remove("justify-content-lg-center");
    }
  }
};
imgCert2.onclick = function (e) {
  // if(e.target.classList.contains("zoom"))
  e.target.parentElement.classList.toggle("zoom");
  if (e.target.parentElement.classList.contains("zoom")) {
    if (window.matchMedia("(min-width:992px)").matches) {
      
      e.target.parentElement.classList.remove("justify-content-lg-start");
      e.target.parentElement.classList.add("justify-content-lg-center");
    }
  
  } else {
    if (window.matchMedia("(min-width:992px)").matches) {

      e.target.parentElement.classList.add("justify-content-lg-start");
      e.target.parentElement.classList.remove("justify-content-lg-center");
    }
  }
};
