:root {
  --bg: #ffffff;
  --ink: #1b1e24;
  --muted: #5f6570;
  --line: #e4e6ea;
  --accent: #2f43d9;
  color-scheme: light;
  box-sizing: border-box;
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #16181d;
    --ink: #eceef1;
    --muted: #9aa0ab;
    --line: #2a2e36;
    --accent: #8d9bff;
    color-scheme: dark;
  }
}
:root[data-theme="dark"] {
  --bg: #16181d;
  --ink: #eceef1;
  --muted: #9aa0ab;
  --line: #2a2e36;
  --accent: #8d9bff;
  color-scheme: dark;
}
html { scroll-padding-top: env(safe-area-inset-top, 0px); scroll-behavior: smooth; }
*, *::before, *::after { box-sizing: inherit; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: "Schibsted Grotesk", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

.wrap { max-width: 60rem; margin: 0 auto; padding: 0 1.5rem; }

.nav { display: flex; gap: 1.5rem; padding: 1.5rem 0; }
.nav a { color: var(--muted); text-decoration: none; font-size: 0.95rem; }
.nav a:hover { color: var(--ink); }
.nav a.active { color: var(--ink); }

.hero { padding: clamp(4rem, 14vw, 9rem) 0 clamp(4rem, 10vw, 7rem); }
.hero h1 {
  margin: 0;
  font-size: clamp(3rem, 13vw, 8.5rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.045em;
}
.hero .headline {
  margin: 1.75rem 0 0;
  font-size: clamp(1.15rem, 2.6vw, 1.5rem);
  font-weight: 500;
}
.hero .intro { margin: 1.5rem 0 0; max-width: 34rem; color: var(--muted); font-size: clamp(1.05rem, 2vw, 1.2rem); }
.hero .intro + .intro { margin-top: 1rem; }
.hero .closing { margin: 1.75rem 0 0; font-size: clamp(1.15rem, 2.4vw, 1.4rem); font-weight: 500; }
.actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
.btn {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--ink);
  border-radius: 0.5rem;
  color: var(--ink);
  font-weight: 500;
  text-decoration: none;
}
.btn:hover { border-color: var(--accent); color: var(--accent); }
.btn.primary { background: var(--ink); color: var(--bg); }
.btn.primary:hover { background: var(--accent); border-color: var(--accent); color: var(--bg); }

.block {
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 1rem 2rem;
  padding: 2.5rem 0 3rem;
  border-top: 1px solid var(--line);
}
.block h2 { margin: 0; font-size: 1rem; font-weight: 500; color: var(--muted); }
.block p { margin: 0; max-width: 34rem; font-size: 1.15rem; }
.block p + p { margin-top: 1rem; }
.block h3 { margin: 2.25rem 0 0.75rem; font-size: 1.15rem; font-weight: 600; }
.interests { margin: 0; padding-left: 1.2rem; max-width: 34rem; font-size: 1.15rem; }
.interests li { margin: 0.2rem 0; }
.interests li::marker { color: var(--muted); }
.tech .group { margin-top: 2.5rem; }
.tech .group:first-child { margin-top: 0; }
.block .tech h3 { margin: 0 0 0.75rem; }
.tech .skills li { grid-template-columns: 11rem 1fr; }
.tech .label { margin: 1.25rem 0 0.5rem; color: var(--muted); font-size: 0.95rem; }
.project { padding: 2rem 0; border-top: 1px solid var(--line); }
.project:first-child { padding-top: 0; border-top: 0; }
.project:last-child { padding-bottom: 0; }
.project .cat { margin: 0 0 0.4rem; color: var(--muted); font-size: 0.95rem; }
.block .project h3 { margin: 0; font-size: 1.4rem; font-weight: 600; line-height: 1.25; }
.project .desc { margin-top: 0.9rem; }
.project .label { margin: 1.25rem 0 0.5rem; color: var(--muted); font-size: 0.95rem; }
.chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0; padding: 0; list-style: none; }
.chips li { padding: 0.2rem 0.75rem; border: 1px solid var(--line); border-radius: 999px; color: var(--muted); font-size: 0.9rem; }
.project .edu-meta { margin: 0.3rem 0 0; color: var(--muted); font-size: 1rem; }
.project .edu-meta.major { margin-top: 0.6rem; color: var(--ink); font-size: 1.15rem; }
.project .edu-text { margin: 0; }
.block.cta { display: block; }
.cta-head { max-width: 40rem; margin: 0 auto 2rem; text-align: center; }
.cta .kicker { margin: 0 auto; max-width: none; text-align: center; color: var(--accent); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; }
.cta .cta-head h2 { margin: 0.5rem auto 0; text-align: center; color: var(--ink); font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 600; letter-spacing: -0.02em; line-height: 1.15; }
.cta .cta-sub { max-width: 36rem; margin: 1rem auto 0; text-align: center; color: var(--muted); font-size: 1.1rem; }
.contact-card { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; max-width: 40rem; margin: 0 auto; padding: 2rem; border: 1px solid var(--line); border-radius: 1.5rem; text-align: center; }
.contact-info { min-width: 0; text-align: center; }
.contact-card .label { margin: 0; color: var(--muted); font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; }
.contact-card .email { margin: 0.4rem 0 0; font-size: clamp(1.15rem, 3.2vw, 1.6rem); font-weight: 600; overflow-wrap: anywhere; }
.contact-card .contact-note { margin: 0.75rem 0 0; color: var(--muted); font-size: 1rem; }
.contact-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; }
.contact-actions .btn { min-width: 8rem; text-align: center; }

.skills { margin: 0; padding: 0; list-style: none; }
.skills li {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 0.25rem 1.5rem;
  padding: 0.9rem 0;
  border-top: 1px solid var(--line);
}
.skills li:first-child { border-top: 0; padding-top: 0; }
.skills strong { font-weight: 500; }
.skills span { color: var(--muted); }

.link { color: var(--accent); text-underline-offset: 0.25em; text-decoration-thickness: 1px; }
a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 2px; }

.foot { padding: 2rem 0 3rem; border-top: 1px solid var(--line); color: var(--muted); font-size: 0.9rem; text-align: center; }
.foot p { margin: 0; }
.foot p + p { margin-top: 0.25rem; }
.foot .credit { color: var(--ink); font-weight: 500; }

@media (max-width: 40rem) {
  .block { grid-template-columns: 1fr; gap: 0.75rem; }
  .skills li { grid-template-columns: 1fr; }
  .tech .skills li { grid-template-columns: 1fr; }
  .contact-card { padding: 1.4rem; }
}
