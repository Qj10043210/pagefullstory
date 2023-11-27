var isJumping = false;
$(document).keydown(function (e) {
    var step = 15; // Adjust as needed
    e.preventDefault();
    if (e.altKey) {

        switch (e.which) {
            case 37: // Left arrow
                console.log("left jump")
                break;

            case 39: // Right arrow
                console.log("rightt jump")
                break;
            case 38: // Down arrow
                if (!isJumping) {
                    isJumping = true;
                    jump();
                }
                break;

        }
    } else {

        switch (e.which) {
            case 37: // Left arrow
                moveCharc('left', step);
                break;
            case 38: // Up arrow

                break;
            case 39: // Right arrow
                moveCharc('right', step);
                break;
            case 40: // Down arrow

                break;

        }
    }
}).on('keyup',function(){
    var $test = $('#test');
    setTimeout(function(){
        $test.css({
        
            backgroundImage :`url(./css/mob/0100.png)`
        })
    },200)
});
function moveCharc(direction, step) {

    var $test = $('#test');
    $test.css({
        transition : `left 0.2s`,
        backgroundImage :`url(./css/mob/0410.gif)`
    })
    let currentPosition = $test.position();

    switch (direction) {
        case 'left':
            $test.css({transform:`scaleX(1)`})
            $test.css('left', currentPosition.left - step);
            break;

        case 'right':
            $test.css({transform:`scaleX(-1)`})
            $test.css('left', currentPosition.left + step);
            break;

    }
    
    
    
}


