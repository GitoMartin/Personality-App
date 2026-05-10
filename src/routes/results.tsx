import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";

// (Optional) Replace these with your own images later
import jokerImg from "@/assets/Joker.jpg";
import moverImg from "@/assets/Mover.jpg";
import explorerImg from "@/assets/Explorer.jpg";
import competitorImg from "@/assets/Competitor.jpg";
import directorImg from "@/assets/Director.jpg";
import collectorImg from "@/assets/Collector.jpg";
import creatorImg from "@/assets/Creator.jpg";
import storytellerImg from "@/assets/Storyteller.jpg";

export const Route = createFileRoute("/results")({
  component: Results,
  head: () => ({
    meta: [
      { title: "Your Result — Persona Personality Test" },
      {
        name: "description",
        content: "See your dominant personality category from the Persona test.",
      },
    ],
  }),
});

type Trait =
  | "Joker"
  | "Mover"
  | "Explorer"
  | "Competitor"
  | "Director"
  | "Collector"
  | "Creator"
  | "Storyteller";

type StoredResult = {
  trait: string; // could be "Explorer" OR "Explorer-Creator"
  scores: { trait: Trait; score: number; percent: number }[];
};

const CATEGORIES: Record<Trait, { name: string; image: string; description: string }> = {
  Joker: {
    name: "The Joker",
    image: jokerImg,
    description:
      "You bring humor, laughter, and lightness into everyday life. Jokers love making others laugh and often use play to connect socially.",
  },
  Mover: {
    name: "The Mover",
    image: moverImg,
    description:
      "You feel most alive when moving your body—whether through sports, dancing, adventure, or physical activity.",
  },
  Explorer: {
    name: "The Explorer",
    image: explorerImg,
    description:
      "You love novelty, curiosity, and discovering new places, ideas, and experiences.",
  },
  Competitor: {
    name: "The Competitor",
    image: competitorImg,
    description:
      "You thrive on challenges, achievement, and testing your skills against others.",
  },
  Director: {
    name: "The Director",
    image: directorImg,
    description:
      "You enjoy organizing, planning, and leading activities. You often take charge naturally.",
  },
  Collector: {
    name: "The Collector",
    image: collectorImg,
    description:
      "You enjoy gathering, organizing, and completing things that feel meaningful to you.",
  },
  Creator: {
    name: "The Creator",
    image: creatorImg,
    description:
      "You love imagination, originality, and making something new. Creativity is your playground.",
  },
  Storyteller: {
    name: "The Storyteller",
    image: storytellerImg,
    description:
      "You’re drawn to narratives, imagination, and meaningful storytelling. You love sharing experiences through stories.",
  },
};

function Results() {
  const [traits, setTraits] = useState<Trait[]>([]);
  const [scores, setScores] = useState<StoredResult["scores"]>([]);

  useEffect(() => {
    const raw = sessionStorage.getItem("persona-result");
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as StoredResult;

      // trait may be "Explorer" OR "Explorer-Creator"
      const splitTraits = parsed.trait
        .split("-")
        .map((t) => t.trim())
        .filter(Boolean) as Trait[];

      setTraits(splitTraits);
      setScores(parsed.scores ?? []);
    } catch {
      /* ignore */
    }
  }, []);

  if (traits.length === 0) {
    return (
      <PageShell>
        <main className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h1 className="text-3xl font-bold">No results yet</h1>
          <p className="mt-2 text-muted-foreground">
            Take the test first to see your personality category.
          </p>
          <Link
            to="/test"
            className="mt-6 inline-block rounded-xl px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg"
            style={{ background: "var(--gradient-primary)" }}
          >
            Start the test
          </Link>
        </main>
      </PageShell>
    );
  }

  const isTie = traits.length > 1;

  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <article className="rounded-2xl border-2 border-[var(--border)] bg-card p-8 shadow-[var(--shadow-card)]">
          <header className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Your Personality
            </p>

            <h1 className="rainbow-text mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {isTie ? "Mixed Type" : CATEGORIES[traits[0]].name}
            </h1>

            {isTie && (
              <p className="mt-3 text-muted-foreground">
                You scored equally highest in:{" "}
                <span className="font-semibold text-foreground">
                  {traits.join(" - ")}
                </span>
              </p>
            )}
          </header>

          {/* If single result show image */}
          {!isTie && (
            <img
              src={CATEGORIES[traits[0]].image}
              alt={CATEGORIES[traits[0]].name}
              width={768}
              height={512}
              loading="lazy"
              className="mx-auto mt-8 w-full max-w-xl rounded-2xl border-2 border-[var(--border)] shadow-md"
            />
          )}

          {/* If tie show multiple cards */}
          {isTie && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {traits.map((t) => {
                const cat = CATEGORIES[t];
                return (
                  <div
                    key={t}
                    className="rounded-2xl border-2 border-[var(--border)] bg-card p-6 shadow-md"
                  >
                    <h2 className="text-xl font-bold">{cat.name}</h2>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="mt-4 w-full rounded-xl border-2 border-[var(--border)] shadow-sm"
                    />
                    <p className="mt-4 text-sm text-muted-foreground">{cat.description}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Description (single trait only) */}
          {!isTie && (
            <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-foreground/90">
              {CATEGORIES[traits[0]].description}
            </p>
          )}

          {/* Score breakdown */}
          {scores.length > 0 && (
            <div className="mt-12">
              <h2 className="text-center text-xl font-bold">Your Trait Breakdown</h2>
              <div className="mt-6 space-y-4">
                {scores
                  .slice()
                  .sort((a, b) => b.score - a.score)
                  .map((s) => (
                    <div key={s.trait} className="rounded-xl border p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{s.trait}</p>
                        <p className="text-sm text-muted-foreground">
                          {s.score}/15 ({s.percent}%)
                        </p>
                      </div>

                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full transition-all duration-300"
                          style={{
                            width: `${s.percent}%`,
                            background: "var(--gradient-primary)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <Link
              to="/"
              className="rounded-xl px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
              style={{ background: "var(--gradient-primary)" }}
            >
              Back to welcome
            </Link>
          </div>
        </article>
      </main>
    </PageShell>
  );
}