import { fibonacci } from "../src/index";

describe("fibonacci ", () => {
  const consoleLogSpy = jest.spyOn(console, "log");

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return '1' for 1", () => {
    expect(fibonacci(1)).toBe(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith("return value is 1");
  });

  it("should return null for -1", () => {
    expect(fibonacci(-1)).toBe(null);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Error: the number -1 is a negative value"
    );
  });
});
