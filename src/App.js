import './styles/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import "animate.css/animate.min.css"
import ReactFullpage from '@fullpage/react-fullpage'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Massagens from './components/Massagens'
import Beneficios from './components/Beneficios'

function App() {

  return (
    <>
      <Navbar />
          {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button> */}
      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        animateAnchor={true}
        anchors={['home', 'massagens', 'beneficios']}

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
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}

export default App
