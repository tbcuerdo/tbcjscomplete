// Print "Hello World"
// Every second
// And stop after 5 times
var cnt = 0;
const intervalId = setInterval(() => {
    console.log("Hello World");
    if (cnt == 5){
        stopInterval();
    }
    cnt++;
}, 1000);

function stopInterval (){
    clearInterval(intervalId);

     // After 5 times. Print "Done" and let Node exit.
     console.log("Done");
}
