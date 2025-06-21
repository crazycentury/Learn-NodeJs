
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

            // cek folder & file udah ada apa belum
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        // fungsi buat folder
                        fs.mkdir(folderName, { recursive: true }, (err) => {
                            if (err) {
                                console.log(`Error saat membuat folder ${folderName}`, err);
                                return;
                            }
                            // generate contetnnya
                            let dataContent = [{nama: nama, email: email, NoTelp: NoTelp}];
                            let fileContent = JSON.stringify(dataContent, null, 2);

                            //fungsi buat dan nulis filenya
                            fs.writeFile(filePath, fileContent, (fileErr) => {
                                if(fileErr) { 
                                    console.log(`Error saat membuat file ${fileName}`);
                                    return;
                                }
                                console.log(`File ${fileName} berhasil dibuat, Coba Cek`);
                            });
                        });
                    }else {
                        console.log(`Error saat akses file ${filePath}`, err);
                    }

                }else{

                    // ini siasi array kosong untuk nampung
                    let jsonData = [];

                    // baca data dari file kontak.json
                    fs.readFile(filePath, { encoding: 'utf-8'}, (err, dataFile) => {
                        if (err) {
                            if (err.code === 'ENOENT') {
                                console.error(`Error: File ${filePath} tidak ditemukan`);
                            } else {
                                console.error(`Error saat membaca file : `, err);
                            }
                            return;
                        }

                        // file dapat, masukan ke array
                        jsonData = JSON.parse(dataFile);
                        console.log('isi file ', filePath);
                        console.log(jsonData);

                        // generate databaru
                        let dataContent = {nama: nama, email: email, NoTelp: NoTelp};

                        // push data baru ke array
                        jsonData.push(dataContent);

                        // format data ke string
                        const fileContent = JSON.stringify(jsonData, null, 2);

                        //fungsi buat update data dan nulis filenya
                        fs.writeFile(filePath, fileContent, { encoding: 'utf8'}, (fileErr) => {
                            if(fileErr) { 
                                console.log(`Error saat membuat file ${fileName}`);
                                return;
                            }
                            console.log(`File ${fileName} berhasil diupdate, Coba Cek`);
                            console.log('isi file ', filePath);
                            console.log(jsonData);
                        }); 
                    });
                };
            });

        rl.close();
        });
    });
});