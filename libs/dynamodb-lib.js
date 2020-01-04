/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-01-03 20:00:33
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-01-03 20:01:31
 */

import AWS from "aws-sdk";

export function call(action, params) {
  AWS.config.update({ region: "eu-central-1" });
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}
