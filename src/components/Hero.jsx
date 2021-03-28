function Hero() {
    return (
        <div className="bg-gray-200 flex flex-col items-center py-12 px-4">
            <img
                src={`${process.env.PUBLIC_URL}/images/msyachrul.jpg`}
                className="w-52 object-cover rounded-full"
                alt="Muhammad Syachrul"
            />
            <div className="mt-6 text-center">
                <h1 className="text-3xl font-medium mb-3">Muhammad Syachrul</h1>
                <p className="text-gray-700 font-light">I am a Software Engineer with expertise on Back End Development and very interested in how to write clean and scalable code.</p>
            </div>
        </div>
    );
}

export default Hero;