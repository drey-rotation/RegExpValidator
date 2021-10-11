## Regular expression validator app

The “Regular Expression Validator” is a REST API that accepts a numeric code (i.e. arbitrary number of number digits like "123345") as input and returns true if the input is a valid numeric code. Return false otherwise.
# To install and use
    The App consists of an API Gateway API with one root path. It's available at this URL: https://tfar60xxu1.execute-api.us-west-2.amazonaws.com/prod/

    Call using Curl:

	curl -H https://tfar60xxu1.execute-api.us-west-2.amazonaws.com/prod/ -d "{\"numericCode\":\"123\"}"

# Resources created
The app was developed using AWS SAM (Cloudformation), and NodeJS. The resources created by this stack include:

	- Api Gateway REST API.
	- Lambda Function “webValidator”, written in NodeJS.
  - an AWS CDK (Typescript) Cloudformation template.
	
Addition Resources Created or used in this project:

	- (optional) CI/CD Pipeline for building and deploying code to a dev and production environments.


Next Steps
Next steps are to create a CI/CD pipeline for the App including unit and integration tests, if necessary.



