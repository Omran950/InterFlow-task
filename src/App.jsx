import Branches from "./Components/Branches/Branches";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/SideBar/SideBar";

export default function App() {
  return (
    <>
      <div className="flex flex-row-reverse">
        <SideBar />
        <div className="flex-grow me-[260px]">
          <Branches />
        </div>
      </div>
      <Footer />
    </>
  );
}
