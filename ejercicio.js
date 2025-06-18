/*let n1=0;
let n2=1;

const fibonacci =() =>{
    let n3= n1+n2;
    console.log("n1+ n2 = " +n3 );
    n1=n2;
    n2=n3;
};
console.log(fibonacci());
fibonacci();
fibonacci();
fibonacci();
*/
/*
let n1=5;
let n2=1;

const fibonacci =(limite) =>{
    for (let i=0; i< limite ; i++){
    let n3= n1+n2;
    console.log("n1+ n2 = " ,n3 );
    n1=n2;
    n2=n3;
    }
};
console.log(fibonacci(20))
*/
/*-------------serie_fibonacci-----------*/

var ini=5;
var fin=30;

const fibonacci =() =>{
    let n1=0;
    let n2=1;
    console.log ('serie fibonacci ',fibonacci);
    for (let i=0; i< fin ; i++){
        let num;
        if(i=== 0){
        num=0;
        }else if (i=== 1){
        num=1;
        }else {
        num =n1+n2;
        n1=n2;
        n2=num;
        }
        if (i>=ini){
        console.log(num);
        }
        
    }
};
fibonacci();

/*-------------array--------------- */

const ser =() =>{
    console.log('array');
    let n1=ini;
    let n2=ini+1;
    const serie=[n1,n2];
    let num =n1+n2;
    if(num<=fin) {
    n1=n2;
    n2=num;
    serie.push(num);
    }
    return serie;
};
const serie= ser();
console.log(serie);

/*------------set----------------*/

const set =() =>{
    let n1 = ini;
    let n2 = ini + 1;
    const seteo = new Set();
    seteo.add(n1);
    seteo.add(n2);

    let num =n1+n2;
    while (num<=fin) {
        seteo.add(num);
        n1=n2;
        n2=num;
        num =n1+n2;
        
    }
    return seteo;
};

const seteo= set();
console.log(seteo);

/*------mapeo------*/

const resul =(ini,fin) => {
    resultado = new Map();
    let mapeo = 1;
    n1 = ini;
    n2 = n1+1;
    while (n1 <= fin) {
    if (n1 >= ini) {
    resultado.set (mapeo, n1);
    mapeo++;
    }

    let num = n1 + n2;
    n1= n2;
    n2 = num;
    }
    return resultado;
};
console.log(resul(ini,fin));


