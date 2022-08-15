// Set the date we're counting down to Jan, 1 of next year
const nextYear = new Date().getFullYear() + 1;
const setDate = `Jan 01, ${nextYear} 00:00:00`;
const countDownDate = new Date(setDate).getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get todays date and time
  const now = new Date().getTime();
  let distance;
  // Find the distance between now an the count down date
  distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="days/hours/minutes/seconds"
  obj = { days: days, hours: hours, minutes: minutes, seconds: seconds };
  for (const key in obj) document.getElementById(key).innerHTML = obj[key];
  
}, 1000);


    // document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
    //     + minutes + "m " + seconds + "s ";

    // // If the count down is over, write some text
    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    // }