// Import validation function 
const lambda = require('../../../src/handlers/validate-regex.js');

// This includes all tests for validateRegex function
describe('Test validateRegex', () => {

    // This test invokes validateRegexHandler and compares the result
    it('should test valid regex', async () => {
        const event = {
            httpMethod: 'POST',
            body: {numericCode:"43243445545665766787683"},
        };

        // Invoke function
        const result = await lambda.validateRegexHandler(event);
        const expectedResult = {
            statusCode: 200,
            body: {result: true}, 
        };
        // Compare the result with the expected result
        expect(result).toEqual(expectedResult);
    });


    // // now test an invalid case
    it('should test valid and invalid regex', async () => {    
        const event = {
            httpMethod: 'POST',
            body: { numericCode: "432434455456i65766787683" },
        };
        const result = await lambda.validateRegexHandler(event);
        const expectedResult = {
            statusCode: 200,
            body: { result: false },
        };
        // Compare the result with the expected result
        expect(result).toEqual(expectedResult);
    });

});
