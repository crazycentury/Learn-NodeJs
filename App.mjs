// const { fieldInput, simpanContact} = require('./contact');



// const main = async () => {
//     console.log("----------------------------------");
//     console.log("--- Silahkan Masukan Data Anda ---");
//     console.log("----------------------------------");

//     const nama = await fieldInput('Nama Lengkap : ');
//     const email = await fieldInput('Email Address : ');
//     const telp = await fieldInput('Nomor Telephone : ');

//     simpanContact(nama, email, telp);
// };

// main();
import yargs from "yargs";
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Alamat Email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'Nomor HP',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        const contact = {
            nama: argv.nama,
            email: argv.email,
            noHP: argv.noHP,
        };
        console.log(contact);
    }
}).help().argv;

// yargs.parse();

