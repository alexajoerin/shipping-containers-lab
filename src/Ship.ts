import ShippingContainer from "./models/ShippingContainer";
import Transporter from "./models/Transporter";

export default class Ship implements Transporter {
  maxWeight: number;
  containers: ShippingContainer[] = [];
  constructor(maxWeight: number) {
    this.maxWeight = maxWeight;
  }
  addContainer(container: ShippingContainer): void {
    this.containers.push(container);
  }
  getTotalWeight(): number {
    return this.containers.reduce((ac, cv) => ac + cv.getGrossWeight(), 0);
  }
  isOverweight(): boolean {
    return this.getTotalWeight() > this.maxWeight ? true : false;
  }
}
