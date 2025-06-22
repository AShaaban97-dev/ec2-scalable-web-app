// Directory: bin/app.ts
// Import CDK libraries and stack constructs
import * as cdk from 'aws-cdk-lib';
import { VpcConstruct } from '../source/constructs/vpc';
import { AlbAsgConstruct } from '../source/constructs/alb-asg';

// Initialize CDK app and stack
const app = new cdk.App();
const stack = new cdk.Stack(app, 'ScalableWebAppStack');

// Instantiate VPC and ALB-ASG constructs
const vpcConstruct = new VpcConstruct(stack, 'Vpc');
new AlbAsgConstruct(stack, 'AlbAsg', {
  vpc: vpcConstruct.vpc,
});
