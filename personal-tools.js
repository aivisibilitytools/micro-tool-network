const data={
"freelance-rate-calculator":{t:"Freelance Rate Calculator",h:"Estimate a freelance rate.",d:"Turn income goals into hourly or project pricing.",f:["Monthly income goal","Billable hours","Extra costs"],o:v=>`Rate estimate:
Goal: {0}
Billable hours: {1}
Costs: {2}

Formula: (goal + costs) / billable hours. Add margin for taxes, admin, and unpaid sales time.`},
"subscription-audit-sheet":{t:"Subscription Audit Sheet",h:"Find subscriptions to cancel.",d:"Organize recurring costs before they leak money.",f:["Subscriptions","Monthly total","Keep criteria"],o:v=>`Subscription audit:
Subscriptions: {0}
Monthly total: {1}
Keep only if: {2}

Cancel unused, duplicate, or low-value subscriptions first.`},
"tax-deduction-checklist":{t:"Tax Deduction Checklist",h:"Organize potential freelancer deductions.",d:"Create a basic tax prep checklist.",f:["Work type","Expense categories","Accountant notes"],o:v=>`Deduction checklist for {0}:
- Software
- Equipment
- Education
- Internet/phone portion
- Payment fees
- Travel or mileage
Categories: {1}
Notes for accountant: {2}
Not tax advice.`},
"budget-split-calculator":{t:"Budget Split Calculator",h:"Create a simple monthly budget split.",d:"Plan needs, savings, and flexible spending.",f:["Monthly income","Needs percent","Savings percent"],o:v=>`Budget split:
Income: {0}
Needs: {1}%
Savings: {2}%
Flexible spending: remaining amount

Adjust until rent, food, debt, and emergency savings are covered.`},
"emergency-fund-calculator":{t:"Emergency Fund Calculator",h:"Estimate an emergency fund target.",d:"Calculate savings target from monthly expenses.",f:["Monthly expenses","Months covered","Current savings"],o:v=>`Emergency fund target:
Monthly expenses: {0}
Months: {1}
Current savings: {2}

Target = monthly expenses x months covered. Build one month first, then expand.`},
"nda-plain-english-explainer":{t:"NDA Plain English Explainer",h:"Review NDA terms in plain English.",d:"Create a checklist before signing an NDA.",f:["NDA purpose","Sensitive info","Concern"],o:v=>`NDA checklist:
Purpose: {0}
Sensitive info: {1}
Concern: {2}
- What is confidential?
- How long does it last?
- What is excluded?
- What happens if breached?
- Can you discuss with advisors?
Not legal advice.`},
"lease-question-checklist":{t:"Lease Question Checklist",h:"Prepare questions before signing a lease.",d:"Avoid surprises around fees, repairs, and rules.",f:["Property","Lease length","Main concern"],o:v=>`Lease questions for {0}:
- Rent and due date?
- Deposit and fees?
- Repair process?
- Utilities included?
- Guest/pet/parking rules?
- Lease length: {1}
- Main concern: {2}`},
"study-schedule-generator":{t:"Study Schedule Generator",h:"Create a simple study plan.",d:"Break a subject into daily sessions.",f:["Subject","Exam date","Available days"],o:v=>`Study plan for {0}:
Exam date: {1}
Available days: {2}

Plan:
1. Review weak topics
2. Practice problems
3. Timed test
4. Error log
5. Final review`},
"essay-outline-builder":{t:"Essay Outline Builder",h:"Build a clear essay outline.",d:"Turn a thesis into organized sections.",f:["Topic","Thesis","Required points"],o:v=>`Essay outline: {0}
Thesis: {1}

Intro: context and thesis
Body 1: first argument
Body 2: second argument
Body 3: counterpoint or evidence
Conclusion: restate insight
Required points: {2}`},
"citation-formatter-helper":{t:"Citation Formatter Helper",h:"Clean up citation notes.",d:"Organize source details before formatting citations.",f:["Style","Source type","Source details"],o:v=>`Citation helper:
Style: {0}
Source type: {1}
Details: {2}

Check author, title, publisher/site, date, URL/DOI, and access date if needed.`},
};const id=document.body.dataset.tool,x=data[id],form=document.querySelector("#form"),out=document.querySelector("#out");document.title=x.t;title.textContent=x.h;desc.textContent=x.d;cardTitle.textContent=x.t;form.innerHTML=x.f.map((n,i)=>`<label>${n}<textarea id="f${i}" rows="2" placeholder="${n}"></textarea></label>`).join("")+`<button class="button primary full" id="go" type="button">Generate</button>`;go.onclick=()=>{out.innerHTML="<pre></pre>";out.querySelector("pre").textContent=x.o(x.f.map((_,i)=>document.querySelector("#f"+i).value||x.f[i]));};
