//constructor pattern oop in javascript

let Rectangle = function (width, height){
    this.width = width
    this.height = height

    this.draw = function(){
        console.log('I am Rectangle');
        this.printProperties()
    },
    this.printProperties = function(){
        console.log('My Width is : ' + this.width);
        console.log('My Height is : ' + this.height);
    }
}

let rect = new Rectangle(50, 80)
rect.draw()