import React, { useState } from 'react'
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";


export default function ImageSlider({ images }) {
    const [imageIndex, setImageIndex] = useState(0);

    function showPreviusImage() {
        setImageIndex((index) => {
            if (index === 0) {
                return images.length - 1;
            } else {
                return index - 1;
            }
        })
    }
    function showNextImage() {
        setImageIndex((index) => {
            if (index === images.length - 1) {
                return 0;
            } else {
                return index + 1;
            }
        })

    }
    return (
        <div className='relative overflow-hidden h-full rounded-xl ' style={{ margin: " 0 auto" }}>
            <div className='w-full flex flex-nowrap'>
                {images.map((image, index) => (
                    <img src={image} key={index} className='overflow-hidden transition-all flex-shrink-0 object-bottom  w-full ' style={{ translate: `${-100 * imageIndex}%` }} />
                ))}
            </div>
            <button onClick={showPreviusImage} className='absolute z-10 top-0 bottom-2 p-3   '>
                <ImArrowLeft2 className='bg-gradient-to-r from-neutral-900 to-gray-800 text-white rounded-full p-1 ' size={20} />
            </button>
            <button onClick={showNextImage} className='absolute z-10 top-0 right-0 bottom-2 p-3 '>
                <ImArrowRight2 className='bg-gradient-to-r from-neutral-900 to-gray-800 text-white rounded-full p-1 ' size={20} />
            </button>

        </div>
    )
}
