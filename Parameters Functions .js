function myNumber (...x){
    console.log(x)
}
myNumber(1,2,3,4,5,6,7,8,9,0 , 'rubel','ashik','fardin','likhon')


// Rest perameters system 2 


function myNumber (...x){
    console.log(x[5])
}
myNumber(1,2,3,4,5,6,7,8,9,0 , 'rubel','ashik','fardin','likhon')