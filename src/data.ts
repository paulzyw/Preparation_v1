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

I am delighted to have this opportunity to speak with you about the hiring role at Medidata, I will take a few minutes to give you a quick overview about my background, experiences of **value engineering** and what has **brought** me to this opportunity.

I’ve spent more than **15 years** working in **enterprise technology**, **business transformation**, **commercial value creation** and **realization**, and I have been **playing the role** to help customers understand why change matters, quantify the economic value, build the **business case** helping customer to make their **decision to invest in technology**, and then **connect** that value case to adoption and measurable outcomes.

At Aspen Technology, I’ve worked with large enterprise customers across pharmaceutical, energy, utilities, manufacturing, and other highly-regulated industries, helping them address complex business challenges, operational pains, and business priorities through industrial software, data-driven solutions, AI, and digital transformation.

Over time, a significant part of my role has become very closely aligned with Value Engineering. I work with customers to understand their business problems, strategic priorities, and value drivers, establish the baseline, quantify economic impact, build financial models and executive business cases that support customer to make decisions of investment.

From my perspective, my experience tells me, Value Engineering is much more than building a financial model, it is about **connecting the technology to the quantified outcomes** that matter most to the customer, and then helping the customer turn those outcomes into a credible business case and, ultimately, realized value.

One good example was a supply-chain optimization initiative with a giant company in energy sector, in this case, I led with my hands-on effort crossing the entire Value Engineering lifecycle, started with discovering and defining their business problems, then translated a high-complex crude-oil purchasing planning challenge into an executive business case, and the solution ultimately scaled to its 52 subsidiaries and with more than 150 users. As result, the purchasing planning cycle reduced 70%, and $30 million in average in annual purchasing savings is reported.

That experience captures how I approach value: start with the **business problem**, develop **value drivers**, quantify the **economic impact**, build the **financial models**, align the **executive stakeholders**, build the **business case**, and then connect **adoption** to **measurable outcomes**.

Internally, I also work closely with consulting, professional service, and leadership team to shape value narratives, strengthen deal strategies, align stakeholders, and support complex enterprise opportunities.

So when I look at this opportunity at Medidata, I see a very natural continuation of what I’ve been doing, bringing my hands-on Value Engineering experience, executive engagement, commercial influence, and value realization into life sciences sector, and applying that discipline across APAC as a senior value engineering contributor.

I am excited about this potential opportunity of joining your team and working together to achieve our shared goals. 

Thank you for considering me as one of candidates for this role, and I look forward to having discussion on how I can contribute to the success of Value Engineering at Medidata in this region.
`,
    tips: [
      "Thank you for...",
      "15 years working in VE across industries",
      "Value engineering experience",
      "Real case",
      "Learned from VE experience",
      "Internal collaboration",
      "Wrap-up"

    ]
  },
  {
    id: "interest",
    title: "Interest in the Medidata Value Engineering Role",
    group: 1,
    category: "Motivation",
    script: `What attracted me to this role is that it brings together several things that have become **central to my career** at Aspen: understanding complex **customer problems**, defining **value drivers**, quantifying **business value**, engaging **senior executives**, and developing **executive business case** to influence both the investment decision and the commercial strategy.

What particularly interests me is that Medidata's Value Engineering role covers the **whole value lifecycle**, from **business problem** discovery, **value driver** identification, **value hypothesis**, value **quantification** & financial **modeling**, **business-case** development, and **commercial decision** through adoption, value realization, and optimization, and I believe my experiences in value engineering can be **helpful for both** Medidata and its customers in the journey of pursuing value creation.

I also see a very interesting opportunity to bring my experience into **life sciences** sector. I have already worked with **pharmaceutical** customers on **technology investments** where the conversation have moved from technical capability to **operational and financial outcomes**.

So I see this opportunity more as applying a capability I've developed over many years to a **highly relevant industry** and a **company** where the **economic impact of technology** can be very significant.`,
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

**First**, I have **hands-on experience** with Value Engineering crossing the entire value chain — discovering customer's business problem, developing value drivers, quantifying business impact, building financial models, aligning executives, building business cases, influencing commercial decisions, and connecting quantified economic outcomes to adoption and value realization.

**Second**, I've spent years **engaging enterprise customers** at senior levels. I'm comfortable moving between operational stakeholders, technical teams, finance, commercial leaders, and executives, and **translating** their different priorities into **one value story**.

**Third**, I've worked very closely with sales/account, consulting, professional service, and leadership teams, At Aspen, value wasn't an isolated analytical exercise; it was part of **opportunity strategy, competitive positioning, commercial justification, adoption, and expansion**.

