//get and set in javascript

var Rectangle = function (width, height) {

    var position = {
        x: 100,
        y: 200
    }
    this.width = width
    this.height = height
  
    var printProperties = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }.bind(this)
    // this.getposition =function(){
    //     return position
    // }



    this.draw = function () {
        console.log('I am rectangle')
        printProperties()
        console.log('Position: x = ' + position.x + '  Y = ' + position.y);
    }

    Object.defineProperty(this, 'position', {
        get: function () {
            return position
        },
        set: function (value) {
            position = value
        }
    })


    // Object.defineProperty(this, 'position',{
    //     get: function(){
    //         return position
    //     },
    //     set: function(value){
    //         position = value
    //     }
        
    // })
}

var rect1 = new Rectangle(23, 54)
rect1.draw()

// var rect2 = rect1.getposition()
// console.log(rect2);


rect1.position = {
    x: 340,
    y: 430
}
console.log(rect1.position);
rect1.position
