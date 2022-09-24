import { useState } from "react";
import { useEffect } from "react";

const Form = () => {
    const [items, setItems] = useState({});

// useEffect(() => {
//   localStorage.setItem('items', JSON.stringify(items));
// }, [items]);

const handle = () => {
    localStorage.setItem('photo', items);
   
 };
 const remove = () => {
    localStorage.removeItem('photo', items);
   
 };
    return (
        <div className="mt-[-166px] md:col-span-2 md: text-center py-10">
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
                                    onChange={(e) => setItems(e.target.value)}
                                    // autocomplete="song"
                                    // placeholder="Enter a Song"
                                    className=" placeholder:text-gray-600 mt-1 ml-auto p-6 block w-1/2  rounded-md border-red-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
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
