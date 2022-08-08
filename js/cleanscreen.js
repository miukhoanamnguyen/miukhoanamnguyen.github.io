$(document).ready(() => {
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
    
    const randomPosition = () => ({
        x: randomNumber(screen.availWidth/4, screen.availWidth*3/4),
        y: randomNumber(screen.availHeight/4, screen.availHeight*3/4),
    });

    const randomColor = () =>  '#' + Math.floor(Math.random()*16777215).toString(16);

    const doAnimate = ($circle, nextWidth, growthAmount, growthRate) => {
        $circle.animate({
            width: nextWidth,
            height: nextWidth,
            left: `-=${growthAmount/2}px`,
            top: `-=${growthAmount/2}px`,   
        }, {
            duration: growthRate,
            complete: () => {
                doAnimate($circle, nextWidth + growthAmount, growthAmount, growthRate);
            }
        });
    }
    
    const createCircle = (width) => {
        const $circle = $('<div class="circle"></div>');
        const pos = randomPosition();
        const color = randomColor();
        $circle.css({
            width: `${width}px`,
            height: `${width}px`,
            backgroundColor: color,
            left: `${pos.x}px`,
            top: `${pos.y}px`
        });
        $circle.click(() => {
            $circle.stop(true);
            $circle.remove();
        });
        return $circle;
    };

    $('#start').click(() => {
        $('.circle').click();
        const width = Number($('#circle-width').val());
        const growthAmount = Number($('#growth-amount').val());
        const growthRate = Number($('#growth-rate').val());
        const numberOfCircle = Number($('#circle-number').val());
        for(let i = 0 ; i < numberOfCircle; i++) {
            $circle = createCircle(width);
            $(document.body).append($circle);
            doAnimate($circle, width + growthAmount, growthAmount, growthRate);
        }
    });

    $('#stop').click(() => {
        $('.circle').click();
    });
});