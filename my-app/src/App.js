import css from './App.module.css';
import Sidebar from './components/Sidebar'
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm'
import Content from './components/Content'
import SearchBar from './components/SearchBar';
import ContentHooks from './components/ContentHooks'
import ContentAPI from './components/ContentAPI'

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavBarSimple /> */}
      <NavBarForm />
      {/* <Content /> */}
      {/* <SearchBar /> */}
      {/* <ContentHooks /> */}
      <ContentAPI />
    </div>
  );
}

export default App;