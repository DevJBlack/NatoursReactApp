import React from 'react';
import '../sass/App.scss';
import Header from './Header'
import SectionAbout from './SectionAbout'
import SectionFeatures from './SectionFeatures'
import SectionTours from './SectionTours'
import SectionStories from './SectionStories'
import SectionBook from './SectionBook'


const App = () => {
  return (
    <div className="App">
     <Header />

        <main className='main-box'>

          <SectionAbout />
          <SectionFeatures />
          <SectionTours />
          <SectionStories />
          <SectionBook />
          
        </main>
    </div>
  );
}

export default App;