And **fourth**, I understand value realization. I don't see the job as proving value just before the contract. The real test is whether the customer adopts the solution and **achieves the outcomes that justified the investment**.

That **combination** of **value expertise**, **commercial experience**, **executive engagement**, and **APAC experience** is what I believe is particularly relevant to this position.`,
    tips: [
      "**Likely question:** “Why do you think you are a good fit for this role?”",
      "Hands-on experience",
      "engaging enterprise customers at senior level",
      "cross-functional collaboration",
      "value realization",
      "Combination relevant to this role"

    ]
  },
  {
    id: "leave_aspen",
    title: "Leave for Medidata",
    group: 5,
    category: "Motivation",
    script: `I’ve had a very **valuable and rewarded** experience at Aspen, and I'm **not** looking to leave because of a **negative experience**.

What I'm looking for now is the **next stage** of my career where I can make my **expertise** of Value Engineering an even more **central part** of what I do so that I can **create more values** to both my employer and customers.

At Aspen, I've progressively moved toward value-based selling, executive business cases, financial modeling, and value realization. The Medidata role gives me the opportunity to **bring those capabilities together** in a dedicated Value Engineering function and apply them in life sciences sector.
I’m also attracted by the complexity of the customer problems. Clinical development involves **major investments**, **long timelines**, **operational complexity**, and **significant economic consequences** when things don't work as planned.

So for me, this is really about focus and progression—taking a capability I've built in industrial technology and applying it more directly as a senior **Value Engineering practitioner** across APAC.
`,
    tips: [
      "**Likely question:** “Why are you considering leaving Aspen?”",
      "Rewared experience, not leave because of negative experience",
      "Next-step career, VE expertise to be central part to create more value",
      "Value engineering practitioner"
      
    ]
  },  
  
  {
    id: "medidata_solutions",
    title: "About Medidata",
    group: 4,
    category: "Market Knowledge",
    script: `Medidata, a Dassault Systèmes brand, is a **global leader** in **clinical-trial technology**, supporting **sponsors**, **CROs**, and **research institutes** through a **unified platform** connecting **Study**, **Patient** and **Data Experiences**. 

Its capabilities include **clinical operations**, **electronic data capture**, **patient engagement**, **data management**, **analytics and AI-enabled trial planning and execution**. These solutions help customers **improve data quality**, **streamline workflows**, **reduce trial complexity** and **accelerate development timelines**. 

With **38,000**-plus trials and **12 million** patients represented, Medidata has substantial industry scale and **established market presence**.

What stands out to me is that Medidata is not simply a collection of clinical-trial applications. It has been building a **connected platform** across the **clinical development lifecycle**, bringing together Study, Patient, and Data Experiences.

From a Value Engineering perspective, I think that creates an interesting value conversation. The opportunity isn't just to demonstrate the value of an individual application; it is to quantify the impact of connecting workflows, reducing fragmentation, improving trial execution, accelerating decisions, managing risk, and potentially expanding value across the platform.

This's one of the things that makes the role **particularly compelling** to me.`,
    tips: [
      "**Likely question:** “What do you know about Medidata?”"
      
    ]
  },
  {
    id: "value_engineering_experience",
    title: "Value Engineering Experience",
    group: 2,
    category: "Case Studies",
    script: `At Aspen, Value Engineering has been an **important part** of how I work with enterprise customers and internal stakeholders.

My approach starts with understanding the customer's business problem and strategic priorities rather than starting with the product.

From there, I identify the relevant value drivers, establish a baseline, quantify the economic impact, develop financial models (including ROI, TCO, NPV, IRR and Payback), my experience tells me, these tools help executives understand the investment, the expected value, the assumptions, and the risks, they have been the powerful tools in helping my customers made their decision on investment and on the selection of solution vender upon us.

Then I work with the customer stakeholders to translate that financial models into an **executive value narrative** that can influence the **investment decision**.

And I don't stop at the business case. I also look at adoption, value realization, benefits tracking, and expansion.

So I would describe my experience as inclusion of the full value chain:

1. Discover Business problem → 
2. Develop value drivers →
3. Economic impact quantification → 
4. Financial Modeling → 
5. Executive Alignment → 
6. Develop Business case → 
7. Influence Commercial Decision → 
8. Adoption → 
9. Realization of Value


That's how I personally have been experiencing Value Engineering.`,
    tips: [
      "Likely question: “Tell me about your Value Engineering experience.”"
      
    ]
  },  

  {
    id: "value_case",
    title: "Value Engineering Case",
    group: 4,
    category: "Case Studies",
    script: `One example was a **pharmaceutical manufacturing customer** with several critical rotating assets where unplanned equipment failures could shut down the production line and create significant margin leakage.

The challenge was to demonstrate that predictive maintenance was not simply a technical improvement, but a **financially meaningful business investment**.

I worked with the customer and our technical team to connect the **predictive-maintenance capability** to the **business impact** of avoiding unplanned production interruptions. We focused on the most business-critical assets rather than trying to model everything.

The customer ultimately adopted the solution for five critical assets. Unplanned shutdowns were reduced by more than 95%, and the customer's net margin increased by $1.6M every year, equivalent to 0.8 percentage points increase on top of the net margin ratio before the adoption.

What I took from that case is that **good Value Engineering** starts with the **economic consequence of the problem**. Telling the quantified value of avoiding the business consequence of equipment failure **matters** to the customer **much more than** telling solution.`,
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

One example that comes to mind is a supply-chain optimization initiative with a customer named Sinopec, the largest petrochemical company in China.

The customer’s crude-oil purchasing process involved more than 200 variables and over 200 people, and the monthly planning cycle could take around three weeks, which caused negative impact: 1) High crude-oil procurement expenditure, 2) Limited flexibility in plan adjustments in highly price-fluctuated market, and 3) The difficulty aligning crude purchases with changing downstream market requirements. So the key question wasn’t simply whether the technology could improve the process, but whether the improvement could create a meaningful economic return.

