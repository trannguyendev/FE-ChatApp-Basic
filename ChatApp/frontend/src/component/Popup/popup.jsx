import React from "react";

const Popup = () =>{
    return(
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="w-[30%] h-auto bg-white border-2 border-indigo-600 flex flex-col rounded-lg">
                <h2 className="px-4 py-2 font-semibold border-b-2 border-indigo-600 text-indigo-600 bg-indigo-100 rounded-lg">
                    Popup notification
                </h2>
                <div className="px-4 py-2 flex-1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid libero facilis ullam amet ex earum illo odio,
                        incidunt doloribus aperiam autem fuga quia sequi repellat
                        ut fugit dolorem impedit esse.
                    </p>
                </div>
                <div className="px-4 py-2 flex justify-end">
                    <button
                        type="submit"
                        className="border-2 border-solid border-indigo-600 text-indigo-600 font-extrabold hover:text-white hover:bg-indigo-600 w-20 rounded-lg"
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Popup;