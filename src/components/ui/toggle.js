"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Toggle = void 0;
var React = require("react");
var TogglePrimitive = require("@radix-ui/react-toggle");
var utils_1 = require("@/lib/utils");
var toggle_variants_1 = require("./toggle-variants");
var Toggle = React.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, size = _a.size, props = __rest(_a, ["className", "variant", "size"]);
    return React.createElement(TogglePrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)((0, toggle_variants_1.toggleVariants)({
            variant: variant,
            size: size,
            className: className
        })) }, props));
});
exports.Toggle = Toggle;
Toggle.displayName = TogglePrimitive.Root.displayName;
