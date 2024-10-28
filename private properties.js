//Private Properties in javascript

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

    this.draw = function () {
        console.log('I amrectangle')
        printProperties()
        console.log('Position: x = ' + position.x + '  Y = ' + position.y);
    }
}

var rect1 = new Rectangle(23, 54)
rect1.draw()