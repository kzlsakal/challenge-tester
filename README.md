# challenge-tester
Runs Mocha & Chai in the browser for categorized JS functions by reading the
script files recursively.

## Usage Example
- Install dependencies  by running the following command on terminal:

  $ `npm install`

- Create a category folder named `week1` under `challenges` directory

- Add your function in `challenges/week1/reverseArray.js`
  ```
  const reverseArray = (array) => {
    const reversed = [];
    array.forEach((item) => reversed.unshift(item));
    return reversed;
  }
  ```

- Add the test in `challenges/week1/reverseArray.test.js`
  ```
  describe('reverseArray()', () => {
    it('should reverse a list of sorted integers', () => {
      reverseArray([1, 2, 3, 5]).should.deep.equal([5, 3, 2, 1]);
    });
  });
  ```

- Start the server by running the following command on terminal:

  $ `npm start`

- Go to http://localhost:3000 on your preferred browser

## Requirements
- Node v12.18.1

## Notes
- Running $ `npm test` command starts the server and while watching file changes

- It supports all three [Chai Methods](https://www.chaijs.com/)

- The script files need to be under category directories

- Nested categories are not currently supported

- If you would like to save your challenges on the repository, remove the
following line from the `.gitignore` file:
  - `challenges/*/`
