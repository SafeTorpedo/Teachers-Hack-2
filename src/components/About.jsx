import React from "react";
import Pratham from "./images/Pratham.jpg";
import Oluwajuwonlo from "./images/Oluwajuwonlo.jpg";
import Kaushik from "./images/Kaushik.jpg";
import Mamtha from "./images/Mamtha.png";

const About = () => {
    return (
        <div id="about" className="flex ">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-6">
                <div className="bg-indigo-600 w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src={Oluwajuwonlo}
                            alt="Olujuwonlo"
                        />
                    </a>
                    <div className="p-6">
                        <h5 class="text-white text-xl font-medium mb-2">
                            Oluwajuwonlo Ogunyemi
                        </h5>
                        <div className="text-gray-100 text-base mb-4">
                            <p>Frontend Developer</p>
                            <p>University of Ilorin, Nigeria</p>
                            <p>3rd Year</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/oluwajuwonlo-ogunyemi-400364216/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                type="button"
                                className=" inline-block px-6 py-2.5 bg-white text-indigo-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-indigo-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Connect with me
                            </button>
                        </a>
                    </div>
                </div>

                <div className="bg-indigo-600 w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src={Mamtha}
                            alt="Mamtha"
                        />
                    </a>
                    <div className="p-6">
                        <h5 class="text-white text-xl font-medium mb-2">
                            Mamtha Patalay
                        </h5>
                        <div className="text-gray-100 text-base mb-4">
                            <p>Designer</p>
                            <p>
                                Institute of Aeronautical Engineering,
                                Hyderabad, India
                            </p>
                            <p>3rd year</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/mamtha-patalay/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                type="button"
                                className=" inline-block px-6 py-2.5 bg-white text-indigo-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-indigo-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Connect with me
                            </button>
                        </a>
                    </div>
                </div>

                <div className="bg-indigo-600 w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src={Kaushik}
                            alt="Kaushik"
                        />
                    </a>
                    <div className="p-6">
                        <h5 class="text-white text-xl font-medium mb-2">
                            Kaushik Iyer
                        </h5>
                        <div className="text-gray-100 text-base mb-4">
                            <p>Backend Developer</p>
                            <p>KJ Somaiya College of Engineering</p>
                            <p>3rd Year</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/kaushik-iyer-8aa347216/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                type="button"
                                className=" inline-block px-6 py-2.5 bg-white text-indigo-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-indigo-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Connect with me
                            </button>
                        </a>
                    </div>
                </div>

                <div className="bg-indigo-600 w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src={Pratham}
                            alt="Pratham"
                        />
                    </a>
                    <div className="p-6">
                        <h5 class="text-white text-xl font-medium mb-2">
                            Pratham Gupta
                        </h5>
                        <div className="text-gray-100 text-base mb-4">
                            <p>Frontend Developer</p>
                            <p>
                                Vellore Institute of Technology Vellore, India
                            </p>
                            <p>2nd Year</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/pratham-gupta-a23673243/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                type="button"
                                className=" inline-block px-6 py-2.5 bg-white text-indigo-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-indigo-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Connect with me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
