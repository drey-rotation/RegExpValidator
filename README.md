## Regular expression validator app

The “Regular Expression Validator” is a REST API that accepts a numeric code (i.e. arbitrary number of number digits like "123345") as input and returns true if the input is a valid numeric code. Return false otherwise.

This application uses the AWS Cloud Developer Kit to create and provision the resources. The CDK for this app is a typescript program used to define all necessary resources programatically. The application has a pre-build stage where this CDK files are converted to cloudformation templates. From here, I use AWS SAM to develop and debug the program locally before deploying.

## To use
    The App consists of an API Gateway API with one root path. The API Gateway REST endpoint is public and requires no API Key or credentials. You can test the API using curl like this: 
      
>       curl -X POST 'https://tfar60xxu1.execute-api.us-west-2.amazonaws.com/prod/' \
>        -H 'content-type: application/json' \
>        -d '{"numericCode": "432434455456i65766787683"}'

The return value from above call:

>       {"result":false,"error":false}

## Resources created

The app was developed using AWS CDK, NodeJS and Typescript. The resources created by this stack include:

    - Api Gateway REST API.
    - Lambda Function “webValidator”, written in NodeJS.
    - an AWS CDK (Typescript) application that creates the Cloudformation template for the lambda function and API.
    - CodePipeline and Codebuild projects for building and deploying the lambda application.
    - An S3 bucket and IAM roles required to run the pipeline. 

This project includes the following files and folders:

    - src - Code for the application's Lambda function.
    - events ???- Invocation events that you can use to invoke the function.
    - \_\_tests__ - Unit tests for the application code. There are tests for valid and invalid digits.
    - cdk - The Cloud Developer Kit model that defines the application's AWS resources. The stack for the lambda function is defined in cdk/lib/cdk-stack.ts.
    - buildspec.yml -  A build specification file that tells AWS CodeBuild how to create a deployment package for the function.


