import Header from "./components/Header";
import ArticleTwo from "./components/ArticleTwo";
import ArticleThree from "./components/ArticleThree";
import ArticleFour from "./components/ArticleFour";
import ArticleFive from "./components/ArticleFive";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-primary">
      <Header />
      <section className="container">
        <ArticleTwo />
        <ArticleThree />
        <ArticleFour />
      </section>
      <section>
        <ArticleFive />
      </section>
      <Footer />
    </div>
  );
}

export default App;
