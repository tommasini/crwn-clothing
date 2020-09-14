import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.jsx";
import ShopPage from "./pages/shop/shop.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-out/signi-in-and-out";
import Header from "./components/header/header.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact
            path="/signin"
            render={() =>
              this.props.setCurrentUser ? ( <Redirect to='/' />) : (<SignInAndSignUpPage/>)
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect( mapStateToProps, mapDispatchToProps)(App);
