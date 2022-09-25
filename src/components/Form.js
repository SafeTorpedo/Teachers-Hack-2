import { useState } from "react";
// import { useEffect } from "react";
import React from "react";

const Form = () => {
    const [items, setItems] = useState();
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setItems(URL.createObjectURL(file));
    };

    const handle = () => {
        localStorage.setItem("photo", items);
    };
    return (
        <div
            id="teachers"
            className=" md:col-span-2 md:text-center py-28"
        >
            <form action="../../post" method="post" className="form">
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className=" px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={onImageChange}
                                    className="mt-1 ml-auto bg-yellow-300 justify-center p-6 block rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <a href={items} download="image">
                                    <img src={items} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" px-4 py-2 text-center sm:px-6">
                        <button
                            onClick={handle}
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Recognize
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
