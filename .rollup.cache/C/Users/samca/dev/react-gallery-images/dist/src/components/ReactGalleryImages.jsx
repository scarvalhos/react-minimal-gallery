import * as React from 'react';
import { c, strtonum } from '../utils/index';
import '../styles.css';
var ReactGalleryImages = function (_a) {
    var images = _a.images, _b = _a.containerClassName, containerClassName = _b === void 0 ? 'w-[300px] space-y-1' : _b, mainImageClassName = _a.mainImageClassName, _c = _a.paginationColor, paginationColor = _c === void 0 ? '#1a1a1a' : _c, _d = _a.width, width = _d === void 0 ? 400 : _d, _e = _a.thumbnailWidth, thumbnailWidth = _e === void 0 ? 100 : _e, hoverColor = _a.hoverColor;
    var w = typeof width === 'string' ? strtonum(width) : width;
    var tw = typeof thumbnailWidth === 'string'
        ? strtonum(thumbnailWidth)
        : thumbnailWidth;
    var _f = React.useState(images[0]), mainImage = _f[0], setMainImage = _f[1];
    var _g = React.useState(false), hover = _g[0], setHover = _g[1];
    var _h = React.useState(1), count = _h[0], setCount = _h[1];
    var onThumbnailMouseOver = React.useCallback(function (image) {
        setMainImage(image);
    }, []);
    var counter = Math.ceil(images.length / (w / tw));
    var paginationCounter = [];
    for (var i = 0; i < counter; i++) {
        paginationCounter.push(i + 1);
    }
    var imagesSliced = images.slice(Math.floor(w / tw) * (count - 1), (count + 1) * Math.ceil(w / tw));
    return (<div className={c(containerClassName)} style={{
            width: "".concat(w, "px"),
            height: "".concat(w, "px"),
        }}>
      <div className={c('overflow-hidden rounded-sm')} style={{
            width: "".concat(w, "px"),
            height: "".concat(w, "px"),
        }}>
        <div className={c('bg-cover bg-center h-full w-full rounded-sm', mainImageClassName)} style={{
            backgroundImage: "url(".concat(mainImage.url, ")"),
            transform: hover ? 'scale(2)' : 'scale(1)',
            cursor: hover ? 'zoom-out' : 'zoom-in',
        }} onClick={function () { return setHover(!hover); }} onMouseLeave={function () { return setHover(false); }} id="main-image"/>
      </div>

      <div className="w-full flex flex-row space-x-1 overflow-hidden scrollbar-hidden">
        <div className={c('flex flex-row rounded-sm transition-all')}>
          {imagesSliced.map(function (image) { return (<div key={image.title} className="rounded-sm" style={{
                width: "".concat(tw, "px"),
                height: "".concat(tw, "px"),
            }}>
              <div className={c('w-full h-full bg-no-repeat bg-cover bg-center transition-all ease-in rounded-sm border-[2px] border-transparent')} style={{
                backgroundImage: "url(".concat(image.url, ")"),
            }} onMouseOver={function (e) {
                e.target.style.borderColor = hoverColor;
                onThumbnailMouseOver(image);
            }} onMouseLeave={function (e) {
                return (e.target.style.borderColor = 'transparent');
            }}/>
            </div>); })}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-1 pt-2">
        {paginationCounter.map(function (i) { return (<button key={i} className="w-5 h-5 rounded-full text-white text-[10px] transition-all" style={{
                background: paginationColor,
                opacity: count === i ? '1' : '0.6',
            }} onClick={function () { return setCount(i); }}>
            {i}
          </button>); })}
      </div>
    </div>);
};
export default ReactGalleryImages;
//# sourceMappingURL=ReactGalleryImages.jsx.map