const Meet = () => {
    return (
        <section className="meet-container p-20">
            <h1 className='text-3xl font-bold text-center pb-10'> Meet the heroes behind the magic </h1>

            <div className="flex justify-center">
                <div className='cards grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg p-3">
                        <img className="w-full" src="avatar_founder.png" alt="Sunset in the mountains"/>

                        <div className="px-6 py-4">
                            <h1 className="font-bold text-xl mb-2"> Esther Howard </h1>

                            <p class="text-gray-700 text-base"> Founder </p>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg p-3">
                        <img className="w-full" src="avatar_developer.png" alt="Sunset in the mountains"/>
                        
                        <div className="px-6 py-4">
                            <h1 className="font-bold text-xl mb-2"> Cody Fisher </h1>

                            <p class="text-gray-700 text-base"> Developer </p>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg p-3">
                        <img className="w-full" src="avatar_designer.png" alt="Sunset in the mountains"/>
                        
                        <div className="px-6 py-4">
                            <h1 className="font-bold text-xl mb-2"> Brooklyn Simmons </h1>

                            <p class="text-gray-700 text-base"> Designer </p>
                        </div>
                    </div>
                </div>
            </div>       
        </section>
    );
}
 
export default Meet;