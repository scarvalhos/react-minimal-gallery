export var c = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var classes = arr
        .flatMap(function (s) { return (!!s ? s.split(/\s+/) : []); })
        .filter(function (s) { return !!s && s !== 'undefined'; })
        .join(' ');
    return classes.length < 1 ? undefined : classes;
};
export var strtonum = function (s) {
    if (!s)
        return 0;
    return +s.replace(/[^\d,-]/g, '').replace(',', '.') || 0;
};
//# sourceMappingURL=index.js.map