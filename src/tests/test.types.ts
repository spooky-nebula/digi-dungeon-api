type TestFunction = () => TestResult;

type TestResult = {
  success: boolean;
  message?: string;
};
