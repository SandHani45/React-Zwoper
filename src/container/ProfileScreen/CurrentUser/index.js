import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../style.scss';
import Images from '../../../theme/images';
import Icons from '../../../theme/icons';
import UserInfo from '../UserInfo/index.js';
import UiAvatarWithTags from '../../../components/UiAvatarWithTags/index.js';
import UserTimeline from '../UserTimeline/';
import UserTime from '../UserTime/';
import SendingTime from '../SendingButton/';
import AboutYou from '../AboutYou/';
import UserSkills from '../UserSkils/';

let CurrentUser = props => {
  return (
    <Grid>
      <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
        {/*User Images*/}
        <Col xs={5}>
          <UiAvatarWithTags avatarSrc={Images.profileAvatar} rateColor={'yellow'} rateLabel={'Hero'} isUser={true} />
        </Col>
        {/*User Information*/}
        <Col md={7} sm={7} xs={7} className={'profileInfo'}>
          <UserInfo dateText={'Mitglied seit 15.06.2016'} name={'Bernhard Koller'} contry={'Traunstein, Ludwigstraße'} />
          <div className={'profileDealBox'}>
            <span className={'profileDealBoxInner text-center'}>
              <h4>3</h4> <span>{'Angebote'}</span>
            </span>
            <span className={'profileDealBoxInner text-center'}>
              <h4>7</h4>
              <span>{'Wünsche'}</span>
            </span>
          </div>
        </Col>
      </Row>

      {/*TimeLine Progress bar*/}
      <Row style={{ padding: 10 }}>
        <UserTimeline name={'Dein Zeittank'} progress={34} />
      </Row>

      {/*User Timing*/}
      <UserTime hour={16} minute={5} />
      <div className={'text-center timeHistory'}>
        <span>
          <img src={Icons.timeHistory} alt="" />
          Zeitverlauf ansehen
        </span>
      </div>

      {/*UI Button*/}
      <div className={'text-center clearfix'}>
        <SendingTime text={'Zeit senden'} />
      </div>

      <hr />
      {/*About Us Section*/}
      <AboutYou
        title={'Über Dich'}
        discription={
          'Persperum illa earchiliqui dita quaepta vellici dunt as venim qui alignatiatur secusam sint as magnim et volent landerum accaerecto vellam quia in eat ullabor maxim sit quas iliquos alignis sitiorro berehenis voluptur, sequibu sdaest, ima sinvendant, volupta nonserro quos veri omnia verum ium faceptatur sa ex ea int.'
        }
      />

      <hr />

      {/*Skills Section */}
      <div className={' userSkills mar-t30 mar-b50'}>
        <UserSkills
          title={'Fähigkeiten'}
          data={[
            { title: 'Auto', skill: ['Anhänger verleihen'] },
            { title: 'Haus & Heim Reparatur / Renovierung', skill: ['Spiegel montieren', 'TV-Gerät montieren'] },
          ]}
        />
      </div>
      <div className={' userSkills mar-t30 mar-b50'}>
        <UserSkills
          title={'Wünscht sich'}
          data={[
            { title: 'Dienste am Menschen', skill: ['Haare schneiden', 'Haare stylen', 'Personal Training'] },
            { title: 'Fahrrad', skill: ['Fahrrad reparieren', 'Fahrrad verleihen'] },
          ]}
        />
      </div>
    </Grid>
  );
};

export default CurrentUser;
