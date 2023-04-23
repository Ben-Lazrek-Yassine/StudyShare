import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import Signin from "./Signin";
import Signup from "./Signup";
import Notifications from "./Notifications";
import Tables from "./Tables";
const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <BellIcon {...icon} />,
        name: "Feed",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Users",
        path: "/tables",
        element: <Tables />,
      },

    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/",
        element: <Signin />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
];

export default routes;
