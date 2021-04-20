var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "+l+" b = "+b);

    rect(l,b,(err,rectangle) => {
        if(err){
            console.log("ERROR: ",err.message);
        }
        else{
            console.log("Area of rectangle where l="+l+" and b="+b+" is "+rectangle.area());
            console.log("Perimeter of rectangle where l="+l+" and b="+b+" is "+rectangle.perimeter());
        }
    });
    console.log("After calling rect()");
}

solveRect(0,2);
solveRect(2,4);
solveRect(0,5);
solveRect(2,-1);