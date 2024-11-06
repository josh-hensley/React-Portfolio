function Resume() {
    return (
        <>
            <div className="row my-5" style={{ height: '80vh' }}>
                <div className="col"></div>
                <div className="col">
                    <div className="container">
                        <h1 className="text-center">Josh Hensley&apos;s Resumé</h1>
                        <div className="card m-5 text-center">
                            <h5 className="card-title my-1 text-center">Education</h5>
                            <hr />
                            <h6 className="card-text">Tarleton State University - BFA Theatre</h6>
                            <h6 className="card-text">SMU fullstack developement bootcamp</h6>
                        </div>
                        <div className="card m-5">
                            <h5 className="card-title my-1 text-center">Experience</h5>
                            <hr />
                            <div className="row">
                                <div className="col text-end">
                                    <h6 className="card-text">2019-Present</h6>
                                    <h6 className="card-text">2021-Present</h6>
                                    <h6 className="card-text">2020-2023</h6>
                                    <h6 className="card-text">2015-2020</h6>
                                    <h6 className="card-text">2013-Present</h6>
                                    <h6 className="card-text">2016-2019</h6>
                                </div>
                                <div className="col">
                                    <h6 className="card-text">Stage Corps</h6>
                                    <h6 className="card-text">Repertory Company Theatre</h6>
                                    <h6 className="card-text">IMPRINT Theatreworks</h6>
                                    <h6 className="card-text">Garland Civic Theatre</h6>
                                    <h6 className="card-text">Independant Freelance Theatre Artist</h6>
                                    <h6 className="card-text">Naaman Forest High School</h6>
                                </div>
                            </div>
                        </div>
                        <p className="text-center"><a href="/josh-hensley-resume.pdf">Download PDF</a></p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </>
    )
}

export default Resume