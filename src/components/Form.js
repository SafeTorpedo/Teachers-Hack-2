import { useState } from "react";
// import { useEffect } from "react";
import React from "react";

const Form = () => {
    const [items, setItems] = useState();
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setItems(URL.createObjectURL(file))
    }

    // useEffect(() => {
    //   localStorage.setItem('items', JSON.stringify(items));
    // }, [items]);

    const handle = () => {
        localStorage.setItem("photo", items);
    };
    const remove = () => {
        localStorage.removeItem("photo", items);
    };
    return (
        <div className="md:col-span-2 md: text-center py-10">
            <form>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className=" px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                {/* <label for="Song" className="block text-sm font-medium text-gray-700">Song Title</label> */}
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    // value={items}
                                    onChange={onImageChange}
                                    // autocomplete="song"
                                    // placeholder="Enter a Song"
                                    className=" placeholder:text-gray-600 mt-1 ml-auto p-6 block w-1/2  rounded-md border-red-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                        <a href={items}
                                    download="image"
                                >
                                    <img src={items} alt='' />
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
                            Add to localstorage
                        </button>
                        <button
                            onClick={remove}
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Remove from localstorage
                        </button>
                    </div>
                </div>
            </form>
            <div id=""></div>
        </div>
    );
};

export default Form;
