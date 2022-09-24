import React from "react";

const canvasStyle = {
    border: "1px solid black",
};

const Canvas = ({ width, height }) => {
    return (
        <div className="flex justify-center align-middle">
            <div className="px-6 py-6 flex justify-center text-lg">
                <h1>Student's Handwriritng Practice </h1>
            </div>

            <canvas width={width} height={height} style={canvasStyle} />
        </div>
    );
};

export default Canvas;
