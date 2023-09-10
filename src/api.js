const { LoLHuman } = require('lolhuman-api')
const lolhuman = new LoLHuman('yuliyanazakiyaf')

lolhuman.apikey = 'yuliyanazakiyaf'
lolhuman
  .jadwalSholat()
  .then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.error(e.message)
  })