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

    return (
        <div className="canv">
            {/* <div className="px-6 py-6 text-xl"> */}
                <h1 className="px-6 py-6 text-xl">Student's Handwriritng Practice </h1>
            {/* </div> */}
            <canvas
                width={width}
                height={height}
                onMouseDown={onCanvasMouseDown}
                className = "canvs"
                ref={setCanvasRef}
            />
            <a
                id="download_image_link"
                href="download_link"
                onClick={saveImageToLocal}
            >
                Download
            </a>
        </div>
    );
};

export default Canvas;

