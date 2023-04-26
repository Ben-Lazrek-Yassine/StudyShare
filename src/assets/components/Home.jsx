import Navbar from './Navbar';
import Music from './Music';
import SharedDocs from './SharedDocs';
import './Calendar.css';
import Sidenav from './Sidenav';
import Contact from './Contact';
const Home = () => {
    return (
        <div>
            <Navbar />
            <Sidenav/>
            <Music />
            <SharedDocs />
            <Contact/>
        </div>
    )
}

export default Home