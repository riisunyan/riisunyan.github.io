const audioCtx = new AudioContext();
let counterButton = document.querySelector('#counterButton');
let interval = 0;
let timerActive = false;
let soundActive = false;

counterButton.addEventListener('click', () => {
    if (timerActive) {
        clearInterval(interval);
    }
    if (!timerActive) {
        let start = performance.now();
        interval = setInterval(() => {
            const elapsed = (performance.now() - start) / 1000;
            counterButton.innerText = `Timer: ${elapsed.toFixed(3)} seconds`;
        }, 1);
    }
    timerActive = !timerActive;
});

let soundButton = document.querySelector('#soundButton');
let stopButton = document.querySelector('#stopButton');
document.querySelector('#soundButton').addEventListener('click', () => {
    audioCtx.resume().then(() => {
            let oscillator = audioCtx.createOscillator();
            let oscillator2 = audioCtx.createOscillator();

            oscillator.type = 'sine';
            oscillator2.type = 'sine';

            const gainNode = audioCtx.createGain();
            gainNode.gain.value = 0.05;
            oscillator.frequency.value = parseFloat(document.querySelector('#frequencyOne').value);
            oscillator2.frequency.value = parseFloat(document.querySelector('#frequencyTwo').value);

            oscillator.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator2.start();
            soundButton.style.display = 'none';
            stopButton.style.display = 'inline';
        document.querySelector('#stopButton').addEventListener('click', () => {
            if (oscillator) oscillator.stop();
            if (oscillator2) oscillator2.stop();
            soundButton.style.display = 'inline';
            stopButton.style.display = 'None';
        });
    })
});
