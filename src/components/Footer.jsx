import '../styles/footer.scss';

export default function Footer() {
    return (
        <footer id='contact'>
            <div className="col">
                <h1>Let's keep in touch!</h1>
            </div>
            <div className="col">
            <h2>Contact me</h2>
                <div className="links">
                    <a href='mailto:rafaelbardsouza@gmail.com'><img src="https://img.icons8.com/ios-filled/50/ffffff/mail.png" alt="email" /></a>
                    <a href='https://github.com/rafaelbardsouza'><img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="github" /></a>
                    <a href='https://www.linkedin.com/in/rafael-barbosa-de-souza-021320263'><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" /></a>
                    <a href='https://api.whatsapp.com/send?phone=5554991060330'><img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="whatsapp" /></a>
                </div>
            </div>
        </footer>
    )
}