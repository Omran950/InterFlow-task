import { useEffect, useState } from "react";
import AddBranch from "./AddBranch";
import AllBranches from "./AllBranches";
import Header from "./Header";
import Tabs from "./Tabs";

export default function Branches() {
  const [branches, setBranches] = useState([
    { _name: "الاء", phone: "01025896554", address: "cairo" },
    { _name: "نجمتي", phone: "01025896554", address: "alex" },
    { _name: "ست البنات", phone: "01025896554", address: "mansoura" },
    { _name: "فجلتي", phone: "01025896554", address: "mahala" },
    { _name: "حياتي", phone: "01025896554", address: "aswan" },
    { _name: "قلبي", phone: "01025896554", address: "cairo" },
    { _name: "ام لارا", phone: "01025896554", address: "cairo" },
    { _name: "لوكا", phone: "01025896554", address: "cairo" },
    { _name: "حبيبتي", phone: "01025896554", address: "cairo" },
    { _name: "لولي", phone: "01025896554", address: "damietta" },
    { _name: "الوءتي", phone: "01025896554", address: "cairo" },
    { _name: "الوءتي", phone: "01025896554", address: "cairo" },
  ]);

  const deleteBranch = (idx) => {
    const updatedBranches = branches.filter((_, index) => index !== idx);
    setBranches(updatedBranches);
    localStorage.setItem("branches", JSON.stringify(updatedBranches));
  };

  useEffect(() => {
    if (localStorage.getItem("branches")) {
      setBranches(JSON.parse(localStorage.getItem("branches")));
    }
  }, []);

  return (
    <>
      <Header />
      <div className="px-8">
        <Tabs />
        <AddBranch />
        <AllBranches branches={branches} deleteBranch={deleteBranch} />
      </div>
    </>
  );
}
