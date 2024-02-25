import '../../../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
    return (
        <>

            <footer className="footer p-10 text-white bg-purple-900  pt-10 px-8 lg:px-32">
                <aside>
                    <figure className="w-20"><img src="../../../../src/assets/logo.svg" alt="logo" /></figure>
                    <p>Sheel Waterproofing<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Connect With Us</header>
                    <div className="flex gap-4">
                        <a className="link link-hover">LinkedIn</a>
                    </div>
                    <div className="flex gap-4">

                        <a className="link link-hover">Facebook</a>
                    </div>
                    <div className="flex gap-4">
                        <a className="link link-hover">Instagram</a>
                    </div>
                    <div className="flex gap-4">
                        <a className="link link-hover">X</a>
                    </div>

                </nav>

                <nav>
                    <header className="footer-title">Company</header>
                    <div className="flex gap-4">
                        <FontAwesomeIcon icon={faPhone} />
                        <a href="tel:+9779845683469" className="tracking-wide">+ 977 - 9845683469</a>
                    </div>
                    <div className="flex gap-4">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:yukienterprises@gmail.com" className="tracking-wide">yukienterprises@gmail.com</a>
                    </div>
                    <a className="link link-hover navbar-item cursor-pointer">About us</a>
                    <a className="link link-hover navbar-item cursor-pointer">Contact</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </>
    )
}

export default Footer