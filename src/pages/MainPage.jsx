import { About } from "../components/About";
import { TopNavbar } from "../components/Navbar";
import { Works } from "../components/Works";
import { Cover } from "../components/cover";

export const MainPage = () => {
  return (
    <>
      <TopNavbar />
      <section>
        <Cover />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Works />
      </section>
    </>
  );
};
