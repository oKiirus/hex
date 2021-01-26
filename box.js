class Mango
{
	constructor(x,y)
	{
		var options={
			'restitution':0.8,
            'friction':1.0,
            'density':1.0
			}

			this.w = 50
			this.h = 50
	
			this.alpha = 255
		this.body=Bodies.rectangle(x, y, 50, 50 , options);
		 World.add(world, this.body);

		 this.img = loadImage("boxxxx.PNG")
		 
		 

	}
	display()
	{
			if(this.body.speed < 3){
				push()
				translate(this.body.position.x,this.body.position.y)
				rotate(this.body.angle)
				image(this.img, 0, 0, this.w, this.h);
				pop()
			}
			else{
				World.remove(world, this.body)
				push()
				this.alpha -= 5
				translate(this.body.position.x,this.body.position.y)
				tint(255, 255, 255, this.alpha)
				image(this.img, 0, 0, this.w, this.h)
				pop()
			}
		
		
			
		
			
	}

}