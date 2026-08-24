import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import "./LegalGuides.css";

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Search & Filter Verified Attorneys",
    description:
      "Filter attorneys by practice area (Criminal, Corporate, Family, Real Estate, IP, Immigration), years of courtroom experience, city location, and initial consultation fees. Every listed attorney is identity-checked.",
    tips: [
      "Select your specific legal issue for targeted matches.",
      "Check lawyer experience levels & verified credentials.",
      "Review lawyer bios, hourly rates, and office locations."
    ]
  },
  {
    step: "02",
    title: "Review Case Credentials & Track Record",
    description:
      "Explore comprehensive lawyer profiles with educational background, state bar admissions, notable past cases, language proficiencies, and direct client reviews.",
    tips: [
      "Look for specialists in your jurisdiction.",
      "Compare consultation rates and availability.",
      "Confirm active bar standing and disciplinary record."
    ]
  },
  {
    step: "03",
    title: "Send Confidential Case Inquiry",
    description:
      "Use our structured contact form to submit a concise summary of your case. No credit card required to start an inquiry. Your personal details remain secure and encrypted.",
    tips: [
      "Prepare a concise chronological summary of events.",
      "State your preferred timeline or upcoming deadlines.",
      "Highlight any immediate emergency court dates."
    ]
  },
  {
    step: "04",
    title: "Consultation & Strategic Representation",
    description:
      "The attorney reviews your brief and reaches out via phone or secure email within 24 hours to conduct an initial discovery session, outline legal options, and discuss retainer terms.",
    tips: [
      "Bring all relevant documentation and records.",
      "Ask about fee structures (flat fee, hourly, or contingency).",
      "Request a written representation agreement."
    ]
  }
];

const LEGAL_GLOSSARY = [
  {
    term: "Retainer Agreement",
    category: "Contracts & Fees",
    definition:
      "A work agreement and upfront fee paid by a client to secure the ongoing services of an attorney."
  },
  {
    term: "Power of Attorney (POA)",
    category: "Estate & Civil",
    definition:
      "A legal authorization giving a designated person the power to act for someone else in legal, business, or medical matters."
  },
  {
    term: "Non-Disclosure Agreement (NDA)",
    category: "Corporate & IP",
    definition:
      "A legally binding contract that establishes a confidential relationship regarding sensitive information."
  },
  {
    term: "Contingency Fee",
    category: "Contracts & Fees",
    definition:
      "A payment arrangement where the lawyer only receives a fee if the case is won or settled favorably."
  },
  {
    term: "Affidavit",
    category: "Litigation",
    definition:
      "A written statement confirmed by oath or affirmation, for use as evidence in court proceedings."
  },
  {
    term: "Injunction",
    category: "Court Orders",
    definition:
      "An authoritative warning or court order requiring a person or entity to do or cease doing a specific act."
  },
  {
    term: "Arbitration",
    category: "Dispute Resolution",
    definition:
      "A private dispute resolution process where an independent neutral arbitrator makes a legally binding decision."
  },
  {
    term: "Statute of Limitations",
    category: "Litigation",
    definition:
      "The statutory maximum time after an event within which legal proceedings may be initiated."
  }
];

const FAQS = [
  {
    question: "Is searching for a lawyer on LegalEase free?",
    answer:
      "Yes. Browsing lawyer directories, reviewing verified profiles, and submitting initial case inquiries on LegalEase is 100% free with no hidden charges."
  },
  {
    question: "How does LegalEase verify listed attorneys?",
    answer:
      "Every attorney on LegalEase undergoes bar association license verification, identity authentication, and background checks before receiving the verified badge on their profile."
  },
  {
    question: "Is my case information kept confidential?",
    answer:
      "Absolutely. When you submit an inquiry through LegalEase, the data is encrypted and transmitted directly to the selected attorney. It is protected under professional standards of preliminary attorney-client communications."
  },
  {
    question: "How quickly do lawyers typically respond?",
    answer:
      "Most attorneys on LegalEase respond within 24 business hours. If your matter is time-sensitive, you can flag it as urgent in your contact message."
  },
  {
    question: "Can I consult multiple lawyers before deciding?",
    answer:
      "Yes! We recommend reviewing 2 to 3 lawyer profiles in your practice area so you can compare communication style, fee structure, and strategic approach."
  }
];

