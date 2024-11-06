function Contact() {
    return (
        <>
            <div className="container my-5" style={{ height: '70vh' }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" placeholder="First Last" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Say hello!" required></textarea>
                </div>
                <div className="mb-3">
                    <button type="submit" id="submit" className="form-control">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Contact