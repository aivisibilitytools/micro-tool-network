const tools = [
  ["Career", "Resume Bullet Point Rewriter", "Job seekers", "Need stronger achievement bullets", "Resume Application Kit", "resume-bullet-point-rewriter.html"],
  ["Career", "ATS Keyword Gap Checker", "Job seekers", "Need to match a resume to a job description", "Resume Application Kit", "ats-keyword-gap-checker.html"],
  ["Career", "Cover Letter Personalizer", "Job seekers", "Need a focused cover letter for each role", "Resume Application Kit", "cover-letter-personalizer.html"],
  ["Career", "US Resume PDF Builder", "Job seekers", "Need a clean US-style resume PDF", "Resume Application Kit", "https://aivisibilitytools.github.io/job-application-pack-builder/resume-builder.html"],
  ["Career", "ATS Resume Checker", "Job seekers", "Fear ATS rejection", "Resume Application Kit", "ats-resume-checker.html"],
  ["Career", "Recruiter Follow-Up Email Generator", "Job seekers", "Awkward follow-ups after applying", "Resume Application Kit", "recruiter-follow-up-email-generator.html"],
  ["Career", "Resume File Name Generator", "Job seekers", "Messy resume file names", "Resume Application Kit", "resume-file-name-generator.html"],
  ["Career", "Job Application Tracker", "Job seekers", "Lost applications and interview notes", "Resume Application Kit", "job-application-tracker.html"],
  ["Career", "LinkedIn Headline Generator", "Job seekers", "Weak LinkedIn positioning", "Resume Application Kit", "linkedin-headline-generator.html"],
  ["Career", "Interview STAR Answer Builder", "Job seekers", "Need stronger interview stories", "Resume Application Kit", "interview-star-answer-builder.html"],
  ["Career", "Layoff Job Search Planner", "Laid-off workers", "Need a structured job search week", "Resume Application Kit", "layoff-job-search-planner.html"],
  ["Career", "Salary Negotiation Script Generator", "Job seekers", "Need confident negotiation language", "Resume Application Kit", "salary-negotiation-script-generator.html"],
  ["Career", "Portfolio PDF Order Planner", "Designers and PMs", "Portfolio feels messy", "Resume Application Kit", "portfolio-pdf-order-planner.html"],
  ["Career", "Career Change Resume Summary Builder", "Career switchers", "Need a believable transition story", "Resume Application Kit", "career-change-resume-summary-builder.html"],
  ["Career", "Resume Bullet Quantifier", "Job seekers", "Bullets lack measurable outcomes", "Resume Application Kit", "resume-bullet-quantifier.html"],
  ["Career", "Thank You Email Generator", "Interview candidates", "Need post-interview emails", "Resume Application Kit", "thank-you-email-generator.html"],
  ["AI Visibility", "AI Visibility Checker", "SaaS founders", "Need to know if AI search understands product", "AI Visibility Fix Kit", "https://aivisibilitytools.github.io/ai-visibility-checker/"],
  ["AI Visibility", "llms.txt Generator", "Indie makers", "Need an AI-readable site summary", "AI Visibility Fix Kit", "https://aivisibilitytools.github.io/ai-visibility-checker/tools/llms-generator.html"],
  ["AI Visibility", "FAQ Generator for AI Search", "Founders and SEO users", "Need quotable FAQ answers", "AI Visibility Fix Kit", "https://aivisibilitytools.github.io/ai-visibility-checker/tools/faq-generator.html"],
  ["AI Visibility", "Schema JSON-LD Generator", "Site owners", "Need structured data fast", "AI Visibility Fix Kit", "schema-json-ld-generator.html"],
  ["AI Visibility", "Comparison Page Generator", "SaaS founders", "Need competitor comparison pages", "AI Visibility Fix Kit", "comparison-page-generator.html"],
  ["AI Visibility", "AI Answer Prompt Tester", "Marketers", "Need to test how AI describes a product", "AI Visibility Fix Kit", "ai-answer-prompt-tester.html"],
  ["AI Visibility", "Brand Mention Tracker Sheet", "Founders", "Need to track AI/community mentions", "AI Visibility Fix Kit", "brand-mention-tracker-sheet.html"],
  ["AI Visibility", "Product Positioning Extractor", "SaaS teams", "Need a clean product description", "AI Visibility Fix Kit", "product-positioning-extractor.html"],
  ["AI Visibility", "Source Citation Checklist", "SEO consultants", "Need pages AI can cite", "AI Visibility Fix Kit", "source-citation-checklist.html"],
  ["AI Visibility", "Reddit Signal Planner", "Indie makers", "Need safe community participation", "AI Visibility Fix Kit", "reddit-signal-planner.html"],
  ["AI Visibility", "Product Hunt Launch Page Checker", "Makers", "Need launch page readiness", "AI Visibility Fix Kit", "product-hunt-launch-page-checker.html"],
  ["AI Visibility", "AI Search Snippet Optimizer", "Founders", "Need better short product snippets", "AI Visibility Fix Kit", "ai-search-snippet-optimizer.html"],
  ["AI Visibility", "Review Page Brief Generator", "SaaS teams", "Need review/testimonial pages", "AI Visibility Fix Kit", "review-page-brief-generator.html"],
  ["AI Visibility", "Use Case Page Generator", "B2B SaaS teams", "Need use-case pages", "AI Visibility Fix Kit", "use-case-page-generator.html"],
  ["AI Visibility", "Competitor Mention Map", "Founders", "Need positioning against alternatives", "AI Visibility Fix Kit", "competitor-mention-map.html"],
  ["PDF", "PDF Merge Tool", "Students and job seekers", "Need to combine PDFs locally", "PDF Utility Kit", "https://aivisibilitytools.github.io/job-application-pack-builder/#builder"],
  ["PDF", "PDF Splitter", "Document users", "Need selected pages only", "PDF Utility Kit", "https://aivisibilitytools.github.io/job-application-pack-builder/#splitter"],
  ["PDF", "PDF Page Reorder Planner", "Job seekers", "Need correct PDF order", "PDF Utility Kit", "pdf-page-reorder-planner.html"],
  ["PDF", "Image to PDF Converter", "Students and creators", "Need images as one PDF", "PDF Utility Kit", "image-to-pdf-converter.html"],
  ["PDF", "PDF to Images Extractor", "Creators", "Need page images for previews", "PDF Utility Kit", "pdf-to-images-extractor.html"],
  ["PDF", "PDF Cover Page Maker", "Freelancers", "Need polished document covers", "PDF Utility Kit", "pdf-cover-page-maker.html"],
  ["PDF", "PDF Filename Cleaner", "Admin workers", "Need clean document names", "PDF Utility Kit", "pdf-filename-cleaner.html"],
  ["PDF", "PDF Checklist Before Sending", "Freelancers", "Fear sending wrong file", "PDF Utility Kit", "pdf-checklist-before-sending.html"],
  ["PDF", "Contract PDF Summary Checklist", "Freelancers", "Need to review contracts", "PDF Utility Kit", "contract-pdf-summary-checklist.html"],
  ["PDF", "Invoice PDF Generator", "Freelancers", "Need quick invoices", "PDF Utility Kit", "invoice-pdf-generator.html"],
  ["PDF", "Receipt PDF Generator", "Sellers", "Need simple receipts", "PDF Utility Kit", "receipt-pdf-generator.html"],
  ["PDF", "Certificate PDF Maker", "Course creators", "Need certificates", "PDF Utility Kit", "certificate-pdf-maker.html"],
  ["PDF", "One-Page Proposal PDF Maker", "Consultants", "Need quick proposals", "PDF Utility Kit", "one-page-proposal-pdf-maker.html"],
  ["PDF", "PDF Metadata Checklist", "Document users", "Need clean metadata", "PDF Utility Kit", "pdf-metadata-checklist.html"],
  ["PDF", "Client Onboarding PDF Pack Builder", "Freelancers", "Need onboarding docs", "PDF Utility Kit", "client-onboarding-pdf-pack-builder.html"],
  ["Creator", "Gumroad Product Page Checklist", "Creators", "Need better product pages", "Creator Launch Kit", "gumroad-product-page-checklist.html"],
  ["Creator", "Gumroad Description Generator", "Creators", "Need sales copy", "Creator Launch Kit", "gumroad-description-generator.html"],
  ["Creator", "Digital Product Idea Validator", "Makers", "Need validate product ideas", "Creator Launch Kit", "digital-product-idea-validator.html"],
  ["Creator", "Product Pricing Calculator", "Creators", "Need simple pricing logic", "Creator Launch Kit", "product-pricing-calculator.html"],
  ["Creator", "Lead Magnet Idea Generator", "Newsletter creators", "Need email list lead magnets", "Creator Launch Kit", "lead-magnet-idea-generator.html"],
  ["Creator", "Newsletter Subject Line Tester", "Writers", "Need better open rates", "Creator Launch Kit", "newsletter-subject-line-tester.html"],
  ["Creator", "YouTube Title Generator", "Video creators", "Need click-worthy titles", "Creator Launch Kit", "youtube-title-generator.html"],
  ["Creator", "TikTok Hook Generator", "Short-form creators", "Need first-line hooks", "Creator Launch Kit", "tiktok-hook-generator.html"],
  ["Creator", "X Thread Outline Generator", "Founders", "Need clear thread drafts", "Creator Launch Kit", "x-thread-outline-generator.html"],
  ["Creator", "Reddit Comment Draft Helper", "Makers", "Need helpful non-spam replies", "Creator Launch Kit", "reddit-comment-draft-helper.html"],
  ["Creator", "Case Study Generator", "Agencies", "Need proof pages", "Creator Launch Kit", "case-study-generator.html"],
  ["Creator", "Testimonial Request Email Generator", "Freelancers", "Need testimonials", "Creator Launch Kit", "testimonial-request-email-generator.html"],
  ["Creator", "Mini Course Outline Generator", "Creators", "Need course structure", "Creator Launch Kit", "mini-course-outline-generator.html"],
  ["Creator", "Digital Download Checklist", "Sellers", "Need launch-ready files", "Creator Launch Kit", "digital-download-checklist.html"],
  ["Creator", "Canva Asset Brief Generator", "Creators", "Need asset briefs", "Creator Launch Kit", "canva-asset-brief-generator.html"],
  ["Small Biz", "Invoice Generator", "Freelancers", "Need invoices fast", "Small Biz Admin Kit", "invoice-generator.html"],
  ["Small Biz", "Late Payment Email Generator", "Freelancers", "Need polite payment reminders", "Email scripts", "late-payment-email-generator.html"],
  ["Small Biz", "Quote / Estimate Generator", "Service providers", "Need fast quotes", "Quote templates", "quote-estimate-generator.html"],
  ["Small Biz", "Scope Creep Clause Generator", "Agencies", "Need project boundaries", "Contract clause pack", "scope-creep-clause-generator.html"],
  ["Small Biz", "Client Intake Form Builder", "Consultants", "Need better onboarding", "Intake templates", "client-intake-form-builder.html"],
  ["Small Biz", "Meeting Agenda Generator", "Teams", "Need focused meetings", "Agenda templates", "meeting-agenda-generator.html"],
  ["Small Biz", "SOP Generator", "Operators", "Need repeatable procedures", "SOP template pack", "sop-generator.html"],
  ["Small Biz", "Refund Policy Generator", "Online sellers", "Need clear policy copy", "Policy pack", "refund-policy-generator.html"],
  ["Small Biz", "Shipping Policy Generator", "Store owners", "Need shipping copy", "Policy pack", "shipping-policy-generator.html"],
  ["Small Biz", "Privacy Policy Starter", "Small websites", "Need basic privacy page", "Policy pack", "privacy-policy-starter.html"],
  ["Small Biz", "Service Package Builder", "Freelancers", "Need productized services", "Service package kit", "service-package-builder.html"],
  ["Small Biz", "Client Proposal Email Generator", "Consultants", "Need proposal follow-up", "Proposal email pack", "client-proposal-email-generator.html"],
  ["Small Biz", "Project Timeline Generator", "Freelancers", "Need simple timelines", "Timeline templates", "project-timeline-generator.html"],
  ["Small Biz", "Testimonial Page Builder", "Small businesses", "Need proof pages", "Proof page kit", "testimonial-page-builder.html"],
  ["Small Biz", "Local SEO Checklist", "Local businesses", "Need local visibility", "Local SEO checklist", "local-seo-checklist.html"],
  ["Dev/Product", "API Changelog Generator", "Developers", "Need release communication", "Product Ops Kit", "api-changelog-generator.html"],
  ["Dev/Product", "README Generator", "Developers", "Need better repo docs", "README templates", "readme-generator.html"],
  ["Dev/Product", "GitHub Repo SEO Checker", "Open-source makers", "Need discoverable repos", "Repo checklist", "github-repo-seo-checker.html"],
  ["Dev/Product", "Chrome Extension Listing Checker", "Extension makers", "Need better store listing", "Extension launch kit", "chrome-extension-listing-checker.html"],
  ["Dev/Product", "Bug Report Template Generator", "Product teams", "Need clear bug reports", "QA template pack", "bug-report-template-generator.html"],
  ["Dev/Product", "Release Notes Generator", "SaaS teams", "Need launch notes", "Release notes pack", "release-notes-generator.html"],
  ["Dev/Product", "Product Requirements Doc Builder", "PMs", "Need PRD drafts", "PM template kit", "product-requirements-doc-builder.html"],
  ["Dev/Product", "User Story Generator", "PMs", "Need user stories", "PM template kit", "user-story-generator.html"],
  ["Dev/Product", "Landing Page QA Checklist", "Founders", "Need launch QA", "Launch QA kit", "landing-page-qa-checklist.html"],
  ["Dev/Product", "Feature Prioritization Matrix", "PMs", "Need decide what to build", "Prioritization sheet", "feature-prioritization-matrix.html"],
  ["Dev/Product", "SaaS Pricing Page Checker", "Founders", "Need stronger pricing page", "Pricing page checklist", "saas-pricing-page-checker.html"],
  ["Dev/Product", "Customer Interview Script Generator", "Founders", "Need discovery calls", "Interview script pack", "customer-interview-script-generator.html"],
  ["Dev/Product", "NPS Survey Question Builder", "SaaS teams", "Need customer feedback", "Survey pack", "nps-survey-question-builder.html"],
  ["Dev/Product", "Onboarding Email Sequence Generator", "SaaS teams", "Need activation emails", "Email sequence pack", "onboarding-email-sequence-generator.html"],
  ["Dev/Product", "Feature Launch Checklist", "Product teams", "Need launch process", "Launch checklist", "feature-launch-checklist.html"],
  ["Personal/Education", "Freelance Rate Calculator", "Freelancers", "Need hourly/project pricing", "Life Admin Pack", "freelance-rate-calculator.html"],
  ["Personal/Education", "Subscription Audit Sheet", "Consumers", "Need cancel waste", "Budget sheet", "subscription-audit-sheet.html"],
  ["Personal/Education", "Tax Deduction Checklist", "Freelancers", "Need organize deductions", "Tax checklist", "tax-deduction-checklist.html"],
  ["Personal/Education", "Budget Split Calculator", "Consumers", "Need simple budgeting", "Budget template", "budget-split-calculator.html"],
  ["Personal/Education", "Emergency Fund Calculator", "Consumers", "Need savings target", "Budget template", "emergency-fund-calculator.html"],
  ["Personal/Education", "NDA Plain English Explainer", "Freelancers", "Need understand NDA basics", "Contract checklist", "nda-plain-english-explainer.html"],
  ["Personal/Education", "Lease Question Checklist", "Renters", "Need questions before signing", "Lease checklist", "lease-question-checklist.html"],
  ["Personal/Education", "Study Schedule Generator", "Students", "Need study plan", "Study planner", "study-schedule-generator.html"],
  ["Personal/Education", "Essay Outline Builder", "Students", "Need essay structure", "Writing pack", "essay-outline-builder.html"],
  ["Personal/Education", "Citation Formatter Helper", "Students", "Need citation cleanup", "Citation checklist", "citation-formatter-helper.html"],
];

