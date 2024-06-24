import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Revealer from "@/layouts/Revealer";
import TunisLayout from "@/layouts/TunisLayout";

const Page = () => {
  return (
    <TunisLayout>
      <div className="w-full h-full pages overflow-hidden">
        <Home />

        <About />

        {/* <Portfolio /> */}

        <Contact />
      </div>
      <Revealer />
    </TunisLayout>
  );
};
export default Page;
