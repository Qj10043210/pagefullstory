$(document).ready(function () {
    
    var backgroundDiv = $('#backg')
    const BackgroundWidth = $('#backg').width();
    const BackgroundHeight = $('#backg').height();
    const ScreenWidth = $('#screen').width();
    const ScreenHeight = $('#screen').height();
    // Handle arrow key presses
    console.log(BackgroundHeight)
    console.log(BackgroundWidth)
    console.log(ScreenHeight)
    console.log(ScreenWidth)

    $('#backg').css({
        clipPath: `polygon(0px ${BackgroundHeight - ScreenHeight}px,${ScreenWidth}px ${BackgroundHeight - ScreenHeight}px,${ScreenWidth}px ${BackgroundHeight}px, 0px ${BackgroundHeight}px)`
        
    })


    const regex = /(-?\d+\.?\d*)px (-?\d+\.?\d*)px/g;
    let currentClipPathValue = $('#backg').css('clip-path');
        let coordinates = [];
        let match;
    
        while ((match = regex.exec(currentClipPathValue)) !== null) {
            let x = parseFloat(match[1]);
            let y = parseFloat(match[2]);
            coordinates.push({ x: x, y: y });
        }
        console.log(coordinates)
    // Log the extracted coordinates to the console
    $('.cah').each(function(){
        let top = anyway02_RandNumberXYZ(20,1000,10000)
        let left = anyway02_RandNumberXYZ(20,1000,10000)
        $(this).css({
            top : `${top}px`,
            left : `${top}px`
        })
    })

    $(document).keydown(function (e) {
        var step = 50; // Adjust as needed
        currentClipPathValue = $('#backg').css('clip-path');
        coordinates = [];
        match;
    
        while ((match = regex.exec(currentClipPathValue)) !== null) {
            let x = parseFloat(match[1]);
            let y = parseFloat(match[2]);
            coordinates.push({ x: x, y: y });
        }
        
        
        switch (e.which) {
            case 37: // Left arrow
                moveBackground('left', step, coordinates);
                break;
            case 38: // Up arrow
                moveBackground('up', step, coordinates);
                break;
            case 39: // Right arrow
                moveBackground('right', step, coordinates);
                break;
            case 40: // Down arrow
                moveBackground('down', step, coordinates);
                break;
        }
    });

    // Function to move the background div
    function moveBackground(direction, step, coordinates) {
        var currentLeft = parseInt(backgroundDiv.css('left')) || 0;
        var currentBottom = parseInt(backgroundDiv.css('bottom')) || 0;
        
        let moveToX1;
        let moveToX2;
        let moveToY1;
        let moveToY2;
        // TL0 x1 y1 , TR1 x2 y1, BR2 x2 y2 , BL3 x1 y2
        
        // 1 left top 2 right bottom

        if(BackgroundWidth > coordinates[1].x +step && direction =="right"){
            moveToX1=coordinates[3].x +step;
            moveToX2=coordinates[1].x +step;
            moveToY1=coordinates[1].y;
            moveToY2=coordinates[3].y;
            currentLeft -= step;
        }else if(direction =="right"){
            moveToX1=coordinates[3].x;
            moveToX2=coordinates[1].x;
            moveToY1=coordinates[1].y;
            moveToY2=coordinates[3].y;
        }

        if(0 < coordinates[3].x - step  && direction =="left"){
            moveToX1=coordinates[3].x -step;
            moveToX2=coordinates[1].x -step;
            moveToY1=coordinates[1].y;
            moveToY2=coordinates[3].y;
            currentLeft += step;
        }else if(direction =="left"){
            moveToX1=coordinates[3].x;
            moveToX2=coordinates[1].x;
            moveToY1=coordinates[1].y;
            moveToY2=coordinates[3].y;
        }
        if(0 < coordinates[1].y - step  && direction =="up"){
            moveToY1=coordinates[1].y - step;
            moveToY2=coordinates[3].y - step;
            moveToX1=coordinates[3].x;
            moveToX2=coordinates[1].x;
            currentBottom -= step;
        }else if(direction =="up"){
            moveToY1=coordinates[1].y;
            moveToY2=coordinates[3].y;
            moveToX1=coordinates[3].x;
            moveToX2=coordinates[1].x;
        }
        if( BackgroundHeight > coordinates[3].y + step  && direction =="down"){
            moveToY1=coordinates[1].y + step;
            moveToY2=coordinates[3].y + step;
            moveToX1=coordinates[3].x;
            moveToX2=coordinates[1].x;
            currentBottom += step;
            
        }else if(direction =="down"){
            moveToY1=coordinates[1].y;
            moveToY2=coordinates[3].y;
            moveToX1=coordinates[3].x;
            moveToX2=coordinates[1].x;
        }
        switch (direction) {
            case 'left':
                
                backgroundDiv.css({
                    clipPath: `polygon(${moveToX1}px ${moveToY1}px, ${moveToX2}px ${moveToY1}px, ${moveToX2}px ${moveToY2}px, ${moveToX1}px ${moveToY2}px)`,
                    left : currentLeft
                });
                break;
            case 'up':
                backgroundDiv.css({
                    clipPath: `polygon(${moveToX1}px ${moveToY1}px, ${moveToX2}px ${moveToY1}px, ${moveToX2}px ${moveToY2}px, ${moveToX1}px ${moveToY2}px)`,
                    bottom : currentBottom
                });
                break;
            case 'right':
                backgroundDiv.css({
                    clipPath: `polygon(${moveToX1}px ${moveToY1}px, ${moveToX2}px ${moveToY1}px, ${moveToX2}px ${moveToY2}px, ${moveToX1}px ${moveToY2}px)`,
                    left : currentLeft
                });
                break;
            case 'down':
                backgroundDiv.css({
                    clipPath: `polygon(${moveToX1}px ${moveToY1}px, ${moveToX2}px ${moveToY1}px, ${moveToX2}px ${moveToY2}px, ${moveToX1}px ${moveToY2}px)`,
                    bottom : currentBottom
                });
                break;
        }
    }
});


function anyway02_RandNumberXYZ(x, y, z) {
    let a = Math.random()
    let b = Math.floor(a * z);
    let c = true;
    while (c) {
        if (b >= x && b <= y) {
            c = false;
        }
        else {
            a = Math.random()
            b = Math.floor(a * z);
        }
    }
    return b;
}