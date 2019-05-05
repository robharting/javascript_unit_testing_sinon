const expect = require('chai').expect;
const sinon  = require('sinon');
const request  = require('request');

const index = require('./index.js');

describe('todo exists: getTODOById', () => {
    before(() => {
        sinon
            .stub(request, 'get')
            .yields(null, null, JSON.stringify( {
                id: 1,
                title: 'todo by rob title',
                completed: false} ));
    });

    after(() => {
        request.get.restore();
    });

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

    it('todo has title and completed', (done) =>  {
        index.getTODOById(1)
            .then((todo) => {
                expect(todo).to.have.property('title');
                expect(todo).to.have.property('completed');
                done();
            })
            .catch((err) => {
                done(err)
            })
    });
});

describe('todo does not exist: getTODOById', () => {
    before(() => {
        sinon
            .stub(request, 'get')
            .yields(null, null, JSON.stringify( {} ));
    });

    after(() => {
        request.get.restore();
    });

    it('todo when this does not exists', (done) =>  {
        index.getTODOById('zzz')
            .then((todo) => {
                expect(todo.id).to.equal(undefined);
                done();
            })
            .catch((err) => {
                done(err)
            })
    });

});