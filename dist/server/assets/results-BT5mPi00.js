import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { P as PageShell } from "./PageShell-Bgh84Hdv.js";
const jokerImg = "/assets/Joker-BHivVD_I.jpg";
const moverImg = "/assets/Mover-D7_4B8tH.jpg";
const explorerImg = "/assets/Explorer-L1Hsm2jU.jpg";
const competitorImg = "/assets/Competitor-Rr32G6Z_.jpg";
const directorImg = "/assets/Director-BLvClERw.jpg";
const collectorImg = "/assets/Collector-CImAIbhw.jpg";
const creatorImg = "/assets/Creator-DPsjOlSq.jpg";
const storytellerImg = "/assets/Storyteller-Dl3o9o32.jpg";
const CATEGORIES = {
  Joker: {
    name: "The Joker",
    image: jokerImg,
    description: "You bring humor, laughter, and lightness into everyday life. Jokers love making others laugh and often use play to connect socially."
  },
  Mover: {
    name: "The Mover",
    image: moverImg,
    description: "You feel most alive when moving your body—whether through sports, dancing, adventure, or physical activity."
  },
  Explorer: {
    name: "The Explorer",
    image: explorerImg,
    description: "You love novelty, curiosity, and discovering new places, ideas, and experiences."
  },
  Competitor: {
    name: "The Competitor",
    image: competitorImg,
    description: "You thrive on challenges, achievement, and testing your skills against others."
  },
  Director: {
    name: "The Director",
    image: directorImg,
    description: "You enjoy organizing, planning, and leading activities. You often take charge naturally."
  },
  Collector: {
    name: "The Collector",
    image: collectorImg,
    description: "You enjoy gathering, organizing, and completing things that feel meaningful to you."
  },
  Creator: {
    name: "The Creator",
    image: creatorImg,
    description: "You love imagination, originality, and making something new. Creativity is your playground."
  },
  Storyteller: {
    name: "The Storyteller",
    image: storytellerImg,
    description: "You’re drawn to narratives, imagination, and meaningful storytelling. You love sharing experiences through stories."
  }
};
function Results() {
  const [traits, setTraits] = useState([]);
  const [scores, setScores] = useState([]);
  useEffect(() => {
    const raw = sessionStorage.getItem("persona-result");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      const splitTraits = parsed.trait.split("-").map((t) => t.trim()).filter(Boolean);
      setTraits(splitTraits);
      setScores(parsed.scores ?? []);
    } catch {
    }
  }, []);
  if (traits.length === 0) {
    return /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-2xl px-4 py-16 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "No results yet" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Take the test first to see your personality category." }),
      /* @__PURE__ */ jsx(Link, { to: "/test", className: "mt-6 inline-block rounded-xl px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg", style: {
        background: "var(--gradient-primary)"
      }, children: "Start the test" })
    ] }) });
  }
  const isTie = traits.length > 1;
  return /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-3xl px-4 py-12", children: /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border-2 border-[var(--border)] bg-card p-8 shadow-[var(--shadow-card)]", children: [
    /* @__PURE__ */ jsxs("header", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-wider text-muted-foreground", children: "Your Personality" }),
      /* @__PURE__ */ jsx("h1", { className: "rainbow-text mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl", children: isTie ? "Mixed Type" : CATEGORIES[traits[0]].name }),
      isTie && /* @__PURE__ */ jsxs("p", { className: "mt-3 text-muted-foreground", children: [
        "You scored equally highest in:",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: traits.join(" - ") })
      ] })
    ] }),
    !isTie && /* @__PURE__ */ jsx("img", { src: CATEGORIES[traits[0]].image, alt: CATEGORIES[traits[0]].name, width: 768, height: 512, loading: "lazy", className: "mx-auto mt-8 w-full max-w-xl rounded-2xl border-2 border-[var(--border)] shadow-md" }),
    isTie && /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2", children: traits.map((t) => {
      const cat = CATEGORIES[t];
      return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border-2 border-[var(--border)] bg-card p-6 shadow-md", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: cat.name }),
        /* @__PURE__ */ jsx("img", { src: cat.image, alt: cat.name, loading: "lazy", className: "mt-4 w-full rounded-xl border-2 border-[var(--border)] shadow-sm" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: cat.description })
      ] }, t);
    }) }),
    !isTie && /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-foreground/90", children: CATEGORIES[traits[0]].description }),
    scores.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-xl font-bold", children: "Your Trait Breakdown" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-4", children: scores.slice().sort((a, b) => b.score - a.score).map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: s.trait }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
            s.score,
            "/15 (",
            s.percent,
            "%)"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "h-full transition-all duration-300", style: {
          width: `${s.percent}%`,
          background: "var(--gradient-primary)"
        } }) })
      ] }, s.trait)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "rounded-xl px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition hover:opacity-90", style: {
      background: "var(--gradient-primary)"
    }, children: "Back to welcome" }) })
  ] }) }) });
}
export {
  Results as component
};
