const Contact = () => {
    return (
        <section className='flex justify-center'>
            <div className='contact-container grid grid-cols-1 lg:grid-cols-2 p-20 gap-10'>
                <img src='side_image.png' alt='side_img' className={`w-96 mb-4`} />

                <div className='flex flex-col items-end content'>
                    <h1 className='text-3xl font-bold text-right mb-4'> We'd love to hear <br/> from you</h1>

                    <form className="max-w-md">
                        <div className="mb-4">
                            <input
                            placeholder='Name*'
                            type="text"
                            id="input1"
                            name="input1"
                            className={`w-96 px-4 py-3 border border-black focus:outline-none placeholder-black focus:border-blue-500`}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                            placeholder='Email*'
                            type="text"
                            id="input2"
                            name="input2"
                            className={`w-96 px-4 py-3 border border-black focus:outline-none placeholder-black focus:border-blue-500`}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                            placeholder='Website URL*'
                            type="text"
                            id="input3"
                            name="input3"
                            className={`w-96 px-4 py-3 border border-black focus:outline-none placeholder-black focus:border-blue-500`}
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                            placeholder='Project Details*'
                            id="bigInput"
                            name="bigInput"
                            rows={5}
                            className={`w-96 px-4 py-2 border border-black focus:outline-none placeholder-black focus:border-blue-500`}
                            />
                        </div>
                        <button type="submit" className="w-96 border border-black bg-black text-white py-2 px-4 hover:text-black hover:bg-white transition duration-300">Send Proposal</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;