class Ground{
    constructor(x,y,width,height){
      var op ={
         isStatic:true
      }
      this.terra = Bodies.rectangle(x,y,width,height,op);
      this.width = width;
      this.height = height;

      World.add(world,this.terra);
    }
    earth(){
      var pos = this.terra.position;

      push();
      rectMode(CENTER);
      fill("blue");
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
}
