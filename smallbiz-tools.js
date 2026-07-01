const data={
"invoice-generator":{t:"Invoice Generator",h:"Draft a simple invoice for freelance work.",d:"Create invoice copy you can save or paste into a PDF.",f:["Seller","Client","Service","Amount"],o:v=>`INVOICE
From: {0}
Bill to: {1}
Service: {2}
Amount due: {3}
Due date: Net 15

Thank you for your business.`},
"late-payment-email-generator":{t:"Late Payment Email Generator",h:"Write a polite payment reminder.",d:"Create a clear follow-up without sounding aggressive.",f:["Client","Invoice","Days late","Next step"],o:v=>`Hi {0},

I wanted to follow up on {1}, which appears to be {2} days overdue. Could you confirm when payment will be processed?

If helpful, the next step is: {3}.

Thank you.`},
"quote-estimate-generator":{t:"Quote / Estimate Generator",h:"Create a simple service quote.",d:"Draft scope, price, and timeline for a client.",f:["Client","Service","Price","Timeline"],o:v=>`Estimate for {0}

Service: {1}
Price: {2}
Timeline: {3}

Includes discovery, delivery, and one review round unless otherwise agreed.`},
"scope-creep-clause-generator":{t:"Scope Creep Clause Generator",h:"Set project boundaries before work starts.",d:"Draft a practical clause for freelance projects.",f:["Project","Included scope","Extra work rule"],o:v=>`Scope clause for {0}:

This project includes: {1}. Work outside this scope will be quoted separately before it begins. Extra work rule: {2}.`},
"client-intake-form-builder":{t:"Client Intake Form Builder",h:"Plan better client onboarding questions.",d:"Create intake questions before a project starts.",f:["Service","Client type","Key risk"],o:v=>`Client intake for {0}:
- What outcome do you want?
- Who approves the work?
- What assets already exist?
- Deadline and budget?
- Client type: {1}
- Key risk to clarify: {2}`},
"meeting-agenda-generator":{t:"Meeting Agenda Generator",h:"Create a focused meeting agenda.",d:"Avoid vague calls and wasted time.",f:["Meeting topic","Goal","Decisions needed"],o:v=>`Agenda: {0}
Goal: {1}

1. Context
2. Current blockers
3. Options
4. Decisions needed: {2}
5. Owner and next steps`},
"sop-generator":{t:"SOP Generator",h:"Turn a repeated task into an SOP.",d:"Create a simple operating procedure.",f:["Task","Owner","Tools","Quality check"],o:v=>`SOP: {0}
Owner: {1}
Tools: {2}

Steps:
1. Prepare inputs
2. Complete the task
3. Review output
4. Save or send result

Quality check: {3}`},
"refund-policy-generator":{t:"Refund Policy Generator",h:"Draft a clear refund policy starter.",d:"Create plain policy copy for small sellers.",f:["Product/service","Refund window","Exceptions"],o:v=>`Refund policy for {0}:
Customers may request a refund within {1}. Refunds are reviewed based on delivery status and usage. Exceptions: {2}. Contact support with your order details.`},
"shipping-policy-generator":{t:"Shipping Policy Generator",h:"Draft shipping policy copy.",d:"Create simple store policy text.",f:["Store","Processing time","Regions","Carrier"],o:v=>`Shipping policy for {0}:
Orders are processed within {1}. We currently ship to {2}. Carrier: {3}. Tracking information will be shared when available.`},
"privacy-policy-starter":{t:"Privacy Policy Starter",h:"Draft a basic privacy page starter.",d:"Create simple privacy language for a small website.",f:["Website","Data collected","Contact email"],o:v=>`Privacy starter for {0}:
We collect only the information needed to operate this site: {1}. We do not sell personal information. For privacy questions, contact {2}.`},
"service-package-builder":{t:"Service Package Builder",h:"Productize your freelance service.",d:"Create a simple service package offer.",f:["Service","Buyer","Deliverables","Price"],o:v=>`Package: {0} for {1}
Includes:
{2}

Price: {3}
Best for clients who want a clear outcome, fixed scope, and simple delivery.`},
"client-proposal-email-generator":{t:"Client Proposal Email Generator",h:"Send a proposal follow-up email.",d:"Write a short email after sharing a proposal.",f:["Client","Project","Benefit"],o:v=>`Hi {0},

I shared the proposal for {1}. The main benefit is {2}.

Happy to answer questions or adjust scope before we begin.

Best,`},
"project-timeline-generator":{t:"Project Timeline Generator",h:"Create a simple project timeline.",d:"Break a project into weekly phases.",f:["Project","Start date","Deadline","Milestones"],o:v=>`Timeline for {0}:
Start: {1}
Deadline: {2}

Milestones:
{3}

Weekly rhythm: kickoff, draft, review, final delivery.`},
"testimonial-page-builder":{t:"Testimonial Page Builder",h:"Plan a proof page for your business.",d:"Turn testimonials into a clean page structure.",f:["Business","Audience","Proof points"],o:v=>`Testimonial page for {0}:
Audience: {1}

Sections:
- Customer problem
- Before and after
- Quote highlights
- Proof points: {2}
- CTA to contact or buy`},
"local-seo-checklist":{t:"Local SEO Checklist",h:"Check local SEO basics.",d:"Create a simple checklist for local businesses.",f:["Business","City","Service"],o:v=>`Local SEO checklist for {0}:
- City: {1}
- Service: {2}
- Google Business Profile complete
- NAP consistent
- Service pages written
- Reviews requested
- Photos uploaded
- Local FAQ added`},
};const id=document.body.dataset.tool,x=data[id],form=document.querySelector("#form"),out=document.querySelector("#out");document.title=x.t;title.textContent=x.h;desc.textContent=x.d;cardTitle.textContent=x.t;form.innerHTML=x.f.map((n,i)=>`<label>${n}<textarea id="f${i}" rows="2" placeholder="${n}"></textarea></label>`).join("")+`<button class="button primary full" id="go" type="button">Generate</button>`;go.onclick=()=>{out.innerHTML="<pre></pre>";out.querySelector("pre").textContent=x.o(x.f.map((_,i)=>document.querySelector("#f"+i).value||x.f[i]));};
