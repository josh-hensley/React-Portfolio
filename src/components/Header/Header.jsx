import { Link, useLocation } from 'react-router-dom';

function Header() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light primary-bg bg-gradient sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href='/'>Josh Hensley</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={currentPage === '/' ? 'nav-link complimentary-color' : 'nav-link text-light'}
                                >
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Resume"
                                    className={currentPage === '/Resume' ? 'nav-link complimentary-color' : 'nav-link text-light'}
                                >
                                    Resume
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Contact"
                                    className={currentPage === '/Contact' ? 'nav-link complimentary-color' : 'nav-link text-light'}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Portfolio"
                                    className={currentPage === '/Portfolio' ? 'nav-link complimentary-color' : 'nav-link text-light'}
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