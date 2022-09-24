import logo from "../assets/logo.svg";

const Hero = () => {
    return (
        <div className="bg-center bg-flex flex-auto bg-cover bg-[url(../src/assets/background.png)]  px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full  md:px-24 lg:px-8 lg:py-24">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <a href="/" className="mb-6 sm:mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-inherit">
                            <img src={logo} alt="logo" />
                        </div>
                    </a>
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">No</span>
                            </span>{" "}
                            more messy handwritings!!
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Get unclear handwriting converted to readable text
                            and practice improving it
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            className=" items-center inline-flex justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            For Teachers
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
