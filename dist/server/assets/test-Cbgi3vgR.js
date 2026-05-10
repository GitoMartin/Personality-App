import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { P as PageShell } from "./PageShell-Bgh84Hdv.js";
const QUESTIONS = [
  // Joker (1-3)
  {
    id: 1,
    text: "I use humor to connect with others.",
    trait: "Joker"
  },
  {
    id: 2,
    text: "I like being seen as funny or entertaining.",
    trait: "Joker"
  },
  {
    id: 3,
    text: "I use jokes in everyday situations.",
    trait: "Joker"
  },
  // Mover (4-6)
  {
    id: 4,
    text: "I prefer hands-on activities over passive ones.",
    trait: "Mover"
  },
  {
    id: 5,
    text: "I like using my body to express myself.",
    trait: "Mover"
  },
  {
    id: 6,
    text: "I feel restless when I am inactive.",
    trait: "Mover"
  },
  // Explorer (7-9)
  {
    id: 7,
    text: "I enjoy exploring new environments.",
    trait: "Explorer"
  },
  {
    id: 8,
    text: "I am drawn to unfamiliar places.",
    trait: "Explorer"
  },
  {
    id: 9,
    text: "I like discovering new ideas.",
    trait: "Explorer"
  },
  // Competitor (10-12)
  {
    id: 10,
    text: "I enjoy competing with others.",
    trait: "Competitor"
  },
  {
    id: 11,
    text: "I feel motivated by winning.",
    trait: "Competitor"
  },
  {
    id: 12,
    text: "I like measuring my performance against others.",
    trait: "Competitor"
  },
  // Director (13-15)
  {
    id: 13,
    text: "I enjoy planning and coordinating events.",
    trait: "Director"
  },
  {
    id: 14,
    text: "I prefer having a plan rather than improvising.",
    trait: "Director"
  },
  {
    id: 15,
    text: "I like taking the lead in group situations.",
    trait: "Director"
  },
  // Collector (16-18)
  {
    id: 16,
    text: "I enjoy collecting items.",
    trait: "Collector"
  },
  {
    id: 17,
    text: "I feel satisfied when things are complete.",
    trait: "Collector"
  },
  {
    id: 18,
    text: "I like keeping things neat and structured.",
    trait: "Collector"
  },
  // Creator (19-21)
  {
    id: 19,
    text: "I feel fulfilled when I create something unique.",
    trait: "Creator"
  },
  {
    id: 20,
    text: "My friends would describe me as creative.",
    trait: "Creator"
  },
  {
    id: 21,
    text: "I enjoy creating things in my free time.",
    trait: "Creator"
  },
  // Storyteller (22-24)
  {
    id: 22,
    text: "I like sharing stories with others.",
    trait: "Storyteller"
  },
  {
    id: 23,
    text: "I find storytelling interesting.",
    trait: "Storyteller"
  },
  {
    id: 24,
    text: "I enjoy engaging with fictional worlds.",
    trait: "Storyteller"
  }
];
const OPTIONS = [{
  value: 1,
  label: "Strongly Disagree",
  color: "disagree-strong"
}, {
  value: 2,
  label: "Disagree",
  color: "disagree"
}, {
  value: 3,
  label: "Neutral",
  color: "neutral"
}, {
  value: 4,
  label: "Agree",
  color: "agree"
}, {
  value: 5,
  label: "Strongly Agree",
  color: "agree-strong"
}];
function Index() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const allAnswered = Object.keys(answers).length === QUESTIONS.length;
  const handleSubmit = () => {
    const totals = {
      Joker: 0,
      Mover: 0,
      Explorer: 0,
      Competitor: 0,
      Director: 0,
      Collector: 0,
      Creator: 0,
      Storyteller: 0
    };
    for (const q of QUESTIONS) {
      const v = answers[q.id];
      if (!v) continue;
      totals[q.trait] += v;
    }
    const scores = Object.entries(totals).map(([trait, sum]) => ({
      trait,
      score: sum,
      percent: Math.round(sum / 15 * 100)
      // since max per trait is 15
    }));
    const maxScore = Math.max(...scores.map((s) => s.score));
    const tiedTraits = scores.filter((s) => s.score === maxScore).map((s) => s.trait);
    const finalTrait = tiedTraits.join("-");
    sessionStorage.setItem("persona-result", JSON.stringify({
      trait: finalTrait,
      scores
    }));
    navigate({
      to: "/results"
    });
  };
  const progress = Object.keys(answers).length / QUESTIONS.length * 100;
  return /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-3xl px-4 py-12", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "rainbow-text text-5xl font-extrabold tracking-tight sm:text-6xl", children: "Personality Test" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Answer honestly. There are no right or wrong answers." }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-6 h-2 w-full max-w-md overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "h-full transition-all duration-300", style: {
        width: `${progress}%`,
        background: "var(--gradient-primary)"
      } }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-5", children: QUESTIONS.map((q) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border-2 border-[var(--border)] bg-card p-6 shadow-[var(--shadow-card)] transition hover:shadow-lg", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg font-medium", children: q.text }),
      /* @__PURE__ */ jsx("div", { role: "radiogroup", "aria-label": q.text, className: "mt-5 flex flex-wrap items-start justify-center gap-3 sm:gap-5", children: OPTIONS.map((opt) => {
        const selected = answers[q.id] === opt.value;
        return /* @__PURE__ */ jsxs("button", { role: "radio", "aria-checked": selected, onClick: () => setAnswers((a) => ({
          ...a,
          [q.id]: opt.value
        })), title: opt.label, "aria-label": opt.label, className: `group flex w-16 flex-col items-center gap-2 transition ${selected ? "scale-110" : "hover:scale-105"}`, children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-full border-2 font-bold shadow-md transition sm:h-14 sm:w-14", style: {
            backgroundColor: selected ? `var(--${opt.color})` : "transparent",
            borderColor: "var(--border)",
            color: selected ? "white" : "var(--border)",
            boxShadow: selected ? `0 0 0 3px var(--${opt.color}), 0 8px 20px -6px var(--${opt.color})` : "none"
          }, children: opt.value }),
          /* @__PURE__ */ jsx("span", { className: "text-center text-[10px] font-medium leading-tight text-muted-foreground sm:text-xs", children: opt.label })
        ] }, opt.value);
      }) })
    ] }, q.id)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx("button", { disabled: !allAnswered, onClick: handleSubmit, className: "rounded-xl px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition disabled:cursor-not-allowed disabled:opacity-50", style: {
      background: "var(--gradient-primary)"
    }, children: allAnswered ? "See my results" : `Answer all questions (${Object.keys(answers).length}/${QUESTIONS.length})` }) })
  ] }) });
}
export {
  Index as component
};
