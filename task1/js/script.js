import Vue from 'vue.min'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(Vue);

var router = new VueRouter({
    routes: [
        { path: 'red', component: red}
    ]
})

(function trafficLight() {
    let {timers, colors} = {timers: [3000, 1000, 3000], colors: document.getElementsByClassName('traffic__light')};
    var current = localStorage.getItem('currentMemory') || 0;
    var seconds = localStorage.getItem('secondsMemory') || timers[current]/1000;
    var reverse = localStorage.getItem('reverseMemory') || false;
    (function switchLight() {
        setInterval(function () {
            console.log(current);
            console.log(reverse);
                for (let i = 0; i < 3; i++) {
                    colors[i].classList.remove('active');
                }
                colors[current].classList.add('active');
            if (!colors[1].classList.contains('active') && seconds !== 0) {
                colors[1].innerHTML = seconds;
            } else colors[1].innerHTML = '';
            seconds--;
            if (seconds < 4 && !colors[current].classList.contains('traffic__light-yellow')) {
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
        }, 1000);
        setTimeout(function () {
            localStorage.setItem('secondsMemory', seconds);
            localStorage.setItem('currentMemory', current);
            localStorage.setItem('reverseMemory', reverse);
        }, 300);
    })();
})();