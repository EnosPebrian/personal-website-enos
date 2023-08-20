import img_elang from "./photos/altmap.PNG";
import img_todos from "./photos/todos.PNG";
import img_eventTicket from "./photos/event-ticket-management.PNG";
import img_crystalux from "./photos/Crystalux.PNG";
import img_expensetracker from "./photos/Expense tracker app.PNG";

export const works = [
  //   { name: ["a"], img_url: ["a"], description: ["a"] },

  {
    name: "Expense Tracker App",
    img_url: img_expensetracker,
    description: [
      "CRUD Expense data",
      "React app with expressJS REST API",
      "Responsive and Interactive UI",
    ],
  },
  {
    name: "Event Ticket Management App",
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
    img_url: img_todos,
    description: [
      "Build with ReactJS",
      "Works in search page and function",
      "CRUD todo and its subtask",
      "Login and Register system",
    ],
  },
  {
    name: "Crystalux",
    img_url: img_crystalux,
    description: [
      "Build with ReactJS",
      "CRUD products in UI",
      "Generate responsive UI",
    ],
  },
  {
    name: "Elang Project",
    img_url: img_elang,
    description: [
      "Conduct various technical field assignments with some project management",
      "Work with GIS and database",
      "Generat short python script to solve recurring tasks more efficient",
    ],
  },
];
