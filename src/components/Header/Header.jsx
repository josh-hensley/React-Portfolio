import { Link, useLocation } from 'react-router-dom';

function Header() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href='/'>Josh Hensley</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                                >
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/resume"
                                    className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                                >
                                    Resume
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Portfolio"
                                    className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;