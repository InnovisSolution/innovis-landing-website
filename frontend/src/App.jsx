import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Section from './components/section';
import Solutions from './components/solutions';
import './index.css';
import './default.css';

function App() {
    return (
        <div className='content'>
            <Header />
            <Section>
                <Hero />
            </Section>
            <Section>
                <Solutions />
            </Section>
            <Footer />
        </div>
    );
}

export default App;
