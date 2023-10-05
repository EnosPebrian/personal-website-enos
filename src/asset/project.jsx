import img_elang from "./photos/altmap.PNG";
import img_todos from "./photos/todos.PNG";
import img_eventTicket from "./photos/event-ticket-management.PNG";
import img_crystalux from "./photos/Crystalux.PNG";
import img_expensetracker from "./photos/Expense tracker app.PNG";
import img_TheCoffeeSpace from "./photos/TheCoffeeSpace.png";
import img_social_media from "./photos/Repligram.png";

export const works = [
  {
    name: "Social media app (replica)",
    href: "https://socmed-app.vercel.app/home",
    img_url: img_social_media,
    description: [
      "React app with expressJS REST API using sequelize ORM",
      `Create user, account verification, login, and edit profile`,
      `Able to post photo, search post, search account`,
      `Simple messaging with web socket and notification`,
      `Able to like and follow`,
      `Responsive UI`,
    ],
  },
  {
    name: "Coffee Space (POS)",
    href: "https://the-coffee-space.vercel.app/",
    img_url: img_TheCoffeeSpace,
    description: [
      "React app with expressJS REST API using sequelize ORM",
      `Responsive and interactive UI`,
      `Protect page by user role`,
      `CRUD Transaction`,
      `Manage account and product`,
      `Report graph revenue`,
    ],
  },
  {
    name: "Expense Tracker App",
    href: "https://expense-tracker-ens.vercel.app/",
    img_url: img_expensetracker,
    description: [
      "CRUD expense data",
      "React app with expressJS REST API",
      "Responsive and interactive UI",
    ],
  },
  {
    name: "Event Ticket Management App",
    href: "https://event-ticket-management.vercel.app/",
    img_url: img_eventTicket,
    description: [
      "An app for event advertisement and discovery built upon ReactJS",
      "Works in search page and function",
      'Design "mock-database" schema',
      "CRUD event data",
      "design review and discussion section",
    ],
  },
  {
    name: "Todo List App",
    href: "https://todos-enospebrian1-gmailcom.vercel.app/login",
    img_url: img_todos,
    description: [
      "Build with ReactJS",
      "CRUD todo and its subtask",
      "Login and Register system",
    ],
  },
  {
    name: "Crystalux",
    href: "https://product-eight-iota.vercel.app/market",
    img_url: img_crystalux,
    description: [
      "Build with ReactJS",
      "CRUD products in UI",
      "Works in search page and function",
      "Generate responsive UI",
    ],
  },
  {
    name: "Elang Project",
    img_url: img_elang,
    href: "",
    description: [
      "Conduct various technical field assignments with some project management",
      "Work with GIS and database",
      "Generat short python script to solve recurring tasks more efficient",
    ],
  },
];
