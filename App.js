
// buat sistme input data diri yang disimpan di file json 
// fieldnya Nama, email, NoTelp
// penyelesaian 
// 1. buat prom input dulu
// 2. save ke json, kalo belom ada filenya suruh buat dulu

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const fs = require('node:fs');
const path = require('node:path');

const rl = readline.createInterface({ input, output});

const folderName = 'daftar_kontak';
const fileName = 'kontak.json';
const filePath = path.join(folderName,fileName);

rl.question(' Masukan Nama Anda : ', (nama) => {
    rl.question(' Masukan Email Anda : ', (email) => {
        rl.question(' Masukan NoTelp Anda : ', (NoTelp) => {

            fs.mkdir(folderName, { recursive: true }, (err) => {
                if (err) {
                    console.log(`Error saat membuat folder ${folderName}`, err);
                    return;
                }

                let dataContent = [{nama: nama, email: email, NoTelp: NoTelp}];
                let fileContent = JSON.stringify(dataContent, null, 2);

                fs.writeFile(filePath, fileContent, (fileErr) => {
                    if(fileErr) { 
                        console.log(`Error saat membuat file ${fileName}`);
                        return;
                    }
                    console.log(`File ${fileName} berhasil dibuat, Coba Cek`);
                })
            })

        rl.close();
        });
    });
});