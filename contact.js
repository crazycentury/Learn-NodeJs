// buat sistme input data diri yang disimpan di file json 
// fieldnya Nama, email, NoTelp
// penyelesaian 
// 1. buat prom input dulu
// 2. save ke json, kalo belom ada filenya suruh buat dulu

const readline = require('node:readline/promises');
const { stdin: input, stdout: output, throwDeprecation } = require('node:process');
const fs = require('node:fs/promises');
const path = require('node:path');

const rl = readline.createInterface({ input, output});

// function membuat file
async function writeFile(filePath, fileContent) {
    try{
        await fs.writeFile(filePath, fileContent);
        console.log(`File ${filePath} berhasil dibuat, Coba Cek`);
    } catch (err) {
        console.error(`Error saat membuat file ${filePath}`);
        throw err;
    }
}
   
// fuction create folder
async function createFolder(folderName) {
    try {
        await fs.mkdir(folderName, { recursive:true});
        console.log(`Folder ${folderName} berhasil dibuat`);
        return true;
    } catch(err) {
        console.error('Error, terjadi kesalahan saat membaut folder '+folderName, err);
        throw err;
    }
};

// function baca file kontak.json
async function readFile(filePath) {
    try {
        const dataFile = await fs.readFile(filePath, { encoding : 'utf-8'});
        // ?JSO.parse(dataFile);
        return JSON.parse(dataFile);;

    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error(`Error: File ${filePath} tidak ditemukan`);
        } else {
            console.error(`Error saat membaca file : `, err);
        }
        throw err;
    }
};

async function cekFolder(filePath, folderName){
    let dataArray = [];

    try {
        // cek folder/file
        await fs.access(filePath, fs.constants.F_OK);
        // kalo udah ada
        console.log(`Folder ${filePath} sudah ada`);
        dataArray = await readFile(filePath);

        return dataArray; // prose lanjut

    } catch (err) {
        // kalo error kita cek lagi itu karna foldernya sudah ada atau bukan
        if (err.code === 'ENOENT') {
            console.log('Folder belum ada, Membuat folder baru...');
            try {
                 // fungsi buat folder
                await createFolder(folderName);
                return dataArray;

            } catch (createErr) {
                console.error(`Error saat membuat folder ${folderName}`. createErr);
                throw createErr;
            }  
        } else {
            console.error(`Error saat cek file ${filePath}`, err);
            throw err;
        };
    };
};

async function fieldInput(question) {
    try {
        const answer = await rl.question(question);
        return answer;
    } catch (err) {
        console.log(`Error, terjadi kesalah saat input data`, err);
        throw err;
    }
    
};

//fungsi unutk menyimpan contact
const simpanContact = async (nama, email, telp) => {
    const folderName = 'daftar_kontak';
    const fileName = 'kontak.json';
    const filePath = path.join(folderName,fileName);

    try {
        let dataFile = await cekFolder(filePath, folderName);
        console.log('data dr file ',dataFile);

        // generate databaru
        const dataContent = {nama: nama, email: email, NoTelp: telp};

        // push data baru ke array
        dataFile.push(dataContent);

        console.log('dataFile setelha push ',dataFile);

        // format data ke string
        const fileContent = JSON.stringify(dataFile, null, 2);

        //fungsi unutk update file
        await writeFile(filePath, fileContent);


    } catch (err) {
        console.error('\nError pada aplikasi, silahkan cek console : ', err);
    } finally {
        rl.close();
    }
};

module.exports = { fieldInput, simpanContact};