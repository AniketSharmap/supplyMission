class Rectangles //--> A class with a parameterized Constructor 
{
    constructor(x,y,width,height) //--> Constructor which takes 4 arguments........
    {
       var options = 
       {
          'isStatic' : true
       }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
    }

    display()
    {
       var position = this.body.position;
       rectMode(CENTER);
       fill("blue");
       rect(position.x,position.y,this.width,this.height);
    }
};