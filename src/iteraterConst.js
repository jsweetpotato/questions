import "./styles.css";

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.getDiameter();
  }
  getDiameter() {
    return document.write(2 * this.radius + " ");
  }
}

const circles = [];

for (let i = 0; i < 5; i++) {
  const circle = new Circle(i * 2); //아니 왜 상수인데 여러개 생성해서 push해가지고 넣어짐? 아니 그러면 상수circle이 여러개 생성되는게 아님?
  circles.push(circle);
}

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
