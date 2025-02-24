interface Item {
  name: string;
  icon: string;
  path: string;
}

export const MENU_DATA: Item[] = [
  {
    name: "Dashboard",
    icon: "material-symbols:home-outline-sharp",
    path: "/",
  },
  {
    name: "Products",
    icon: "material-symbols:shopping-bag-outline-sharp",
    path: "/products",
  },
  {
    name: "Payments",
    icon: "material-symbols:payments-outline-sharp",
    path: "/payments",
  },
  {
    name: "Orders",
    icon: "material-symbols:shopping-cart-outline-sharp",
    path: "/orders",
  },
  {
    name: "Castomers",
    icon: "material-symbols:person-outline-sharp",
    path: "/castomers",
  },
  {
    name: "Feedbacks",
    icon: "material-symbols:feedback-outline-sharp",
    path: "/feedbacks",
  },
  {
    name: "Settings",
    icon: "material-symbols:settings-outline-sharp",
    path: "/settings",
  },
  {
    name: "Help center",
    icon: "material-symbols:help-outline-sharp",
    path: "/help-center",
  },
];
