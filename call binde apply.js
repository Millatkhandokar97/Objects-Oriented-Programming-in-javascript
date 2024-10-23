// call binde apply oop in javascript
function calling(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}
// calling.call({a: 6, b: 8}) //without argument call
// calling.apply({a: 6, b: 8}) //without argument apply
// var bind = calling.bind({a: 8, b: 8}) //without argument bind
// bind()

calling.call({a: 60, b: 80}, 5, 7)
calling.apply({a: 160, b: 180}, [15, 17])
var bind = calling.bind({ a: 12, b: 20 })
bind(10, 5)