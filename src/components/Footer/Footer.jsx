function Footer() {
    return (
        <>
            <footer className="footer mt-auto py-3 bg-primary bg-gradient text-light sticky-bottom">
                <div className="d-flex justify-content-center">
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item"><a href="https://www.github.com/josh-hensley"><i className="bi bi-github"></i></a></li>
                        <li className="list-group-item"><a href="https://www.linkedin.com/in/josh-hensley-88392181/"><i className="bi bi-linkedin"></i></a></li>
                        <li className="list-group-item"><a href="https://www.joshhensley.com"><i className="bi bi-person-video"></i></a></li>
                    </ul>
                </div>
                <p className="text-center m-2">Josh Hensley 2024 &copy;</p>
            </footer>
        </>
    )
}
export default Footer;