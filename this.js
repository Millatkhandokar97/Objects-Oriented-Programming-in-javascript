// '''this''' word how to react oop in javascript 

function myFun() {
    console.log(this);
}

new myFun()

var rect = {
    width: 50,
    height: 100,

    draw: function () {
        console.log('I am rectangle');
        this.printProperties()
    },
    printProperties: function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }

}

rect.draw()


var copyRect = {
    width: 20,
    height: 25,
    print: rect.printProperties
}

copyRect.print()
