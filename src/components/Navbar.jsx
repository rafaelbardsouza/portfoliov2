export default function Navbar() {
    return (
        <nav>
            <div className="nav-item">
                <a href='#hero'>home</a>
                <span className="description">Home</span>
            </div>
            <div className="nav-item">
                <a href='#about'>description</a>
                <span className="description">Download CV</span>
            </div>
            <div className="nav-item">
                <a href='#projects'>work</a>
                <span className="description">Projects</span>
            </div>
            <div className="nav-item">
                <a href='#contact'>mail</a>
                <span className="description">Contact</span>
            </div>
        </nav>
    )
}