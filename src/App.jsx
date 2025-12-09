/*
Priscient — Single-file React component (Tailwind CSS)
Usage:
 - Drop this file into a Next.js or Create React App project that has Tailwind configured.
 - It's a single-page landing component with sections: Hero, Services, Case Studies, About, Contact.
 - Replace placeholder text, images and links with real content.

Tech suggestions:
 - Next.js + Vercel for deployment
 - Tailwind CSS for styling
 - Recharts / charting library for dashboards
 - Framer Motion for subtle animations
 - Integrate contact form with Netlify Forms, Formspree, or your backend

Notes:
 - This file intentionally avoids external images; use your own assets or a CDN.
 - Keep copy short and human; the design aims for clarity and speed.
*/

import React from 'react';

export default function PriscientWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-teal-400 flex items-center justify-center text-white font-semibold">P</div>
            <div>
              <div className="font-semibold">Priscient</div>
              <div className="text-xs text-gray-500">Health analytics, faster decisions</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#work" className="hover:underline">Case studies</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#" className="ml-4 inline-block px-4 py-2 border rounded-md text-sm">Get a quote</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Healthcare analytics that actually changes outcomes.</h1>
            <p className="mt-4 text-lg text-gray-700">We turn messy clinical and operational data into clear dashboards, reliable predictions, and tools clinicians trust. Short timelines. Real-world impact.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md font-medium">Talk to us</a>
              <a href="#work" className="inline-block border border-gray-300 px-5 py-3 rounded-md text-sm">See case studies</a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <li>Hospitals & NHS trusts</li>
              <li>Clinical operations</li>
              <li>Med-tech startups</li>
              <li>Research teams</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border">
            <div className="text-xs text-gray-500 mb-3">Live snapshot (sample)</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="text-sm text-gray-500">A&E wait time</div>
                <div className="mt-2 font-semibold text-2xl">48m</div>
                <div className="text-xs text-gray-500 mt-1">7% down MoM</div>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="text-sm text-gray-500">Readmissions</div>
                <div className="mt-2 font-semibold text-2xl">6.1%</div>
                <div className="text-xs text-gray-500 mt-1">Model predicted 6.3%</div>
              </div>
              <div className="col-span-2 p-4 bg-white rounded-lg border">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-500">Resource forecast</div>
                    <div className="mt-1 font-medium">ICU beds required — next 7 days</div>
                  </div>
                  <div className="text-xs text-gray-500">Updated 2d ago</div>
                </div>
                <div className="h-28 mt-3 bg-gradient-to-r from-indigo-50 to-teal-50 rounded-md flex items-center justify-center text-sm text-gray-400">[Chart placeholder]</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold">What we do</h2>
              <p className="mt-2 text-gray-600">Practical analytics from data plumbing to production models. You pick the problem; we deliver the path to a repeatable solution.</p>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg border">
                <h3 className="font-semibold">Data strategy & engineering</h3>
                <p className="mt-2 text-sm text-gray-600">Audit your data, define a roadmap, implement ETL and validation so your dashboards are reliable.</p>
                <div className="mt-4 text-xs text-gray-500">Pipelines, ETL, Snowflake, PostgreSQL</div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border">
                <h3 className="font-semibold">Dashboarding & reporting</h3>
                <p className="mt-2 text-sm text-gray-600">Clear, fast dashboards for executives and clinicians—no clutter, just the metrics that matter.</p>
                <div className="mt-4 text-xs text-gray-500">PowerBI, Tableau, custom React dashboards</div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border">
                <h3 className="font-semibold">Predictive models & ML</h3>
                <p className="mt-2 text-sm text-gray-600">From validated risk scores to operational forecasting and anomaly detection, production-ready and explainable.</p>
                <div className="mt-4 text-xs text-gray-500">Python, scikit-learn, XGBoost, MLOps</div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg border">
                <h3 className="font-semibold">Synthetic data & privacy</h3>
                <p className="mt-2 text-sm text-gray-600">Generate safe datasets for development and testing while preserving analytical validity.</p>
                <div className="mt-4 text-xs text-gray-500">GANs, VAEs, statistical disclosure control</div>
              </div>

              <div className="p-6 bg-white rounded-lg border">
                <h3 className="font-semibold">End-to-end engagements</h3>
                <p className="mt-2 text-sm text-gray-600">From problem framing to handover—training, documentation and code that your team can own.</p>
                <div className="mt-4 text-xs text-gray-500">Workshops, knowledge transfer, support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Case studies</h2>
              <p className="mt-2 text-gray-600 max-w-xl">Short, focused projects that made measurable changes to operations or patient care. Names omitted for confidentiality.</p>
            </div>
            <a href="#contact" className="text-sm border px-4 py-2 rounded-md">Request full brief</a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <article className="p-6 bg-white rounded-lg border shadow-sm">
              <h3 className="font-semibold">Reducing readmissions — urban hospital</h3>
              <p className="mt-2 text-sm text-gray-600">Built a patient risk model and triage dashboard. Result: actionable follow-up for high-risk patients and a 12% drop in 30-day readmission in pilot wards.</p>
              <div className="mt-4 text-xs text-gray-500">3-week pilot · model to deployment</div>
            </article>

            <article className="p-6 bg-white rounded-lg border shadow-sm">
              <h3 className="font-semibold">Operating theatre scheduling</h3>
              <p className="mt-2 text-sm text-gray-600">Analyzed historical case times and built a scheduling tool that recovered 6% capacity and reduced overtime.</p>
              <div className="mt-4 text-xs text-gray-500">Data engineering · dashboarding</div>
            </article>

            <article className="p-6 bg-white rounded-lg border shadow-sm">
              <h3 className="font-semibold">Synthetic dataset for R&D</h3>
              <p className="mt-2 text-sm text-gray-600">Produced a validated synthetic cohort that matched key outcome statistics so the R&D team could test models without patient data access.</p>
              <div className="mt-4 text-xs text-gray-500">Privacy-preserving development</div>
            </article>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold">About Priscient</h2>
              <p className="mt-2 text-gray-700">We’re a small team that understands both healthcare and engineering. We care about usable results — models that are explainable, dashboards that get used, and reliable pipelines that last.</p>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li><strong>Practical:</strong> we focus on what changes decisions, not novelty for novelty’s sake.</li>
                <li><strong>Fast:</strong> short, iterative engagements with clear deliverables.</li>
                <li><strong>Transparent:</strong> every model comes with validation and simple documentation.</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border">
              <div className="text-sm text-gray-500">Founder</div>
              <div className="mt-2 font-semibold">Prince Khera</div>
              <div className="mt-2 text-sm text-gray-600">Health data scientist. Software engineer. Builds models that people can trust and dashboards they actually open.</div>
              <div className="mt-4 text-xs text-gray-500">Connect: replace-with-linkedin | Email: replace@domain.com</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold">Get started</h2>
          <p className="mt-2 text-gray-600">Tell us the problem you want fixed. We’ll propose a short pilot you can evaluate.</p>

          <form className="mt-6 grid grid-cols-1 gap-4">
            <input className="p-3 rounded-md border" placeholder="Your name" />
            <input className="p-3 rounded-md border" placeholder="Email" />
            <input className="p-3 rounded-md border" placeholder="Organisation" />
            <textarea className="p-3 rounded-md border" rows="4" placeholder="A short summary of the problem"></textarea>
            <div className="flex gap-3">
              <button type="submit" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md">Request a pilot</button>
              <a href="#" className="inline-block px-5 py-3 border rounded-md">Schedule a call</a>
            </div>
          </form>

          <div className="mt-8 text-sm text-gray-500">Or email us directly at <strong>hello@priscient.com</strong></div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="font-semibold">Priscient</div>
            <div className="text-xs text-gray-500">Healthcare analytics — dashboards, models, pipelines</div>
            <div className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Priscient</div>
          </div>

          <div className="flex gap-8">
            <div>
              <div className="text-sm font-medium">Product</div>
              <ul className="mt-2 text-xs text-gray-600">
                <li>Dashboarding</li>
                <li>Predictive models</li>
                <li>Synthetic data</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-medium">Company</div>
              <ul className="mt-2 text-xs text-gray-600">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
