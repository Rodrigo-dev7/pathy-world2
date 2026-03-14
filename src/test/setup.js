"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@testing-library/jest-dom");
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: function (query) { return ({
        matches: false,
        media: query,
        onchange: null,
        addListener: function () { },
        removeListener: function () { },
        addEventListener: function () { },
        removeEventListener: function () { },
        dispatchEvent: function () { },
    }); },
});
