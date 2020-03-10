// CSV Reader Test
const reader = require('../csvReader.js');
const model = require('../Models/city.js')

test('Creating the model', () => {
    let city = new model();
    expect(city).toBeInstanceOf(model);
});
