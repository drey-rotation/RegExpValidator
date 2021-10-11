Regular expression validator app

# Intro

The “Regular Expression Validator” is a REST API that accepts a numeric code and regular expression as input. If the input is validated by the expression, return true. Return false otherwise.

  - step 1: validate a non-numeric code using a regular expression. 
  - step 2: validate a numeric code using a regular expression.
    
    *- given an input and a regular expression:
    *- return true if input is validated, false otherwise

Validates whether the value of an associated input control matches the pattern specified by a regular expression.

You are given a numeric code of various lengths. The goal of the function is to check if the code begins with a 1, 2, or 3. If the number begins with either one of those numbers, return true. Return false otherwise.

My input number is an int. But the input number must be in a range from -2055 to 2055 and I want to check this by using regular expression.



# To install and use
The App is available at this URL: https://jksfjklfsjklfsjksfjklsfdajklsdf.

Just enter the info in the form, click “go” and you will get the result.

	UI OF THE APP

# Resources created
The app was developed using AWS SAM (Cloudformation), and NodeJS. The resources created by this stack include:

	- Api Gateway REST API.
	- Lambda Function “webValidator”, written in NodeJS.
  - an AWS CDK (Typescript) Cloudformation template.
	
Addition Resources Created or used in this project:

	- (optional) CI/CD Pipeline for building and deploying code to a dev and production environments.




Next Steps
Next steps are to create a CI/CD pipeline for the App including unit and integration tests, if necessary.



