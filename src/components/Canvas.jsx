import { useEffect, useRef } from "react";

const Canvas = ({ width, height }) => {
    const canvasRef = useRef(null);
    function useOnDraw(onDraw) {
        const isDrawingRef = useRef(false);
        const prevPointRef = useRef(null);

        const mouseMoveListenerRef = useRef(null);
        const mouseUpListenerRef = useRef(null);

        function setCanvasRef(ref) {
            canvasRef.current = ref;
        }

        function onCanvasMouseDown() {
            isDrawingRef.current = true;
        }

        useEffect(() => {
            function computePointInCanvas(clientX, clientY) {
                if (canvasRef.current) {
                    const boundingRect =
                        canvasRef.current.getBoundingClientRect();
                    return {
                        x: clientX - boundingRect.left,
                        y: clientY - boundingRect.top,
                    };
                } else {
                    return null;
                }
            }
            function initMouseMoveListener() {
                const mouseMoveListener = (e) => {
                    if (isDrawingRef.current && canvasRef.current) {
                        const point = computePointInCanvas(
                            e.clientX,
                            e.clientY
                        );
                        const ctx = canvasRef.current.getContext("2d");
                        if (onDraw) onDraw(ctx, point, prevPointRef.current);
                        prevPointRef.current = point;
                        console.log(point);
                    }
                };
                mouseMoveListenerRef.current = mouseMoveListener;
                window.addEventListener("mousemove", mouseMoveListener);
            }

            function initMouseUpListener() {
                const listener = () => {
                    isDrawingRef.current = false;
                    prevPointRef.current = null;
                };
                mouseUpListenerRef.current = listener;
                window.addEventListener("mouseup", listener);
            }

            function cleanup() {
                if (mouseMoveListenerRef.current) {
                    window.removeEventListener(
                        "mousemove",
                        mouseMoveListenerRef.current
                    );
                }
                if (mouseUpListenerRef.current) {
                    window.removeEventListener(
                        "mouseup",
                        mouseUpListenerRef.current
                    );
                }
            }

            initMouseMoveListener();
            initMouseUpListener();
            return () => cleanup();
        }, [onDraw]);

        return {
            setCanvasRef,
            onCanvasMouseDown,
        };
    }

    const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, "#000000", 5);
    }

    function drawLine(start, end, ctx, color, width) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    const saveImageToLocal = (event) => {
        let link = event.currentTarget;
        link.setAttribute("download", "canvas.png");
        let image = canvasRef.current.toDataURL("image/png");
        link.setAttribute("href", image);
    };

    const setToClear = () => {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, width, height);
    };

    return (
        <div
            id="students"
            className=" mt-[-80px] bg-center bg-flex flex-auto bg-cover bg-[url(../src/assets/background.png)]  px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full  md:px-24 lg:px-8 lg:py-24"
        >
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <h1 className="px-6 py-6 text-xl text-center">
                    Student's Handwriting Practice (Under development)
                </h1>

                <canvas
                    className="canv"
                    width={width}
                    height={height}
                    onMouseDown={onCanvasMouseDown}
                    style={canvasStyle}
                    ref={setCanvasRef}
                />

                <div>
                    <button
                        onClick={setToClear}
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 mt-6 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Clear
                    </button>
                </div>

                <div className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 mt-6 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <a
                        id="download_image_link"
                        href="download_link"
                        onClick={saveImageToLocal}
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Canvas;

const canvasStyle = {
    border: "1px solid black",
    margin: "auto",
    background: "white",
};
