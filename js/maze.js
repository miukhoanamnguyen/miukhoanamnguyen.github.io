$(document).ready(() => {
    const Message = {
        start: 'Click S to begin',
        lose: 'You lose!!! :[',
        win: 'You win!!! :]',
        playing: 'Playing'
    }
    $('#status').text(Message.start);
    let isLose = false;
    let isStart = false;
    $('.boundary').mouseover(() => {
        if(isStart) {
            $('.boundary').addClass('youlose');
            isLose = true;
            isStart = false;
            $('#status').text(Message.lose);
        }
    });

    $('#end').mouseover(() => {
        if(isStart && !isLose) {
            $('#status').text(Message.win);
            isStart = false;
        }
    });

    $('#start').click(() => {
        isStart = true;
        isLose = false;
        $('#status').text(Message.playing);
        $('.boundary').removeClass('youlose'); 
    });

    $(document).mouseover(() => {
        if(isStart) {
            $('.boundary').addClass('youlose');
            isLose = true;
            isStart = false;
            $('#status').text(Message.lose);
        }
    });

    $('#maze').mouseover((e) => {
        e.stopPropagation();
    });
});