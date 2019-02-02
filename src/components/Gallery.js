import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { PhotoSwipe } from 'react-photoswipe';
import styled from 'styled-components';
import Loader from './Loader';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      isOpen: false,
      options: {},
      images: this.props.content,
      imagesToShow: this.props.content.slice(0, 19),
      imagesLast: this.props.content.slice(19),
      showAdditional: false
    };
  }

  openPhotoSwipe = e => {
    e.preventDefault();
    this.setState({
      isOpen: true,
      options: {
        closeOnScroll: false,
        shareEl: false,
        index: Number(e.target.id)
      }
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  renderImages(img) {
    const childElements = img.map((img, index) => {
      const height = img['sizes']['medium-height'];
      return (
        <div
          className="col-6 col-md-4 col-lg-3 image-element-class"
          key={index}
          style={{ minHeight: height / 2 }}
        >
          <ImgLoader>
            <Loader />
          </ImgLoader>
          <GalleryImg
            id={index}
            srcSet={`
              ${img.sizes.large} 1x,
              ${img.url} 2x
            `}
            src={img.url}
            alt={img.alt}
            onClick={this.openPhotoSwipe}
            onLoad={this.loaderImg}
            className="loading"
          />
        </div>
      );
    });
    return childElements;
  }

  showMore = () => {
    this.setState({
      imagesToShow: [...this.state.imagesToShow, ...this.state.imagesLast],
      showAdditional: true
    });
  };

  lightbox = () => {
    const gallery = [];
    this.state.images.map((el, i) => {
      gallery[i] = {
        src: el.url,
        h: el.height,
        w: el.width
      };
      return gallery;
    });
    this.setState({ gallery });
  };

  componentDidMount() {
    this.lightbox();
  }

  loaderImg = el => {
    el.target.classList.remove('loading');
    el.target.previousSibling.remove();
  };

  render() {
    let { imagesToShow, showAdditional } = this.state;
    return (
      <React.Fragment>
        <PhotoSwipe
          isOpen={this.state.isOpen}
          items={this.state.gallery}
          options={this.state.options}
          onClose={this.handleClose}
        />
        <Masonry
          className="row my-gallery-class" // default ''
          elementType="div" // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={{}} // default {}
        >
          {this.renderImages(imagesToShow)}
        </Masonry>
        {showAdditional || (
          <React.Fragment>
            <div className="row text-center pb-5 pt-5">
              <div className="col-12">
                <BtnShowMore onClick={this.showMore}>
                  ПРОСМОТРЕТЬ БОЛЬШЕ
                </BtnShowMore>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const GalleryImg = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 15px;
  min-height: 50px;
  opacity: 1;
  transition: 0.2s all;
  &:hover {
    cursor: pointer;
  }
`;

const ImgLoader = styled.div`
  z-index: 100;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  & * {
    transform: scale(0.5);
  }
`;

const BtnShowMore = styled.button`
  border: none;
  background: none;
  display: inline-block;
  padding: 12px 17px;
  letter-spacing: 0.2em;
  border: 3px solid #000018;
  color: #000018;
  font-weight: 700;
  transition: background-color 0.5s;
  font-family: inherit;
  font-size: 15px;

  &:hover {
    background-color: #b29879;
  }
`;

const masonryOptions = {
  transitionDuration: '0.2s',
  stagger: 30
};
