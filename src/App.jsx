import React from 'react';
import './App.css';
import CTA from './components/CTA';
import Feature from './components/Feature';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App(props) {
  return (
    <main>
      <div className="inner">
        <h4 className="span-8 text-center mrg-b-25 feat-heading">FEATURES</h4>

        <h1 className="span-8 text-center fS-4 mrg-b-25">Here is more of what <br />it can do for you</h1>

        <p className="span-8 text-center mrg-b-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed, quam neque eos provident dolores nobis ducimus assumenda exercitationem, consequuntur, minima quo.</p>

        <Feature heading="Feature 1" icon={faSun}/>
        <Feature heading="Feature 2" icon={faCircle}/>
        <Feature heading="Feature 3" icon={faCalendar}/>
        <Feature heading="Feature 3" icon={faBatteryFull}/>
        <Feature heading="Feature 4" icon={faClock}/>
        <Feature heading="Feature 5" icon={faHeart}/>
      </div>

      <CTA />
    </main>
  );
}
export default App;