class Vehicle {
  constructor(name, hp, topSpeed) {
    this.name = name;
    this.hp = hp;
    this.topSpeed = topSpeed;
  }

  getDetails() {
    this.name = prompt("Enter Vehicle Name");
    this.hp = prompt("Enter Vehicle HP");
    this.topSpeed = prompt("Enter Vehicle Top Speed");
  }

  start() {
    document.getElementById("speed").innerHTML = '0.0';
    document.getElementById("speed").style.color = "green";
  }

  accelerate(speed) {
    speed += ~~(this.hp / 5);
    if (speed > this.topSpeed) speed = this.topSpeed;
    setTimeout(() => {
      document.getElementById("speed").innerHTML = speed;
    }, 10);
  }

  brake(speed) {
    speed -= ~~(this.hp / 2);
    if (speed < 0) speed = 0;
    setTimeout(() => {
      document.getElementById("speed").innerHTML = speed;
    }, 10);
  }
  
  stop() {
    document.getElementById("speed").innerHTML = '0.0';
    document.getElementById("speed").style.color = "red";
  }
}

var car = new Vehicle();
car.getDetails();
document.getElementById("car").innerHTML = car.name;
var startBtn = document.getElementById('start');
var accelerateBtn = document.getElementById('accelerate');
var brakeBtn = document.getElementById('brake');
var stopBtn = document.getElementById('stop');
 
startBtn.addEventListener('click', function () {
    car.start();
});

accelerateBtn.addEventListener('mouseover', function () {
    car.accelerate(+document.getElementById("speed").innerHTML);
});

brakeBtn.addEventListener('mouseover', function () {
    car.brake(+document.getElementById("speed").innerHTML);
});

stopBtn.addEventListener('click', function () {
    car.stop();
});
