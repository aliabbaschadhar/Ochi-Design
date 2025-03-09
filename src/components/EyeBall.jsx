import { useEffect, useState } from "react";

function EyeBall() {
    const [rotateAngle, setRotateAngle] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2; // Minus the current mouse position from the center of the screen
            let deltaY = mouseY - window.innerHeight / 2; // Minus the current mouse position from the center of the screen

            let angle = Math.atan2(deltaY, deltaX); // Calculate the angle of the mouse position
            let angleDeg = (angle * (180 / Math.PI)) - 180; // Convert the angle to degrees and subtract 180 degrees because eyes are looking at the opposite direction of cursor

            requestAnimationFrame(() => {
                setRotateAngle(angleDeg);
            });
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [])

    return (
        <div className='w-[14vw] h-[14vw] flex items-center justify-center rounded-full bg-white'>
            <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotateAngle}deg)` }} className="line w-full h-10 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                    <div className='w-10 h-10 rounded-full bg-white'></div>
                </div>
            </div>
        </div>
    );
};

export default EyeBall;