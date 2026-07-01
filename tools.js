const tools = [
  ["Career", "Resume Bullet Point Rewriter", "Job seekers", "Need stronger achievement bullets", "Resume Application Kit", "resume-bullet-point-rewriter.html"],
  ["Career", "ATS Keyword Gap Checker", "Job seekers", "Need to match a resume to a job description", "Resume Application Kit", "ats-keyword-gap-checker.html"],
  ["Career", "Cover Letter Personalizer", "Job seekers", "Need a focused cover letter for each role", "Resume Application Kit", "cover-letter-personalizer.html"],
  ["Career", "US Resume PDF Builder", "Job seekers", "Need a clean US-style resume PDF", "Resume Application Kit", "https://aivisibilitytools.github.io/job-application-pack-builder/resume-builder.html"],
  ["Career", "ATS Resume Checker", "Job seekers", "Fear ATS rejection", "ATS checklist pack"],
  ["Career", "Recruiter Follow-Up Email Generator", "Job seekers", "Awkward follow-ups after applying", "Email script pack"],
  ["Career", "Resume File Name Generator", "Job seekers", "Messy resume file names", "Application tracker"],
  ["Career", "Job Application Tracker", "Job seekers", "Lost applications and interview notes", "Google Sheets tracker"],
  ["Career", "LinkedIn Headline Generator", "Job seekers", "Weak LinkedIn positioning", "Resume Application Kit", "linkedin-headline-generator.html"],
  ["Career", "Interview STAR Answer Builder", "Job seekers", "Need stronger interview stories", "Interview prep kit"],
  ["Career", "Layoff Job Search Planner", "Laid-off workers", "Need a structured job search week", "Job search planner"],
  ["Career", "Salary Negotiation Script Generator", "Job seekers", "Need confident negotiation language", "Negotiation scripts"],
  ["Career", "Portfolio PDF Order Planner", "Designers and PMs", "Portfolio feels messy", "Portfolio templates"],
  ["Career", "Career Change Resume Summary Builder", "Career switchers", "Need a believable transition story", "Career switch kit"],
  ["Career", "Resume Bullet Quantifier", "Job seekers", "Bullets lack measurable outcomes", "Bullet rewrite pack"],
  ["Career", "Thank You Email Generator", "Interview candidates", "Need post-interview emails", "Interview email pack"],
  ["AI Visibility", "AI Visibility Checker", "SaaS founders", "Need to know if AI search understands product", "AI Visibility Fix Kit"],
  ["AI Visibility", "llms.txt Generator", "Indie makers", "Need an AI-readable site summary", "llms.txt template"],
  ["AI Visibility", "FAQ Generator for AI Search", "Founders and SEO users", "Need quotable FAQ answers", "FAQ template pack"],
  ["AI Visibility", "Schema JSON-LD Generator", "Site owners", "Need structured data fast", "Schema template pack"],
  ["AI Visibility", "Comparison Page Generator", "SaaS founders", "Need competitor comparison pages", "Comparison template"],
  ["AI Visibility", "AI Answer Prompt Tester", "Marketers", "Need to test how AI describes a product", "Prompt pack"],
  ["AI Visibility", "Brand Mention Tracker Sheet", "Founders", "Need to track AI/community mentions", "Tracking spreadsheet"],
  ["AI Visibility", "Product Positioning Extractor", "SaaS teams", "Need a clean product description", "Positioning worksheet"],
  ["AI Visibility", "Source Citation Checklist", "SEO consultants", "Need pages AI can cite", "Citation checklist"],
  ["AI Visibility", "Reddit Signal Planner", "Indie makers", "Need safe community participation", "Community planner"],
  ["AI Visibility", "Product Hunt Launch Page Checker", "Makers", "Need launch page readiness", "Launch kit"],
  ["AI Visibility", "AI Search Snippet Optimizer", "Founders", "Need better short product snippets", "Snippet pack"],
  ["AI Visibility", "Review Page Brief Generator", "SaaS teams", "Need review/testimonial pages", "Review page template"],
  ["AI Visibility", "Use Case Page Generator", "B2B SaaS teams", "Need use-case pages", "Use-case page kit"],
  ["AI Visibility", "Competitor Mention Map", "Founders", "Need positioning against alternatives", "Competitor map"],
  ["PDF", "PDF Merge Tool", "Students and job seekers", "Need to combine PDFs locally", "PDF Utility Kit"],
  ["PDF", "PDF Splitter", "Document users", "Need selected pages only", "PDF Utility Kit"],
  ["PDF", "PDF Page Reorder Planner", "Job seekers", "Need correct PDF order", "PDF Utility Kit"],
  ["PDF", "Image to PDF Converter", "Students and creators", "Need images as one PDF", "PDF Utility Kit"],
  ["PDF", "PDF to Images Extractor", "Creators", "Need page images for previews", "PDF Utility Kit"],
  ["PDF", "PDF Cover Page Maker", "Freelancers", "Need polished document covers", "Cover templates"],
  ["PDF", "PDF Filename Cleaner", "Admin workers", "Need clean document names", "Naming checklist"],
  ["PDF", "PDF Checklist Before Sending", "Freelancers", "Fear sending wrong file", "Send checklist"],
  ["PDF", "Contract PDF Summary Checklist", "Freelancers", "Need to review contracts", "Contract checklist"],
  ["PDF", "Invoice PDF Generator", "Freelancers", "Need quick invoices", "Invoice templates"],
  ["PDF", "Receipt PDF Generator", "Sellers", "Need simple receipts", "Receipt templates"],
  ["PDF", "Certificate PDF Maker", "Course creators", "Need certificates", "Certificate templates"],
  ["PDF", "One-Page Proposal PDF Maker", "Consultants", "Need quick proposals", "Proposal templates"],
  ["PDF", "PDF Metadata Checklist", "Document users", "Need clean metadata", "PDF privacy checklist"],
  ["PDF", "Client Onboarding PDF Pack Builder", "Freelancers", "Need onboarding docs", "Onboarding pack"],
  ["Creator", "Gumroad Product Page Checklist", "Creators", "Need better product pages", "Creator Launch Kit"],
  ["Creator", "Gumroad Description Generator", "Creators", "Need sales copy", "Description templates"],
  ["Creator", "Digital Product Idea Validator", "Makers", "Need validate product ideas", "Validation worksheet"],
  ["Creator", "Product Pricing Calculator", "Creators", "Need simple pricing logic", "Pricing calculator sheet"],
  ["Creator", "Lead Magnet Idea Generator", "Newsletter creators", "Need email list lead magnets", "Lead magnet pack"],
  ["Creator", "Newsletter Subject Line Tester", "Writers", "Need better open rates", "Subject line pack"],
  ["Creator", "YouTube Title Generator", "Video creators", "Need click-worthy titles", "Title template pack"],
  ["Creator", "TikTok Hook Generator", "Short-form creators", "Need first-line hooks", "Hook pack"],
  ["Creator", "X Thread Outline Generator", "Founders", "Need clear thread drafts", "Thread template pack"],
  ["Creator", "Reddit Comment Draft Helper", "Makers", "Need helpful non-spam replies", "Community reply pack"],
  ["Creator", "Case Study Generator", "Agencies", "Need proof pages", "Case study pack"],
  ["Creator", "Testimonial Request Email Generator", "Freelancers", "Need testimonials", "Testimonial email pack"],
  ["Creator", "Mini Course Outline Generator", "Creators", "Need course structure", "Course outline templates"],
  ["Creator", "Digital Download Checklist", "Sellers", "Need launch-ready files", "Launch checklist"],
  ["Creator", "Canva Asset Brief Generator", "Creators", "Need asset briefs", "Design brief pack"],
  ["Small Biz", "Invoice Generator", "Freelancers", "Need invoices fast", "Small Biz Admin Kit"],
  ["Small Biz", "Late Payment Email Generator", "Freelancers", "Need polite payment reminders", "Email scripts"],
  ["Small Biz", "Quote / Estimate Generator", "Service providers", "Need fast quotes", "Quote templates"],
  ["Small Biz", "Scope Creep Clause Generator", "Agencies", "Need project boundaries", "Contract clause pack"],
  ["Small Biz", "Client Intake Form Builder", "Consultants", "Need better onboarding", "Intake templates"],
  ["Small Biz", "Meeting Agenda Generator", "Teams", "Need focused meetings", "Agenda templates"],
  ["Small Biz", "SOP Generator", "Operators", "Need repeatable procedures", "SOP template pack"],
  ["Small Biz", "Refund Policy Generator", "Online sellers", "Need clear policy copy", "Policy pack"],
  ["Small Biz", "Shipping Policy Generator", "Store owners", "Need shipping copy", "Policy pack"],
  ["Small Biz", "Privacy Policy Starter", "Small websites", "Need basic privacy page", "Policy pack"],
  ["Small Biz", "Service Package Builder", "Freelancers", "Need productized services", "Service package kit"],
  ["Small Biz", "Client Proposal Email Generator", "Consultants", "Need proposal follow-up", "Proposal email pack"],
  ["Small Biz", "Project Timeline Generator", "Freelancers", "Need simple timelines", "Timeline templates"],
  ["Small Biz", "Testimonial Page Builder", "Small businesses", "Need proof pages", "Proof page kit"],
  ["Small Biz", "Local SEO Checklist", "Local businesses", "Need local visibility", "Local SEO checklist"],
  ["Dev/Product", "API Changelog Generator", "Developers", "Need release communication", "Product Ops Kit"],
  ["Dev/Product", "README Generator", "Developers", "Need better repo docs", "README templates"],
  ["Dev/Product", "GitHub Repo SEO Checker", "Open-source makers", "Need discoverable repos", "Repo checklist"],
  ["Dev/Product", "Chrome Extension Listing Checker", "Extension makers", "Need better store listing", "Extension launch kit"],
  ["Dev/Product", "Bug Report Template Generator", "Product teams", "Need clear bug reports", "QA template pack"],
  ["Dev/Product", "Release Notes Generator", "SaaS teams", "Need launch notes", "Release notes pack"],
  ["Dev/Product", "Product Requirements Doc Builder", "PMs", "Need PRD drafts", "PM template kit"],
  ["Dev/Product", "User Story Generator", "PMs", "Need user stories", "PM template kit"],
  ["Dev/Product", "Landing Page QA Checklist", "Founders", "Need launch QA", "Launch QA kit"],
  ["Dev/Product", "Feature Prioritization Matrix", "PMs", "Need decide what to build", "Prioritization sheet"],
  ["Dev/Product", "SaaS Pricing Page Checker", "Founders", "Need stronger pricing page", "Pricing page checklist"],
  ["Dev/Product", "Customer Interview Script Generator", "Founders", "Need discovery calls", "Interview script pack"],
  ["Dev/Product", "NPS Survey Question Builder", "SaaS teams", "Need customer feedback", "Survey pack"],
  ["Dev/Product", "Onboarding Email Sequence Generator", "SaaS teams", "Need activation emails", "Email sequence pack"],
  ["Dev/Product", "Feature Launch Checklist", "Product teams", "Need launch process", "Launch checklist"],
  ["Personal/Education", "Freelance Rate Calculator", "Freelancers", "Need hourly/project pricing", "Life Admin Pack"],
  ["Personal/Education", "Subscription Audit Sheet", "Consumers", "Need cancel waste", "Budget sheet"],
  ["Personal/Education", "Tax Deduction Checklist", "Freelancers", "Need organize deductions", "Tax checklist"],
  ["Personal/Education", "Budget Split Calculator", "Consumers", "Need simple budgeting", "Budget template"],
  ["Personal/Education", "Emergency Fund Calculator", "Consumers", "Need savings target", "Budget template"],
  ["Personal/Education", "NDA Plain English Explainer", "Freelancers", "Need understand NDA basics", "Contract checklist"],
  ["Personal/Education", "Lease Question Checklist", "Renters", "Need questions before signing", "Lease checklist"],
  ["Personal/Education", "Study Schedule Generator", "Students", "Need study plan", "Study planner"],
  ["Personal/Education", "Essay Outline Builder", "Students", "Need essay structure", "Writing pack"],
  ["Personal/Education", "Citation Formatter Helper", "Students", "Need citation cleanup", "Citation checklist"]
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

function renderTools(filter = "All") {
  const filtered = filter === "All" ? tools : tools.filter((tool) => tool[0] === filter);
  toolGrid.innerHTML = filtered
    .map((tool) => {
      const index = tools.indexOf(tool) + 1;
      return `
        <article class="tool-card">
          <span class="tool-id">#${index}</span>
          <div class="tool-meta">${tool[0]} / ${tool[2]}</div>
          <h3>${tool[1]}</h3>
          <p>${tool[3]}</p>
          <p><strong>Paid path:</strong> ${tool[4]}</p>
          ${tool[5] ? `<a class="text-link" href="${tool[5]}">Open tool</a>` : ""}
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
