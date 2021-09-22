import config from './test.config';

export default function Test() {
  console.log('Running various tests, might take a while\n');

  let testResultList: TestResult[] = new Array(config.tests.length);
  let testsPassed = 0,
    testsFailed = 0;
  let testFailMessages: String[] = [];

  // Run the tests
  config.tests.forEach((element, index) => {
    testResultList[index] = element();
  });

  // Check results
  testResultList.forEach((result) => {
    if (result.success) {
      testsPassed++;
    } else {
      testsFailed++;
      if (result.message) {
        testFailMessages.push(result.message);
      }
    }
  });

  // Report any failures
  testFailMessages.forEach((message) => {
    console.log(message);
  });

  // Report the results
  console.log('\n');
  console.log('Tests passed:', testsPassed, 'Tests failed:', testsFailed);
  console.log('\n');

  if (testsFailed == 0) {
    console.log('All tests completed successfully');
    process.exit(0);
  } else {
    console.log('Some tests failed, check console output');
    process.exit(1);
  }
}

Test();
