import Brands from "./Brands";
import DeviceSlider from "./DeviceSlider";

export default function Devices() {
  return (
    <section className="flex h-screen items-center" id="devices">
      <div className="container mx-auto">
        <Brands />
        <DeviceSlider />
      </div>
    </section>
  );
}
