
exports.min = function min (array) {
    if (array==undefined||array.length==0){
     return 0;  
    } else {
    let a=Math.min(...array); 
    
  return a;}
}

exports.max = function max (array) {
    if (array==undefined||array.length==0){
        return 0;   
       } else {
    let b=Math.max(...array); 
    return b;}
}

exports.avg = function avg (array) {
    if (array==undefined||array.length==0){
        return 0;   
       } else {
    let c=array.reduce((a, b) => (a + b)) / array.length;
    

    return c;}
}
