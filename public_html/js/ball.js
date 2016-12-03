/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ball(radius, color, x, y, speedX, speedY) {
            this.radius = radius;
            this.color = color;
            this.x = x;
            this.y = y;
            this.speedX = speedX;
            this.speedY = speedY;
            this.update = function () {
               ctx = gameArea.context;
               ctx.fillStyle = color;
               ctx.beginPath();
               ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
               ctx.fill();
            }
            };
            