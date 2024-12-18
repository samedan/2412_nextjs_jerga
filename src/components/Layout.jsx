// const { default: NavBar } = require("./NavBar");
import ActiveResource from "./ActiveResource";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <NavBar />
        <ActiveResource />
        {children}
      </main>
    </>
  );
}
