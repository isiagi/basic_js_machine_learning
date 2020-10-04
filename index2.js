const brain = require('brain.js')
const data = require('./data.json')

const network = new brain.recurrent.LSTM();

const trainData = data.map(item => ({
    input: item.text,
    output: item.name
}))

network.train(trainData, {
    iterations: 2000
})

const output = network.run('i love cooking');

console.log(output);