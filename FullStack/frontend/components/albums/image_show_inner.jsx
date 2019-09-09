import React from 'react';
import ImageItem from '../images/image_item';

class ImageShowInner extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        let images = this.props.images.map(image => {
            return <ImageItem image={image} key={image.id} />
        })

        return(
            <div className="imageShowInnerContainer">
                <div className="ImageContainerHeader">
                    <div className="albumInfo">
                        <p className="albumTitle">{this.props.album.title}</p>
                        <p className="albumUploadInfo">by Ropfa  via Android  2 hr</p>
                    </div>
                    <div className="scrollImageButtons">
                        <button className="previousImage">Previous Post</button>
                        <button className="nextImage">Next Post ></button>
                    </div>
                </div>

                {images}

                <div className="imageShowIcons">
                    <div className="iconsLeft">

                    </div>
                    <div className="iconsRight">

                    </div>
                </div>
            </div>
        )
    }
}

export default ImageShowInner;