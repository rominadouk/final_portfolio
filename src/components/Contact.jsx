const ContactForm = () => {
    return (  
        <>
        <div className='solid-line'></div>
        <div className="container mt-5 mb-5">
            <h2 className="mb-3">Contact Me</h2>
            <form>
                <div className="mb-3">
                <label className="form-label" htmlFor="name">
                    Name
                </label>
                <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input className="form-control" type="email" id="email" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="message">
                    Message
                </label>
                <textarea className="form-control" id="message" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}
 
export default ContactForm;