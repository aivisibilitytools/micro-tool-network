const data={
"api-changelog-generator":{t:"API Changelog Generator",h:"Write clear API update notes.",d:"Create concise changelog copy for developers.",f:["API","Change","Impact"],o:v=>`{0} changelog:
Change: {1}
Impact: {2}
Action needed: review integration, test affected endpoints, and update docs if needed.`},
"readme-generator":{t:"README Generator",h:"Draft a useful GitHub README.",d:"Create basic repo documentation quickly.",f:["Project","What it does","Install/run"],o:v=>`# {0}

{1}

## Run
{2}

## Features
- Simple setup
- Clear usage
- Privacy-friendly defaults`},
"github-repo-seo-checker":{t:"GitHub Repo SEO Checker",h:"Make a repo easier to discover.",d:"Check name, description, README, and topics.",f:["Repo","Audience","Keywords"],o:v=>`GitHub SEO checklist for {0}:
- Audience: {1}
- Keywords: {2}
- Description explains outcome
- README has screenshots
- Topics added
- Demo link visible
- License included`},
"chrome-extension-listing-checker":{t:"Chrome Extension Listing Checker",h:"Improve a Chrome Web Store listing.",d:"Check title, screenshots, privacy, and benefits.",f:["Extension","User","Main benefit"],o:v=>`Listing checklist for {0}:
User: {1}
Benefit: {2}
- Clear title
- First screenshot shows product
- Privacy language simple
- Permissions explained
- Support email visible`},
"bug-report-template-generator":{t:"Bug Report Template Generator",h:"Create a clear bug report template.",d:"Help users report useful details.",f:["Product","Platform","Needed evidence"],o:v=>`Bug report for {0}:
Platform: {1}
Steps to reproduce:
1.
2.
3.
Expected result:
Actual result:
Evidence needed: {2}`},
"release-notes-generator":{t:"Release Notes Generator",h:"Draft release notes fast.",d:"Turn product changes into customer-friendly notes.",f:["Product","New feature","Fixes"],o:v=>`Release notes for {0}:
New: {1}
Fixed: {2}
Why it matters: this update makes the workflow clearer, faster, or more reliable.`},
"product-requirements-doc-builder":{t:"Product Requirements Doc Builder",h:"Draft a lightweight PRD.",d:"Create a structured product requirements outline.",f:["Feature","User","Problem","Success metric"],o:v=>`PRD: {0}
User: {1}
Problem: {2}
Success metric: {3}

Scope:
- Core flow
- Edge cases
- Analytics
- Launch checklist`},
"user-story-generator":{t:"User Story Generator",h:"Create product user stories.",d:"Turn a feature into user story format.",f:["User","Goal","Reason"],o:v=>`As a {0}, I want to {1}, so that {2}.

Acceptance criteria:
- User can complete the core action
- Error states are clear
- Result is saved or visible`},
"landing-page-qa-checklist":{t:"Landing Page QA Checklist",h:"Check a launch page before sharing.",d:"Review clarity, CTA, mobile layout, and analytics.",f:["Page","Audience","CTA"],o:v=>`Landing page QA for {0}:
Audience: {1}
CTA: {2}
- H1 is clear
- CTA visible above fold
- Mobile layout works
- Pricing or offer clear
- Privacy/contact links present`},
"feature-prioritization-matrix":{t:"Feature Prioritization Matrix",h:"Prioritize what to build next.",d:"Score impact, effort, urgency, and revenue fit.",f:["Feature","Impact 1-5","Effort 1-5","Revenue fit 1-5"],o:v=>`Priority score for {0}:
Impact: {1}
Effort: {2}
Revenue fit: {3}

Rule: build high impact, low effort, clear revenue-fit features first.`},
"saas-pricing-page-checker":{t:"SaaS Pricing Page Checker",h:"Improve a SaaS pricing page.",d:"Check plan clarity, buyer objections, and CTA copy.",f:["SaaS","Buyer","Main objection"],o:v=>`Pricing page checklist for {0}:
Buyer: {1}
Objection: {2}
- Plans are easy to compare
- Best plan highlighted
- Trial/guarantee clear
- FAQ handles objections
- CTA repeated`},
"customer-interview-script-generator":{t:"Customer Interview Script Generator",h:"Prepare discovery call questions.",d:"Create interview prompts that reveal real pain.",f:["Customer type","Problem area","Product idea"],o:v=>`Interview script for {0}:
- Tell me about your current workflow for {1}.
- What is most frustrating?
- What have you tried?
- What would a better version do?
- Would {2} be useful? Why or why not?`},
"nps-survey-question-builder":{t:"NPS Survey Question Builder",h:"Create simple feedback questions.",d:"Draft NPS and follow-up survey prompts.",f:["Product","User segment","Goal"],o:v=>`Survey for {0}:
NPS: How likely are you to recommend this to another {1}?
Why did you choose that score?
What should we improve to help with {2}?`},
"onboarding-email-sequence-generator":{t:"Onboarding Email Sequence Generator",h:"Plan activation emails.",d:"Create a short SaaS onboarding sequence.",f:["Product","User","Activation action"],o:v=>`Email sequence for {0}:
Day 0: Welcome and first step for {1}
Day 1: Complete {2}
Day 3: Common mistake to avoid
Day 5: Example workflow
Day 7: Ask for feedback`},
"feature-launch-checklist":{t:"Feature Launch Checklist",h:"Launch a feature cleanly.",d:"Check docs, support, analytics, and announcements.",f:["Feature","Audience","Launch channel"],o:v=>`Launch checklist for {0}:
Audience: {1}
Channel: {2}
- QA complete
- Docs updated
- Support notes ready
- Analytics event added
- Announcement written
- Rollback plan clear`},
};const id=document.body.dataset.tool,x=data[id],form=document.querySelector("#form"),out=document.querySelector("#out");document.title=x.t;title.textContent=x.h;desc.textContent=x.d;cardTitle.textContent=x.t;form.innerHTML=x.f.map((n,i)=>`<label>${n}<textarea id="f${i}" rows="2" placeholder="${n}"></textarea></label>`).join("")+`<button class="button primary full" id="go" type="button">Generate</button>`;go.onclick=()=>{out.innerHTML="<pre></pre>";out.querySelector("pre").textContent=x.o(x.f.map((_,i)=>document.querySelector("#f"+i).value||x.f[i]));};
