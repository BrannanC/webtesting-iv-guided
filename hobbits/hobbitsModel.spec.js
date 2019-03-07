const request = require('supertest');

const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel');

describe('Hobbits', () => {
    describe('insert()', () => {
        afterEach(async () => {
           await db('hobbits').truncate();
        })

        it('insert hobbit', async () => {
            const hobbit = await Hobbits.insert({name: 'sam'});
            expect(hobbit.name).toBe('sam');
        });
    });
});