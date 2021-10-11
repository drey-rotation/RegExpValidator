// Create clients and set shared const values outside of the handler

// Create a DocumentClient that represents the query to add an item
const dynamodb = require('aws-sdk/clients/dynamodb');

const docClient = new dynamodb.DocumentClient();

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

/**
 * A simple example includes a HTTP post method to add one item to a DynamoDB table.
 */
exports.validateRegexHandler = async (event) => {
    const { body, httpMethod, path } = event;
    console.log('ValidateRegex received:', JSON.stringify(event));

    try {
        // Get numericCode from the body of the request
        const { numericCode } = JSON.parse(body);
        var regex = /^\d+$/;
        var result = regex.test(numericCode);
    } catch (e) {
        console.log(e);
        return ( {statusCode: 500, body: {result: false, error: e.message}})
    }

    const response = {
        statusCode: 200,
        body: {result: result}, 
    };

    return response;
};
