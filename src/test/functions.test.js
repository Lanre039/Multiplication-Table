const functions = require('./functions');

test('Array should NOT contain nonprime', () => {
    expect(functions.handlePrimeNo(10)).not.toContain(0,1,4,6,9);
});


test('Data length should be equal to the length of the returned array', () => {
    const data = functions.handlePrimeNo(30)
    expect(functions.handleTableData(data)).toHaveLength(data.length)
});


