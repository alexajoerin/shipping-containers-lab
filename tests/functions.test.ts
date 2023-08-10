import HeavyContainer from "../src/HeavyContainer";
import LightContainer from "../src/LightContainer";
import Ship from "../src/Ship";
import Truck from "../src/Truck";
import {
  findContainersByDestination,
  findOverweightTransporters,
  isSafeToAddContainer,
} from "../src/functions";
import Transporter from "../src/models/Transporter";

describe("findContainersByDestination function", () => {
  test("Do a test case with an array of LightContainer.", () => {
    const lightContainer1: LightContainer = new LightContainer("Miami", 10000);
    const lightContainer2: LightContainer = new LightContainer("Miami", 10000);
    const lightContainer3: LightContainer = new LightContainer(
      "Detroit",
      10000
    );
    const lightContainer4: LightContainer = new LightContainer(
      "Houston",
      10000
    );
    const containers = [
      lightContainer1,
      lightContainer2,
      lightContainer3,
      lightContainer4,
    ];
    expect(findContainersByDestination(containers, "Miami")).toEqual([
      lightContainer1,
      lightContainer2,
    ]);
  });
  test("Do a test case with an array that has a mix of LightContainer and HeavyContainer.", () => {
    const lightContainer1: LightContainer = new LightContainer("Miami", 10000);
    const lightContainer2: LightContainer = new LightContainer("Miami", 10000);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      10000,
      "Houston",
      50000
    );
    const heavyContainer2: HeavyContainer = new HeavyContainer(
      10000,
      "Houston",
      10000
    );
    const containers = [
      lightContainer1,
      lightContainer2,
      heavyContainer1,
      heavyContainer2,
    ];
    expect(findContainersByDestination(containers, "Houston")).toEqual([
      heavyContainer1,
      heavyContainer2,
    ]);
  });
});

describe("findOverweightTransporters function", () => {
  test("Do a test case with an array of Trucks, some overweight, some not.", () => {
    const truck1: Truck = new Truck(10000);
    truck1.addContainer(new LightContainer("Miami", 10001));
    const truck2: Truck = new Truck(10000);
    truck2.addContainer(new HeavyContainer(500, "Miami", 10000));
    const truck3: Truck = new Truck(10000);
    const truck4: Truck = new Truck(10000);
    const trucks: Truck[] = [truck1, truck2, truck3, truck4];
    expect(findOverweightTransporters(trucks)).toEqual([truck1, truck2]);
  });
  test("Do a test case with an array that has a mix of Truck and Ship, some overweight, some not.", () => {
    const truck1: Truck = new Truck(10000);
    truck1.addContainer(new LightContainer("Miami", 10001));
    const truck2: Truck = new Truck(10000);
    truck2.addContainer(new HeavyContainer(500, "Miami", 1000));
    const ship1: Ship = new Ship(100000);
    ship1.addContainer(new HeavyContainer(500, "Miami", 100000));
    const truck3: Truck = new Truck(10000);
    const transporters: Transporter[] = [truck1, truck2, ship1, truck3];
    expect(findOverweightTransporters(transporters)).toEqual([truck1, ship1]);
  });
  test("Do a test case with an array that has a mix of Truck and Ship, some overweight, some not.", () => {
    const truck1: Truck = new Truck(10000);
    truck1.addContainer(new LightContainer("Miami", 9000));
    const truck2: Truck = new Truck(10000);
    truck2.addContainer(new HeavyContainer(500, "Miami", 1000));
    const ship1: Ship = new Ship(100000);
    ship1.addContainer(new HeavyContainer(500, "Miami", 90000));
    const truck3: Truck = new Truck(10000);
    const transporters: Transporter[] = [truck1, truck2, ship1, truck3];
    expect(findOverweightTransporters(transporters)).toEqual([]);
  });
  test("Do a test case with an array that has a mix of Truck and Ship, some overweight, some not.", () => {
    expect(findOverweightTransporters([])).toEqual([]);
  });
});

describe("isSafeToAddContainer function", () => {
  test("isSafeToAddContainer returns true for an empty ship and empty LightContainer when transporter maxWeight is 5000.", () => {
    const ship: Ship = new Ship(5000);
    const lightContainer: LightContainer = new LightContainer(
      "Miami",
      undefined
    );
    expect(isSafeToAddContainer(ship, lightContainer)).toBe(true);
  });
  test("isSafeToAddContainer returns true for an empty ship and a LightContainer with some cargo, but less than maxWeight.", () => {
    const ship: Ship = new Ship(5000);
    const lightContainer: LightContainer = new LightContainer("Miami", 4000);
    expect(isSafeToAddContainer(ship, lightContainer)).toBe(true);
  });
  test("isSafeToAddContainer returns true for an empty ship and a HeavyContainer with some cargo, but less than maxWeight.", () => {
    const ship: Ship = new Ship(5000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      4000
    );
    expect(isSafeToAddContainer(ship, heavyContainer)).toBe(true);
  });
  test("isSafeToAddContainer returns false for an empty ship and a LightContainer with some cargo, more than maxWeight.", () => {
    const ship: Ship = new Ship(5000);
    const lightContainer: LightContainer = new LightContainer("Miami", 6000);
    expect(isSafeToAddContainer(ship, lightContainer)).toBe(false);
  });
  test("isSafeToAddContainer returns false for an empty ship and a HeavyContainer with some cargo, more than maxWeight.", () => {
    const ship: Ship = new Ship(5000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      6000
    );
    expect(isSafeToAddContainer(ship, heavyContainer)).toBe(false);
  });
  test("isSafeToAddContainer returns true for an empty ship and a container with the same gross weight as the maxWeight.", () => {
    const ship: Ship = new Ship(5000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      4500
    );
    expect(isSafeToAddContainer(ship, heavyContainer)).toBe(true);
  });
  test("Create a ship with one or more containers already added. isSafeToAddContainer returns true for a container that is light enough to be added to this ship.", () => {
    const ship: Ship = new Ship(50000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      4500
    );
    ship.addContainer(heavyContainer);
    const lightContainer: LightContainer = new LightContainer("Miami", 1000);
    expect(isSafeToAddContainer(ship, lightContainer)).toBe(true);
  });
  test("Create a ship with one or more containers already added. isSafeToAddContainer returns false for a container that is too heavy to be added to this ship.", () => {
    const ship: Ship = new Ship(50000);
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      4500
    );
    ship.addContainer(heavyContainer);
    const lightContainer: LightContainer = new LightContainer("Miami", 50000);
    expect(isSafeToAddContainer(ship, lightContainer)).toBe(false);
  });
});
