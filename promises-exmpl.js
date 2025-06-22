// Contoh penggunan promisses
const fs = require('node:fs/promises');
//bisa juga gini panggil fugnis yang mau di pkae
const { writeFile } = require('node:fs/promises');

//contoh buat fungsinya
async function createFile(filePath, fileContent) {
    try {
        await writeFile(filePath, fileContent);
        console.log(`File berhasil dibuat ${filePath}`);
    } catch (err) {
        console.error(' Terjadi kesalaha ', err)
    }
}

// panggil deh bair bisa di pake
const myFilePath = 'TestFile.txt';
const myFileContent = 'Ini sebuah kontent file test';
createFile(myFilePath, myFileContent);