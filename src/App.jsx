import './App.css'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
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
        </main>
      </>
    )
}

export default App
