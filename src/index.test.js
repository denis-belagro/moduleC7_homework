//const multiply = require('./index.js'); //math-utils
import {multiply} from "./index.js"

describe("test multiply", () =>{
    it('multiply 1 * 0 to equal 1', () => {
    const result = multiply(1, 0)
  expect(result).toBe(0);
})
it('multiply 1 * 1 to equal 1', () => {
    const result = multiply(1, 1)
  expect(result).toBe(1);
})
}
);
describe("test multiply 2", () =>{
    it('multiply 1 * 0 to equal 1', () => {
    const result = multiply(1, 0)
  expect(result).toBe(0);
})
it('multiply 1 * 1 to equal 1', () => {
    const result = multiply(1, 1)
  expect(result).toBe(1);
})
}
);