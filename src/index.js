import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { screen } from './theme/global';
import './index.scss';
// import UiCollapsable from './components/UiCollapsable'
//import App from './container/TutorialScreen/ToHome';
// import App from './container/auth/primaScreen';
//import App from './container/onBoard';
import HomeHeader from './container/Home/homeHeader';
import Splash from './container/Tutorial_Signin/Splash';
import ScreenOne from './container/Tutorial_Signin/ScreenOne';
import ScreenTwo from './container/Tutorial_Signin/ScreenTwo';

//** Register and Login */
import { Register_Name, Main_Login, Register_Address } from './container/Auth/Register';

import { YourTalents, WhatYouOffer, Landing_screen, SelectSkilss, Add_SelectSkills } from './container/OnBoarding';
//*** shailesh *** /
import CurrentUser from './container/ProfileScreen/CurrentUser/';
import OtherUser from './container/ProfileScreen/OtherUser/';
import EditProfile from './container/ProfileScreen/EditProfile/';
import registerServiceWorker from './registerServiceWorker';
import PrivacyScreen from './container/SettingScreen/PrivacyScreen/index';
import MapScreen from './container/SettingScreen/Map';
import UserAccount from './container/UserAccount';
import Contact from './container/SettingScreen/Contact';
import WatchList from './container/WatchList/index';
import TimingHistory from './container/TimingHistory/index';
import Events from './container/Events';

//*** */

const RouterApp = () => {
  console.log(Register_Name);
  return (
    <Router>
      <div>
        {/* <div className="mobile-view">
          <Route exact path="/" component={HomeHeader} />
          <Route path="/screen_one" component={ScreenOne} />
          <Route path="/screen_two" component={ScreenTwo} />
          <Route path="/HomeHeader" component={HomeHeader} />

          <Route exact path="/what_you_offer" component={Add_SelectSkills} />
          <Route exact path="/what_you_share" component={Add_SelectSkills} />
          <Route exact path="/what_you_looking_for" component={Add_SelectSkills} />
        </div> */}
        {/****** shailesh ********/}
        <div className="mobile-view">
          <Route exact path="/" component={HomeHeader} />
          <Route exact path="/profile" component={OtherUser} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/privacyscreen" component={PrivacyScreen} />
          <Route exact path="/map" component={MapScreen} />
          <Route exact path="/user-account" component={UserAccount} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/watchlist" component={WatchList} />
          <Route exact path="/timing-history" component={TimingHistory} />
          <Route exact path="/events" component={Events} />
        </div>
        <div className="overflow-mobile-view">
          <h1>{'Sorry the Application is not supported for this Screen'}</h1>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<RouterApp />, document.getElementById('root'));
registerServiceWorker();
