import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LectureScreen } from './screens';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faEnvelope, faStar);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <LectureScreen />
  </React.StrictMode>
);

reportWebVitals();
