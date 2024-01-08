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
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { SnackbarProvider } from './providers/SnackbarProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { UserProvider } from './users/providers/UserProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
