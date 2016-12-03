/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


        function updateGameArea() {
            gameArea.clear();
            firstBall.update();
            secondBall.update();
            firstBall.x +=firstBall.speedX;
            firstBall.y +=firstBall.speedY;
            secondBall.x +=secondBall.speedX;
            secondBall.y +=secondBall.speedY;
            
//            c2 = a2 + b2
            
            var b = Math.abs (firstBall.y - secondBall.y);
            var a = Math.abs (firstBall.x - secondBall.x);
            var radiusesSum = firstBall.radius + secondBall.radius;
//           var c2 = a*a + b*b;
//           var c = Math.sqrt(c2);
            
            if (a * a + b * b <= radiusesSum * radiusesSum) {
                firstBall.speedX *= -1;
                secondBall.speedX *= -1;
            }  
            
            console.log ("a=" + a + "b=" + b);
            
            firstBall.x +=firstBall.speedX;
            firstBall.y +=firstBall.speedY;
            secondBall.x +=secondBall.speedX;
            secondBall.y +=secondBall.speedY;
 
             if(Math.abs(firstBall.x - secondBall.x) <= (firstBall.radius + secondBall.radius)){
                firstBall.speedX = firstBall.speedX*-1;
                secondBall.speedX *=-1;
            }
            
            if (firstBall.x <= firstBall.radius || firstBall.x >= gameArea.canvas.width - firstBall.radius) {
                firstBall.speedX = firstBall.speedX*-1;
            }
            
            if (secondBall.x <= secondBall.radius || secondBall.x > gameArea.canvas.width - secondBall.radius) {
                secondBall.speedX = secondBall.speedX*-1;           
            }   
                
            if (firstBall.y <= firstBall.radius || firstBall.y > gameArea.canvas.height - firstBall.radius) {
                firstBall.speedY = firstBall.speedY*-1;
            }
            
            if (secondBall.y <= secondBall.radius || secondBall.y > gameArea.canvas.height - secondBall.radius) {
                secondBall.speedY = secondBall.speedY*-1;
            }
            
            
    } 