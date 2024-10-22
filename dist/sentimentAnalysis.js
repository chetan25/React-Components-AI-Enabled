import { useRef as l, useState as r, useEffect as c } from "react";
const d = () => {
  const e = l(null),
    [a, n] = r(!1),
    [o, u] = r(null);
  return (
    c(() => {
      e.current ||
        (e.current = new Worker(
          new URL(
            /* @vite-ignore */
            "./assets/worker-DW_drfWZ.js",
            import.meta.url
          ),
          {
            name: "worker",
            type: "module",
          }
        ));
      const t = (s) => {
        console.log({ event: s }), n(!1), u(s.data.output);
      };
      return (
        e.current.addEventListener("message", t),
        () => {
          var s;
          return (s = e.current) == null
            ? void 0
            : s.removeEventListener("message", t);
        }
      );
    }, []),
    {
      analysis: o,
      analyzeSentiments: (t) => {
        e.current.postMessage({ context: t }), n(!0);
      },
      anlysisInProgress: a,
    }
  );
};
export { d as default };
