var num = 1000;
var i = 1;
var j = 0;
var arr = [];
while (i <= num) {
    while (j < i) {
        arr.push("1");
        j++;
    }
    var result = arr.reduce((sum, e) => e + sum);
    console.log(result);
    i++;

}
