"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
const c = (...arr) => {
    const classes = arr
        .flatMap((s) => (!!s ? s.split(/\s+/) : []))
        .filter((s) => !!s && s !== 'undefined')
        .join(' ');
    return classes.length < 1 ? undefined : classes;
};
exports.c = c;
//# sourceMappingURL=index.js.map