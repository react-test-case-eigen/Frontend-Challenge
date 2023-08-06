import { FC } from "react";
import PictHuge from "../assets/eduhub-register.jpg";

export const Card: FC = () => {
  return (
    <div>
      <figure>
        <img className="h-full zoom-in-effect" src={PictHuge} alt="Pict Huge" />
      </figure>
      <p className="text-red-700 font-semibold my-2 hover:underline">
        Russia-Ukraina War
      </p>
      <p className="text-2xl font-bold hover:text-slate-800">
        Historic Kherson cathedral struck by Russian shelling
      </p>
      <p className="my-7 max-w-md text-lg">
        Landmark site was the burial place of Prince Grigory Potemkin, whose
        bones were removed by Russian occupying forces last year
      </p>
      <p className="font-bold hover:underline hover:text-red-700 mb-16">
        Sophia Kishkovsky2 days ago
      </p>
    </div>
  );
};

export const CardNoPict = () => {
  return (
    <div className="text-lg">
      <p className="mb-3 mt-8">4 August 2023</p>
      <p className="font-bold">
        Barbican arts chief Will Gompertz appointed director of London's Sir
        John Soane’s Museum
      </p>
    </div>
  );
};
