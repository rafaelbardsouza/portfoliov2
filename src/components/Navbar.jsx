import '../styles/nav.scss'

export default function Navbar() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <div className="nav-item">
                <a onClick={() => handleScroll('hero')}>home</a>
                <span className="description">Home</span>
            </div>
            <div className="nav-item">
                <a href='/cv.pdf' target="_blank" rel="noopener noreferrer">description</a>
                <span className="description">Download CV</span>
            </div>
            <div className="nav-item">
                <a onClick={() => handleScroll('projects')}>work</a>
                <span className="description">Projects</span>
            </div>
            <div className="nav-item">
                <a onClick={() => handleScroll('contact')}>mail</a>
                <span className="description">Contact</span>
            </div>
        </nav>
    )
}