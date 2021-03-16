import './App.css';
import { routes } from './router.config';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { LeftMenus } from './pages/main/leftMenu';
import { LoginPage } from './pages/main/login';

function App() {
  const reactRouter = () => {
    return routes.map((route, i) => {
      return <Route path={route.path} key={i} exact={route.exact} component={route.component} />;
    });
  };
  return (
    <Router>
      <link
        rel='stylesheet'
        href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
        integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
        crossOrigin='anonymous'
      />
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Redirect from='/' exact to='/login' />
        <Route
          render={({ location }) => {
            return (
              <div className='grid grid-cols-6 h-screen'>
                <div className='col-span-1 containerLeftMenu'>
                  <LeftMenus />
                </div>
                <div className='col-span-5 px-4'>
                  <Switch location={location}>{reactRouter()}</Switch>
                </div>
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
