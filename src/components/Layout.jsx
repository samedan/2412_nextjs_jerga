// const { default: NavBar } = require("./NavBar");
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <NavBar />
        {children}
      </main>
    </>
  );
}
