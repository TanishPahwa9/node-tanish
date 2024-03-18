// run `node index.js` in the terminal
const express = require('express');
const app = express();
const Port = 3000;

app.post('/getinfo/bfhl', (req, res) => {
  const { data } = req.body;
  const evennum = [];
  const oddnum = [];
  const apha = [];
  const finder = () => {
    for (let i = 0; i < data.length; i++) {
      if (typeof (data[i] == Number)) {
        if (data[i] % 2 == 0) {
          evennum.push(data[i]);
        }
      }
    }
  };
  const oddfinder = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] >= 0 && data[i] <= 9) {
        if (data[i] % 2 != 0) {
          oddnum.push(data[i]);
        }
      }
    }
  };
  const aplhabetss = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] >= 'A' && data[i] <= 'Z') {
        apha.push(data[i]);
      }
    }
  };
  aplhabetss();
  finder();
  oddfinder();
  return res.status(200).json({
    success: true,
    user_id: 'Tanish_Pahwa_09072003',
    email: 'TanishPahwa36@gmail.com',
    roll_number: '2110991433',
    oddnumbers: oddnum,
    evennumbers: evennum,
    alphabets: apha,
  });
});
app.listen((Port) => {
  console.log(`App running on Port No ${Port} Successfully`);
});
