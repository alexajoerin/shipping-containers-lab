import ShippingContainer from "./models/ShippingContainer";
import Transporter from "./models/Transporter";

export default class Truck implements Transporter {
  maxWeight: number;
  container: ShippingContainer | null = null;
  constructor(maxWeight: number) {
    this.maxWeight = maxWeight;
  }
  addContainer(container: ShippingContainer): void {
    this.container = container;
  }
  getTotalWeight(): number {
    if (this.container) {
      return this.container.getGrossWeight();
    } else {
      return 0;
    }
  }
  isOverweight(): boolean {
    return this.getTotalWeight() > this.maxWeight ? true : false;
  }
}
