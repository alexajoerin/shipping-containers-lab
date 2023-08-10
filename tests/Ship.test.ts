import HeavyContainer from "../src/HeavyContainer";
import LightContainer from "../src/LightContainer";
import Ship from "../src/Ship";

describe("Ship class", () => {
  test("The maxWeight property is set from the constructor parameter.", () => {
    const ship: Ship = new Ship(100000);
    expect(ship.maxWeight).toBe(100000);
  });
  test("The containers property is set to an empty array in a new Ship instance.", () => {
    const ship: Ship = new Ship(100000);
    expect(ship.containers).toEqual([]);
  });
  test("Calling addContainer adds to the containers array property.", () => {
    const ship: Ship = new Ship(100000);
    const lightContainer: LightContainer = new LightContainer("Miami", 10000);
    ship.addContainer(lightContainer);
    expect(ship.containers).toEqual([lightContainer]);
  });
  test("Calling addContainer twice adds both containers to the containers array property.", () => {
    const ship: Ship = new Ship(100000);
    const lightContainer: LightContainer = new LightContainer("Miami", 10000);
    const lightContainer2: LightContainer = new LightContainer("Miami", 10000);
    ship.addContainer(lightContainer);
    ship.addContainer(lightContainer2);
    expect(ship.containers).toEqual([lightContainer, lightContainer2]);
  });
  test("getTotalWeight returns the combined gross weight of the containers in the array.", () => {
    const ship: Ship = new Ship(100000);
    const lightContainer: LightContainer = new LightContainer("Miami", 10000);
    const lightContainer2: LightContainer = new LightContainer("Miami", 10000);
    ship.addContainer(lightContainer);
    ship.addContainer(lightContainer2);
    expect(ship.getTotalWeight()).toBe(20000);
  });
  test("getTotalWeight returns the combined gross weight of the containers in the array.", () => {
    const ship: Ship = new Ship(100000);
    const lightContainer: LightContainer = new LightContainer("Miami", 10000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      10000,
      "Detroit",
      50000
    );
    ship.addContainer(lightContainer);
    ship.addContainer(heavyContainer);
    expect(ship.getTotalWeight()).toBe(70000);
  });
  test("getTotalWeight returns 0 when containers is empty.", () => {
    const ship: Ship = new Ship(100000);
    expect(ship.getTotalWeight()).toBe(0);
  });
  test("isOverweight returns true when the total weight is greater than maxWeight.", () => {
    const ship: Ship = new Ship(100000);
    const lightContainer: LightContainer = new LightContainer("Miami", 10000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      10000,
      "Detroit",
      90000
    );
    ship.addContainer(lightContainer);
    ship.addContainer(heavyContainer);
    expect(ship.isOverweight()).toBe(true);
  });
  test("isOverweight returns false when the total weight is less than maxWeight.", () => {
    const ship: Ship = new Ship(100000);
    const lightContainer: LightContainer = new LightContainer("Miami", 10000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      10000,
      "Detroit",
      70000
    );
    ship.addContainer(lightContainer);
    ship.addContainer(heavyContainer);
    expect(ship.isOverweight()).toBe(false);
  });
  test("isOverweight returns false when the total weight is equal to maxWeight.", () => {
    const ship: Ship = new Ship(100000);
    const lightContainer: LightContainer = new LightContainer("Miami", 10000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      10000,
      "Detroit",
      80000
    );
    ship.addContainer(lightContainer);
    ship.addContainer(heavyContainer);
    expect(ship.isOverweight()).toBe(false);
  });
});
