export interface CheatsheetItem {
  id: string;
  title: string;
  group: number;
  category: string;
  script: string;
  tips: string[];
}

export const CATEGORIES: { [key: number]: string } = {
  0: "Profile",
  1: "Role & Fit",
  2: "Motivation",
  3: "Leadership",
  4: "Market Knowledge",
  5: "Case Studies",
  6: "Collaboration",
  7: "Vision & Strategy",
  8: "Growth & Career",
  9: "Questions"
};

export const CHEATSHEET_DATA: CheatsheetItem[] = [
  {
    id: "intro",
    title: "Self-Introduction",
    group: 0,
    category: "Profile",
    script: `First and foremost, I would like to **thank you** for your interest in my profile and taking the time for having me in this interview session.

In the next, I will take a few minutes to give you a quick overview about my background, experiences of **value engineering** and what has **brought** me to this opportunity.

I’ve spent more than **15 years** working in **enterprise technology**, **business transformation**, **commercial value creation** and **alue realization**, and I have been **playing role** to help customers understand why change matters, quantify the economic value, build the **business case** helping customer to make their **decision of investment**, and then **connect** that value case to adoption and measurable outcomes.

At Aspen Technology, I’ve worked with large enterprise customers across pharmaceutical, energy, utilities, manufacturing, and other highly-regulated industries etc., helping them address complex business challenges, operational pains, and business priorities through industrial software, data-driven solutions, AI, and digital transformation.

Over time, a significant part of my role has become very closely aligned with Value Engineering. I work with customers and account teams to understand their business problems, strategic priorities, and value drivers, establish the baseline, quantify economic impact, and build financial models for ROI, TCO, NPV, Payback etc., and executive business cases that support customer's investment decisions.

From my perspective, my experience tells me, Value Engineering is much more than building a financial model, it is about connecting the technology to the outcomes that matter most to the customer, and then helping the customer turn those outcomes into a credible business case and, ultimately, realized value.

A good example is a pharmaceutical manufacturing customer where several critical rotating assets were causing unplanned shutdowns, which caused the production line shutdown and significant margin leakage. Instead of positioning our predictive maintenance simply as a technology solution, we connected the technical capability to the customer's financial exposure and business priorities. The customer adopted the solution for five critical assets, unplanned shutdowns were reduced by more than 95%, and net margin increased by $1.6M every year, equivalent to 0.8 percentage points increase on top of their net margin ratio before adoption.

That experience captures how I approach value: start with the business problem, quantify the economic impact, build the financial models, align the executive stakeholders, build the business case, and then connect adoption to measurable outcomes.

Internally, I also work closely with account executive, consulting, professional service teams, and leadership to shape value narratives, strengthen deal strategies, align stakeholders, and support complex enterprise opportunities.

So when I look at this opportunity at Medidata, I see a very natural continuation of what I’ve been doing, bringing my hands-on Value Engineering experience, executive engagement, commercial influence, and value realization into life sciences sector, and applying that discipline across APAC as a senior value engineering contributor.
`,
    tips: [
      "Thank you for...",
      "15 years working in"

    ]
  },
  {
    id: "interest",
    title: "Interest in the Medidata Value Engineering Role",
    group: 1,
    category: "Motivation",
    script: `What attracted me to this role is that it brings together several things that have become central to my career at Aspen: understanding complex customer problems, quantifying business value, engaging senior executives, and using that value to influence both the investment decision and the commercial strategy.

What particularly interests me is that Medidata's Value Engineering role covers the whole value lifecycle, from business problem discovery, value driver identification, value hypothesis, value quantification & financial modeling, business-case development, and commercial decision through adoption, value realization, and optimization, and I believe my experiences in value engineering can be helpful both Medidata and its customers in their journey of pursuing value creation.

I also see a very interesting opportunity to bring my experience into life sciences. I have already worked with pharmaceutical customers on technology investments where the conversation had to move from technical capability to operational and financial outcomes.

So I see this opportunity more as applying a capability I've developed over many years to a highly relevant industry and a company where the economic impact of technology can be very significant.`,
    tips: [
      "**Likely question:** “Why are you interested in this role?”",
      "brings together several things",
      "using that value to influence",
      "covers whole value lifecycle",
      "my experiences can help both"
      
    ]
  },
  {
    id: "fit",
    title: "Fit & Relevance",
    group: 1,
    category: "Role & Fit",
    script: `I see the fit in four areas.

First, I have hands-on experience with Value Engineering— developing value drivers, building financial models for ROI, TCO, NPV, IRR and Payback, value hypotheses, financial impact, and executive business cases.

Second, I've spent years engaging enterprise customers at senior levels. I'm comfortable moving between operational stakeholders, technical teams, finance, commercial leaders, and executives, and translating their different priorities into one value story.

Third, I've worked very closely with sales, consulting, professional service, and leadership teams, At Aspen, value wasn't an isolated analytical exercise; it was part of opportunity strategy, competitive positioning, commercial justification, adoption, and expansion.

And fourth, I understand value realization. I don't see the job as proving value just before the contract. The real test is whether the customer adopts the solution and achieves the outcomes that justified the investment.

That combination of value expertise, commercial experience, executive engagement, and APAC experience is what I believe is particularly relevant to this position.`,
    tips: [
      "**Likely question:** “Why do you think you are a good fit for this role?”"

    ]
  },
  {
    id: "leave_aspen",
    title: "Leave for Medidata",
    group: 5,
    category: "Motivation",
    script: `I’ve had a very valuable experience at Aspen, and I'm not looking to leave because of a negative experience.

What I'm looking for now is the next stage of my career where I can make Value Engineering an even more central part of what I do.

At Aspen, I've progressively moved toward value-based selling, executive business cases, financial modeling, and value realization. The Medidata role gives me the opportunity to bring those capabilities together in a dedicated Value Engineering function and apply them in life sciences.
I’m also attracted by the complexity of the customer problems. Clinical development involves major investments, long timelines, operational complexity, and significant economic consequences when things don't work as planned.

So for me, this is really about focus and progression—taking a capability I've built in industrial technology and applying it more directly as a senior Value Engineering practitioner across APAC.
`,
    tips: [
      "**Likely question:** “Why are you considering leaving Aspen?”"
      
    ]
  },  
  
  {
    id: "medidata_solutions",
    title: "About Medidata",
    group: 4,
    category: "Market Knowledge",
    script: `What stands out to me is that Medidata is not simply a collection of clinical-trial applications. It has been building a connected platform across the clinical development lifecycle, bringing together Study, Patient, and Data Experiences.

The scale is also significant. Medidata says its technology has supported more than 38,000 clinical trials and 12 million patients, with a very large clinical dataset. Its current strategy is also increasingly centered on AI, including Dot and the Medidata Plus AI layer.

From a Value Engineering perspective, I think that creates an interesting value conversation. The opportunity isn't just to demonstrate the value of an individual application; it is to quantify the impact of connecting workflows, reducing fragmentation, improving trial execution, accelerating decisions, managing risk, and potentially expanding value across the platform.

That's one of the things that makes the role particularly interesting to me: the value discussion can be both point-solution specific and enterprise-platform oriented.`,
    tips: [
      "**Likely question:** “What do you know about Medidata?”"
      
    ]
  },
  {
    id: "value_engineering_experience",
    title: "Value Engineering Experience",
    group: 2,
    category: "Case Studies",
    script: `At Aspen, Value Engineering has increasingly become an important part of how I work with enterprise customers and account teams.

My approach starts with understanding the customer's business problem and strategic priorities rather than starting with the product.

From there, I identify the relevant value drivers, establish a baseline, quantify the economic impact, develop financial models including ROI, TCO, NPV, IRR and Payback, my experience tells me, they help executives understand the investment, the expected value, the assumptions, and the risks, they have been the powerful tools in helping my customers made their decision on solution vender selection upon us..

Then I work with the account team and customer stakeholders to translate that analysis into an executive value narrative that can influence the investment decision.

And I don't stop at the business case. I also look at adoption, value realization, benefits tracking, and expansion.

So I would describe my experience as spanning the full value chain:
**business problem → value hypothesis → quantification → business case → commercial decision → adoption → realized value**.

That's how I personally think about Value Engineering.`,
    tips: [
      "Likely question: “Tell me about your Value Engineering experience.”"
      
    ]
  },  

  {
    id: "value_case",
    title: "Value Engineering Case",
    group: 4,
    category: "Case Studies",
    script: `One example was a pharmaceutical manufacturing customer with several critical rotating assets where unplanned equipment failures could shut down the production line and create significant margin leakage.

The challenge was to demonstrate that predictive maintenance was not simply a technical improvement, but a financially meaningful business investment.

I worked with the customer and our technical team to connect the predictive-maintenance capability to the business impact of avoiding unplanned production interruptions. We focused on the most business-critical assets rather than trying to model everything.

The customer ultimately adopted the solution for five critical assets. Unplanned shutdowns were reduced by more than 95%, and the customer's net margin increased by $1.6M every year, equivalent to 0.8 percentage points increase for the net margin ratio.

What I took from that case is that good Value Engineering starts with the economic consequence of the problem. Telling the quantified value of avoiding the business consequence of equipment failure matters to the customer much more than telling solution.`,
    tips: [
      "Likely question: “Can you give me an example of Value Engineering you've done?”"
      
    ]
  },
  {
    id: "financial_tool",
    title: "ROI/TCO Experience",
    group: 2,
    category: "Case Studies",
    script: `I use financial modeling to help an executive make a better investment decision under uncertainty

The tools that I have used as decision-support tools include not only ROI and TCO, but also IRR, NPV, Payback etc.

One example that comes to mind is a supply-chain optimization initiative with Sinopec, the largest petrochemical company in China.

The customer’s crude-oil purchasing process involved more than 200 variables and over 200 people, and the monthly planning cycle could take around three weeks. So the key question wasn’t simply whether the technology could improve the process, but whether the improvement could create a meaningful economic return.

I approached the business case from both sides. On the benefit side, I defined the value drivers and quantified the 1) potential saving from optimized crude oil procurement basket, 2) potential saving from manpower reduction, 3) and additional gain from producing and selling more high-value products by comparing the existing purchasing baseline with optimized scenarios. From conclusion on the value in dollar from our financial models, average annual benefit of $28M over five years after deployment is more than 95% possibility.

On the cost side, I built a five-year TCO, including software license fee, implementation & modeling (only in year 0), model maintenance, training, internal resources, and ongoing support etc., the annual cost is around $4.9 million, the five-year TCO would be around $24.7 million, versus the average annual cashflow in around $23.8M, the payback is around 12 months, and the 5-year NPV reach around $89.6M.

I then phased in benefits realistically and assess ROI, NPV, IRR, and payback, using the net discount rate given by the customer (their WACC), while validating the values and assumption with finance, procurement, operations, and IT at customer side.

The actual solution scaled to 52 teams and over 150 active users, reduced the planning cycle to less than a week, and based on customer report, generated average approximately $30 million in annual benefit from the defined three value drivers.

For all these financial tools including ROI, TCO, NPV, IRR and Payback, my experience tells me, they help executives understand the investment, the expected value, the assumptions, and the risks, they have been the powerful tools in helping my customers made their decision on solution vender selection upon us.`,
    tips: [
      "Likely question: “Tell me about your experience with ROI and TCO.”"
      
    ]
  },

  {
    id: "business_case",
    title: "Business Case Development",
    group: 2,
    category: "Case Studies",
    script: `I normally build a business case from the customer's decision backwards.
First, I understand what decision the customer is trying to make and what outcomes matter to the executive sponsor.

Then I establish the current-state baseline and identify the major value drivers—whether that's revenue, cost, productivity, risk, cycle time, quality, or capital efficiency.

Next, I quantify the impact and develop the financial models including ROI, TCO, NPV, IRR and Payback, making the assumptions transparent and validating them with the relevant stakeholders.

Then I connect the financial analysis with the strategic narrative: why change, why now, why this solution, and what happens if the customer does nothing.

Finally, I make the business case actionable—linking it to the commercial proposal, implementation priorities, adoption metrics, and ultimately value realization.

So I don't see a business case as a document. I see it as a decision framework.`,
    tips: [
      "Likely question: “How do you build a business case?”"
      
    ]
  },

    {
    id: "collaboration",
    title: "Cross-functional Collaboration",
    group: 2,
    category: "Collaboration",
    script: `I’m very comfortable working in environments where I don't have direct authority over all the people I need to work with and influence.

At Aspen, a complex opportunity could involve the account executive, sales leadership, solution consultants, product manager, professional services, partners, finance, and the customer.
My role is to create alignment around the value story.

I try to make sure everyone understands the customer's business problem, the value hypothesis, the economic drivers, the evidence behind the numbers, and how the value case supports the commercial strategy.

Despite the value engineering serves the goal of driving revenue growth, however I also think Value Engineering should be independent enough to challenge the deal team when the value case isn't credible.

So my approach is collaborative, but not simply supportive. I bring an objective value perspective that helps the broader team make better decisions and gives the customer a more credible business case.

Common Purpose → Alignment → Clear Roles → Trust → Execution
`,
    tips: [
      "Likely question: “How do you work cross-functionally?”"
      
    ]
  },

  {
    id: "strength",
    title: "Strengths",
    group: 5,
    category: "Growth & Career",
    script: `I would say my strongest capability is connecting technology, business value, and commercial outcomes.

I'm comfortable going deep enough into a complex technology solution to understand what it can actually change, but I naturally step back and ask what that change means economically for the customer.

That allows me to move between different levels of conversation—from technical teams, to operational leaders, to finance, to C-suite executives.

I also think my commercial background is important. I'm not doing Value Engineering as an academic exercise. I've spent years in real enterprise sales environments where the value case has to withstand customer scrutiny, competitive pressure, budget constraints, and ultimately a purchasing decision.

So if I had to summarize the strength in one sentence, it would be:
I can turn a complex technology proposition into a credible business case that executives can understand, challenge, and act on.`,
    tips: [
      "Likely question: “What is your greatest strength?”"
      
    ]
  },
  {
    id: "weakness",
    title: "Weaknesses",
    group: 5,
    category: "Growth & Career",
    script: `The area where I have the most to learn is the depth of the clinical-development domain itself.

I have experience working with pharmaceutical and life-sciences organizations, but I haven't spent my entire career inside clinical development or clinical-trial operations.

I don't see that as something to minimize. It's a domain I would need to learn deeply.

What gives me confidence is that the underlying Value Engineering discipline is highly transferable. I already know how to engage customers, understand complex processes, identify economic drivers, quantify value, build business cases, and work with technical experts.

So my approach would be to accelerate the domain learning by spending significant time with Medidata customers, product experts, clinical specialists, and account teams, while bringing the Value Engineering methodology I already have.

I would expect to learn the clinical context quickly, but I would never pretend to have domain expertise that I haven't earned.`,
    tips: [
      "Likely question: “What's an area you need to develop?”"

    ]
  },
  {
    id: "how_to_start",
    title: "How to Start",
    group: 1,
    category: "Vision & Strategy",
    script: `I would start with listening and learning.

First, I would understand Medidata's Value Engineering methodology, existing value models, tools, customer evidence, sales process, and success metrics.

Second, I would spend time with the sales organization in the region and understand where the biggest strategic opportunities and value challenges are—especially where deals are complex, competitive, or require stronger executive business cases.

Third, I would talk directly with customers and learn how they currently think about clinical-trial economics, operational efficiency, risk, timelines, adoption, and investment decisions.

Then I would identify a small number of high-value opportunities where I could contribute directly and generate early proof points.

In parallel, I would build a value library around recurring use cases, customer benchmarks, assumptions, value drivers, and proven outcomes.

My goal in the first phase would be simple: learn the domain quickly, earn credibility with the field and customers, and start creating measurable value rather than simply producing activity.`,
    tips: [
      "Likely question: “If you joined, what would you do first?”"
      
    ]
  },
  {
    id: "expectations",
    title: "Role Expectations",
    group: 5,
    category: "Growth & Career",
    script: `My expectation is that Value Engineering is treated as a strategic business capability, not simply a supporting function for sales.

I would expect to work directly with customers and prospects, particularly on complex opportunities where the economic case can materially influence the decision.

I would also expect close partnership with the field organization—helping account teams discover value, strengthen business cases, improve competitive positioning, identify adoption and expansion opportunities, and ultimately improve commercial outcomes.

At the same time, I would want to contribute beyond individual deals by helping develop reusable value models, benchmarks, tools, and best practices across APAC.

And because this is an individual contributor role based on what I learned from recruiter Anna, I'm very comfortable with being personally accountable for outcomes. I would expect to be measured not simply by the number of analyses I produce, but by the quality of the customer conversations, the opportunities influenced, and ultimately the value realized.

That's the kind of accountability I enjoy.`,
    tips: [
      "Likely question: “What do you expect from this role?”"
      
    ]
  },
    
  {
    id: "questions",
    title: "Questions 2 Ask",
    group: 6,
    category: "Questions",
    script: `Questions:
    
    1.	I’d love to understand your perspective on success. If we were having this conversation six or twelve months after I joined, what would I have accomplished for you to say, “This has been a very successful hire”?

2.	From your perspective, where is the biggest opportunity for Value Engineering in APAC today? Is it primarily around strengthening value-based selling in strategic opportunities, improving executive engagement, accelerating value realization, or something else?

3.	I'm interested in how you envision the partnership between Value Engineering and the field organization. At what point in a strategic opportunity would you ideally like VE to become involved, and where do you see VE having the greatest influence on the sales process?

4.	One thing that attracted me to the role is that Medidata seems to position Value Engineering as broader than traditional pre-sales. From your perspective, what really differentiates the Value Engineering approach here from a traditional solution consulting or value-selling approach?

5.	As Medidata continues to expand its platform and AI capabilities, I'm curious where you see the biggest Value Engineering challenge going forward. Is it primarily about quantifying the value of individual solutions, or increasingly about demonstrating the broader enterprise value of connecting capabilities across the clinical development lifecycle?

**Could respond:**
“That's interesting. I've seen exactly the same dynamic at Aspen. In my experience, the biggest difference comes when VE gets involved before the solution is fully defined, because then we can shape the value hypothesis together with the customer rather than simply validate a solution that's already been positioned. Is that also what you're trying to change in APAC?”`,
    tips: [
      "Role success criteria",
      "Value engineering opportunity",
      "Internal partnership",
      "Value engineering functional differentiation",
      "Value engineering challenge"
    ]
  },
  {
    id: "closing",
    title: "Closing Statement",
    group: 0,
    category: "Profile",
    script: `Yes. I would leave you with one thought.

What makes me particularly interested in this role is that I believe my experience has prepared me to operate at the intersection of customer value, executive engagement, and commercial execution.

I've spent years working with complex enterprise customers where technology alone was never enough. The customer needed to understand the business problem, the economic impact, the investment case, and ultimately whether the promised value could actually be realized.

That's the discipline I've developed at Aspen, and it's what I would bring to Medidata.

I also understand that I have a new domain to master in clinical development, and I'm approaching that with genuine curiosity and humility.

But the core capability—helping customers understand, quantify, communicate, and realize the value of technology—is something I've been doing for years.

That's why I believe I could make a meaningful contribution to the Medidata Value Engineering organization in APAC.`,
    tips: [
      "Likely question: “Is there anything else you'd like us to know?”"
      
    ]
  },

  {
    id: "value_strategy",
    title: "Value Engineering Strategy",
    group: 4,
    category: "Vision & Strategy",
    script: `I would build the strategy around three levels.

**First** is deal-level value: engage early in strategic opportunities, understand the customer's business priorities, quantify the relevant value drivers, and build credible ROI/TCO and executive business cases.

**Second** is customer-level value: connect the business case to adoption and realization, identify whitespace, and help customers expand where additional capabilities can address additional business outcomes.

**Third** is organizational scale: turn successful customer engagements into reusable value models, benchmarks, proof points, tools, and enablement that sales teams across APAC can use.

I would also segment the approach by customer situation. A large pharmaceutical company may need a strategic transformation and enterprise value case, while another customer may need a very specific use-case ROI.

The common principle is the same: start with the **customer's economics**, **quantify** what matters, **prove** the value, and then **scale** what works.

That would be my basic operating model for APAC.`,
    tips: [
      "Likely question: “What would your Value Engineering strategy be for APAC?”"
      
    ]
  },

  {
    id: "insight",
    title: "Insights in Value and Engineering of Medidata Solutions",
    group: 4,
    category: "Market Knowledge",
    script: `My initial view is that Medidata's value opportunity is broader than simply reducing software cost or automating individual tasks.

Clinical trials involve several economic levers: time to execution, enrollment, site performance, data quality, operational productivity, risk, protocol complexity, and ultimately the cost and predictability of development.

What I find particularly interesting is Medidata's connected-platform approach. By connecting Study, Patient, and Data Experiences, the potential value is not only in improving an individual workflow, but also in reducing fragmentation and improving decisions across the trial lifecycle. Medidata is also increasingly embedding AI across that lifecycle through its platform.

So I would approach Value Engineering by first understanding the customer's specific economic exposure—where are time, cost, risk, or productivity being lost? Then I would map those drivers to the relevant Medidata capabilities and quantify the impact.

For me, the interesting value engineering challenge is turning that platform capability into a customer-specific economic story: not “here are Medidata's features,” but “here is the business outcome you can achieve, how we quantify it, and how we will know that you've achieved it.”`,
    tips: [
      "Likely question: “How do you think about the value Medidata creates?” or “What do you see as the Value Engineering opportunity at Medidata?”"
      
    ]
  },

  {
    id: "proof_point",
    title: "5 Proof Points",
    group: 1,
    category: "Role & Fit",
    script: `**5 Proof Points:**

**Proof Point 1 — I can personally perform Value Engineering**
Hypothesis: Can Paul actually do Value Engineering, rather than simply lead people who do it?

**Core message**
At Aspen, I worked directly with enterprise customers to translate complex industrial and digital-transformation opportunities into quantified business value—building value hypotheses, ROI/TCO models and executive business cases that connected technology investment to measurable financial outcomes.

**Proof Point 2 — I know how to turn customer value into commercial value**
Hypothesis: Can Paul use Value Engineering to influence the commercial process, rather than treating VE as an analytical exercise?

I used quantified customer value to strengthen the commercial case and support complex enterprise decisions.

**Core message**
My experience sits at the intersection of value and commercial execution. I have used quantified customer outcomes, ROI/TCO analysis and executive business cases not simply to demonstrate value, but to support strategic buying decisions, strengthen value-based selling and ultimately drive commercial growth.

**Proof Point 3 — I can engage executives around business outcomes**
Hypothesis: Can Paul operate credibly with senior pharmaceutical/enterprise executives?

The evidence needs to demonstrate your ability to move the conversation from:
technology → business problem → economic impact → strategic decision

**Core message**
Throughout my enterprise software and transformation career, I have engaged senior customer stakeholders around business outcomes rather than technology alone—connecting operational challenges, financial impact and transformation priorities into an executive-level value proposition and investment case.

**Proof Point 4 — I can drive value realization, not just promise value**
Hypothesis: Does Paul understand what happens after the business case is approved?

Complete lifecycle of Value Engineering:
Value discovery → Value quantification → Investment case → Value-based selling → Adoption → Value realization → Governance/optimization

**Core message**
My approach to value has always extended beyond proving the investment case. I focus on whether the customer actually adopts the solution, achieves the expected business outcomes and can measure those benefits—creating a closed loop between value promised, value delivered and value expanded.

**Proof Point 5 — I can independently operate as a senior APAC IC**
Hypothesis: Can the VP in the US trust Paul to own complex APAC engagements without needing to manage him closely?

**Core message**
I have spent much of my career operating across APAC in complex, cross-functional environments where success depended on personal ownership, executive influence and the ability to connect global strategy with local customer and market realities. I am comfortable independently leading a complex engagement from value discovery through commercial execution and realization.

Value Engineering Common Thread:
Customer problem → Value hypothesis → Quantification → Business case → Commercial decision → Adoption → Value realization
`,
    tips: [
      "Able personally perform Value Engineering",
      "how to turn customer value into commercial value",
      "engage executives around business outcomes",
      "drive value realization, not just promise value",
      "independently operate as a senior APAC individual contributor"

    ]
  },

  {
    id: "Turn_problem_to_case",
    title: "Turning a Customer Problem into a Quantified Business Case",
    group: 2,
    category: "Case Studies",
    script: `Story 1 — Value Engineering: Turning a Customer Problem into a Quantified Business Case

**Proof Point:** I can personally perform Value Engineering.

**Likely questions this story can answer:**
•	“Tell me about your Value Engineering experience.” 
•	“Give me an example of how you've quantified customer value.” 
•	“How do you build an ROI/business case?” 
•	“How do you identify value drivers?” 
•	“How do you validate the assumptions behind your value model?” 
•	“What is your approach to ROI and TCO?”

**Situation**
At Aspen Technology, I worked with Sinopec, one of China's largest oil and gas companies. They had a very complex crude-oil procurement planning process. Every month, they had to make purchasing decisions involving more than 200 variables, but the process was largely manual and required more than 200 people across the organization. It took around three weeks to develop the monthly purchase plan, and it was extremely difficult to determine whether the plan was actually the most profitable option.

**Task**
Sinopec was evaluating whether to invest in software, analytics and optimization technology to improve this process. My role was to help them move beyond a technology evaluation and establish the business value of the investment—essentially, to answer: What would this transformation be worth to Sinopec, and how would we prove it?

**Action**
I worked with the customer to understand the existing process, the decision complexity and the economic drivers behind crude procurement. We connected the optimization opportunity with the business outcomes that mattered—reducing procurement cost, improving the quality and speed of decision-making, and ultimately increasing profitability.
Rather than presenting optimization simply as a technology capability, we built the value case around measurable business outcomes. We then used that value proposition to engage the relevant business and functional stakeholders and support the investment decision and subsequent adoption.

**Result**
The solution was ultimately adopted by 52 teams, including subsidiaries and functional departments at headquarters, with more than 150 active users. The monthly planning cycle was reduced from approximately three weeks to less than one week, and Sinopec achieved an average annual procurement cost saving of approximately $30 million.

**Takeaway**
This experience shaped my view of Value Engineering. The objective is not simply to show that a technology works. It is to connect a customer's complex business problem to measurable economic value, build a credible investment case, and then demonstrate that the value is actually realized at scale.

**My Role**
My role was to understand the customer's business problem, translate the technical capability into economic value, build and communicate the value case, align the relevant stakeholders, and connect that value case with the commercial and adoption process.

The value case created the economic justification, but adoption required stakeholders to see how the solution addressed their own business needs. We therefore had to translate the value proposition across different organizational stakeholders and demonstrate that the solution could work at enterprise scale.`,
    tips: [
      "Proof Point: I can personally perform Value Engineering."
      
    ]
  },

  {
    id: "connect_value",
    title: "Connecting Value to Commercial Results",
    group: 2,
    category: "Case Studies",
    script: `Story 2 — Value-Based Selling: Connecting Value to Commercial Results

**Proof Point:** I can turn customer value into commercial impact.

**Likely questions:**
•	“How have you used Value Engineering in sales?” 
•	“How do you partner with Sales?” 
•	“Tell me about a deal where value influenced the customer's decision.” 
•	“How does VE contribute to revenue?” 
•	“How do you differentiate value-based selling from traditional solution selling?” 
•	“What commercial results have you delivered?”

**Situation**
At Aspen Technology, I worked with a pharmaceutical manufacturing company that had a significant operational and financial problem. Several critical rotating assets could fail unexpectedly, and when one of these assets shut down, it could stop the production line. The consequence was not simply maintenance cost—it was lost production and margin leakage.

**Task**
The customer was evaluating a predictive maintenance solution, and my role was to help connect the technical capability with the business case. We needed to establish whether proactively detecting equipment deterioration could create enough financial value to justify the investment.

**Action**
I worked with the customer to focus the analysis on the most business-critical assets rather than trying to monitor everything at once. We identified five key rotating equipment assets where unplanned failure had the greatest potential impact on production.
We then connected the predictive maintenance capability to the customer's business outcomes: detecting abnormal equipment conditions earlier, enabling maintenance to be planned before failure, avoiding production-line shutdowns, and ultimately protecting production margin.
Rather than positioning the solution simply as an equipment-monitoring technology, I framed the value around the economic consequence of avoiding unplanned production interruptions.

**Result**
The customer adopted the predictive maintenance solution for the five critical rotating assets. Unplanned shutdowns were reduced by more than 95%, and the improvement in production continuity contributed to net margin increased by $1.6M every year, equivalent to 0.8 percentage points increase for net margin ratio.

**Takeaway**
What I particularly value about this case is that the conversation started with equipment reliability but ended with a financial outcome. That's how I approach Value Engineering: connect the technology to the operational driver, then connect the operational driver to the economic result that matters to the executive decision-maker.

**1. “How did you convince the customer that predictive maintenance was worth paying for?”**

We didn't start by asking the customer to invest in predictive maintenance technology. We started with the cost of the existing problem. If a critical asset failed, the consequence was a production shutdown and margin leakage. So we quantified the business impact of that problem and then asked whether the predictive capability could materially reduce the probability and consequence of those events. Once the customer could see the connection between avoiding shutdowns and improving financial performance, the technology investment became an economic decision rather than simply a technology purchase.
This is exactly the kind of answer I would expect a VE leader to appreciate.

**2. “What was your personal contribution?”**

My role was to connect the technical solution with the customer's business and financial priorities. I wasn't the person developing the predictive algorithm or performing the equipment engineering myself. I worked with the customer and our technical team to understand the operational problem, identify the critical assets, establish the value drivers, quantify the potential business impact, and translate that into an investment case that senior stakeholders could understand and act on.

**3. “How would you explain this value proposition to a CFO?”**

I would not lead with predictive maintenance. I would lead with the economic exposure. I would say: these five assets create a material production risk; when they fail, the production line stops and margin is lost. We can use predictive analytics to detect deterioration earlier and move intervention from an unplanned failure to a planned maintenance event. Then I would quantify the avoided production loss, investment required and expected financial return. For a CFO, the conversation is ultimately about risk, economics and return on investment.

**4. “What does this case tell you about Value Engineering at Medidata?”**

The transferable principle is the value chain. In this case, the starting point was an operational problem—equipment failure. We then identified the business consequence—production interruption and margin leakage—quantified the potential impact, connected it to the solution and measured the outcome after implementation. At Medidata, the specific business problems will obviously be different, but the discipline is the same: understand the customer's business outcome, quantify the economic impact, establish a credible value hypothesis, and ultimately measure whether the value is realized.`,
    tips: [
      "Proof Point: I can personally perform Value Engineering."
      
    ]
  }

];
