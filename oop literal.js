// oop literal in javascript

var rect = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle');
        console.log('My Width is ' + this.height + this.width);
        console.log('My Height is ' + this.height * this.height);
    }

}

rect.draw()