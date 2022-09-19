import request from "supertest";
import reporter from "../helper/reporter";

let payload = {
        email: "eve.holt@regres.in",
        password: "pistol"
}

// // what is request
// console.log(`>> The typeof request: ${typeof request}`); //function
// console.log(`>> Number of args: ${request.length}`); // 1 arg is required
// console.log(`>> what is the definition of the funciton: ${request.toString()}`);

async function GET(
  testid: string,baseURL: string,endPoint: string,authToken: string,queryParam: object,
) {
  if (!baseURL || !endPoint) {
    throw Error(
      `One of the given basesURL: ${baseURL}, endPoint: ${endPoint} is not valid`
    );
  }
  baseURL = baseURL.trim();
  endPoint = endPoint.trim();
  reporter.addStep(testid, "info", `Making a GET to ${endPoint}`);
  try {
    return await request(baseURL)
      .get(endPoint)
      .query(queryParam)
      .auth(authToken, { type: "bearer" }) // best to try in Postman then input values here
      .set("Content-Type", "application.json") // best to try in Postman then input values here
      .set("Accept", "Application/json"); // best to try in Postman then input values here
  } catch (err) {
    err.message = `Error making a GET call to ${endPoint}, ${err}`
    throw err
  }
}

async function POST(
  testid: string,baseURL: string,endPoint: string,authToken: string,payload: object
) {
  if (!baseURL || !endPoint) {
    throw Error(
      `One of the given basesURL: ${baseURL}, endPoint: ${endPoint} is not valid`
    );
  }
  baseURL = baseURL.trim();
  endPoint = endPoint.trim();
  reporter.addStep(testid, "info", `Making a POST to ${endPoint}`);
  try {
    return await request(baseURL)
      .post(endPoint)
      .auth(authToken, { type: "bearer" }) // best to try in Postman then input values here
      .set("Content-Type", "application.json") // best to try in Postman then input values here
      .set("Accept", "Application/json") // best to try in Postman then input values here
      .send(payload)
  } catch (err) {
    err.message = `Error making a POST call to ${endPoint}, ${err}`
    throw err
  }
}

export default { GET, POST };

/**
 * https://regres.in
 * /api/users?pages=2
 * pages:2
 *
 */
