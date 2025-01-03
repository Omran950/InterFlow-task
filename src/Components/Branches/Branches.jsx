import { useEffect, useState } from "react";
import AddBranch from "./AddBranch";
import AllBranches from "./AllBranches";
import Header from "./Header";
import Tabs from "./Tabs";

export default function Branches() {
  const [branches, setBranches] = useState([
    { _name: "الرئيسي", phone: "01025896554", address: "cairo" },
    { _name: "الفرعي", phone: "01025896554", address: "alex" },

  ]);

  function deleteBranch(idx) {
    const updatedBranches = branches.filter((_, index) => index !== idx);
    setBranches(updatedBranches);
    localStorage.setItem("branches", JSON.stringify(updatedBranches));
  }

  function addBranch(newBranch) {
    const updatedBranches = [...branches, newBranch];
    setBranches(updatedBranches);
    localStorage.setItem("branches", JSON.stringify(updatedBranches));
  }

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
        <AddBranch addBranch={addBranch} />
        <AllBranches branches={branches} deleteBranch={deleteBranch} />
      </div>
    </>
  );
}
