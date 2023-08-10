import LightContainer from "../src/LightContainer";

describe("LightContainer class", () => {
  test("The destination and cargoWeight properties are set from the constructor parameters.", () => {
    const lightContainer: LightContainer = new LightContainer("Miami", 10000);
    expect(lightContainer.destination).toBe("Miami");
    expect(lightContainer.cargoWeight).toBe(10000);
  });
  test("cargoWeight defaults to 0, when the second constructor parameter is omitted.", () => {
    const lightContainer: LightContainer = new LightContainer(
      "Miami",
      undefined
    );
    expect(lightContainer.cargoWeight).toBe(0);
  });
  test("getGrossWeight returns the cargoWeight (write 2 test cases with different cargoWeights)", () => {
    const lightContainer: LightContainer = new LightContainer("Miami", 20000);
    expect(lightContainer.getGrossWeight()).toBe(20000);
  });
  test("getGrossWeight returns the cargoWeight (write 2 test cases with different cargoWeights)", () => {
    const lightContainer: LightContainer = new LightContainer("Miami", 25000);
    expect(lightContainer.getGrossWeight()).toBe(25000);
  });
  test("getGrossWeight returns the cargoWeight (write 2 test cases with different cargoWeights)", () => {
    const lightContainer: LightContainer = new LightContainer(
      "Miami",
      undefined
    );
    expect(lightContainer.getGrossWeight()).toBe(0);
  });
});
