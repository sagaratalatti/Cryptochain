const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {

    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('Abhijeet is a Dog')).toEqual('477dd18c26f72ff4e9ba48a810e313edb2551c0041531c9ad90e4a6bf4cbb044');
    });

    it('produces the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'one', 'two'));
    });
});