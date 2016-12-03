/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
            function startGame() {
//               firstBall = new ball(30, "red", 31, 31, 5, 5);
               console.log(radiusFirst);
               firstBall = new ball(radiusFirst, "red",radiusFirst+1, radiusFirst+1, 5, 5);
               firstBall = new ball(30, "red", 31, 31, 5, 5);
               secondBall = new ball(30, "blue", 600 - 31, 31, -5, 5);
               gameArea.start(600, 400);
           }

