/* 
 Stop licensing!1111
 */


function startGame() {
    
    $('#error_msg').html('');
    
    formHandler.getFirstBall();
    formHandler.getSecondBall();
    formHandler.getGameArea();

    firstBall = new ball(radiusFist, colorFirst, startXFirst, startYFirst, speedXFirst, speedYFirst);
    // firstBall = new ball (30, "red", 31, 31, 5, 5);
    secondBall = new ball(radiusSecond, colorSecond, startXSecond, startYSecond, speedXSecond, speedYSecond);
    
    
    if (firstBall.x < firstBall.radius) {
        $('#error_msg').html('First Ball X must be bigger than Radius');
        return false;
    }
    
    if (firstBall.x > gameAreaWidth - firstBall.radius) {
        $('#error_msg').html('First Ball X must be less than ' + (gameAreaWidth - firstBall.radius));
        return false;
    }
    
        if (firstBall.y < firstBall.radius) {
        $('#error_msg').html('First Ball Y must be bigger than Radius');
        return false;
    }
    
    if (firstBall.y > gameAreaHeight - firstBall.radius) {
        $('#error_msg').html('First Ball Y must be less than ' + (gameAreaHeight - firstBall.radius));
        return false;
    }
    
    
    if (secondBall.x < secondBall.radius) {
        $('#error_msg').html('Second Ball X must be bigger than Radius');
        return false;
    }
    
    if (secondBall.x > gameAreaWidth - secondBall.radius) {
        $('#error_msg').html('Second Ball X must be less than ' + (gameAreaWidth - secondBall.radius));
        return false;
    }
    
     if (secondBall.y < secondBall.radius) {
        $('#error_msg').html('Second Ball Y must be bigger than Radius');
        return false;
    }
    
    if (secondBall.y > gameAreaHeight - secondBall.radius) {
        $('#error_msg').html('Second Ball Y must be less than ' + (gameAreaHeight - secondBall.radius));
        return false;
    }
    myGameArea.start(gameAreaWidth, gameAreaHeight);
    
    $('#stopButton').show();
    $('#startButton').hide();
}