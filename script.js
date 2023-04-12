// ADD THE NAVIGATION MENU TO ALL PAGES

document.getElementById('navbar').innerHTML =
      '<ul>' +
      '<li><a href="index.html" class="nav-link" data-text="Home">Home</a></li>' +
      '<li><span class="spacer red">.</span></li>' +
      '<li><a href="interactivemedia.html" class="nav-link" data-text="Interactive Media">Interactive Media</a></li>' +
      '<li><span class="spacer red">.</span></li>' +
      '<li><a href="development.html" class="nav-link" data-text="Development">Development</a></li>' +
      '<li><span class="spacer red">.</span></li>' +
      '<li><a href="design.html" class="nav-link" data-text="Design">Design</a></li>' +
      '<li><span class="spacer red">.</span></li>' +
      '<li><a href="communication.html" class="nav-link" data-text="Communication">Communication</a></li>' +
      '<li><span class="spacer red">.</span></li>' +
      '<li><a href="research.html" class="nav-link" data-text="Research">Research</a></li>' +
      '<li><span class="spacer red">.</span></li>' +
      '<li><a href="professionalidentity.html" class="nav-link" data-text="Professional Identity">Professional Identity</a></li>' +
      '</ul>'

// SCROLL TO TOP BUTTON

myButton = document.getElementById("scrollToTopButton");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function scrollToTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener('scroll', scrollFunction);
myButton.addEventListener("click", scrollToTopFunction);

// // STICKY NAVIGATION BAR

const navBar = document.getElementById("navbar");
const sticky = navBar.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

window.addEventListener('scroll', stickyNavBar);

// SHOWING THE CURRENT MONTH IN THE HEADER ILLUSTRATION

// Create a variable for the current date
let d = new Date();

// Check which month it is
let month = d.getMonth();
let day = d.getDate();
console.log(day);

// Create variables for all months in the calendar
const janCal = document.getElementById("jan");
const febCal = document.getElementById("feb");
const marCal = document.getElementById("mar");
const aprCal = document.getElementById("apr");
const mayCal = document.getElementById("may");
const junCal = document.getElementById("jun");
const julCal = document.getElementById("jul");
const augCal = document.getElementById("aug");
const sepCal = document.getElementById("sep");
const octCal = document.getElementById("oct");
const novCal = document.getElementById("nov");
const decCal = document.getElementById("dec");

// Create a function to show or hide the 31st
function hide31st(month) {
  const d31 = [0, 2, 4, 6, 7, 9, 11];
  const d30 = [1, 3, 5, 8, 10];
  if (!d31.includes(month)) {
    console.log('HIDE 31st');
    document.getElementById('_31st').style.opacity = "0";
  } else {
    console.log('SHOW 31st');
  }
}

// Create a function to show the current month on the calendar and hide the others
function showThisMonth(showSetMonth) {
  month = showSetMonth;
  if (month == 0) {
    janCal.style.opacity = "1";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 1) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "1";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 2) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "1";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 3) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "1";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 4) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "1";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 5) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "1";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 6) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "1";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 7) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "1";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 8) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "1";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 9) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "1";
    novCal.style.opacity = "0";
    decCal.style.opacity = "0";
  
  } else if (month == 10) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "1";
    decCal.style.opacity = "0";
  
  } else if (month == 11) {
    janCal.style.opacity = "0";
    febCal.style.opacity = "0";
    marCal.style.opacity = "0";
    aprCal.style.opacity = "0";
    mayCal.style.opacity = "0";
    junCal.style.opacity = "0";
    julCal.style.opacity = "0";
    augCal.style.opacity = "0";
    sepCal.style.opacity = "0";
    octCal.style.opacity = "0";
    novCal.style.opacity = "0";
    decCal.style.opacity = "1";
  }
  };

// Now show the current month on the calendar and hide the 31st if neccesary
showThisMonth(month);
hide31st(month);

// Put the cirle on the correct day

var dateSelector = document.getElementById("dateselector");

