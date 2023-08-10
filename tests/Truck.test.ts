import HeavyContainer from "../src/HeavyContainer";
import LightContainer from "../src/LightContainer";
import Truck from "../src/Truck";

describe("Truck class", () => {
  test("The maxWeight property is set from the constructor parameter.", () => {
    const truck: Truck = new Truck(10000);
    expect(truck.maxWeight).toBe(10000);
  });
  test("The container property is set to null in a new Truck instance.", () => {
    const truck: Truck = new Truck(10000);
    expect(truck.container).toBe(null);
  });
  test("Calling addContainer sets the container property.", () => {
    const truck: Truck = new Truck(10000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      20000
    );
    truck.addContainer(heavyContainer);
    expect(truck.container).toEqual(heavyContainer);
  });
  test("getTotalWeight returns the gross weight of the container when a container is added.", () => {
    const truck: Truck = new Truck(10000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      20000
    );
    truck.addContainer(heavyContainer);
    expect(truck.getTotalWeight()).toBe(20500);
  });
  test("getTotalWeight returns the gross weight of the container when a container is added.", () => {
    const truck: Truck = new Truck(10000);
    const lightContainer: LightContainer = new LightContainer("Detroit", 9000);
    truck.addContainer(lightContainer);
    expect(truck.getTotalWeight()).toBe(9000);
  });
  test("getTotalWeight returns 0 when container is null.", () => {
    const truck: Truck = new Truck(10000);
    expect(truck.getTotalWeight()).toBe(0);
  });
  test("isOverweight returns true when the total weight is greater than maxWeight.", () => {
    const truck: Truck = new Truck(10000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      20000
    );
    truck.addContainer(heavyContainer);
    expect(truck.isOverweight()).toBe(true);
  });
  test("isOverweight returns false when the total weight is less than maxWeight.", () => {
    const truck: Truck = new Truck(10000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      5000
    );
    truck.addContainer(heavyContainer);
    expect(truck.isOverweight()).toBe(false);
  });
  test("isOverweight returns false when the total weight is equal to maxWeight.", () => {
    const truck: Truck = new Truck(10000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      9500
    );
    truck.addContainer(heavyContainer);
    expect(truck.isOverweight()).toBe(false);
  });
});
