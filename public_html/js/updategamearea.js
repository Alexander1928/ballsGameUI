/* 
*
 */
function updateGameArea() {
            myGameArea.clear();
            secondBall.update();
            firstBall.update();


//              c2 = a^2 b^2
            var a = Math.abs(firstBall.x - secondBall.x);
            var b = Math.abs(secondBall.y - firstBall.y);
            var c2 = a * a + b * b;
            var c = Math.sqrt(c2);

            if (c < (firstBall.radius + secondBall.radius)) {
                secondBall.speedX *= -1;
                firstBall.speedX *= -1;
            }

            //bounce from walls
            if (((firstBall.x - firstBall.radius) <= 0) || ((firstBall.x + firstBall.radius) >= myGameArea.canvas.width)) {
                firstBall.speedX = firstBall.speedX * -1;
            }
            if (((secondBall.x + secondBall.radius) >= myGameArea.canvas.width) || ((secondBall.x - secondBall.radius) <= 0)) {
                secondBall.speedX = secondBall.speedX * -1;
            }
            if (((secondBall.y + secondBall.radius) >= myGameArea.canvas.height) || ((secondBall.y - secondBall.radius) <= 0))
            {
                secondBall.speedY = secondBall.speedY * -1;
            }
            if (((firstBall.y + firstBall.radius) >= myGameArea.canvas.height) || ((firstBall.y - firstBall.radius) <= 0))
            {
                firstBall.speedY = firstBall.speedY * -1;
            }
            
            //console.log("a,b,c=" + a + b + c);

            firstBall.x += firstBall.speedX;
            secondBall.x += secondBall.speedX;
            firstBall.y += firstBall.speedY;
            secondBall.y += secondBall.speedY;



        }

