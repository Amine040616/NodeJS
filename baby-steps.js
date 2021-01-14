

/* function somme(a, b, c){
    return a+b+c;
}

let first = +process.argv[2];
let second = +process.argv[3];
let third = +process.argv[4]; */


let somme = 0;

for (i=2; i<process.argv.length; i++){
    somme += Number(process.argv[i]);
}

console.log(somme);


