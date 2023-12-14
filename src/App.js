import './App.css';
import CardComponent from './cards/components/card/Card';
import PageHeader from './components/PageHeader';
import Sandbox from './sandbox/Sandbox';
import Cards from './cards/components/Cards';
import OnClick from './sandbox/events/Onclick';
import CardsPage from './cards/pages/CardsPage';
import AboutPage from './pages/AboutPage';
import UseState from './sandbox/hooks/UseState';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
        {/* <PageHeader /> */}
        {/* <Sandbox  /> */}
        {/* <CardsPage></CardsPage> */}
        {/* <AboutPage></AboutPage> */}
        
        {/* <CardComponent></CardComponent> */}
        {/* <Cards></Cards> */}
      {/* <Layout>
        <CardsPage></CardsPage>
      </Layout> */}
      <Sandbox></Sandbox>
    </div>
  );
}

export default App;
