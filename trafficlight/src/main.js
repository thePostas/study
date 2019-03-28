(function trafficLight() {
    let {timers, colors} = {timers: [5000, 3000, 5000], colors: document.getElementsByClassName('traffic__light')};
    var current = localStorage.getItem('currentMemory') || 0;
    var seconds = localStorage.getItem('secondsMemory') || timers[current]/1000;
    var isReverse = !!(localStorage.getItem('reverseMemory')) || '';
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
            if (seconds < 4 && !colors[current].classList.contains('traffic__light-yellow')) {
                setTimeout(function() {colors[isReverse ? 2 : 0].classList.add('active')}, 500);
                setTimeout(function() {colors[isReverse ? 2 : 0].classList.remove('active')}, 1000);
            }
            if (seconds === 0) {
                if (!isReverse) {
                    current++;
                    if (current === 2) {
                        isReverse = 'true';
                        localStorage.setItem('reverseMemory', 'true');
                    }
                }  else {
                    current--;
                    if (current === 0) {
                        isReverse = '';
                        localStorage.setItem('reverseMemory', '');
                    }
                }
                seconds = timers[current]/1000;
            }
            localStorage.setItem('secondsMemory', seconds);
            localStorage.setItem('currentMemory', current);

        }, 1000);
    })();
})();