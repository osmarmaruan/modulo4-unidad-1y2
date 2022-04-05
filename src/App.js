import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import './App.css';

  function App() {
    return (
      <Router>
        <Header></Header>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/nosotros" exact component={NosotrosPage} />
          <Route path="/novedades" exact component={NovedadesPage} />
          <Route path="/contacto" exact component={ContactoPage} />

        </Switch>
        <Footer></Footer>
      </Router>

    );
  }

export default App;
