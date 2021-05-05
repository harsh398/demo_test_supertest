//Contains the test-cases 

const mocha = require('mocha');
const should = require('should');
const supertest = require('supertest');
const apiEndPointHelper = require('../helper/api_endpoints.js');
const apiHelper = require('../helper/api_helper.js');

let baseUrl = apiEndPointHelper.baseUrl;
let apiEndPoint = apiEndPointHelper.checkPokemon;

describe('Check Pokemon Api Suite', function () {
    describe('GET Request', function () {
        it('Should Get Pikachu', async function () {
            let res = await apiHelper.sendGETRequest(baseUrl, apiEndPoint);
            res.status.should.equal(200);
            res.should.have.property('name').which.is.a.String('thunder-punch')
            console.log("Response Status : " + res.status);
            console.log(res.headers)
            res = res.body;
            console.log(res);
            let count = Object.keys(res.moves).length;
            console.log("No of Moves : " + count)
            for (let i = 0; i < count; i++) {
                let response_body = res.moves[i].move;
                if (response_body.name == 'thunder-punch') {
                    console.log("Move Name = " + response_body.name + " " + "Pikachu Move is thunder-punch")
                }
            }
        });
    });
});
