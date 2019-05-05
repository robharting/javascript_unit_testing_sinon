const expect = require('chai').expect;

const index = require('./index.js');

describe('getTODOById', () => {
    it('todo has id of 1', (done) =>  {
        index.getTODOById(1)
        .then((todo) => {
            expect(todo.id).to.equal(1);
            done();
        })
            .catch((err) => {
            done(err)
            })
    });
});