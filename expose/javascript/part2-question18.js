function timePrint() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

const intervalID = setInterval(timePrint, 1000);