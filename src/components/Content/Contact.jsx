function Contact() {
    return (
        <>
            <div className="container my-5" style={{ height: '70vh' }}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="name" class="form-control" id="name" placeholder="First Last" required/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" required/>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="3" placeholder="Say hello!" required></textarea>
                </div>
                <div class="mb-3">
                    <button type="submit" id="submit" className="form-control">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Contact