import "../styles/index.scss";
import Recipe from "./Recipie";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";

const App = () => {
  return(
    <>
      <section className="hero"></section>
        <main>
          <section>
          <h1>Oh Hai, React</h1>
          </section>
          <img src={sword} alt="sword" width="250" />
          <img src={swordSvg} alt="sword" width="250" />
      <Recipe />
        </main>
    </>
  )
}

export default App;