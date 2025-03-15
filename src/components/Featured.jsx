// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHoverStart = (index) => {
        cards[index].start({ y: "0" });
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }
    return (
        <div className='w-full py-16'>
            <div className='w-full border-b-2 border-zinc-700 pb-16 px-20'>
                <h1 className='text-[4.5vw] font-neue tracking-tight'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    <motion.div
                        onHoverStart={() => handleHoverStart(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className='cardContainer relative w-1/2 h-[75vh]'>
                        <h1 className='text-[#cdea68] uppercase text-[8vw] flex absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap px-10 font-founders overflow-hidden z-10'>

                            {"Salience Labs".split("").map((letter, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'
                                    key={index}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </h1>
                        <div className=' card w-full h-full rounded-xl overflow-hidden'>
                            <img
                                className='w-full h-full bg-cover'
                                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                                alt="Salience Labs project showcase featuring their branding and presentation design"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHoverStart(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className='cardContainer rounded-lg w-1/2 h-[75vh] relative'>
                        <h1 className='text-[#cdea68] uppercase text-[8vw] absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap px-10 font-founders overflow-hidden z-10'>

                            {"Cardboard Spaceship".split("").map((letter, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className=' inline-block'
                                    key={index}>
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}

                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img
                                className='w-full h-full bg-cover'
                                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                                alt="Cardboard Spaceship project presentation featuring their creative design work"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Featured;