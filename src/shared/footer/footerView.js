import React from 'react' 
import './footerView.scss'

function FotterView() {
    return (
        <footer>
            <div className="footer-logo">
                <h1 className="font-theme">Lomito</h1>
                <h3>Siguenos</h3>
                <div className="social">
                    <a href="https://www.facebook.com" className="fa fa-facebook"></a>
                    <a href="https://twitter.com/" className="fa fa-twitter"></a>
                    <a href="https://www.instagram.com/?hl=es-la" className="fa fa-instagram"></a>
                </div>
            </div>
        </footer>
    )
}

export default FotterView