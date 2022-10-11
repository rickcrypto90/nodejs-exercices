import { writeFile, readFile } from 'node:fs';

const data = "Hey Bro"
writeFile('./message.txt', data, "utf8", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})

})