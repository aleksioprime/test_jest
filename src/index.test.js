// const multiply = require('./index.js');
import {multiply} from "./index.js";
import {definePrime} from "./index.js";
import {reversString} from "./index.js";

// test('multiply 1 * 0 to equal 1', () => {
//     expect(multiply(1, 0)).toBe(0);
// });

xdescribe(
    "test multiply",
    () => {
    it('multiply 1 * 0 to equal 0', () => {
        const result = multiply(1,0);
        expect(result).toBe(0);
    }),
    it('multiply 1 * 1 to equal 1', () => {
        const result = multiply(1,1);
        expect(result).toBe(1);
    })}
);

xdescribe(
    "Tests for definePrime function", () => {
            it('should operate correctly with simple number', () => {
                expect(definePrime(17)).toBe(`Число 17 - простое число`);
            }),
            it('should operate correctly with complex number', () => {
                expect(definePrime(18)).toBe(`Число 18 - составное число`);
            }),
            it('should operate correctly with invalid number',() =>{
                expect(definePrime(1001)).toBe(`Данные неверны`);
            })

    });

xdescribe(
    "Tests for definePrime function", () => {
        it('should operate correctly with simple, complex, invalid number', () => {
            expect(definePrime(17)).toBe(`Число 17 - простое число`);
            expect(definePrime(18)).toBe(`Число 18 - составное число`);
            expect(definePrime(1001)).toBe(`Данные неверны`);
            })

    });

describe(
    "Test for Reverse String", () => {
        it('Reverse String', () => {
            expect(reversString('abcd')).toBe(`dcba`);
        })

    });
