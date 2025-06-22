const { fieldInput, simpanContact} = require('./contact');

const main = async () => {
    console.log("----------------------------------");
    console.log("--- Silahkan Masukan Data Anda ---");
    console.log("----------------------------------");

    const nama = await fieldInput('Nama Lengkap : ');
    const email = await fieldInput('Email Address : ');
    const telp = await fieldInput('Nomor Telephone : ');

    simpanContact(nama, email, telp);
};

main();
