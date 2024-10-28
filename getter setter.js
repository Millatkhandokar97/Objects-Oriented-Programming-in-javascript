//How to Use Getter Setter in Javascript

var Rectangle = function (width, height) {
    this.width = width
    this.height = height
    var position = {
        x: 100,
        y: 200
    }
    var printProperties = function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }.bind(this)

    // this.getPosition = function(){
    //     return position
    // }

    this.draw = function () {
        console.log('I amrectangle')
        printProperties()
        console.log('Position: x= ' + position.x + '  Y= ' + position.y);
    }

    // private property access and update with Getter Setter 
    Object.defineProperty(this, 'position', {
        get: function(){
            return position
        },
        set: function(value){
            position = value
        }
    })
}

var rect1 = new Rectangle(23, 54)
rect1.draw()

// console.log(rect1.getPosition());

rect1.position = {
    x: 3298,
    y: 8327
}

console.log(rect1.position);