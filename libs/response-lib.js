/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-01-03 19:59:52
 * @Last Modified by:   Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-01-03 19:59:52
 */

export function success(body) {
  return buildResponse(200, body);
}

export function failure(body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}
