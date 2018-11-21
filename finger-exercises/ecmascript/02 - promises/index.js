// Hint: use setInterval, create a new Promise and measure time with Date.now()

const MAX_DELAY = 600;
const MIN_DELAY = 400;

export function delay(time) {
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (time < MAX_DELAY) {
        const presentTime = Date.now();
        const timeExec = presentTime - startTime;
        if (timeExec < MAX_DELAY && timeExec > MIN_DELAY) {
          clearInterval(interval);
          resolve(timeExec);
        }
      } else {
        const reason = new Error('This time is too much !');
        reject(reason);
      }
    }, 200);
  });
}

export function asyncDelay(time) {
  return time;
}
