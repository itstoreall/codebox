import logo from './logo.svg';
import Container from './Container';
import appContent from './app.json';
import './App.scss';

// const { log } = console;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo_wrap">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-logo_title">codebox</h1>
        </div>
      </header>

      <main className="main">
        <Container>
          <article className="categoryWrap">
            {appContent.categories.map(category => (
              <section key={category.title} className="category">
                <h2 className="categoryTitle">{category.title}</h2>
                <a className="categoryLink" href={category.link.href}>
                  {category.link.anchor}
                </a>
              </section>
            ))}
          </article>
        </Container>
      </main>
    </div>
  );
}

export default App;