const plans = [
  ["1", "System setup", "Shared style, directory site, link rules"],
  ["2", "Career core", "Resume, ATS, keyword, cover letter tools"],
  ["3", "Career expansion", "Tracker, LinkedIn, STAR, salary scripts"],
  ["4", "AI visibility core", "Audit, llms.txt, FAQ, schema tools"],
  ["5", "AI visibility pages", "Comparison, snippets, review, use-case tools"],
  ["6", "PDF utilities", "Merge, split, reorder, convert, naming tools"],
  ["7", "Creator tools", "Gumroad, pricing, hooks, threads, lead magnets"],
  ["8", "Small business tools", "Invoices, quotes, policies, SOPs"],
  ["9", "Dev/product tools", "README, PRD, release notes, QA checklist"],
  ["10", "Final batch", "Personal calculators, education helpers, index cleanup"]
];

const toolGrid = document.querySelector("#toolGrid");
const planGrid = document.querySelector("#planGrid");
const filterButtons = document.querySelectorAll(".filter-button");

const kitLinks = {
  "Career": {
    label: "Resume Application Kit",
    price: "$12 launch price",
    url: "https://zzdynamo3.gumroad.com/l/resume-application-kit"
  },
  "PDF": {
    label: "PDF Utility Kit",
    price: "$7 launch price",
    url: "https://zzdynamo3.gumroad.com/l/pdf-utility-kit"
  },
  "AI Visibility": {
    label: "AI Visibility Fix Kit",
    price: "$19 launch price",
    url: "https://zzdynamo3.gumroad.com/l/ai-visibility-fix-kit"
  },
  "Creator": {
    label: "Creator Launch Kit",
    price: "$9 launch price",
    url: "https://zzdynamo3.gumroad.com/l/creator-launch-kit"
  },
  "Small Biz": {
    label: "Small Biz Admin Kit",
    price: "$12 planned",
    url: "mailto:zzd050131@gmail.com?subject=Small%20Biz%20Admin%20Kit%20Waitlist"
  },
  "Dev/Product": {
    label: "Product Ops Kit",
    price: "$15 planned",
    url: "mailto:zzd050131@gmail.com?subject=Product%20Ops%20Kit%20Waitlist"
  },
  "Personal/Education": {
    label: "Life Admin Pack",
    price: "$7 planned",
    url: "mailto:zzd050131@gmail.com?subject=Life%20Admin%20Pack%20Waitlist"
  }
};

function renderTools(filter = "All") {
  const filtered = filter === "All" ? tools : tools.filter((tool) => tool[0] === filter);
  toolGrid.innerHTML = filtered
    .map((tool) => {
      const index = tools.indexOf(tool) + 1;
      const kit = kitLinks[tool[0]];
      return `
        <article class="tool-card">
          <span class="tool-id">#${index}</span>
          <div class="tool-meta">${tool[0]} / ${tool[2]}</div>
          <h3>${tool[1]}</h3>
          <p>${tool[3]}</p>
          <p><strong>Paid path:</strong> ${tool[4]}</p>
          <div class="tool-actions">
            ${tool[5] ? `<a class="text-link" href="${tool[5]}">Open tool</a>` : ""}
            ${kit ? `<a class="kit-link" href="${kit.url}">${kit.price} - ${kit.label}</a>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPlans() {
  planGrid.innerHTML = plans
    .map(
      (plan) => `
        <article class="plan-card">
          <span class="tool-id">${plan[0]}</span>
          <h3>${plan[1]}</h3>
          <p>${plan[2]}</p>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTools(button.dataset.filter);
  });
});

renderTools();
renderPlans();


