const inputPath = process.argv[2];
const outputPath = process.argv[3];
const Compactor = require('./Compactor');

const compactor = new Compactor();

compactor.compact(inputPath, outputPath);
