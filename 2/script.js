class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
    //////To get the  radius of the circle using getter method
    getRadius() {
      // return this.radius;
      console.log(
        `Now (Current  circle radius) the circle's radius is  : ${this.radius}`
      );
    }
  
    //// To set the new radius of the circle using setRadius() method
    setRadius(r) {
      if (typeof r === "number") {
        // return this.radius = r;
        console.log(`The circle  New radius is  set to: ${(this.radius = r)}`);
      } else {
        console.log(
          `Radius should be number --Entered value is ==> "${r}" ===> Enter a number without double quotes like ----3.5`
        );
      }
    }
  
    //// To get  the new circle colour using getter method the propertyname is "colour"
    get colour() {
      // return this.color;
      console.log(
        `Now (Current circle Colour)The circle color is : ${this.color}`
      );
    }
    /// To set  the new circle colour using setter method the propertyname is "colour"
    set colour(clr) {
      if (typeof clr === "string") {
        // return this.color = r;
        console.log(`The new circle color is set  : ${(this.color = clr)}`);
      } else {
        console.log(
          `Colour should be string --Entered value is ==> "${clr}" ===> Enter a colour within double quotes like --"Green" `
        );
      }
    }
    /////// To print the data in a given format Circle [Radius = ?,Color = ?] using toString() method
    toString() {
      console.log(`Circle [Radius = ${this.radius} , Color = ${this.color}] `);
    }
    ////////////////// To Get the  area of circle using getter method the property name "getArea"
    get getArea() {
      let r = this.radius;
      return ` Area of a circle is : ${Number(Math.PI * r * r)}`;
    }
    //////////////////////To Get the circumference of circle using getter method the property name "getCircumference"
    get getCircumference() {
      let r = this.radius;
      return `Circumference of a circle is : ${Number(2 * Math.PI * r)}`;
    }
  }
  
  const circle1 = new Circle(3.2, "white");
  console.log(circle1);
  
  //////To get the  radius of the circle using getRadius() method
  circle1.getRadius();
  
  //// To set the new radius of the circle using setRadius() method
  circle1.setRadius("7.2");
  circle1.getRadius();
  
  //// To get  the new circle colour using getter method the propertyname is "colour"
  circle1.colour;
  
  ///To set  the new circle colour using setter method the propertyname is "colour"
  circle1.colour = "black";
  circle1.colour;
  
  /////// To print the data in a given format Circle [Radius = ?,Color = ?] using toString() method
  circle1.toString();
  
  ////////////////// To Get the  area of circle using getter method the property name "getArea"
  let area = circle1.getArea;
  console.log(area);
  
  //////////////////////To Get the circumference of circle using getter method the property name "getCircumference"
  let cirumference = circle1.getCircumference;
  console.log(cirumference);