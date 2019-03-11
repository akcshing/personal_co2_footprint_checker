const assert = require('assert');
const FpCalculator = require('../fp_calculator.js');

describe('FpCalculator', function () {

  let fpCalculator;

  beforeEach(function () {
    fpCalculator = new FpCalculator();
    scoreObject = {diet: 3, commute: 3, recycling:3};

  });

  it('should be able to calculate added scores', function () {
    const expected = 9;
    assert.strictEqual(fpCalculator.addScores(scoreObject), expected)

  });

});
