import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,5,6);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(5);
    expect(triangle.side3).toEqual(6);
  });
  test('should correctly determine whether three lengths are not a triangle', () => {
    const notTriangle = new Triangle(4,10,23);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });
});