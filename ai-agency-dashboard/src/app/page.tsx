export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-16 pt-14 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Automation Control Center
            </div>
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
                Command dashboard for high-velocity AI automation agencies.
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Monitor performance, orchestrate automation pods, and launch
                AI-first revenue streams for every client from a single,
                intelligent cockpit.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300">
                Launch New Pod
                <span className="rounded-full bg-slate-900/20 px-2 py-0.5 text-xs font-semibold text-slate-900">
                  12 queued
                </span>
              </button>
              <button className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40">
                Export Weekly Ops Report
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-400/40 bg-slate-900/60 p-6 shadow-[0_0_50px_rgba(34,211,238,0.15)] md:w-96">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Control Signal
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm text-slate-400">Agency Pace</p>
                <p className="text-3xl font-semibold text-cyan-100">
                  142<span className="text-lg font-normal text-slate-400">%</span>
                </p>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-800/60 p-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Active Revenue Engines
                  </p>
                  <p className="text-lg font-semibold text-slate-100">27</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Avg Profit Margin
                  </p>
                  <p className="text-lg font-semibold text-emerald-300">64%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Automation Uptime</span>
                <span className="text-sm font-semibold text-emerald-300">
                  99.3%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800">
                <div className="h-full w-[93%] rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-24 pt-10">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Automation Revenue",
              value: "$582k",
              change: "+18% MoM",
              description: "Recurring revenue from deployed AI engines across all clients.",
            },
            {
              title: "Time Saved This Week",
              value: "2,740 hrs",
              change: "+312 hrs",
              description: "Human hours reclaimed by robotic process automation pods.",
            },
            {
              title: "AI Coverage Ratio",
              value: "74%",
              change: "+9 pts",
              description: "Percentage of client workflows fully automated with AI agents.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50 transition hover:border-cyan-200/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >
              <header className="flex items-center justify-between gap-3">
                <h2 className="text-sm font-semibold text-slate-300">
                  {item.title}
                </h2>
                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                  {item.change}
                </span>
              </header>
              <p className="mt-4 text-3xl font-semibold text-slate-50">
                {item.value}
              </p>
              <p className="mt-3 text-sm text-slate-400">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-lg shadow-slate-950/40">
            <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  Client Pipeline
                </p>
                <h3 className="text-2xl font-semibold text-slate-50">
                  Active automation rollouts
                </h3>
              </div>
              <button className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-200 transition hover:border-white/40">
                View Pipeline
              </button>
            </header>
            <div className="space-y-4">
              {[
                {
                  company: "NovaBank",
                  focus: "Underwriting agent swarm",
                  status: "Testing risk model v3",
                  progress: 76,
                  eta: "Go-live in 9 days",
                },
                {
                  company: "Atlas Freight",
                  focus: "Dispatch automation",
                  status: "Realtime optimization running",
                  progress: 64,
                  eta: "Scaling driver network",
                },
                {
                  company: "Glow Health",
                  focus: "Patient concierge AI",
                  status: "NLP fine tuning complete",
                  progress: 88,
                  eta: "Launch event scheduled",
                },
              ].map((client) => (
                <div
                  key={client.company}
                  className="rounded-2xl border border-white/10 bg-slate-800/60 p-5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-200">
                        {client.company}
                      </p>
                      <p className="text-sm text-slate-400">{client.focus}</p>
                    </div>
                    <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      {client.eta}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                    <span>{client.status}</span>
                    <span>{client.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-700">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                      style={{ width: `${client.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-6 shadow-[0_0_40px_rgba(52,211,153,0.18)]">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                Capacity
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Automation pods live</p>
                    <p className="text-3xl font-semibold text-slate-50">54</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                    +6 this week
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm text-slate-300">
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-xs text-slate-400">Pod throughput</p>
                    <p className="mt-1 text-lg font-semibold text-emerald-200">
                      1.8x
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-xs text-slate-400">SLA breaches</p>
                    <p className="mt-1 text-lg font-semibold text-emerald-200">
                      0
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-xs text-slate-400">Escalations</p>
                    <p className="mt-1 text-lg font-semibold text-emerald-200">
                      3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                Team Signals
              </p>
              <div className="mt-4 space-y-5">
                {[
                  {
                    owner: "Launch Guild",
                    load: "82% load",
                    note: "Preparing scale-blueprint for Atlas Freight",
                  },
                  {
                    owner: "Automation Labs",
                    load: "68% load",
                    note: "Running zero-shot QA on Glow health concierge agents",
                  },
                  {
                    owner: "Growth Pod",
                    load: "46% load",
                    note: "Prospecting 19 high-value outbound opportunities",
                  },
                ].map((team) => (
                  <div key={team.owner} className="rounded-2xl bg-slate-800/60 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-200">
                        {team.owner}
                      </p>
                      <span className="text-xs text-cyan-200">{team.load}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">{team.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 shadow-lg shadow-slate-950/40">
            <header className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  Strategy Engine
                </p>
                <h3 className="text-2xl font-semibold text-slate-50">
                  Workflow orchestration timeline
                </h3>
              </div>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-slate-200">
                Next 7 days
              </span>
            </header>
            <ol className="mt-6 space-y-6">
              {[
                {
                  title: "Ideate & map automations",
                  detail: "Capture manual workflows, map AI-first blueprint, auto-generate SOP.",
                  owner: "Discovery Squad",
                  due: "Today 14:00",
                },
                {
                  title: "Deploy agentic pods",
                  detail: "Spin up multi-agent pods, configure connectors, enforce governance.",
                  owner: "Automation Labs",
                  due: "Tomorrow 09:30",
                },
                {
                  title: "Optimize profit loops",
                  detail: "A/B run pricing experiments, feed margin telemetry, auto-adjust offers.",
                  owner: "Revenue Ops",
                  due: "in 3 days",
                },
                {
                  title: "Executive insight broadcast",
                  detail: "Synthesize wins, produce investor-ready deck, push to client portal.",
                  owner: "Signal Desk",
                  due: "in 5 days",
                },
              ].map((phase, index) => (
                <li key={phase.title} className="relative pl-8">
                  <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                    {index + 1}
                  </span>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <p className="text-sm font-semibold text-slate-200">
                        {phase.title}
                      </p>
                      <span className="text-xs text-slate-400">{phase.due}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">{phase.detail}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-cyan-200">
                      Owner · {phase.owner}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-lg shadow-slate-950/40">
            <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  Live Intelligence
                </p>
                <h3 className="text-2xl font-semibold text-slate-50">
                  Automation signal feed
                </h3>
              </div>
              <button className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-white/40">
                Subscribe
              </button>
            </header>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              {[
                {
                  event: "Glow Health concierge answered 1.2k patient triage requests with 0 escalations in the last 2 hours.",
                  tag: "Healthcare",
                  time: "2m ago",
                },
                {
                  event: "NovaBank underwriting pod reduced loan decision latency from 3h to 14m.",
                  tag: "Finance",
                  time: "14m ago",
                },
                {
                  event: "Atlas Freight dispatch automation rerouted 46 shipments after weather sweep with +12% margin lift.",
                  tag: "Logistics",
                  time: "23m ago",
                },
                {
                  event: "Outbound prospecting agents generated 37 SQLs with dynamic pricing recommendations.",
                  tag: "Growth",
                  time: "31m ago",
                },
              ].map((signal) => (
                <div
                  key={signal.event}
                  className="rounded-2xl border border-white/10 bg-slate-800/60 p-4"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{signal.time}</span>
                    <span className="rounded-full border border-cyan-300/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-200">
                      {signal.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-200">{signal.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-lg shadow-slate-950/40">
          <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                Impact Ledger
              </p>
              <h3 className="text-2xl font-semibold text-slate-50">
                Executive-grade scorecard
              </h3>
            </div>
            <div className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200">
              Updated · 8 min ago
            </div>
          </header>
          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            {[
              {
                label: "Avg client ROI cycle",
                value: "23 days",
                change: "-6 days",
                tone: "positive",
              },
              {
                label: "Automation recommendation adoption",
                value: "91%",
                change: "+4 pts",
                tone: "positive",
              },
              {
                label: "Median pipeline velocity",
                value: "3.6 weeks",
                change: "+1.2 weeks",
                tone: "neutral",
              },
              {
                label: "Human headcount replaced",
                value: "41 FTE",
                change: "-3 YoY",
                tone: "positive",
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-slate-800/60 p-5"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-100">
                  {metric.value}
                </p>
                <p
                  className={`mt-2 text-xs font-semibold uppercase tracking-wide ${
                    metric.tone === "positive"
                      ? "text-emerald-300"
                      : metric.tone === "neutral"
                        ? "text-slate-300"
                        : "text-rose-300"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 p-8 shadow-[0_40px_80px_rgba(15,23,42,0.45)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                Deploy Next
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-50">
                Ready to spin up your next automation revenue engine?
              </h3>
              <p className="mt-4 text-sm text-slate-200">
                Drop a brief, assign a guild, and deploy bespoke AI agents tuned
                to your client&apos;s mission before their competitors finish
                their discovery call.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300">
                Book War Room
              </button>
              <button className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40">
                Share Client Portal
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
