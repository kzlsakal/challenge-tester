describe('reverseArray()', () => {
  it('should reverse a list of sorted integers', () => {
    reverseArray([1, 2, 3, 5]).should.deep.equal([5, 3, 2, 1]);
  });
});
