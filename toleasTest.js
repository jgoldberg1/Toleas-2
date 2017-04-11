QUnit.test( "test randPhonemeC function", function( assert ) {

    var result = randPhoneme(rank = );
    assert.deepEqual(result, "rankOne[1-13]", "We expect result to be rankOne");
});


    // Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('1');
    Calculator.addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});
