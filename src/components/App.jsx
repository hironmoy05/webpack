import "../styles/index.scss";
import Recipe from "./Recipie";

const App = () => {
  return(
    <>
      <section className="hero">
        <main>
          <section>
          <h1>Oh Hai, React</h1>
          </section>
        </main>
      </section>
      <Recipe />
    </>
  )
}

export default App;