"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
var React = require("react");
var utils_1 = require("@/lib/utils");
var Separator = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.orientation, orientation = _b === void 0 ? "horizontal" : _b, props = __rest(_a, ["className", "orientation"]);
    var isVertical = orientation === "vertical";
    return (<div ref={ref} role="separator" aria-orientation={orientation} className={(0, utils_1.cn)("shrink-0 bg-border", isVertical ? "w-px h-full" : "h-px w-full", className)} {...props}/>);
});
exports.Separator = Separator;
Separator.displayName = "Separator";
