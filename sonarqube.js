const scanner = require("sonarqube-scanner");
const dotenv = require("dotenv");

dotenv.config();

scanner(
  {
    // this example uses local instance of SQ
    serverUrl: process.env.SONAR_URL,
    options: {
      "sonar.projectKey": "node-ts-conventions",
      "sonar.projectVersion": "1.0.0",
      "sonar.login": process.env.SONAR_LOGIN,
      "sonar.sources": "src",
      "sonar.tests": "tests",
      "sonar.test.inclusions": "**/*.test.*",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "test-report.xml",
      "sonar.coverage.exclusions":
        "**/*.test.*,**/*.spec.js,**/*.spec.ts,**/*.mock.js,**/*.mock.ts,node_modules/*,coverage/lcov-report/*",
    },
  },
  () => process.exit()
);
