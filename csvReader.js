// CSV Reader Class
class csvReader{
  static getRecords(filePath,modelType){

    const parse = require('csv-parse');
    const fs = require('fs');

    const fileToBeRead = filePath;
    const models = require(modelType);

    let results = [];
    let resultsNumber = 0;
    fs.createReadStream(fileToBeRead)
    .pipe(parse({
        columns: true,
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })

    .on('readable', function(){
        let record
        while (record = this.read()) {
            let model = new models(record)
            results.push(record)
            resultsNumber++;
        }
    })

    .on('end', function(){
        return results;
        //return console.log(results);
    }));
    return results;
  }

  static countRecords(filePath,modelType){

    const parse = require('csv-parse');
    const fs = require('fs');

    const fileToBeRead = filePath;
    const models = require(modelType);

    let results = [];
    let resultsNumber = 0;
    fs.createReadStream(fileToBeRead)
    .pipe(parse({
        columns: true,
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })

    .on('readable', function(){
        let record
        while (record = this.read()) {
            let model = new models(record)
            results.push(record)
            resultsNumber++;
        }
    })

    .on('end', function(){
        return resultsNumber;
        //return console.log(resultsNumber);
    }));
  }
}

module.exports = csvReader;