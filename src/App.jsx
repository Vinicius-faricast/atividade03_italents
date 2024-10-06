import { Article } from "./components/Article/Article";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Main } from "./components/Main/Main";

function App() {
  const data = [
    {
      title: 'Free',
      textArticle: 'Organize across all apps by hand',
      price: '00',
    },
    {
      title: 'Free',
      textArticle: 'Organize across all apps by hand',
      price: '00',
    },
    {
      title: 'Free',
      textArticle: 'Organize across all apps by hand',
      price: '00',
    }
  ]


  return (
    <div className="App">
      <Header />
      <Hero />
      <Main>
        {data.map((data, index) => (
          <Article key={index} content={data} />
        ))}
      </Main>
    </div>
  );
}

export default App;
