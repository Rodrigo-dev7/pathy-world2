"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_query_1 = require("@tanstack/react-query");
var react_router_dom_1 = require("react-router-dom");
var index_1 = require("./pages/index");
var NotFound_1 = require("./pages/NotFound");
var queryClient = new react_query_1.QueryClient();
var App = function () { return (<react_query_1.QueryClientProvider client={queryClient}>
    <react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<index_1.default />}/>
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <react_router_dom_1.Route path="*" element={<NotFound_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>
  </react_query_1.QueryClientProvider>); };
exports.default = App;
