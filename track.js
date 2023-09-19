class Track {
  
  constructor(borderPath, borderPath1, borderPath2) {
    this.path = new Path2D(borderPath);
    this.border1 = borderPath1;
    this.border2 = borderPath2;
  }
  
  draw(ctx, car) {
    ctx.save();
    ctx.translate(900-car.x, 600-car.y);
   // this.#drawBorder(ctx, this.border1);
    //this.#drawBorder(ctx, this.border2);
    //ctx.rect(385, 137, 300, 150);
    //ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.fillStyle = "darkGrey";
    ctx.lineWidth = 4;
    
    ctx.stroke(this.path);
    ctx.fill(this.path);
   
   
    ctx.restore();
  }

  #drawBorder(ctx, border){
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(border[0][0],  border[0][1]);
    for (let i = 1; i < border.length; i++) {
      ctx.lineTo( border[i][0], border[i][1]);
      ctx.stroke();
    }
   
  }


}