import './App.css'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import TopPortfolio from './components/TopPortfolio'

function App() {

    return (
      <>
        <header>
          <Navbar/> 
          <TopPortfolio />
        </header>

        <main>
        <Experience /> 
        <Projects />
        <Technologies />
        <Contact />
        </main>
      </>
    )
}

export default App
