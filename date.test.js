const date = require('./date');

const birthday = new Date('December 1, 1995 03:24:00');
const day = new Date('December 3, 1995 03:24:00');


describe('test', () => {
    test('first date', () => {
        expect(date(birthday)).toBeTruthy();
    });
    test('not a first date', () => {
        expect(date(day)).toBeFalsy();
    });
});