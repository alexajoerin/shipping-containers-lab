import Ship from "./Ship";
import ShippingContainer from "./models/ShippingContainer";
import Transporter from "./models/Transporter";

export const findContainersByDestination = (
  containers: ShippingContainer[],
  destination: string
): ShippingContainer[] => {
  return containers.filter((item) => destination === item.destination);
};

export const findOverweightTransporters = (
  transporters: Transporter[]
): Transporter[] => {
  return transporters.filter((item) => item.isOverweight());
};

export const isSafeToAddContainer = (
  ship: Ship,
  container: ShippingContainer
) => {
  ship.addContainer(container);
  return !ship.isOverweight();
};
