'use strict';

const Controller = require('./controllers/controller');

module.exports = function (app) {

    app.route('/page/addPage').post(Controller.addPage);
    app.route('/tesabc').post(abc);
    app.route('/testmyFunction').post(myFunction);
    app.route('/page/addComponentToPage').post(Controller.addComponentToPage);

}


function abc(req, res) {

    var abc={
        name:"mahendra",
        data:null
    }

    var a=abc.name;
    var x=a;
    var xyz=abc;//deep vlne

    const m="bbb"
    m="jkl"

    abc.name="Nitin";
    a="mkjk"

    res.send(x)
}
// ------------Array forEach------------
const Numbers = [45,4,9,16,25];
let text = "";
Numbers.forEach(myFunction);

console.log(text);
function myFunction(value, index, array){
    text += value +"<br>";
}

// -----------array Filter--------------
const words = ['spray', 'limited', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 5);

console.log(result);