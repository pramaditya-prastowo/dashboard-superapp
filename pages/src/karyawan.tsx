import { NextPage } from "next";
import Sidebar from "../components/sidebar";

const Karyawan: NextPage = () => {
  return (
    <main>
      <Sidebar />
      <div>
        <h1>Karyawan</h1>
      </div>
    </main>
  );
};

export default Karyawan;
