"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const utils_1 = require("./utils");
require("./styles.css");
const Gallery = ({ images, containerClassName = 'w-[300px] space-y-1', }) => {
    const [mainImage, setMainImage] = React.useState(images[0]);
    const [hover, setHover] = React.useState(false);
    const onThumbnailMouseOver = React.useCallback((image) => {
        setMainImage(image);
    }, []);
    return (React.createElement("div", { className: (0, utils_1.c)(containerClassName) },
        React.createElement("div", { className: "w-[300px] h-[300px] overflow-hidden rounded-sm" },
            React.createElement("div", { className: (0, utils_1.c)('bg-cover bg-center h-full w-full rounded-sm'), style: {
                    backgroundImage: `url(${mainImage.url})`,
                    transform: hover ? 'scale(2)' : 'scale(1)',
                    cursor: hover ? 'zoom-out' : 'zoom-in',
                }, onClick: () => setHover(!hover), onMouseLeave: () => setHover(false), id: "main-image" })),
        React.createElement("div", { className: "w-full bg-black flex flex-row space-x-1" }, images.slice(0, 3).map((image) => (React.createElement("div", { key: image.url, onMouseOver: () => onThumbnailMouseOver(image), className: "w-[100px] h-[100px] transition-all border-[1.5px] border-transparent rounded-sm hover:border-red-500" },
            React.createElement("div", { className: "w-full h-full bg-cover bg-center rounded-sm", style: {
                    backgroundImage: `url(${image.url})`,
                } })))))));
};
exports.default = Gallery;
//# sourceMappingURL=index.js.map