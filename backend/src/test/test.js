var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let should = chai.should();

expect = chai.expect;
chai.use(chaiHttp);

describe("Incidents", function () {
 
  it("Should Fecth all Incidents", (done) => {
    chai
      .request(server)
      .get("/incidents/")
      .end((err, result) => {
        result.should.have.status(200);

        var result = result.body;
        const total = result.length

        total.should.have.greaterThan(0)
        result.should.have.lengthOf(5)
        

        // var members = [];
        // result.forEach(function(e){
        //     members.push(e.title);
        // });

        // expect(members).to.have.members(['Titulo', 'Titulo 2', 'Titulo', 'Titulo', 'Titulo']);
        
        done();
      });
  });
});
// after('Exit mocha gracefully after finishing all tests execution', process.exit);