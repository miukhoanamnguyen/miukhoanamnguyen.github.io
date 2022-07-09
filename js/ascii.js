document.addEventListener('DOMContentLoaded', () => {
    const animationSelect = document.getElementById('animation');
    const textArea = document.getElementById('text-area');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const fontSizeSelect = document.getElementById('fontsize');
    const turbo = document.getElementById('turbo');
    let speed = turbo.checked ? 50 : 250;



    textArea.style.fontSize = fontSizeSelect.value;

    fontSizeSelect.addEventListener('change', (e) => {
        textArea.style.fontSize = e.target.value;
    });

    let current = BLANK;
    let frames = [];
    animationSelect.addEventListener('change', (e) => {
        const value = e.target.value;
        eval('textArea.value = ' + value.toUpperCase());
        eval('current = ' + value.toUpperCase());
        frames = current.split('=====\n');
    });
    textArea.value = current;

    let timeInterval = null;
    let index = 0;
    const animate = () => {
        if (index > frames.length - 1) {
            index = 0;
        }
        textArea.value = frames[index];
        index++;
    };
    const onClickStart = (e) => {
        timeInterval = setInterval(animate, speed);
        e.currentTarget.disabled = true;
        stopButton.disabled = false;
        animationSelect.disabled = true;
    }
    startButton.addEventListener('click', onClickStart);

    const onClickStop = (e) => {
        if (timeInterval) {
            clearInterval(timeInterval);
        }
        e.currentTarget.disabled = true;
        startButton.disabled = false;
        animationSelect.disabled = false;
        turbo.removeEventListener('change')
    }

    stopButton.addEventListener('click', onClickStop);

    turbo.addEventListener('change', (e) => {
        speed = e.target.checked ? 50 : 250;
        clearInterval(timeInterval);
        timeInterval = setInterval(animate, speed);
    });
});