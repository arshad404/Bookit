import * as chai from "chai";
import chaiHttp = require("chai-http");
chai.use(chaiHttp);

let chaiLib = <any>chai;
let chaiRequestLib = chaiLib.default.request;

import { expect } from "chai";
var assert = require("assert");

import { app } from "../src/app";

describe("signout API", () => {
  // it("signout", (done) => {
  //   chaiRequestLib(app)
  //     .get("/api/users/signout")
  //     .then((res: any) => {
  //       expect(res).to.have.status(200);
  //       done();
  //     })
  //     .catch(done);
  // });
  it("signout", async () => {
    const res = await chaiRequestLib(app).get("/api/users/signout");
    expect(res).to.have.status(200);
  });
});
