/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import "../App.css";


/**
 * Renders component containing footer.
 * @returns HTMLDivElement containing the footer.
 */
function Footer() {
    return (
        <div className="footer">
            <h2>Created by: Chad Chapman</h2>
            <p className="footer-text">
                <a className="footer-link" href="https://www.linkedin.com/in/chadchapman2010/">LinkedIn</a>
            </p>
            <p className="footer-text">
                <a className="footer-link" href="https://github.com/chapmancbVCU">GitHub</a>
            </p>
        </div>
    );
}

export default Footer;