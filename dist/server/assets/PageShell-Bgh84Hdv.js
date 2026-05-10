import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function PageShell({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx("nav", { className: "sticky top-0 z-10 border-b border-border/60 bg-background/70 backdrop-blur-md", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-5xl items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-2 text-lg font-bold", children: /* @__PURE__ */ jsx("span", { className: "rainbow-text", children: "✦ Persona" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 text-sm font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "transition hover:text-foreground", activeOptions: { exact: true }, activeProps: { className: "text-foreground" }, children: "Home" }),
        /* @__PURE__ */ jsx(Link, { to: "/test", className: "transition hover:text-foreground", activeProps: { className: "text-foreground" }, children: "Test" }),
        /* @__PURE__ */ jsx("a", { href: "#about", className: "transition hover:text-foreground", children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "transition hover:text-foreground", children: "Contact" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1", children }),
    /* @__PURE__ */ jsx("footer", { id: "contact", className: "mt-12 border-t border-border/60 bg-background/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        /* @__PURE__ */ jsx("span", { className: "rainbow-text font-semibold", children: "Persona" }),
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Contact" })
      ] })
    ] }) })
  ] });
}
export {
  PageShell as P
};
