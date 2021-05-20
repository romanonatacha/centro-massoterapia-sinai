import React from 'react'
import './styles/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import "animate.css/animate.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import ReactFullpage from '@fullpage/react-fullpage'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Massagens from './components/Massagens'
import Beneficios from './components/Beneficios'
import Contato from './components/Contato'

function App() {

  return (
    <div>
      <Navbar />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={100}
        animateAnchor={true}
        anchors={['home', 'massagens', 'beneficios', 'contato']}
        responsiveHeight='650'

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
              </div>
              <div className="section">
                <Massagens />
              </div>
              <div className="section">
                <Beneficios />
              </div>
              <div className="section">
                <Contato />
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export default App
