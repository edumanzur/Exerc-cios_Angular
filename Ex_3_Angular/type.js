var num = 7;
var soma = 0;
function som_impares(num) {
    for (var i = 1; i <= num; i++) {
        if (1 == i % 2) {
            soma += i;
        }
        else {
            continue;
        }
    }
    console.log(soma);
}
som_impares(num);
