import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  component: Welcome,
  head: () => ({
    meta: [
      { title: "Welcome — Persona Personality Test" },
      {
        name: "description",
        content:
          "Welcome to Persona — a quick, friendly personality test to help you discover your traits across the Big Five.",
      },
    ],
  }),
});

const SECTIONS: { title: string; body: string }[] = [
  {
    title: "What is Persona?",
    body: "Persona is a short, friendly personality test inspired by the Stuart Brown Eight play personalities theorem -",
  },
  {
    title: "How it works",
    body: "You'll answer 24 honest statements on a 5-point scale, from strongly agree to strongly disagree. It only takes a couple of minutes.",
  },
  {
    title: "Eight core traits",
    body: "We measures how individuals engage with play, reflecting their unique inclinations and preferences.",
  },
  {
    title: "No right or wrong",
    body: "There are no good or bad scores. Each trait sits on a spectrum, and every result tells a unique story about how you see the world.",
  },
  {
    title: "Be honest with yourself",
    body: "Answer based on who you actually are, not who you'd like to be. The more honest you are, the more meaningful your results will be.",
  },
  {
    title: "Quick & private",
    body: "The test takes about two minutes, and your answers stay in your browser. We don't track or store anything you select.",
  },
  {
    title: "Instant results",
    body: "As soon as you finish, you'll see a colourful breakdown of your scores across all five traits, with a short interpretation of each.",
  },
  {
    title: "Ready to begin?",
    body: "Take a deep breath, find a comfy spot, and click the button below to start exploring your personality.",
  },
];

function Welcome() {
  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-4 py-12">
        <header className="mb-10 text-center">
          <h1 className="rainbow-text text-5xl font-extrabold tracking-tight sm:text-6xl">
            Welcome to Persona
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Discover your personality across the five core traits with a quick, colourful, and honest test.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/test"
              className="rounded-xl px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
              style={{ background: "var(--gradient-primary)" }}
            >
              Start the test
            </Link>
          </div>
        </header>

        <section id="about" className="grid gap-5 sm:grid-cols-2">
          {SECTIONS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border-2 border-[var(--border)] bg-card p-6 shadow-[var(--shadow-card)] transition hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            to="/test"
            className="rounded-xl px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
            style={{ background: "var(--gradient-primary)" }}
          >
            Start the test
          </Link>
        </div>
      </main>
    </PageShell>
  );
}
