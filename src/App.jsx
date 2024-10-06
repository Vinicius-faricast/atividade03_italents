import { Article } from "./components/Article/Article";
import { Aside } from "./components/Article/Aside/Aside";
import { Form } from "./components/Form/Form";
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
      title: 'Standart',
      textArticle: 'Organize across all apps by hand',
      price: '10',
    },
    {
      title: 'Business',
      textArticle: 'Organize across all apps by hand',
      price: '99',
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
      <Aside>
        <Form />
      </Aside>
    </div>
  );
}

export default App;
