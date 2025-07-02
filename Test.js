const test = async () => {

    // kalo ada '+' ketemu string angak kaya +'1' dia akan ubah itu jadi integer 1
    // tpai kalo ++ itu jadi erro karna kebacanya add continues

    // const hasil = 1 + 1 + +'1' + 1; // = 4
    // console.log(hasil);

    // const hasil = '5'-'2' + '3' ; // = 33
    // console.log(hasil);

    // cek jawabnya bener ga
    // console.log([] + []);  // kosong
    // console.log([] + {});  // [object object]
    // console.log({} + []);  // [object obejct]

    // console.log(false == '0'); // true
    // console.log(false === '0'); //false

    // ask this why
    // console.log(0.1 + 0.2 === 0.3); //false
    // console.log(1 + 2 === 3); //true
    // tidak semuanya npenjumlahan decimal nilainya false, memang dari komputernya yg tidak bisa punya represtasi binner yagn pasti
    // contoh lain 0.3 + 0.6 === 0.9 --> ini false akrna gka eksak

    // const a = [1, 2, 3];
    // a[10] = 99;
    // console.log(a.length); // 11
    // console.log(a[4]); // undefined
    // kalo ada kaya gini meskipun declare arraynya cuma 3 tpai ini lengnya jadi 11 tpi dari 4 ke 10 itu undefined semua

    // why???
    // console.log(typeof NaN); // number
    // console.log(NaN === NaN); //false

    // why??
    // ini bug javascript, null binernya itu object
    // tapi bukan berarti null itu object *wkwk
    // karna instanceof itu memerikas rantai prototype

    // console.log(typeof null); //object
    // console.log(null instanceof Object); //flase
    // console.log(new String('rumah') instanceof Object); //true

    // why??
    // let ab = 10;
    // let b = ab++ + ++ab;
    // console.log(b); // 22
    // ab++ itu pake dulu baru +1
    // ++ab itu tmabah dulu baru +1
    // jadi b = 10 + 12

    // console.log(1 + true + '3' + false); //23false

    // console.log([] == ![]); //true
    
    // console.log(typeof function() {}); //function

    // console.log(typeof null); //Object
    // console.log(null instanceof Object); //false

    // console.log([] instanceof Array); //true
    // console.log([] instanceof Object); //truee
    
    // console.log({} instanceof Object); //true
    // console.log({} instanceof Array);   //false

    // console.log(new String('ada') instanceof String);
};

test();


