// CSV Reader Test
const reader = require('../csvReader.js');
const model = require('../Models/city')

test('Creating the model', () => {
    let city = new model();
    expect(city).toBeInstanceOf(model);
});