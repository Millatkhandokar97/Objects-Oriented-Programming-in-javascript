//Factory Pattern oop in javascript


let createRect = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log('I am rectangle');
            this.printProperties()
        },
        printProperties: function () {
            console.log('My width is ' + this.width);
            console.log('My height is ' + this.height);
        }

    }
}

let rect = createRect(10, 20)
rect.draw()
let rect1 = createRect(33, 55)
rect1.draw()


