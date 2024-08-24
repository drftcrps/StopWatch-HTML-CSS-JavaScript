let  startTime = Date.now();
console.log(startTime);
const currentTime = Date.now() - startTime;
const seconds = Math.floor((currentTime % 60000) / 1000);
console.log(currentTime);
console.log(seconds);