export type Navs = {
  id: number;
  name: string;
  routes: NavRoutes[];
};

export type NavRoutes = {
  id: number;
  name: string;
  path: string;
};

const navs: Navs[] = [
  {
    id: 1,
    name: "Group layouts",
    routes: [
      {
        id: 1,
        name: "Nested Layouts",
        path: "/layouts",
      },

      {
        id: 2,
        name: "Grouped Layouts",
        path: "/grouped",
      },
    ],
  },
  {
    id: 2,
    name: "File Convection",
    routes: [
      {
        id: 1,
        name: "loading.js",
        path: "/grouped",
      },

      {
        id: 2,
        name: "error.js",
        path: "/grouped",
      },
    ],
  },
  {
    id: 3,
    name: "Data fetching",
    routes: [
      {
        id: 1,
        name: "Static Site Generation",
        path: "/grouped",
      },

      {
        id: 2,
        name: "Server Side Rendering",
        path: "/grouped",
      },
    ],
  },
];

export { navs };
