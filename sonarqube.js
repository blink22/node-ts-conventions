const scanner = require("sonarqube-scanner");
const dotenv = require("dotenv");
const { default: axios } = require("axios");

dotenv.config();
const projectKey = "node-ts-conventions";

const checkProjectStatus = async () => {
  const projectStatus = await axios
    .get(`${process.env.SONAR_URL}/api/qualitygates/project_status`, {
      params: {
        projectKey,
      },
      auth: {
        username: process.env.SONAR_LOGIN,
        password: "",
      },
    })
    .then((response) => {
      return response?.data?.projectStatus;
    })
    .catch((error) => {
      console.log(`${error?.name}: ${error?.message}`);

      return null;
    });

  if (!projectStatus) {
    throw new Error("Failed to fetch Project Status");
  }

  console.table(projectStatus.conditions);
  
  if (projectStatus.status !== "OK") {
    throw new Error("QualityGate Failed!");
  }
};

scanner(
  {
    // this example uses local instance of SQ
    serverUrl: process.env.SONAR_URL,
    options: {
      "sonar.projectKey": projectKey,
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
  checkProjectStatus
);
