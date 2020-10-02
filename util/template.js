const template = (scripts) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Challenge Tester</title>
    <link rel="icon" href="favicon.ico">
    <!-- Include Mocha CSS styles -->
    <link href="/mocha.css" rel="stylesheet">
  </head>
  <body>
    <div id="mocha"></div>
    <!-- Add the Chai assertion library -->
    <script src="/chai.js"></script>
    <!-- Add the Mocha test library -->
    <script src="/mocha.js"></script>
    <script>
      // Initialize chai methods globally
      chai.should();
      var expect = chai.expect;
      var assert = chai.assert;
      // Setup Mocha to use the BDD interface
      mocha.setup('bdd');
    </script>
    <!-- Import the challenge and test scripts -->
    ${scripts.map((file) => `<script src="${file}"></script>`).join('')}
    <script>
      // Run the tests with Mocha
      mocha.run();
    </script>
  </body>
  </html>
`;

module.exports = template;
