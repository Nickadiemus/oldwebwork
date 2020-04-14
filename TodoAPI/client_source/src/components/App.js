import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

import '../style/app.css'
import '../style/footer.css';

const App = () => (
  <div>
    <Navbar />
    <div className = "container">
      <Main />
    </div>
    <Footer />
  </div>
)

export default App;