if (day == 1) {
  dateSelector.setAttribute('d', `M718.6,170.3c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 2) {
  dateSelector.setAttribute('d', `M779.8,170.3c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 3) {
  dateSelector.setAttribute('d',`M841.7,170.6c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 4) {
  dateSelector.setAttribute('d', `M904.3,171.6c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 5) {
  dateSelector.setAttribute('d', `M964.9,170.6c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 6) {
  dateSelector.setAttribute('d', `M718.2,231c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 7) {
  dateSelector.setAttribute('d', `M778.9,229.4c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 8) {
  dateSelector.setAttribute('d', `M841.7,229.4c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 9) {
  dateSelector.setAttribute('d', `M902.6,230.2c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 10) {
  dateSelector.setAttribute('d', `M965.4,231c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 11) {
  dateSelector.setAttribute('d', `M718.2,288.4c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2"`)
} else if (day == 12) {
  dateSelector.setAttribute('d', `M779.8,288.4c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 13) {
  dateSelector.setAttribute('d', `M840.7,288.4c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 14) {
  dateSelector.setAttribute('d', `M903.2,289.5c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 15) {
  dateSelector.setAttribute('d', `M966.2,288.4c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 16) {
  dateSelector.setAttribute('d', `M718.2,346.4c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 17) {
  dateSelector.setAttribute('d', `M779.8,345.6c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 18) {
  dateSelector.setAttribute('d', `M841.7,347.2c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 19) {
  dateSelector.setAttribute('d', `M904.3,347.9c9.1,7.1,7.8,20.2,0.3,26.5c-9.1,7.7-20,4-26-3.6c-6.5-8.3-6.7-32,11.1-31.3
  c7.2,0.3,14.3,5.2,14.3,5.2`)
} else if (day == 20) {
  dateSelector.setAttribute('d', `M967.2,347.3c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5
  c-7.4-8.4-7.5-32.7,12.8-32c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 21) {
  dateSelector.setAttribute('d', `M720,406.2c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5c-7.4-8.4-7.5-32.7,12.8-32
  c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 22) {
  dateSelector.setAttribute('d', `M780.7,406.9c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5
  c-7.4-8.4-7.5-32.7,12.8-32c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 23) {
  dateSelector.setAttribute('d', `M843.4,406.2c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5
  c-7.4-8.4-7.5-32.7,12.8-32c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 24) {
  dateSelector.setAttribute('d', `M904.3,407.2c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5
  c-7.4-8.4-7.5-32.7,12.8-32c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 25) {
  dateSelector.setAttribute('d', `M967.2,406.9c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5
  c-7.4-8.4-7.5-32.7,12.8-32c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 26) {
  dateSelector.setAttribute('d', `M720,462.5c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5c-7.4-8.4-7.5-32.7,12.8-32
  c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 27) {
  dateSelector.setAttribute('d', `M780.7,462.6c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5
  c-7.4-8.4-7.5-32.7,12.8-32c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 28) {
  dateSelector.setAttribute('d', `M843.5,462.6c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5
  c-7.4-8.4-7.5-32.7,12.8-32c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 29) {
  dateSelector.setAttribute('d', `M905,462.5c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5c-7.4-8.4-7.5-32.7,12.8-32
  c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 30) {
  dateSelector.setAttribute('d', `M967.2,462.5c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5
  c-7.4-8.4-7.5-32.7,12.8-32c8.2,0.3,16.4,5.2,16.4,5.2`)
} else if (day == 31) {
  dateSelector.setAttribute('d', `M720.8,520.9c10.4,7.2,8.8,20.7,0.2,27.1c-10.5,8-23,4.2-29.8-3.5
  c-7.4-8.4-7.5-32.7,12.8-32c8.2,0.3,16.4,5.2,16.4,5.2`)
} 

//

// GSAP ANIMATION

// Register the GSAP customease plugin
gsap.registerPlugin(CustomEase);

// Create a timeline for the girl dropping onto the page
const meTl = gsap.timeline({onComplete: addMouseEvent, delay: 1});

// First make the girl group in the svg visible
gsap.set("#girl", { opacity: 1 });

// Now setup all animations in the timeline
meTl

  // Let the girl drop on to the page with a bounce, 
  // From 150% above its original position in 1 second, starting at 0.5 seconds into the timeline
  .from(
    "#girl",
    {
      duration: 1,
      yPercent: -150,
      ease: "elastic.out(0.5, 0.5)"
    },
    0.5
  )
  
  // Let some layers of the illustration bounce a little different
  // From 100% above its original position in 0.9 seconds starting at 0.6 seconds into the timeline
  .from(
    "#whole-face , #hair-back, #hair-bangs, #hair-bangs2",
    {
      duration: 0.9,
      yPercent: -100,
      ease: "elastic.out(0.5, 0.5)"
    },
    0.6
  )

  // Do the same for the eyebrows
  // From 300% above its original position in 1 second starting at 0.7 seconds into the timeline
  .from(
    "#brow-right , #brow-left",
    {
      duration: 1,
      yPercent: 300,
      ease: "elastic.out(0.5, 0.2)"
    },
    0.7
  )

  // Now make sure the eyes are open and ready for blinking
  .to(
    "#right-eye-open , #left-eye-open",
    {
      duration: 0.01,
      opacity: 1
    },
    0.85
  )
  .to(
    "#right-eye-closed , #left-eye-closed",
    {
      duration: 0.01,
      opacity: 0
    },
    0.85
  );


// Create a different timeline for the eyes blinking continiously
const blink = gsap.timeline({
  repeat: -1,
  repeatDelay: 5,
  paused: true
});

// Now setup all animations in the blinking timeline
blink

  // Hide the open eyes in 0.01 second at 0 seconds into the animation
  .to(
    "#right-eye-open, #left-eye-open",
    {
      duration: 0.01,
      opacity: 0
    },
    0
  )

  // Show the closed eyes in 0.01 second at 0 seconds into the animation
  .to(
    "#right-eye-closed, #left-eye-closed",
    {
      duration: 0.01,
      opacity: 1
    },
    0
  )

  // Then show the open eyes in 0.01 second at 0.15 seconds into the animation
  .to(
    "#right-eye-open, #left-eye-open",
    {
      duration: 0.01,
      opacity: 1
    },
    0.15
  )

  // And hide the closed eyes in 0.01 second at 0.15 seconds into the animation
  .to(
    "#right-eye-closed, #left-eye-closed",
    {
      duration: 0.01,
      opacity: 0
    },
    0.15
  );


// ANIMATION RESPONDING TO MOUSE MOVEMENT

// Create variables for the vertical and horizontal position, and height and width
let xPosition;
let yPosition;

let height;
let width;

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

function updateScreenCoords(event) {
  xPosition = event.clientX;
  yPosition = event.clientY;
}

let storedXPosition = 0;
let storedYPosition = 0;

// gsap can use queryselector in the quick setter but this is better for performance as it touches the DOM less
const dom = {
  face: document.querySelector("#whole-face"),
  eye: document.querySelectorAll(".botheyes"),
  innerFace: document.querySelector("#inner-face"),
  hairBack: document.querySelector("#hair-back"),
  hairFront: document.querySelector("#hair-front"),
  eyebrowLeft: document.querySelector("#brow-left"),
  eyebrowRight: document.querySelector("#brow-right"),
};

function animateFace() {
  if (!xPosition) return;
  // important, only recalculating if the value changes
  if (storedXPosition === xPosition && storedYPosition === yPosition) return;

  // range from -50 to 50
  x = percentage(xPosition, width) - 50;
  y = percentage(yPosition, height) - 50;

  // range from -20 to 80
  yHigh = percentage(yPosition, height) - 20;
  // range from -80 to 20
  yLow = percentage(yPosition, height) - 80;

  gsap.to(dom.face, {
    yPercent: yLow / 10,
    xPercent: x / 8
  });
  gsap.to(dom.eye, {
    yPercent: yHigh / 4,
    xPercent: x / 8
  });
  gsap.to(dom.innerFace, {
    yPercent: y / 6,
    xPercent: x / 8
  });
  gsap.to(dom.hairFront, {
    yPercent: y / 15,
    xPercent: x / 15
  });
  gsap.to(dom.hairBack, {
    yPercent: (yLow / 20) * -1,
    xPercent: (x / 35) * -1
  });
  gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
    yPercent: y * 1.5
  });

  storedXPosition = xPosition;
  storedYPosition = yPosition;
}

// function being called at the end of main timeline
function addMouseEvent() {
  const safeToAnimate = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches;

  if (safeToAnimate) {
    window.addEventListener("mousemove", updateScreenCoords);

    // gsap's RAF, falls back to set timeout
    gsap.ticker.add(animateFace);

    blink.play();
    //wink.play();
  }
}

// update if browser resizes
function updateWindowSize() {
  height = window.innerHeight;
  width = window.innerWidth;
}
updateWindowSize();
window.addEventListener("resize", updateWindowSize);
