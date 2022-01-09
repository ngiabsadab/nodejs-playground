function printPrime(n) {
    var num = 2;
    while (num <= n) {
        var i = 2;
        while (i <= num / 2) {
            if (num % i == 0) {
                break;
            }
            i++;
        }
        if (i > num / 2) {
            console.log("%d\t", num);
        }
        num++;
    }
}

printPrime(10000000);