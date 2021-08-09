const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};



const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.switchColors = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      let random = randomIntegerFromInterval(min, max);
      refs.body.style.backgroundColor = colors[random];
    }, 1000);
  },
  stop() {
    clearInterval(this.switchColors);
    this.isActive = false;
  },
};

refs.btnStart.addEventListener("click", timer.start.bind(timer));
refs.btnStop.addEventListener("click", timer.stop.bind(timer));