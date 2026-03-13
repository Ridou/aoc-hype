export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/30 via-[#0a0a0a] to-[#1a3a2a]/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block bg-[#C41E3A] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            ★ Rep. NY-14 · Bronx & Queens ★
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 leading-none">
            ALEXANDRIA<br />
            <span className="text-[#C41E3A]">OCASIO-</span><br />
            CORTEZ
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-2 tracking-wide">
            Bartender → Congresswoman → Legend
          </p>
          <p className="text-base text-gray-500 mb-10 italic">
            &ldquo;You can&apos;t beat big money with more money. You have to beat them with a totally different game.&rdquo;
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#story" className="bg-[#C41E3A] hover:bg-[#a01830] transition px-8 py-3 rounded-full font-bold text-sm tracking-wide">
              Her Story
            </a>
            <a href="#accomplishments" className="border border-white/30 hover:border-white transition px-8 py-3 rounded-full font-bold text-sm tracking-wide">
              Accomplishments
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-xs tracking-widest">
          SCROLL ↓
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#C41E3A] py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "29", label: "Age when elected" },
            { num: "71%", label: "2020 vote margin" },
            { num: "430K+", label: "Peak Twitch viewers" },
            { num: "#1", label: "Most-watched C-SPAN clip" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black">{s.num}</div>
              <div className="text-xs uppercase tracking-widest text-red-200 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C41E3A] text-xs font-bold tracking-widest uppercase">Origin Story</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">From the Bronx to the Capitol</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Born October 13, 1989, in Parkchester, South Bronx. Her father built a small architectural firm. Her mother cleaned houses and drove school buses. When her dad died during her sophomore year at Boston University, medical bills nearly took their home.
            </p>
            <p>
              She graduated with dual degrees in <strong className="text-white">economics and international relations</strong>, then moved back to the Bronx. For most of her 20s, she bartended and waitressed — carrying $25K in student loans, paying $200/month for health insurance with a massive deductible, living paycheck to paycheck.
            </p>
            <p>
              Her Intel Science Fair project on roundworm lifespans won second place nationally. Her ZIP code lesson became her political north star: <em className="text-[#C41E3A]">&ldquo;ZIP code determines destiny.&rdquo;</em>
            </p>
            <p>
              After driving across America post-2016, witnessing Flint and Standing Rock, her brother submitted her name to Brand New Congress. The call came while she was still behind the bar.
            </p>
          </div>
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 space-y-4">
            <div className="text-[#C41E3A] font-bold text-xs tracking-widest uppercase mb-6">The 2018 Campaign</div>
            {[
              ["Outspent", "18-to-1"],
              ["Corporate donations", "$0"],
              ["Incumbent defeated", "10-term Joe Crowley"],
              ["Primary margin", "57% – 43%"],
              ["Historic record", "Youngest woman ever elected to Congress"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-gray-500 text-sm">{k}</span>
                <span className="text-white font-bold text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green New Deal */}
      <section className="bg-[#0d1a0d] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-400 text-xs font-bold tracking-widest uppercase">Climate · Jobs · Justice</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">The Green New Deal</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Feb 7, 2019. AOC and Sen. Ed Markey dropped a 14-page resolution that changed the entire conversation on climate policy in America.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌱",
                title: "Climate",
                points: ["100% clean energy", "Net-zero emissions in 10 years", "Eliminate fossil fuels", "Inspired the IRA — the largest federal climate investment in US history"],
              },
              {
                icon: "⚒️",
                title: "Jobs",
                points: ["Millions of union jobs", "Family-sustaining wages", "Paid leave & retirement", "Green infrastructure overhaul"],
              },
              {
                icon: "⚖️",
                title: "Justice",
                points: ["Investment in underserved communities", "Clean energy for all", "Environmental justice for frontline communities", "Universal healthcare transition support"],
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-[#0a0a0a] border border-green-900/40 rounded-2xl p-8">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-black mb-4 text-green-400">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.points.map((p) => (
                    <li key={p} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-green-600 mt-0.5">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-green-900/20 border border-green-800/30 rounded-xl p-6 text-center">
            <p className="text-green-300 text-lg italic">&ldquo;The Green New Deal has three core components: jobs, justice, and climate.&rdquo;</p>
            <p className="text-gray-600 text-sm mt-2">— AOC</p>
          </div>
        </div>
      </section>

      {/* Accomplishments */}
      <section id="accomplishments" className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C41E3A] text-xs font-bold tracking-widest uppercase">Track Record</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Getting Things Done</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              category: "Legislative Wins",
              items: [
                "Passed amendments funding opioid addiction treatment",
                "Secured cleanup funding for toxic bomb-testing sites in Puerto Rico",
                "Got COVID funeral expense reimbursements for American families",
                "Forced Biden to extend the eviction moratorium via Capitol sit-in",
                "Championed the $1.9T American Rescue Plan",
              ],
            },
            {
              category: "Committee Clout",
              items: [
                "House Financial Services — compelled Big Bank CEO testimony",
                "House Oversight — Vice Ranking Member alongside Rep. Raskin",
                "House Energy & Commerce — covering health + energy",
                "Launched bid for full Oversight Ranking Member",
                "1.9% vote miss rate — better than median Congress member",
              ],
            },
            {
              category: "Cultural & Political Impact",
              items: [
                "Founded 'The Squad' — reshaped Democratic Party positioning",
                "TIME 100 Most Influential People (2019) — entry by Sen. Warren",
                "JFK New Frontier Award (2020)",
                "Netflix doc 'Knock Down the House' — Critics' Choice Award",
                "Inspired wave of working-class candidates nationwide",
              ],
            },
            {
              category: "Breaking Records",
              items: [
                "Youngest woman ever elected to Congress",
                "First woman of Puerto Rican descent in Congress",
                "Most-watched C-SPAN speech ever — 12M views",
                "5th biggest Twitch stream ever — 430K concurrent viewers",
                "More Twitter followers than all other 60 Dem freshmen combined",
              ],
            },
          ].map((block) => (
            <div key={block.category} className="bg-[#111] border border-white/10 rounded-2xl p-8">
              <h3 className="text-[#C41E3A] font-bold text-xs tracking-widest uppercase mb-6">{block.category}</h3>
              <ul className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="text-gray-300 text-sm flex gap-3">
                    <span className="text-[#C41E3A] font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quotes */}
      <section className="bg-[#C41E3A] py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">Words That Hit</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Having a daughter does not make a man decent. Having a wife does not make a decent man. Treating people with dignity and respect makes a decent man.",
              "We don't leave the things that we love, and when we love this country, what that means is that we propose the solutions to fix it.",
              "I keep things raw and honest on here since I believe public servants do a disservice to our communities by pretending to be perfect.",
              "For 80 percent of this campaign, I operated out of a paper grocery bag hidden behind that bar.",
            ].map((q) => (
              <blockquote key={q} className="bg-[#a01830] rounded-2xl p-8">
                <p className="text-white text-lg leading-relaxed italic">&ldquo;{q}&rdquo;</p>
                <p className="text-red-300 text-xs font-bold mt-4">— Alexandria Ocasio-Cortez</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <span className="text-[#C41E3A] text-xs font-bold tracking-widest uppercase">2026 & Beyond</span>
        <h2 className="text-4xl md:text-5xl font-black mt-3 mb-8">The Future is AOC</h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Data for Progress polling shows AOC beating Sen. Schumer 55–36% among likely Democratic voters. She placed 3rd in hypothetical 2028 presidential primary polls — without running a single organizing event. The left isn&apos;t waiting for permission.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: "vs Schumer in polls", value: "55%–36%" },
            { label: "2028 Pres. primary polling", value: "Top 3" },
            { label: "Instagram followers", value: "9.6M+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-black text-[#C41E3A]">{stat.value}</div>
              <div className="text-gray-500 text-xs mt-2 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 text-center">
        <p className="text-gray-600 text-sm">Built in honor of Rep. Alexandria Ocasio-Cortez (NY-14) · Bronx & Queens</p>
        <p className="text-gray-700 text-xs mt-2">Not affiliated with or endorsed by Rep. Ocasio-Cortez or her campaign.</p>
      </footer>
    </main>
  );
}
