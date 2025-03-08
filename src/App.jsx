import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero} from './components/Hero/Hero'
import { Experience } from './components/Experience/experience'
import { Projects } from './components/Projects/projects'
import { Contact } from './components/Contact/Contact'

// run: npm run dev in terminal

function App() {

return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
    <Experience />
    <Projects />
    <Contact />
    </div>
);

}

export default App
