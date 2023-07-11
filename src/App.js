import "./App.css";
import { Favorities, Footer, Hero, Navbar, Places, Skills } from "./components";

function App() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        <Hero />
        <div className="px-4">
          <Skills />
          <Favorities />
          <Places />
        </div>

        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#favorities">Favorite Articles</a>
          </li>
          <li>
            <a href="#places">Places to visit</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
