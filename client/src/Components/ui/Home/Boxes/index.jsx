import React from "react";
import coffeeMachine from "../../../../assets/images/products/coffee-machine.png";
import drone from "../../../../assets/images/products/drone.png";
import surfaceStudio from "../../../../assets/images/products/Surface-Studio.png";
import vacuumCleaner from "../../../../assets/images/products/vacuum-cleaner.png";
import Box from "./Box";

export default function Boxes() {
  const boxes = [
    {
      id: 1,
      name: "Apple",
      description: "New Product",
      route: "products?brand=apple",
      image: surfaceStudio,
      color: "bg-[#00C6A0]",
    },
    {
      id: 2,
      name: "Flying",
      description: "Quadcopter",
      route: "products?category=cameras-audio-video",
      image: drone,
      color: "bg-[#0A0A0B]",
    },
    {
      id: 3,
      name: "Clean",
      description: "Your Home",
      route: "products?category=smart-home",
      image: vacuumCleaner,
      color: "bg-[#FC9C1C]",
    },
    {
      id: 4,
      name: "Drink",
      description: "Coffee",
      route: "products?category=smart-home",
      image: coffeeMachine,
      color: "bg-[#8B1CE8]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-8 gap-y-4">
      {boxes.map((box) => (
        <Box key={box.id} box={box} />
      ))}
    </div>
  );
}
