import { faChartPie, faGear, faUserGear, faUserPlus, faUserShield, faUsers } from "@fortawesome/free-solid-svg-icons";

const sidebar = [
  {
    isList: false,
    name: "Dashboard",
    route: "/dashboard",
    icon: faChartPie,
    count: 1,
  },
  {
    isList: true,
    name: "Admins",
    icon: faUserShield,
    list: [
      {
        isList: false,
        name: "All Admins",
        route: "/dashboard/admins",
        icon: faUsers,
        count: 1,
      },
      {
        isList: false,
        name: "Add Admins",
        route: "/dashboard/admins/add",
        icon: faUserPlus,
        count: 5,
      },
    ],
  },
  {
    isList: true,
    name: "Moderators",
    icon: faUserGear,
    list: [
      {
        isList: false,
        name: "All Moderators",
        route: "/dashboard/moderators",
        icon: faUsers,
        count: 1,
      },
      {
        isList: false,
        name: "Add Moderators",
        route: "/dashboard/moderators/add",
        icon: faUserPlus,
        count: 1,
      },
    ],
  },
  {
    isList: false,
    name: "Setting",
    route: "/dashboard/setting",
    icon: faGear,
  },
];

export default sidebar;