import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import * as s3 from '@aws-cdk/aws-s3';
import { App, CfnParameter, Duration, Stack, StackProps } from '@aws-cdk/core';


export class CdkStack extends Stack {
    constructor(scope: App, id: string, props: StackProps) {
        super(scope, id, props);

        new CfnParameter(this, 'AppId');

        // The code will be uploaded to this location during the pipeline's build step
        const artifactBucket = s3.Bucket.fromBucketName(this, 'ArtifactBucket', process.env.S3_BUCKET!);
        const artifactKey = `${process.env.CODEBUILD_BUILD_ID}/function-code.zip`;
        const code = lambda.Code.fromBucket(artifactBucket, artifactKey);

        const environment = { SAMPLE_TABLE: "none" };

        // This is a Lambda function config associated with the source code: validate-regex.js
        const validateRegexFunction = new lambda.Function(this, 'validateRegex', {
            description: 'accepts a numeric code as input, and returns the validation of that code using a regular expression.',
            handler: 'src/handlers/validate-regex.validateRegexHandler',
            runtime: lambda.Runtime.NODEJS_14_X,
            code,
            timeout: Duration.seconds(60),
            environment,
        });

        const api = new apigateway.RestApi(this, 'ServerlessRestApi', { cloudWatchRole: false });
        api.root.addMethod('POST', new apigateway.LambdaIntegration(validateRegexFunction));
    }
}
