(function trafficLight() {
    let {timers, colors} = {timers: [10000, 3000, 15000], colors: document.getElementsByClassName('light')};
    var current = localStorage.getItem('currentMemory') || 0;
    var seconds = localStorage.getItem('secondsMemory') || timers[current]/1000;
    var reverse = localStorage.getItem('reverseMemory') || false;
    console.log(localStorage.getItem('currentMemory'));
    (function switchLight() {
        setInterval(function () {
                for (let i = 0; i < 3; i++) {
                    colors[i].classList.remove('active');
                }
                colors[current].classList.add('active');
            if (!colors[1].classList.contains('active') && seconds !== 0) {
                colors[1].innerHTML = seconds;
            } else colors[1].innerHTML = '';
            seconds--;
            localStorage.setItem('secondsMemory', seconds);
            if (seconds < 4 && !colors[current].classList.contains('yellow')) {
                    setTimeout(function() {colors[reverse ? 2 : 0].classList.add('active')}, 500);
                    setTimeout(function() {colors[reverse ? 2 : 0].classList.remove('active')}, 1000);
            }
            if (seconds === 0) {
                if (!reverse) {
                    current++
                }
                else {
                    current--;
                }
                seconds = timers[current]/1000;
                if (current === 2) {
                    reverse = true;
                }
                else if (current === 0) {
                    reverse = false;
                }
            }
            setTimeout(function () {
                localStorage.setItem('secondsMemory', seconds);
                localStorage.setItem('currentMemory', current);
                localStorage.setItem('currentReverse', reverse);
            });
        }, 1000)
    })();
})();