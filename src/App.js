import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

function App({ user }) {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' loggedIn={user?.email} component={Home} />
          <Route exact path='/login'>
            {user?.email ? <Redirect to={
              {
                pathname: '/',
              }
            } /> : <Login />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = ({ userReducer }) => {
  return { user: userReducer };
};

export default connect(mapStateToProps, null)(App);