function LegalGuides() {
  const [activeTab, setActiveTab] = useState("platform");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [glossarySearch, setGlossarySearch] = useState("");
  const [checklist, setChecklist] = useState({
    chronology: false,
    documents: false,
    budget: false,
    questions: false,
    identification: false,
    witnesses: false
  });

  function toggleChecklist(key) {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const totalCount = Object.keys(checklist).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const filteredGlossary = LEGAL_GLOSSARY.filter(
    (item) =>
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.category.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="guides-page">
      {/* Guides Header Banner */}
      <section className="guides-hero">
        <div className="container guides-hero-inner">
          <p className="eyebrow">User Guide & Knowledge Center</p>
          <h1 className="guides-hero-title">How LegalEase Works</h1>
          <hr className="gold-rule" />
          <p className="guides-hero-subtitle">
            Master the legal process with our comprehensive platform walkthrough,
            consultation checklists, legal glossary, and client protection standards.
          </p>

          {/* Guide Section Tabs */}
          <div className="guides-tabs">
            <button
              className={`guides-tab-btn ${
                activeTab === "platform" ? "guides-tab-btn-active" : ""
              }`}
              onClick={() => setActiveTab("platform")}
            >
              Platform Walkthrough
            </button>
            <button
              className={`guides-tab-btn ${
                activeTab === "checklist" ? "guides-tab-btn-active" : ""
              }`}
              onClick={() => setActiveTab("checklist")}
            >
              Consultation Prep Checklist
            </button>
            <button
              className={`guides-tab-btn ${
                activeTab === "glossary" ? "guides-tab-btn-active" : ""
              }`}
              onClick={() => setActiveTab("glossary")}
            >
              Legal Terms Glossary
            </button>
            <button
              className={`guides-tab-btn ${
                activeTab === "faq" ? "guides-tab-btn-active" : ""
              }`}
              onClick={() => setActiveTab("faq")}
            >
              Platform FAQ
            </button>
          </div>
        </div>
      </section>

      <div className="container guides-body">
        {/* TAB 1: Platform Walkthrough */}
        {activeTab === "platform" && (
          <section className="guides-section">
            <div className="section-header-centered">
              <span className="eyebrow">Step-by-Step</span>
              <h2>Your 4-Step Journey from Legal Question to Resolution</h2>
              <p className="section-sub">
                Designed to make securing legal representation intuitive, fast, and transparent.
              </p>
            </div>

            <div className="how-it-works-flow">
              {HOW_IT_WORKS_STEPS.map((stepItem) => (
                <div key={stepItem.step} className="flow-card">
                  <div className="flow-card-header">
                    <span className="flow-badge">Step {stepItem.step}</span>
                    <h3 className="flow-title">{stepItem.title}</h3>
                  </div>
                  <p className="flow-desc">{stepItem.description}</p>
                  
                  <div className="flow-tips-box">
                    <h4 className="flow-tips-title">Key Best Practices:</h4>
                    <ul className="flow-tips-list">
                      {stepItem.tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Lawyer Side Callout */}
            <div className="lawyer-onboarding-callout">
              <div className="lawyer-callout-text">
                <span className="eyebrow">For Legal Practitioners</span>
                <h3>Are you an attorney looking to grow your practice?</h3>
                <p>
                  Join LegalEase’s verified network to connect with clients seeking
                  representation in your specific practice area. Benefit from our
                  pre-screened case briefs and direct client messaging.
                </p>
              </div>
              <Link to="/login" className="lawyer-callout-btn">
                Attorney Portal Login & Join →
              </Link>
            </div>
          </section>
        )}

        {/* TAB 2: Consultation Prep Checklist */}
        {activeTab === "checklist" && (
          <section className="guides-section">
            <div className="section-header-centered">
              <span className="eyebrow">Client Toolkit</span>
              <h2>Consultation Preparation Checklist</h2>
              <p className="section-sub">
                Arriving prepared saves consultation time and helps your attorney provide
                accurate guidance immediately. Check off the items below as you prepare.
              </p>
            </div>

            {/* Interactive Progress Bar */}
            <div className="checklist-progress-card">
              <div className="progress-header">
                <span>Readiness Progress: {progressPercent}%</span>
                <span>{completedCount} of {totalCount} items prepared</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              {progressPercent === 100 && (
                <p className="progress-success-msg">
                  ✨ Excellent! You have all essentials ready for a high-impact consultation.
                </p>
              )}
            </div>

            <div className="checklist-items-grid">
              <label
                className={`checklist-item ${
                  checklist.chronology ? "checklist-item-checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checklist.chronology}
                  onChange={() => toggleChecklist("chronology")}
                />
                <div className="checklist-item-info">
                  <h4>1. Detailed Incident Timeline</h4>
                  <p>
                    Write down dates, key events, names of involved parties, and conversations
                    in chronological order.
                  </p>
                </div>
              </label>

              <label
                className={`checklist-item ${
                  checklist.documents ? "checklist-item-checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checklist.documents}
                  onChange={() => toggleChecklist("documents")}
                />
                <div className="checklist-item-info">
                  <h4>2. Contracts, Notices & Official Documents</h4>
                  <p>
                    Gather signed contracts, termination letters, police reports, receipts, or court notices.
                  </p>
                </div>
              </label>

              <label
                className={`checklist-item ${
                  checklist.budget ? "checklist-item-checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checklist.budget}
                  onChange={() => toggleChecklist("budget")}
                />
                <div className="checklist-item-info">
                  <h4>3. Financial & Damages Breakdown</h4>
                  <p>
                    Calculate direct financial losses, medical bills, property valuations, or disputed invoice amounts.
                  </p>
                </div>
              </label>

              <label
                className={`checklist-item ${
                  checklist.questions ? "checklist-item-checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checklist.questions}
                  onChange={() => toggleChecklist("questions")}
                />
                <div className="checklist-item-info">
                  <h4>4. Questions for the Attorney</h4>
                  <p>
                    Prepare questions regarding estimated timeline, total legal fees, previous case outcomes, and communication frequency.
                  </p>
                </div>
              </label>

              <label
                className={`checklist-item ${
                  checklist.identification ? "checklist-item-checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checklist.identification}
                  onChange={() => toggleChecklist("identification")}
                />
                <div className="checklist-item-info">
                  <h4>5. Valid Government ID & Proof of Address</h4>
                  <p>
                    Lawyers require standard identity verification before accepting representation under regulatory ethics.
                  </p>
                </div>
              </label>

              <label
                className={`checklist-item ${
                  checklist.witnesses ? "checklist-item-checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checklist.witnesses}
                  onChange={() => toggleChecklist("witnesses")}
                />
                <div className="checklist-item-info">
                  <h4>6. Witness & Third-Party Contact Details</h4>
                  <p>
                    List contact info for witnesses, opposing counsel, insurance adjusters, or co-signers.
                  </p>
                </div>
              </label>
            </div>
          </section>
        )}

        {/* TAB 3: Legal Terms Glossary */}
        {activeTab === "glossary" && (
          <section className="guides-section">
            <div className="section-header-centered">
              <span className="eyebrow">Plain English Law</span>
              <h2>Legal Terms Glossary</h2>
              <p className="section-sub">
                Legal terminology can feel confusing. Here are concise, plain-English definitions
                for terms you are most likely to encounter.
              </p>
            </div>

            <div className="glossary-search-bar">
              <input
                type="text"
                placeholder="Search legal terms (e.g. Retainer, NDA, Affidavit)..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="glossary-input"
              />
            </div>

            <div className="glossary-grid">
              {filteredGlossary.length > 0 ? (
                filteredGlossary.map((item, idx) => (
                  <div key={idx} className="glossary-card">
                    <span className="glossary-cat">{item.category}</span>
                    <h3 className="glossary-term">{item.term}</h3>
                    <p className="glossary-def">{item.definition}</p>
                  </div>
                ))
              ) : (
                <div className="glossary-empty">
                  <p>No legal terms found matching "{glossarySearch}".</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* TAB 4: Platform FAQ */}
        {activeTab === "faq" && (
          <section className="guides-section">
            <div className="section-header-centered">
              <span className="eyebrow">Common Questions</span>
              <h2>Frequently Asked Questions</h2>
              <p className="section-sub">
                Everything you need to know about lawyer matching, security, and fees.
              </p>
            </div>

            <div className="faq-accordion">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                  >
                    <button
                      className="faq-question-btn"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer-box">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Bottom Call To Action */}
        <section className="guides-cta-banner">
          <h2>Ready to find your legal advocate?</h2>
          <p>
            Search verified attorneys by practice area or connect directly with top-rated lawyers today.
          </p>
          <div className="guides-cta-buttons">
            <Link to="/search">
              <Button>Find a Lawyer Now</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">Sign In / Register</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LegalGuides;
