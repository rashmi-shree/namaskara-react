const Contact = () => {
    return (
        <div>
        <h1>Contact us page</h1>
        <form>
            <input
                type="text"
                className="inputfield"
                placeholder="name"
            />
            <input
                type="text"
                className="inputfield"
                placeholder="message"
            />
            <button className="inputfield">Submit</button>
        </form>
        </div>
    )
}
export default Contact;