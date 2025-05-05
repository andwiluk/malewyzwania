import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import React, { createElement } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const footer = "/assets/footer-CwnYalkd.png";
const map1 = "/assets/mapa1-W-10ns1L.png";
const map2 = "/assets/mapa2-DykHd5FE.png";
const map3 = "/assets/mapa3-DimLG-N0.png";
const wyzwaniaTop = "/assets/wyzwaniaTop-DE41ZJt8.png";
function Welcome() {
  const [mapId, setMapId] = React.useState(parseInt("1"));
  React.useEffect(() => {
    const storedMapId = localStorage.getItem("mapId");
    if (storedMapId) {
      setMapId(parseInt(storedMapId));
    }
  }, []);
  return /* @__PURE__ */ jsxs("main", { className: "flex items-center justify-center pb-4 w-[1650px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-0 min-h-0", children: [
      /* @__PURE__ */ jsx("header", { className: "flex flex-col items-center gap-9", children: /* @__PURE__ */ jsx("div", { className: "w-[1650px] max-w-[100vw] p-4 header" }) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-[1650px] w-full space-y-0 px-4 challengesTop" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[1650px] w-full space-y-0 px-4 map", style: { backgroundImage: `url(${mapId === 1 ? map1 : mapId === 2 ? map2 : map3})` }, children: [
        /* @__PURE__ */ jsx(Button, { positionX: 1370, positionY: 2090, mapId: 2, setMapId }),
        /* @__PURE__ */ jsx(Button, { positionX: 560, positionY: 1790, mapId: 3, setMapId })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-[1650px] w-full space-y-0 px-4 footer" })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .header {
        background-color: #f0f0f0;
        background-image: url(${wyzwaniaTop});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2279px;
        }

        .map {
        background-image: url(${map1});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2314px;
        position: relative;
        }

        .footer {
        background-image: url(${footer});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 431px;
        }

      ` })
  ] });
}
function Button({ positionX, positionY, mapId, setMapId }) {
  const className = `xButton${mapId}`;
  const handleClick = () => {
    console.log(`show ${mapId}`);
    setMapId(mapId);
    localStorage.setItem("mapId", mapId.toString());
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className,
      onClick: handleClick,
      children: /* @__PURE__ */ jsx("style", { children: `
        .xButton${mapId} {
        height: 200px;
        width: 200px;
        background-color: transparent;
        cursor: pointer;
        // border: 2px solid #000;
        position: absolute;
        top: ${positionY}px;
        left: ${positionX}px;
        z-index: 10;

        transition: background-color 0.3s ease;
        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        }
      ` })
    }
  );
}
function meta({}) {
  return [{
    title: "wyzwania"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CVnLFMo_.js", "imports": ["/assets/chunk-AYJ5UCUI-DVOtlY7r.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-B_oV21fZ.js", "imports": ["/assets/chunk-AYJ5UCUI-DVOtlY7r.js", "/assets/with-props-DiR25c27.js"], "css": ["/assets/root-DvMFaZat.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-f_lM0Fpj.js", "imports": ["/assets/with-props-DiR25c27.js", "/assets/chunk-AYJ5UCUI-DVOtlY7r.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-f5352960.js", "version": "f5352960", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
