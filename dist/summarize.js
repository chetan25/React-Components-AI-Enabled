import { jsxs as r, jsx as n, Fragment as f } from "react/jsx-runtime";
import { useRef as h, useState as o, useEffect as c } from "react";
import "./summarize.css";
const y = ({ elId: l, onFinish: d }) => {
  const a = h(null),
    [s, g] = o(null),
    [x, b] = o(null),
    [i, u] = o(!1);
  c(() => {
    a.current ||
      (a.current = new Worker(
        new URL(
          /* @vite-ignore */
          "./assets/worker-2oVLSZZP.js",
          import.meta.url
        ),
        {
          name: "worker",
          type: "module",
        }
      ));
    const e = (t) => {
      console.log({ event: t });
      const m = t.data.output.summary_text;
      b(m), u(!1), d && d(m);
    };
    return (
      a.current.addEventListener("message", e),
      () => {
        var t;
        return (t = a.current) == null
          ? void 0
          : t.removeEventListener("message", e);
      }
    );
  }, []),
    c(() => {
      const e = document.getElementById(l),
        t =
          (e == null ? void 0 : e.innerText) ||
          (e == null ? void 0 : e.textContent);
      console.log({ text: t }), g(t);
    }, [l]);
  const C = (e) => {
    e.preventDefault(),
      u(!0),
      console.log({ summarizeContext: s }),
      a.current.postMessage({ context: s });
  };
  return s
    ? /* @__PURE__ */ r("div", {
        className:
          "max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
        children: [
          /* @__PURE__ */ r("div", {
            className: "flex",
            children: [
              /* @__PURE__ */ r("h3", {
                className:
                  "mb-4 text-xl font-extrabold text-gray-900 dark:text-white",
                children: [
                  "Let me",
                  " ",
                  /* @__PURE__ */ r("span", {
                    className:
                      "text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400",
                    children: ["Summarize", " "],
                  }),
                  "the doc for you",
                ],
              }),
              /* @__PURE__ */ n("button", {
                onClick: C,
                type: "button",
                disabled: i,
                className:
                  "flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
                children: i
                  ? /* @__PURE__ */ r(f, {
                      children: [
                        /* @__PURE__ */ r("svg", {
                          "aria-hidden": "true",
                          role: "status",
                          className:
                            "inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600",
                          viewBox: "0 0 100 101",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            /* @__PURE__ */ n("path", {
                              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                              fill: "currentColor",
                            }),
                            /* @__PURE__ */ n("path", {
                              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                              fill: "#1C64F2",
                            }),
                          ],
                        }),
                        " ",
                        "Loading...",
                        " ",
                      ],
                    })
                  : "Summarize",
              }),
            ],
          }),
          /* @__PURE__ */ n("div", {
            children: /* @__PURE__ */ n("p", {
              className:
                "text-lg font-normal text-gray-500  dark:text-gray-400",
              children: x,
            }),
          }),
        ],
      })
    : null;
};
export { y as default };
