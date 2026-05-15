export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Runway Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict Your Exact{" "}
          <span className="text-[#58a6ff]">Cash Depletion Date</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect bank accounts and expense tools. Get a precise runway end date powered by burn rate trends and seasonal ML adjustments — before your investors ask.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting — $29/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🏦", title: "Bank Integration", desc: "Plaid-powered sync with all major banks and expense tools in minutes." },
            { icon: "📉", title: "Burn Rate Trends", desc: "Automated rolling burn rate with month-over-month trend detection." },
            { icon: "🔔", title: "Depletion Alerts", desc: "Real-time alerts when runway drops below your custom threshold." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$29<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to never be surprised by zero cash.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited bank account connections",
              "ML-based runway prediction",
              "Seasonal burn rate adjustments",
              "Real-time depletion alerts",
              "Exportable reports for investors",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the runway prediction work?",
              a: "We connect to your bank accounts via Plaid, calculate your rolling burn rate over the last 3–6 months, apply seasonal trend adjustments using ML models, and project the exact date your balance hits zero."
            },
            {
              q: "Is my financial data secure?",
              a: "Yes. We use Plaid's bank-grade encryption and never store raw credentials. All financial data is encrypted at rest and in transit, and you can revoke access at any time."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Absolutely. Cancel with one click from your dashboard. You keep access until the end of your billing period with no questions asked."
            }
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Runway Predictor. All rights reserved.
      </footer>
    </main>
  );
}
