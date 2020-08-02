import React, { useState, useEffect } from 'react';

const LazyLoadImage = (props) => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
        const img = new Image()
        img.src = props.src
        img.onload = () => setSourceLoaded(props.src)
    }, [props.src])

    return (
        <div className={props.nameClass} style={{ backgroundImage: `url(${sourceLoaded})` }}>
            {props.children}
        </div>
    )
}

export default LazyLoadImage;