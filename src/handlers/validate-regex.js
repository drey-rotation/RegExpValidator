

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
        return ({
            statusCode: 200,
            body: JSON.stringify({ result: false, error: e.message }),
        })
    }

    const response = {
        statusCode: 200,
        result: JSON.stringify({ result: result, error: false }),
    };

    return response;
};