I approached the business case from both sides. On the benefit side, I defined the value drivers and quantified them, including 1) optimizing the crude-oil purchasing baske, 2) improving planning productivity, and 3) capturing more potential benefits from enabling to produce and sell more high-value products in downstream market by comparing the existing purchasing baseline with optimized scenarios. From conclusion on the value in dollar from our financial models, average annual benefit of $28M over five years after deployment is achieveable with 95% possibility.

On the cost side, I built a five-year TCO, including software license fee, implementation & modeling (only in year 0), hardware, model maintenance, training, internal resources, and ongoing support etc., in five years as the calculation period, beside the initial modeling cost $700k, the annual cost is about $4.8 million, the five-year TCO is around $24 million, versus the average annual cashflow in around $23.9M, the payback is around 12 months, and the 5-year NPV reach around $90M.

I then phased in benefits realistically and assess ROI, NPV, IRR, and payback, using the net discount rate given by the customer (their WACC), while validating the values and assumption with finance, procurement, operations, and IT at customer side.

The actual solution scaled to 52 teams including HQ funcitons and its subsidiaries with over 150 active users, reduced the planning cycle to less than a week, and based on customer report, generated average approximately $30 million in annual benefit from the defined three value drivers.

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
    script: `When I build a business case, in my scheme, the business case is tasked to be used as a powerful instrument and essentially a **decision-making framework** that answers customer: 
1. **Why** should the customer **invest**, 
2. **what value** will the investment create, and 
3. **what** does it **take** to realize that value? (cost)

A business case I have built typically brings together **the business problem and baseline, value drivers and expected benefits, investment and TCO, financial returns such as ROI, NPV, IRR and payback, key assumptions and risks, and ultimately the path to value realization.**

A good example is a Supply Chian Optimization Project with my customer Sinopec, the largest oil & gas company in China. Their crude-oil planning process involved more than 200 variables and over 200 people, with a monthly planning cycle of around three weeks. I worked with the customer to discover the business problems, establish the baseline, identify the key value drivers, and translate those operational improvements into economic impact.

I then built the financial case around benefits, implementation and operating costs, benefit ramp, cash flows, and return scenarios. 

But the most important part was using that business case to engage executives, helping customer executives understand the economics of the problem, the value opportunity, the investment required, and the returns of investment behind the case.

That shifted the conversation from “What does the technology do?” to “Does this investment make economic sense for our business?”

The solution was ultimately adopted across 52 business units including HQ functions and subsidiaries and with 150 active users. Planning time fell from about three weeks to less than one week, and the customer reported approximately $30 million in average annual procurement savings.

So, for me, the purpose of a business case is to **connect customer value with an informed investment decision—and then provide a foundation for measuring whether that value is actually realized.**

    `,
    tips: [
      "Business case development with SInopec case"
      
      
    ]
  },

    {
    id: "collaboration",
    title: "Cross-functional Collaboration",
    group: 2,
    category: "Collaboration",
    script: `I’m very comfortable working in environments where I don't have direct authority over all the people I need to work with and influence.

At Aspen, a complex opportunity could involve the account executive, sales leadership, solution consultants, product manager, professional services, partners, finance, and the customer etc.

My role is to **create alignment** around the value story.

I try to make sure everyone understands the customer's business problem, the value hypothesis, the economic drivers, the evidence behind the numbers, and how the value case supports the commercial strategy.

Despite the value engineering serves the goal of driving revenue growth, however I also think Value Engineering should be independent enough to challenge the deal team when the value case isn't credible.

So my approach is **collaborative**, but not simply supportive. I bring an objective value perspective that helps the broader team make better decisions and gives the customer a more credible business case.

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
    script: `I would say my **strongest capability** is connecting technology, business value, and commercial outcomes.

I'm comfortable going deep enough into a complex technology **solution** to understand what it can **actually change**, but I naturally step back and ask what that **change means economically** for the **customer**.

That allows me to move between different levels of conversation—from **technical teams**, to **operational leaders**, to **finance**, to **C-level executives**.

I also think my commercial background is important. I'm not doing Value Engineering as an academic exercise. I've spent years in real enterprise sales environments where the value case has to **withstand** **customer scrutiny**, **competitive pressure**, **budget constraints**, and ultimately a **purchasing decision**.

So if I had to summarize the strength in one sentence, it would be:

I can turn a complex **technology proposition** into a **credible business case** that executives can understand, challenge, and act on.`,
    tips: [
      "Likely question: “What is your greatest strength?”"
      
    ]
  },
  {
    id: "weakness",
    title: "Weaknesses",
    group: 5,
    category: "Growth & Career",
    script: `The area where I have the most to learn is the **depth of the clinical-development domain itself**.

I have **experience working with pharmaceutical and life-sciences organizations**, but I haven't spent my career **inside clinical development** or clinical-trial operations.

I don't see that as something to minimize. It's a domain I would need to learn deeply.

**What gives me confidence** is that the underlying **Value Engineering discipline** is highly **transferable**. I already know how to engage customers, understand complex processes, identify economic drivers, quantify value, build business cases, and work with technical experts.

So my approach would be to **accelerate the domain learning** by spending significant time with Medidata customers, product experts, clinical specialists, and account teams etc., while bringing the **Value Engineering methodology** I already have.

I would expect to learn the clinical context quickly.`,
    tips: [
      "Likely question: “What's an area you need to develop?”"

    ]
  },
  {
    id: "how_to_start",
    title: "How to Start",
    group: 1,
    category: "Vision & Strategy",
    script: `I would start with **listening and learning**.

**First**, I would **understand** Medidata's Value Engineering methodology, existing value models, tools, customer evidence, sales process, and success metrics.

**Second**, I would spend time with the **sales organization** in the region and understand where the **biggest strategic opportunities** and **value challenges** are—especially where deals are complex, competitive, or require stronger executive business cases.

**Third**, I would talk directly with **customers** and **learn** how they currently think about **clinical-trial economics**, **operational efficiency, risk, timelines, adoption, and investment decisions**.

**Then** I would **identify** a small number of **high-value opportunities** where I could contribute directly and generate early proof points.

In parallel, I would build a value library around recurring use cases, customer benchmarks, assumptions, value drivers, and proven outcomes.

My goal in the first phase would be simple: **learn** the domain quickly, **earn** credibility with the field and customers, and **start creating measurable value** rather than simply producing activity.`,
    tips: [
      "Likely question: “If you joined, what would you do first?”",
      "Learn internal process",
      "Learn from Sales 1) the biggest strategic opportunity and value challenges",
      "Learn from customer how they think about:...",
      "Identify high-value opportunities where I can contribute",
      "BUild value library",
      "Learn domain..., earn credibility, start creating measurable value"
      
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

And because this is an individual contributor role based on what I learned from recruiter Anna, I'm very comfortable with being personally accountable for outcomes. 

I would expect to be measured not simply by the number of analyses I produce, but by the quality of the customer conversations, the opportunities influenced, and ultimately the value realized.

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
    
    1.	I’d love to understand your **perspective on success**. 
    If we were having this conversation six or twelve months after I joined, what would I have accomplished for you to say, “This has been a very successful hire”?

2.	From your perspective, where is the **biggest opportunity** for Value Engineering in APAC today? 
Is it primarily around strengthening value-based selling in strategic opportunities, improving executive engagement, accelerating value realization, or something else?

3.	I'm interested in how you **envision the partnership** between **Value Engineering** and the **field organization**. 
At what point in a strategic opportunity would you ideally like Value Engineering to become involved, and where do you see Value Engineering having the greatest influence on the sales process?

4.	One thing that attracted me to the role is that Medidata seems to position Value Engineering as broader than traditional pre-sales. From your perspective, what really **differentiates** the Value Engineering approach here from a **traditional solution consulting** or value-selling approach?

5.	As Medidata continues to expand its platform and AI capabilities, I'm curious where you see the **biggest Value Engineering challenge** going forward. 
Is it primarily about quantifying the value of individual solutions, or increasingly about demonstrating the broader enterprise value of connecting capabilities across the clinical development lifecycle?

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

What makes me particularly interested in this role is that I believe **my experience has prepared me** to operate at the **intersection** of **customer value**, **executive engagement**, and **commercial execution**.

I've spent years working with complex enterprise customers where technology alone was never enough. The customer needed to understand the business problem, the economic impact, the investment case, and ultimately whether the promised value could actually be realized.

That's the discipline I've developed at Aspen, and it's what I would bring to Medidata.

I also understand that I have a **new domain to master** in clinical development, and I'm approaching that with genuine curiosity and humility.

But the core capability, **helping customers understand, quantify, communicate, and realize the value of technology**, it is something I've been doing for years.

That's why I believe I could make a **meaningful contribution** to the Medidata Value Engineering organization in APAC.`,
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
    id: "master_story_sinopec",
    title: "Sinopec: Value Engineering Case",
    group: 2,
    category: "Case Studies",
    script: `**Sinopec Supply-Chain Optimization**

This is the case with a Chinese enery giant company, Sinopec, this case is going to demonstrate how I personally apply Value Engineering crossing the entire value chain, connect customer value to commercial decisions, engage executives, and focus on realized outcomes, at the same time, operating across functions as a senior individual contributor.

**Situation**
At Sinopec, their crude-oil purchasing planning was highly complex, involving more than 200 variables which determines the purchases plan and invlovled over 200 people. The monthly planning cycle took around three weeks, making it difficult to evaluate purchasing options efficiently and identify the most economically optimal plan, which caused:
1) High crude-oil procurement expenditure, 
2) Limited flexibility in plan adjustments in highly price-fluctuated market, and 
3) The difficulty aligning crude purchases with changing downstream market requirements. 

During the early stage of COVID-19 in 2020, their pain stem from their low efficiency oil procurement planning got even worse.

**Task**
Therefore, after I led team to spend lots of effort to lobbying and promoting, the customer initiated the process to evaluating whether to invest in software, analytics and optimization technology to improve their planning process.

During their evaluation process, my role was to help translate this operational challenge and pains into a compelling, quantified business case, at the same time, aligning customer stakeholders and our internal teams around measurable business outcomes, supporting the commercial opportunity, and connecting the value proposition to adoption and realization.

**Action**
I worked across the Value Engineering lifecycle, starting with discovery to understand their planning process, methodologies, existing tools, workflows, business priorities, and economic challenges etc.

Based on the defined pains, I developed three value drivers: 1) optimizing the crude-oil purchasing basket, 2) improving planning productivity, and 3) capturing more potential benefits from enabling to produce and sell more high-value products in downstream market, and these value drivers were fully aligned with key stakeholders at customer side.

I then quantified the potential impact and structured a five-year ROI/TCO model, including costs contributed from implementation, software license fee, infrastructure, modeling, and model maintenance, alongside annual benefits, cash flows, NPV, and Payback. 

The model indicated, at the base scenario, $28.7 million annual benefits in full-running could be achieved with 95% possibility, and five-year TCO is $24 million, the annual average net cash-in flow is around $23.9M, therefore, the Payback is only 12 and half months, and the model also indicated that 500% ROI, 1,483% IRR and $90 million NPV at 9% discount rate are highly reachable.

I partnered with customer stakeholders to address questions around benefit credibility, investment exposure, and operational feasibility, at the same time, collaborated with consulting and professional service colleagues to connect the quantified value to the commercial business case.

**Result**
The solution was adopted by 52 teams including its HQ functions and subsidiaries, with more than 150 active users. The planning cycle reduced from three weeks to less than one week, planning efficiency increased by 300%, and the customer reported around $30 million in average in annual crude oil purchasing savings have been achieved, that is 110% benefit achievement over the model indication.

`,
    tips: [
      "I can personally perform Value Engineering.",
      "I know how to turn customer value into commercial value",
      "I can engage executives around business outcomes",
      "I can drive value realization, not just promise value",
      "I can independently operate as a senior APAC value engineering individual contributor."
      
    ]
  },

  {
    id: "connect_value",
    title: "Parmaceutical: Predictive Maintenance",
    group: 2,
    category: "Case Studies",
    script: `**Master STAR Story — Pharmaceutical Predictive Maintenance**

**Situation**
At a pharmaceutical manufacturing customer, unplanned equipment shutdowns created a significant operational challenge, with potential consequences for production continuity and overall business performance. We identified an opportunity to apply predictive maintenance to five critical rotating equipment assets.

**Task**
My responsibility was to help the customer see this not simply as a maintenance technology project, but as a business investment. I needed to connect the operational challenge to measurable business outcomes, build a credible value case, and engage customer executives so they could understand why investing in the technology made business sense.

**Action**
I approached the opportunity through a Value Engineering lens. First, I connected equipment reliability to the outcomes that mattered to the business: production continuity, reduced disruption, and improved financial performance.

I then helped translate the technical opportunity into a business case, focusing the discussion on the economic implications of reducing unplanned shutdowns and improving operational reliability—not just on the capabilities of the technology.

Importantly, I engaged customer executives around those business outcomes and the investment rationale. Rather than leading with product features, I focused the conversation on the business problem, the expected impact, and how the proposed solution could contribute to the customer’s performance objectives. This helped make the value proposition relevant at the executive decision-making level and supported their decision to invest in our technology.

**Result**
The customer proceeded with the investment, and the results were substantial based on their report: across the five targeted assets, unplanned shutdowns were reduced by more than 95%, the improvement in production continuity contributed to net margin increased by $1.6M every year, equivalent to 0.8 percentage points increase on top of their net margin ratio before the adoption.

**My Takeaway**
For me, this case demonstrates the full Value Engineering journey—from understanding the business problem and quantifying its impact, through executive engagement and influencing an investment decision, to connecting the technology adoption with measurable business results. 

It also reflects how I can independently drive a value-led opportunity played as a senior individual contributor, working across customer and internal stakeholders to turn technology into business value.

`,
    tips: [
      "Proof Point: I can personally perform Value Engineering."
      
    ]
  },

  {
    id: "note_self",
    title: "Note",
    group: 0,
    category: "Profile",
    script: `Note


    **A. Medidata:**

**General summary**
A global leader in clinical-trial technology
A **unified platform** bringing study, patient and Data experiences **together** crossing clinical development lifecycle

Medidata has driven ground-breaking technological innovation across **38,000+ trials** and **12 million patients**, delivering industry-leading expertise, **analytics-powered insights**, and one of the **largest clinical trial data sets** in the industry.

Today, one million users across 2,300 organizations trust Medidata's seamless, **end-to-end platform** to:
1) **improve** patient experiences, 
2) **accelerate** clinical breakthroughs, and,
3) bring therapies to market **faster**.

**Powering** Smarter Treatments and Healthier People

Medidata offers a cloud-based platform for clients to build their own clinical trials and perform medical research. The platform allows physicians and scientists to collect and share clinical trial data. The company helps biopharmaceutical and medical device companies run clinical trials, and streamlines the process for life science firms designing the trials. Clients include biotechnology companies, government institutions, and contract research organizations.

A leading technology company that provides a **cloud-based platform** to **power clinical trials and medical research** for life science firms, pharmaceutical companies, and academic researchers.

Operator of a comprehensive software and data analytics system platform intended for the process of clinical research, integrating functions for clinical data management, encompassing advanced electronic data capture and standardization tools, as well as core clinical operations features like site monitoring and electronic trial master file management, enabling pharma organizations to accelerate study timelines, improve data quality, and drive smarter global clinical studies.

**Capabilities:**
Clinical Operations
Electronic Data Capture (EDC)
Patient Management
Data Management
Analytical and AI-Enabled trial planning and execution

**Value to customer**
**Improve** data quality
**Streamline** workflows
**Reduce** trial complexity
**Accelerate** development timelines

**Market achievement**
**38,000**-plus trials
**12 million** patients

**B. Full value chain:**
**1**. Business problem → 
**2**. Develop value drivers →
**3**. Economic impact quantification → 
**4**. Financial Modeling → 
**5**. Executive Alignment → 
**6**. Business case → 
**7**. Commercial Decision → 
**8**. adoption → 
**9**. realized value.

**C. My Perspective on Value Engineering**
Value engineering is **connecting** the technologies to the outcomes which **matter most** to the customer

1. Helping customer turn those outcomes into a credible **business case** supporting **investment decision** and, ultimately, **realize** value.

2. I don't see the **Business Case** as a document, I see it as a **Decision Framework**.

3. Value case has to withstand customer scrutiny, competitive pressure, budget constraints, and ultimately a purchasing decision.

4. I can turn a complex **technology proposition** into a **credible business case** that executives can understand, challenge, and act on.

**D. My Value Proposition Statement**

I help customers turn complex business challenges into quantified economic value and confident investment decisions. 

I bring hands-on Value Engineering, executive engagement, and commercial experience, with a strong focus on connecting value creation to value realization. 

At Medidata, I would bring that discipline to help customers articulate the business impact of transforming clinical development, and help translate that value into stronger strategic and commercial outcomes.

**E. Financial Modeling Interview Cheat Sheet**

**Q1. How do you build an ROI model?**
Business problem → baseline → value drivers → quantify impact → investment → cash flows → ROI → sensitivity → validation

**Q2. What's the difference between ROI and TCO?**
ROI measures return efficiency; TCO measures total cost exposure.

**Q3. When would you use NPV?**
When timing of multi-year cash flows materially affects the investment decision.

**Q4. How do you handle uncertain assumptions?**
Make assumptions explicit → validate → sensitivity analysis → conservative/base/upside scenarios.

**Q5. How do you ensure the business case is credible?**
Customer-owned baseline + transparent assumptions + validated value drivers + finance alignment + no double counting + benefits realization tracking.

Financial modeling is the mechanism that translates an operational improvement into an economic decision.

**Sensitivity analysis and scenario modeling:** Conservative, Base, Upside

**F. Financial Models**

**ROI** tells the customer the **efficiency of the investment**. 

**TCO** shows the **total cost exposure**. 

**Payback** tells them **how quickly** they recover the investment.

If the customer is concerned about **investment efficiency**, I use **ROI**. If they're **comparing** alternative solutions or architectures, **TCO** becomes important. If cash recovery is the concern, I emphasize payback. For a larger strategic investment, I would also bring in NPV and cash-flow analysis.

**NPV**, Today's value of future cash flows, future benefits and costs are discounted back to today's value using a discount rate.

**ROI** treats benefits and costs largely as aggregate amounts, while NPV incorporates the timing of those cash flows. For a multi-year transformation, I prefer NPV when the timing of benefits and investment matters, because it gives the customer a better picture of the economic value in today's dollars.

**Payback**: Time to recover investment

**Discount Rate**: Rate used to convert future cash flows into today's value, Ideally from the customer's finance methodology, for example, their WACC(Weighted Average Capital Coat). I would not arbitrarily choose one simply to make the business case attractive.

**G. Business Problem Discovery Framework**

**O-B-G-C-I-V**
Outcome → Baseline → Gap → Cause → Impact → Value

**Outcome** (Business Outcome): What business outcome are customer trying to achieve?
- Revenue growth
- Cost reduction
- Productivity
- Speed / cycle time
- Quality
- Risk reduction
- Capacity
- Compliance
- Customer/patient outcomes
- Capital efficiency

**Baseline**: What is happening today?
4 Dimensions: Volume × Time × Cost × Quality

**Gap**: Where are the customer falling short of the target?
Current state vs. desired state — what is the gap?

**Cause**: Why does the gap exist?
Framework: Symptom → Cause → Business consequence

**Impact**: What does the problem mean operationally and financially?
What does this problem cost the business? 
Time × Volume × Unit economic value

**Value**: What would solving it be worth?
Identify the business owner and decision relevance, Who actually cares about solving this problem?
**Map**: Problem owner → Economic owner → Decision maker → Influencers

**Executive principle**
I start by understanding what business outcome matters, establish the current-state baseline, identify the gap and its root causes, and then quantify the economic consequence. 
Only then do I connect the problem to a potential solution and value case.

**Sinopec Case**

Annual Crude Oil **Purchasing Capacit**y: **1.9 billion barrels**

Annual Crude Oil **Purchasing Expenditure**: **$180 billion** @ Brent Price on Sept 21

Sinopec annual revenue 2025: $410 billion (Chevron, $189 billion 2025)

Sinopec net marging 2025: $4.7 billion, 1.15% of Annual Revenue 2025

**Savings** from Planning Optimization ($30M per year) to **Net Margin**: **0.65%**

**Business Case**:

**1. What is a business case?**
A decision-making framework for determining whether an investment makes economic and strategic sense.

**2. What purpose does it serve?**
It connects the customer's problem and expected business outcomes to the investment decision.

**3. What does it include?**
Business Problems(Expected Outcomes→Baseline→Gap→Cause→Impact→Value) → value drivers → benefits → investment/TCO → financial returns → assumptions/risks → realization plan.

**4. What do you personally do with it?**
You use the business case to engage executives, align stakeholders, influence the investment decision, and establish the foundation for value realization.

`,
    tips: [
      "Medidata knowledge",
      "Ful value chain"

    ]
  },

    {
    id: "value_selling",
    title: "Value-Selling",
    group: 0,
    category: "Profile",
    script: `Note

**A. Value-based Selling vs. Feature-based selling:**

1. Selling features focuses on what your product does (specifications, capabilities, technical characteristics). 

2. Selling value focuses on what business problems your product solves and what measurable outcomes it delivers.

3. Value selling connects technical capabilities directly to business impact, making it easier for buyers to justify purchasing decisions. 

4. Value selling is not about hiding technical details—it is about leading with business impact and supporting with technical proof.


**B. What Customer Buys:**

1. Engineers buy from engineers they trust, but they buy solutions to problems, not impressive specifications.

2. Prospects are not buying engineering solutions. They are buying business outcomes. When you lead with features and specifications, you are essentially asking your prospects to do the mental work of translating those capabilities into business value.

**C. Three levels of Selling: Features vs. Benefits vs. Value**

**1. Features:**

**Definition:** What your product does or has
**Example:** Machine learning algorithms that analyze vibration patterns and predict failures 30 days in advance
**Impact on Buyer:** Requires mental translation to value

**2. Benefits:**

**Definition:** What features mean for the user
**Example:** Maintenance teams receive early warnings, allowing scheduled repairs during planned downtime
**Impact on Buyer:** Understands user advantage

**3. Value:**

**Definition:** Business impact that benefits deliver
**Example:** Reduces unplanned downtime by 60%, eliminates $50,000 emergency repair costs, increases OEE by 15% = $2.3M additional annual capacity
**Impact on Buyer:** Drives purchasing decision

When you present value first, you create a completely different conversation dynamic. Instead of asking prospects to evaluate your technical capabilities, you are demonstrating understanding of their business challenges and presenting quantified solutions.

**D. Three-Level Selling Example: **

Consider a high-precision temperature sensor in a pharmaceutical manufacturing application. Feature: The technical capability is measurement accuracy within ±0.01°C. Benefit: The immediate benefit is precise temperature control during critical manufacturing processes. But the business impact extends much further: Value/Business Impact: consistent temperature control ensures batch quality, reduces product waste, maintains regulatory compliance, and prevents costly production delays.

**E. Power of Quantified Value:**

1. Quantified value **beats** technical superiority every time in **competitive evaluations**.

2. Present quantified value in formats that different stakeholders can easily understand and use in their **decision-making processes**. executive buyers prefer summary metrics and ROI calculations.

**F. How to Sell Value:**

Start by understanding the key performance indicators (KPIs) that matter most to your target customers. These vary significantly across industries and applications, but common categories include operational efficiency, cost reduction, revenue enhancement, risk mitigation, and competitive advantage.

**G. Some of Value Drivers:**

1. For **operational efficiency**, focus on metrics like throughput improvement, cycle time reduction, yield increases, or resource utilization optimization.

2. **Cost reduction** opportunities often provide the most compelling value propositions because they directly impact profitability. 

**H. How to Start Value-focused Discovery:**

1. Value-focused discovery starts with **understanding the business problem** that technical requirements are meant to solve. **Question example:** “What happens when measurements aren’t accurate enough?", “What’s preventing you from achieving the throughput levels your business requires?”

2. Start with operational challenges: what problems are they trying to solve, what inefficiencies are they experiencing, what limitations are constraining their performance.

** I. Technical Credibility vs. Presenting Value:**

Technical credibility does not come from demonstrating comprehensive product knowledge—it comes from demonstrating deep understanding of customer challenges and the ability to solve complex problems. When you present value effectively, you are actually demonstrating higher-level technical competence. 

**J. How to present with value-selling approach:**

1. Structuring your presentations to **lead with value** while **supporting with technical proof**. Start by establishing the business problem and quantifying its impact. Present your solution in terms of the outcomes it delivers. Then provide the technical details that explain how those outcomes are achieved.

2. When you mention a technical specification, immediately **connect it to the business benefit it enables**. "Our sensor provides 0.1% accuracy, which eliminates the quality control failures that have been costing you $200,000 annually in rework and warranty claims."

**K. From Technical Expert to Value Champion: **

1. The journey requires developing **new skills and perspectives** that complement your existing technical knowledge. You need to understand business operations, financial metrics, competitive dynamics, and decision-making processes. You need to learn how to quantify value, present business cases, and communicate with stakeholders who don’t share your technical background.

2. Need to shift your **mental model** from product-focused to problem-focused thinking. Instead of starting with what your solution can do, **start with what problems customers need to solve**. Instead of proving technical superiority, demonstrate business impact.

3. Your technical expertise becomes a sales superpower when you use it to solve business problems, not showcase product capabilities.

`,
    tips: [
      "Value-Selling vs. Fearture-Selling",
      "How to..."

    ]
  }

];
