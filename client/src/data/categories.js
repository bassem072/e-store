import { faBaby, faBolt, faCamera, faCar, faChild, faChildDress, faComputer, faComputerMouse, faGauge, faHeadphones, faHeartPulse, faHouse, faHouseSignal, faIndustry, faLaptop, faMobileScreen, faPalette, faPaw, faPerson, faPersonDress, faPersonSkating, faSprayCan, faStopwatch, faSuitcaseRolling, faToolbox, faTv } from "@fortawesome/free-solid-svg-icons";

const categories = {
  1: {
    name: "Electronics",
    short_name: "electronics",
    icon: faBolt,
    count: 1,
  },
  2: {
    name: "Computers",
    short_name: "computers",
    icon: faComputer,
    count: 2,
  },
  3: {
    name: "Smart Home",
    short_name: "smart_home",
    icon: faHouseSignal,
    count: 3,
  },
  4: {
    name: "Arts & Crafts",
    short_name: "arts_and_crafts",
    icon: faPalette,
    count: 9,
  },
  5: {
    name: "Automotive",
    short_name: "automotive",
    icon: faGauge,
    count: 0,
  },
  6: {
    name: "Baby",
    short_name: "baby",
    icon: faBaby,
    count: 0,
  },
  7: {
    name: "Beauty & Personal Care",
    short_name: "beauty_and_personal_care",
    icon: faSprayCan,
    count: 2,
  },
  8: {
    name: "Women's Fashion",
    short_name: "woman's_fashion",
    icon: faPersonDress,
    count: 7,
  },
  9: {
    name: "Men's Fashion",
    short_name: "men's_fashion",
    icon: faPerson,
    count: 5,
  },
  10: {
    name: "Girls' Fashion",
    short_name: "girls'_fashion",
    icon: faChildDress,
    count: 0,
  },
  11: {
    name: "Boy's Fashion",
    short_name: "boy's_fashion",
    icon: faChild,
    count: 0,
  },
  12: {
    name: "Health & Household",
    short_name: "health_and_household",
    icon: faHeartPulse,
    count: 0,
  },
  13: {
    name: "Home & Kitchen",
    short_name: "home_and_kitchen",
    icon: faHouse,
    count: 3,
  },
  14: {
    name: "Industrial & Scientific",
    short_name: "industrial_and_scientific",
    icon: faIndustry,
    count: 0,
  },
  15: {
    name: "Luggage",
    short_name: "luggage",
    icon: faSuitcaseRolling,
    count: 7,
  },
  16: {
    name: "Pet Supplies",
    short_name: "pet_supplies",
    icon: faPaw,
    count: 3,
  },
  17: {
    name: "Sports & Outdoors",
    short_name: "sports_and_outdoors",
    icon: faPersonSkating,
    count: 0,
  },
  18: {
    name: "Tools & Home Improvement",
    short_name: "tools_and_home_improvement",
    icon: faToolbox,
    count: 0,
  },
};

export default categories;