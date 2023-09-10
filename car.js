class Car {

  constructor(data, maxSpeed = 2) {
    this.path = new Path2D(data);
    this.x = 600;
    this.y = 400;
   
    this.width = 52;
    this.height = 98;
    this.controls = new Controls("KEYS");
    this.angle = -Math.PI/2;
    this.speed = 0;
    this.acceleration = 0.2;
    this.deceleration = 0.04
    this.maxSpeed = maxSpeed;
    this.friction = 0.02;

    this.sensor = new Sensor(this);
  }

  update(trackBorder, traffic) {
    this.#applyAcceleration();
    this.#applySpeedLimits();
    this.#applyFriction();
    this.#rotate();
    if (this.sensor) {
      this.sensor.update(trackBorder, traffic);
    }
    //this.polygon = this.#createPolygon();
  }

  draw(ctx, drawSensors=true) {

    ctx.lineWidth = 0.5;
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    //ctx.stroke(this.path);
  
   // carCtx.save();
   // ctx.scale(4, 4);
   ctx.save();
    // Translate and rotate the canvas context
    ctx.rect(-this.x + 840, -this.y + 360, 26, 98);
    ctx.rect(-this.x + 1240, -this.y + 560, 26, 98);
    ctx.rect( -this.x + 1040, -this.y + 760, 26, 98);
    ctx.rect(-this.x + 1040, -this.y + 160, 26, 98);
    ctx.stroke();
   
    ctx.translate(600, 400);
   
   // ctx.rotate(-this.angle);
    if (this.sensor && drawSensors) {
      this.sensor.draw(ctx);
    } 
    
    ctx.rotate(-this.angle);
    ctx.translate(26, 44);
    
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
   // ctx.stroke();

    ctx.translate(-26, -44);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
   // ctx.stroke(this.path);
    ctx.translate(-26, -44);
    ctx.fillStyle = "orange";
    ctx.stroke(this.path);
    ctx.fill(this.path);
    //ctx.restore();
    //ctx.rect(26, 44, 28, 100);
    //ctx.rotate(30 *Math.PI/180);
    //ctx.rect(0, 0, 26, 98);
    //ctx.stroke();

   // ctx.fill(this.path);
    carCtx.restore();
  }

  #applyAcceleration() {
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }

    if (this.controls.reverse) {
      this.speed -= this.deceleration;
    }
  }

  #applySpeedLimits() {
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }

    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2
    }
  }

  #applyFriction() {
    if (this.speed > 0) {
      this.speed -= this.friction;
    }

    if (this.speed < 0) {
      this.speed += this.friction;
    }
  }

  #createPolygon() {
    const points = [];

    const diag = Math.hypot(this.width / 2, this.height / 2);
    const alpha = Math.atan2(this.width, this.height);

    points.push(
      {
        x: 0- Math.sin(this.angle - alpha * 1.2) * diag,
        y: 0- Math.cos(this.angle - alpha * 1.2) * diag
      }
    );
    points.push(
      {
        x: 0 - Math.sin(this.angle - alpha) * diag,
        y: 0 - Math.cos(this.angle - alpha) * diag
      }
    );

    points.push(
      {
        x: 0 - Math.sin(this.angle + alpha) * diag,
        y: 0 - Math.cos(this.angle + alpha) * diag
      }
    );
    points.push(
      {
        x: 0 - Math.sin(this.angle + alpha * 1.2) * diag,
        y: 0 - Math.cos(this.angle + alpha * 1.2) * diag
      }
    );

    points.push(
      {
        x: 0 - Math.sin(Math.PI + this.angle - alpha) * diag * 1.1,
        y: 0 - Math.cos(Math.PI + this.angle - alpha) * diag
      }
    );
    points.push(
      {
        x: 0- Math.sin(Math.PI + this.angle + alpha) * diag * 1.1,
        y: 0 - Math.cos(Math.PI + this.angle + alpha) * diag
      }
    );
    return points;
  }

  #rotate() {
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      if (this.controls.left) {
        this.angle += 0.015 * flip;
      }

      if (this.controls.right) {
        this.angle -= 0.015 * flip;
      }
    }

    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }
}