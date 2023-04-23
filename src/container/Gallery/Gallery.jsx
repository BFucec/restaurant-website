import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Gallery.css';

const imageGallery = [images.cheeseburger, images.tortillas, images.ribs, images.cevapi, images.fries, images.pizza, images.chicken_wings, images.grilled_chicken];

const Gallery = () => {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left'){
            current.scrollLeft -= 510;
        }
        else {
            current.scrollLeft += 510;
        }
    }

    return (       

        <div className="app__gallery flex__center" id="gallery">
            <div className="app__gallery-content">
                <h1 className="app__gallery-headtext">Photo Gallery</h1>
                <p className="app__gallery-textcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur ullamcorper diam et ornare. Praesent id bibendum odio. Donec vitae turpis convallis, mattis nibh vitae, ultricies ipsum. In mauris metus, varius at mollis sed, pulvinar in ligula.</p>
                <button type="button" className="custom__button">View More</button>
            </div>

            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {imageGallery.map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1 }`}>
                            <img src={image} alt="gallery"/>
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrow">
                    <BsArrowLeftShort className="gallery__arrow-icons" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icons" onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    );
}

export default Gallery;