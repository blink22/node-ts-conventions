import { fibonacci } from "../src/index";

describe("fibonacci ", () => {
  const consoleLogSpy = jest.spyOn(console, "log");
  const consoleErrorSpy = jest.spyOn(console, "error");

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return '1' for 1", () => {
    expect(fibonacci(1)).toBe(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith("return value is 1");
    expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
  });

  it("should return null for -1", () => {
    expect(fibonacci(-1)).toBe(null);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error: the number -1 is a negative value"
    );
    expect(consoleLogSpy).toHaveBeenCalledTimes(0);
  });
});
