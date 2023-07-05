import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <img src="/imgs/logo-footer.png" alt="Logo de Artist Finder"/>
            <div className="footer-links">
                <div className="footer-links-artistas">
                    <p>Artistas</p>
                    <ul>
                        <li>Pintura</li>
                        <li>Dibujo</li>
                        <li>Escultura</li>
                    </ul>
                </div>
                <div>
                    <p>Servicios</p>
                    <ul>
                        <li>Pintura</li>
                        <li>Dibujo</li>
                        <li>Escultura</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;