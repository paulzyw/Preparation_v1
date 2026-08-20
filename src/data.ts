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
  2: "Case Studies",
  3: "Collaboration",
  4: "Industry Vision",
  5: "Growth & Career",
  6: "Questions"
};

export const CHEATSHEET_DATA: CheatsheetItem[] = [
  {
    id: "intro",
    title: "Self-Introduction",
    group: 0,
    category: "Profile",
    script: `First and foremost, I would like to thank you for your interest in my profile and taking the time for having me for this interview session. Let me briefly introduce my background and why I am particularly interested in this opportunity at Sandvik.

I am an industrial business transformation and growth executive with more than 15 years of experience leading businesses across mining, infrastructure, energy, and other asset-intensive industries, with a strong focus on P&L performance, business strategy, operating model development, international expansion, and lifecycle customer value.

Currently, I am playing the role of Sales Director China at Aspen Technology, where I lead the commercial strategy and P&L execution for the China business. Over the past several years, I have delivered 280% revenue growth, increased annual revenue from US$5.5 million to US$21.3 million, and achieved 230% of quota. Importantly for this opportunity, I have worked directly with major mining companies such as Shenhua Group and Zijin Mining etc., helping them transform maintenance from reactive to predictive models, reducing unplanned equipment downtime by 25% and improving asset availability by 15%.

Before Aspen Technology, I played role of Vice President of the Digital Business Unit APAC at Hamon, where I had full P&L responsibility. I grew the business by 500%, expanded into nine international markets, increased market share by 52%, improved gross margin by 16 percentage points, and successfully transformed China-based industrial solutions into competitive international offerings.

Earlier at Alstom, I scaled the annual revenue from US$10 million to US$150 million in 7 years across six Asian markets through successfully transforming China BU into a competitive international midmarket solution provider.

What particularly attracts me to this role is the transformation mandate. I believe my combination of P&L leadership, internationalization, operating-model transformation, mining customer understanding, and lifecycle business experience can bring a complementary perspective to help LGMRT build a scalable and differentiated global midmarket business.`,
    tips: [
      "Thank you for...",
      "Industrial business transformation and growth executive",
      "Aspen Technology, delivered..., mining companies...transform maintenance model",
      "Hamon, delivered, expanded international markets, transformed China-manufactured solution"
    ]
  },
  {
    id: "positioning",
    title: "Interview Positioning",
    group: 0,
    category: "Profile",
    script: `I am an industrial business transformation leader who has repeatedly grown and internationalized businesses, built scalable operating models, and created lifecycle value for asset-intensive customers. While I am not a traditional mining-equipment OEM executive, I bring direct mining-customer experience, industrial equipment globalization experience, full P&L leadership, and a proven record of transforming China-based businesses into international growth platforms.`,
    tips: [
      "Transformation leader",
      "Grow and internationalize businesses",
      "Mining-customer experience",
      "Industrial equipment globalization",
      "P&L",
      "Transform China-based business into international growth platform"
    ]
  },
  {
    id: "no_mining_exp",
    title: "No Mining-Equip. Expce.",
    group: 1,
    category: "Role & Fit",
    script: `I agree that my background is different from the traditional mining-equipment candidate, and I see that as a distinction rather than something I would try to hide.

I have spent my career on the business side of asset-intensive industries, including working directly with major mining companies on equipment reliability, maintenance, productivity and lifecycle performance.

At the same time, I have directly led an industrial business with full P&L responsibility and successfully transformed China-manufactured solutions into internationally competitive offerings across nine markets.

So I bring two perspectives that I believe are particularly relevant to LGMRT:
1) I understand the customer and lifecycle economics of asset-intensive industries,
2) and I have already led a transformation very similar to the internationalization challenge Sandvik is now asking LGMRT to undertake.

I would complement that with the deep mining-equipment expertise already present within Sandvik and LGMRT.`,
    tips: [
      "Distinction, not to hide.",
      "Work directly with major mining companies",
      "P&L responsibility",
      "Success in transforming China-manufactured solutions into internationally competitive offerings",
      "Relevant in 1) understand asset-intensive industries and 2) led similar transformation",
      "I can combine my transformation/business expertise with the technical mining expertise already inside the organization."
    ]
  },
  {
    id: "career",
    title: "Career Brief",
    group: 0,
    category: "Profile",
    script: `Certainly. I am an industrial business transformation and growth executive with more than 15 years of experience across mining, infrastructure, energy, and other asset-intensive industries, with a strong focus on P&L leadership, business growth, operating-model development, international expansion, and lifecycle customer value.

Currently, I am Sales Director China at Aspen Technology, where I lead commercial strategy and P&L execution. I have delivered 280% revenue growth, increased annual revenue from US$5.5 million to US$21.3 million, and achieved 230% of quota. Importantly, I have worked directly with major mining companies including Shenhua Group and Zijin Mining, helping them transform maintenance from reactive to predictive models, reducing unplanned downtime by 25% and improving asset availability by 15%.

Before Aspen, I was Vice President of the Digital Business Unit APAC at Hamon with full P&L responsibility. I grew the business by 500%, expanded into nine international markets, increased market share by 52%, improved gross margin by 16 percentage points, and successfully transformed China-based industrial solutions into competitive international offerings.

What attracted me to LGMRT is that this role brings together exactly those experiences: transforming an industrial business, building an international growth platform, developing the operating model, and creating stronger lifecycle value.`,
    tips: [
      "Transformation and Growth executive",
      "Mining, infrastructure, energy, other asset-intensive industries",
      "P&L, business growth, operating-model development, international expansion, lifecycle customer value"
    ]
  },
  {
    id: "interest",
    title: "Interest in LGMRT Role",
    group: 1,
    category: "Role & Fit",
    script: `What attracted me most is actually the transformation mandate rather than simply the seniority of the position.

From my understanding, Sandvik is looking to take LGMRT from a strong Chinese midmarket OEM and develop it into a globally competitive second-tier offering. That requires much more than simply selling more equipment. It requires a differentiated market position, the right international go-to-market model, scalable operations, strong dealer and partner ecosystems, and a lifecycle business that combines equipment with aftermarket value.

Those are areas where I have spent a significant part of my career. At Hamon, I had full P&L responsibility and transformed China-manufactured industrial solutions into international offerings, expanding into nine markets while growing revenue by 500% and improving gross margin by 16 percentage points.

At Aspen, I have developed strong relationships with mining customers and helped them improve equipment reliability and maintenance performance through predictive technologies.

So I see a very strong connection between what Sandvik wants to accomplish with LGMRT and the transformation work I have already done.

That is what makes the opportunity particularly compelling to me.`,
    tips: [
      "Transformation mandate",
      "Strong Chinese midmarket OEM -> globally competitive second-tier offering",
      "Market proposition, international go-to-market model, scalable operations, strong dealer and partner ecosystem, lifecycle business",
      "Hamon experience (P&L, Transformation, improve margin)",
      "Aspen, mining customers, transform maintenance model, reliability, maintenance performance",
      "Strong connection, compelling to me"
    ]
  },
  {
    id: "fit",
    title: "Fit & Relevance",
    group: 1,
    category: "Role & Fit",
    script: `I would highlight four areas.

First, I have genuine full-P&L and business leadership experience. At Hamon, I owned the APAC business P&L and delivered 500% revenue growth while improving gross margin by 16 percentage points.

Second, I have direct experience transforming a China-based industrial offering into an international business. I expanded the business into nine countries and increased market share by 52%, which I believe is particularly relevant to LGMRT's internationalization mandate.

Third, I understand mining and infrastructure customers. At Aspen, I have worked with major mining companies including Shenhua Group and Zijin Mining on equipment reliability, predictive maintenance, and operational productivity.

And fourth, I have experience building operating models and leading across cultures and global matrix organizations.

So although I don't come from the conventional mining-equipment OEM career path, I bring a combination of P&L leadership, industrial transformation, internationalization, mining-customer understanding, and lifecycle value creation that I believe is highly relevant to the challenge Sandvik has defined for LGMRT.`,
    tips: [
      "P&L and business leadership experience (Hamon-P&L-500%-Gross margin)",
      "Transformation (China-based to international business) - Expand international market",
      "Understand mining customer (Aspen, working with mining...)",
      "Build operating model, leading across culture",
      "Not come from OEM, but bring P&L, transformation, internationalization, mining customer understanding"
    ]
  },
  {
    id: "translate",
    title: "Translating Experience",
    group: 1,
    category: "Role & Fit",
    script: `I agree that my background is different from the traditional mining-equipment candidate, and I think it's important to be transparent about that.

At the same time, I have spent much of my career working with asset-intensive industries and directly with mining customers. At Aspen, for example, I have worked with Shenhua Group and Zijin Mining to transform maintenance operations from reactive to predictive approaches, reducing unplanned equipment downtime by 25% and improving asset availability by 15%.

More importantly, I have directly led an industrial business with full P&L responsibility. At Hamon, I transformed China-manufactured industrial solutions into internationally competitive offerings, expanded into nine markets, increased market share by 52%, and improved gross margin by 16 percentage points.

So I don't see myself as bringing the same profile as a career mining-equipment executive. Instead, I bring complementary capabilities in business transformation, internationalization, operating models, customer lifecycle value, and commercial strategy. I would combine those capabilities with the deep mining-equipment expertise already existing within Sandvik and LGMRT.`,
    tips: [
      "Asset-intensive industries, mining customers",
      "Aspen, Shenhua, Zijin",
      "Full P&L, lead business, transformed China-manufactured industrial solution to internationally competitive offering",
      "Not same as mining-equipment executive",
      "Bring complementary capabilities in business transformation, internationalization, operating models, lifecycle value"
    ]
  },
  {
    id: "p_l",
    title: "P&L Experience",
    group: 2,
    category: "Case Studies",
    script: `My strongest direct P&L experience was at Hamon, where I was Vice President of the APAC Digital Business Unit with full responsibility for business performance.

I was responsible not only for revenue growth but also for profitability, market development, commercial strategy, resource allocation, pricing, and operating performance. During that period, I grew annual revenue by 500%, expanded the business into nine international markets, increased market share by 52%, and improved gross margin by 16 percentage points.

What was important to me was that growth and profitability had to develop together. We therefore worked on pricing strategy, cost optimization, delivery models, resource allocation, and commercial processes rather than pursuing revenue growth at any cost.

My current Aspen role has further strengthened my commercial and business-performance discipline. I delivered 280% revenue growth and achieved more than 230% of annual quota.

So I view P&L leadership as balancing growth, margin, customers, people, and operating capabilities—not simply maximizing sales.`,
    tips: [
      "P&L at Hamon, full responsibility for business performance",
      "Revenue growth, profitability, market development, commercial strategy, resource allocation, pricing, operating performance",
      "Grew revenue by 500%, expanded into 9 international markets, increased market share by 52%, improved gross margin by 16%",
      "Aspen commercial discipline: 280% growth, 230% quota",
      "Balancing growth, margin, customers, people, and operating capabilities"
    ]
  },
  {
    id: "transformation",
    title: "Transformation Case",
    group: 2,
    category: "Case Studies",
    script: `A strong example would be my experience at Hamon.

When I took responsibility for the APAC business, one of the priorities was to move from a primarily regional business model toward a more scalable international growth platform. I worked across commercial strategy, market positioning, operating processes, pricing, cost structure, customer engagement, and international market development.

A particularly important part was transforming China-manufactured industrial solutions into offerings that could compete effectively in international markets. We strengthened the value proposition, differentiation, quality positioning, commercial model, and customer engagement approach.

As a result, we expanded into nine international markets, increased market share by 52%, grew revenue by 500%, and improved gross margin by 16 percentage points.

What I learned from that experience is that business transformation is not one initiative. It requires alignment across strategy, organization, processes, commercial execution, customer value, and economics. That's why I see strong parallels with the transformation challenge at LGMRT.`,
    tips: [
      "Task to move regional business model to scalable international growth platform",
      "Worked across: commercial strategy, market positioning, operating processes, pricing, cost structure, customer engagement, and international market development",
      "Internationally competitive (strengthened: value proposition, differentiation, quality positioning, commercial model, and customer engagement approach)",
      "Learned: alignment across strategy, organization, processes, commercial execution, text/value, and economics"
    ]
  },
  {
    id: "challenge",
    title: "Transformation Challenge",
    group: 2,
    category: "Case Studies",
    script: `One of the biggest challenges I have faced in transformation was resistance to established ways of working. I learned that transformation starts with a compelling vision and mission that gives people a common purpose and shows how the change benefits the organization, the team, and individuals.

I then aligned key stakeholders around clear outcomes, ownership, and KPIs, while involving them early in execution.

At Hamon, this helped turn resistance into commitment and ultimately supported our expansion into nine markets, 500% growth, and a 16-point gross-margin improvement.`,
    tips: [
      "Resistance to established ways of working",
      "Compelling vision and mission to give people a common purpose",
      "Aligned key stakeholders, outcomes, ownership, KPIs",
      "Turn resistance into commitment and support"
    ]
  },
  {
    id: "leadership",
    title: "Leadership Style",
    group: 3,
    category: "Collaboration",
    script: `[Vision → Alignment → Empowerment → Accountability → Execution]

I would describe my leadership style as strategic, collaborative, outcome-oriented, and transparent.

1) I believe the first responsibility of a leader is to establish clarity—where we are going, why it matters, what success looks like, and how different functions contribute. Once that is clear, I focus strongly on empowerment and accountability rather than trying to control every decision.

2) I have spent much of my career working across China, APAC, and Western multinational organizations, so I am very comfortable operating in cross-cultural and matrix environments. At Hamon, for example, I had to align sales, engineering, operations, and international partners across multiple countries while driving a common growth agenda.

3) I also believe transformation requires stakeholder alignment. People will not support a transformation simply because the strategy is logically correct. They need to understand the reason for change and see how they can contribute to it.

4) That's the leadership approach I would bring to LGMRT: clear direction, strong stakeholder alignment, disciplined execution, and empowerment of the organization.`,
    tips: [
      "Strategic, collaborative, outcome-oriented, execution, and transparent",
      "Establish clarity",
      "Cross-cultural and matrix environments",
      "Transformation require stakeholder alignment",
      "Bring to LGMRT: clear direction, strong stakeholder alignment, disciplined execution, and empowerment"
    ]
  },
  {
    id: "china_to_global",
    title: "Expand China to Global",
    group: 4,
    category: "Industry Vision",
    script: `This is actually one of the areas where I believe my experience is particularly relevant.

At Hamon, I was responsible for expanding a China-based industrial offering internationally.
We developed market-entry strategies, localized our commercial approach, established channel and partner relationships, and adapted our value proposition to different customer and market requirements.

We successfully expanded into nine international markets and increased market share by 52%. At the same time, we improved gross margin by 16 percentage points, so internationalization was not simply about geographic expansion—it had to create a sustainable and profitable business model.

Earlier at Alstom, I also expanded business across six Asian markets, growing annual revenue from US$10 million to US$150 million.

These experiences taught me that successful internationalization requires deciding where to compete, which customer segments to prioritize, how to differentiate from premium competitors, what channel model to use, and how to build the organization behind the strategy. I believe those questions are highly relevant to LGMRT.`,
    tips: [
      "Market-entry strategies",
      "Localized commercial approach",
      "Established channel and partner relationships",
      "Adapted value proposition to different customer and market",
      "Achievement (9 international markets, 52% increase market share, 16 point increase of margin)",
      "Learned: deciding where to compete, which customer segments to prioritize, how to differentiate from premium competitors, what channel model to use, and how to build the organization"
    ]
  },
  {
    id: "mining_exp",
    title: "Mining Experience",
    group: 4,
    category: "Industry Vision",
    script: `My experience spans both the mining and infrastructure sides of asset-intensive industries.

In mining, through Aspen Technology, I have worked with leading organizations including Shenhua Group and Zijin Mining. My work has focused on helping them improve equipment reliability, maintenance effectiveness, asset availability, and operational productivity. In one set of initiatives, we helped reduce unplanned equipment downtime by 25% and improve asset availability by 15%.

On the infrastructure side, earlier in my career at Alstom, I worked extensively with infrastructure and EPC organizations involved in major power-generation projects, including hydroelectric and coal-fired power plants. I also developed business across six Asian markets.

So my experience is not limited to selling into these industries. I have spent significant time understanding how asset-intensive customers think about reliability, productivity, lifecycle economics, project execution, and long-term customer value.

That customer perspective is something I believe can complement the equipment-business experience required for LGMRT.`,
    tips: [
      "Both mining and infrastructure sides of asset-intensive industries",
      "Aspen, mining, Shenhua, Zijin, focused on helping them improve reliability and availability",
      "Infrastructure side, Alstom, infrastructure and EPC organizations, power-generation projects",
      "Customer perspective: understanding reliability, productivity, lifecycle economics, project execution"
    ]
  },
  {
    id: "sandvik_lgmrt",
    title: "About Sandvik & LGMRT",
    group: 4,
    category: "Industry Vision",
    script: `I understand Sandvik as a global industrial technology group with strong positions in mining and infrastructure, with a particularly strong portfolio across drilling, underground loading and hauling, rock tools, aftermarket, and increasingly automation, digitalization and electrification. In mining, Sandvik has a strong premium position, competing mainly with players such as Epiroc, Caterpillar and Komatsu Mining.

Regarding LGMRT, my understanding is that it is a joint venture between Sandvik and Lingong Group, established in 2016 to address the midmarket. It combines Sandvik's mining and rock technology with Lingong's midmarket manufacturing and operating capabilities, covering surface drilling, underground drilling, and underground loading and hauling. It was originally focused on China, with the ambition to expand into selected international markets.

What particularly interests me is the next stage of that journey: moving LGMRT from a strong Chinese midmarket business into a scalable international second-tier offering, with differentiated positioning, dealer channels, and stronger equipment-plus-aftermarket lifecycle economics. That's the transformation challenge I find particularly compelling, because it closely matches my experience in P&L leadership, internationalization, industrial transformation, and lifecycle business development.`,
    tips: [
      "Global industrial technology group with strong positions",
      "Drilling, underground loading and hauling, rock tools, aftermarket",
      "In mining, strong premium position (Epiroc, Caterpillar and Komatsu Mining)",
      "LGMRT, joint venture in 2016, to address midmarket",
      "Next stage: Chinese midmarket -> globally competitive second-tier offering"
    ]
  },
  {
    id: "target_op_model",
    title: "Target Operating Model",
    group: 4,
    category: "Industry Vision",
    script: `# Target Operating Model
## Script
1. What would your target operating model for LGMRT look like?
2. Principle:
China-enabled, globally connected, locally customer-centric
China scale & cost advantage 
•	Sandvik technology, governance & global capabilities 
•	local market/customer proximity = scalable global midmarket operating model
1) I would build LGMRT around a China-enabled but globally connected operating model. 
2) I would centralize activities where scale and cost competitiveness matter—product platforms, engineering, manufacturing, procurement and core processes—while empowering local markets in customer relationships, dealers, service, parts and market development. 
3) I would also integrate equipment and aftermarket into one lifecycle business model, rather than treating aftermarket as an add-on. 
4) Finally, I would establish very clear decision rights, P&L accountability and performance KPIs across the global matrix. 

The principle of my intention of building operating model is simple: centralize what creates scale, localize what creates customer value, and create one operating system than can be replicated internationally.`,
    tips: [
      "China-enabled but globally connected operating model",
      "centralize activities where scale and cost competitiveness matter",
      "empowering local markets in customer value",
      "integrate equipment and aftermarket into one lifecycle business model",
      "establish very clear decision rights"
    ]
  },
  {
    id: "op_system",
    title: "Operating System",
    group: 4,
    category: "Industry Vision",
    script: `# Operating System
1. Operating model should have 7 dimensions (Dimension - Key Question)
1). Strategy & Portfolio - Where do we play and where do we win?
2). Product & Engineering - What should be globalized vs localized?
3). Manufacturing & Supply Chain - How do we leverage China scale while serving global markets?
4). Go-to-Market - What should LGMRT own vs dealers/partners?
5). Aftermarket & Lifecycle - How do we monetize the installed base?
6). Organization & Governance - Who makes which decisions?
7). Performance Management - How do we manage P&L and continuous improvement?

2. Manage dealers through a structured Dealer Performance Management System
1). KPIs could include:
Revenue
Gross margin
New equipment sales
Parts sales
Service revenue
Installed-base penetration
Customer retention
Service response time
Customer satisfaction

3. Aftermarket operating model
1) The lifecycle:
Equipment
→ Commissioning
→ Parts
→ Maintenance
→ Service
→ Reliability
→ Digital monitoring
→ Lifecycle optimization
2) The organization should therefore have dedicated ownership for:
Parts
Service
Technical support
Warranty
Customer success
Lifecycle solutions

4. P&L operating model
1) The business should manage:
Revenue
Equipment + Parts + Service + Lifecycle Solutions
↓
Gross Margin
Pricing + Product Cost + Procurement + Manufacturing
↓
Operating Expenses
Sales + Engineering + Service + Administration
↓
EBIT
↓
Cash
Working Capital + Inventory + Receivables + Capex

5. Decision-rights model (RACI Matrix)
1) Parties
Global-LGMART-Regional (Dealer)
2) Decisions including
Product platform, Manufacturing, Global Pricing framework, Local pricing, Market Entry, Dealer selection, Customer relationship, Parts strategy, Service execution, Technology partnerships

6. Continuous improvement operating system+
1) Create a management rhythm around:
a. Monthly
P&L + commercial + operational review
b. Quarterly
Strategy + market + competitor + portfolio review
c. Semi-annually
Operating-model and capability review
d. Annually
Strategy refresh + resource allocation
e. Establish a transformation dashboard covering:
Growth | Margin | Market | Customer | Aftermarket | Operations | People

7. Operating model transformation journey
1) Phase 1 — Clarify
0–6 months - Define:
•	Roles
•	Decision rights
•	P&L ownership
•	Global/local responsibilities
•	Dealer model
•	Aftermarket ownership
•	KPIs
2) Phase 2 — Integrate
6–18 months - Integrate:
•	Sales + aftermarket
•	Product + market feedback
•	Dealers + service
•	China operations + international markets
•	Global + regional teams
3) Phase 3 — Scale
18–36 months - Create:
A repeatable global midmarket operating model`,
    tips: [
      "7 dimensions of operating model",
      "Dealer Performance Management System",
      "Aftermarket operating model & lifecycle",
      "P&L operating model (Revenue to Cash)",
      "Decision-rights model (RACI Matrix)",
      "Continuous improvement management rhythm",
      "3-Phase Operating model transformation journey"
    ]
  },
  {
    id: "trans_brief",
    title: "Transformation Brief",
    group: 4,
    category: "Industry Vision",
    script: `# Transformation Brief

1. What will your transformation strategy for LGMRT be?

I would transform LGMRT from a China-centered equipment business into a globally scalable midmarket platform by combining competitive equipment economics with differentiated reliability, a strong dealer-led go-to-market model, a high-value aftermarket and lifecycle business, and a China-efficient but globally localized operating model.

2. Others
Transform LGMRT from a China-centric value manufacturer into the world's most trusted mid-market drilling solutions company, delivering Sandvik-level reliability at a differentiated cost structure while preserving Sandvik's premium positioning.

Build LGMRT into a globally scalable mid-market business with sustainable profitability while complementing, rather than competing with, Sandvik's premium portfolio.

3. Transform it into A trusted global value brand under the Sandvik family.`,
    tips: [
      "transform LGMRT from a China-centered equipment business into a globally scalable midmarket platform",
      "world's most trusted mid-market drilling solutions company",
      "trusted global value brand under the Sandvik family"
    ]
  },
  {
    id: "trans_strategy",
    title: "LGMRT Transformation Strategy",
    group: 4,
    category: "Industry Vision",
    script: `# LGMRT Transformation Strategy

1. The strategic thesis
How can LGMRT become the preferred global midmarket mining-equipment partner by delivering the optimal combination of reliable equipment, competitive economics, localized service, and lifecycle value—without trying to replicate either low-cost Chinese OEMs or Sandvik's premium offering?

2. Strategic transformation:
From Chinese Midmarket OEM → Global Midmarket Growth Platform

3.Start with a strategic diagnostic

1) Dimension - Questions
	P&L - Where is revenue coming from? What drives gross margin? Where is capital tied up?
	Portfolio - Which equipment categories/products are truly competitive?
	Customers - Which segments value LGMRT's proposition most strongly?
	Markets - Where can LGMRT win internationally?
	Competition - Where does LGMRT beat premium OEMs and Chinese competitors?
	GTM - Direct sales, dealers, distributors, strategic partners?
	Aftermarket - Parts penetration, service revenue, installed base, customer retention?

2) Strategic Positioning: Own the “Value + Reliability” space

a. Proposition:
Industrial-grade reliability at midmarket economics

b. Add Potentially,
	Reliable equipment
	Competitive total cost of ownership
	Fast parts/service
	Application-specific solutions
	Digital/technology-enabled productivity
	Localized customer support

2. Portfolio Strategy
“Win Where We Can Win” portfolio strategy

3. International Market Expansion

1) Evaluate countries based on:
Market size
× Mining investment
× Midmarket customer base
× Competitive intensity
× Regulatory accessibility
× Dealer availability
× Aftermarket potential
× LGMRT product fit
× Sandvik portfolio synergy

2) Classify markets:
Tier 1 — Scale Markets / Invest aggressively.
Tier 2 — Build Markets / Develop dealer/customer base.
Tier 3 — Opportunistic Markets / Serve selectively through partners.
Tier 4 — Do Not Prioritize / Avoid capital and organizational distraction.

4. Build a differentiated international GTM model
Build a Dealer-Centric Midmarket GTM Engine.

1) The model include:
LGMRT
→ Regional hub
→ Authorized dealer
→ Local service capability
→ Parts inventory
→ Customer

2) Dealer should become:
Customer acquisition + service + parts + field support + market intelligence + installed-base management.

3) Dealer selection should therefore be based on more than sales reach.
To score dealers on:
•	Mining customer access
•	Technical capability
•	Service infrastructure
•	Parts capability
•	Financial strength
•	Geographic coverage
•	Digital capability
•	Willingness to invest

5. Build China-to-global operating model
This is another critical part of the transformation.
I would explicitly define:

1) What should remain centralized?
China
•	Product development
•	Core engineering
•	Procurement
•	Manufacturing
•	Supply chain
•	Cost engineering
•	Product platforms

2) What should become localized?
International markets
•	Sales
•	Dealer management
•	Customer support
•	Parts
•	Field service
•	Regulatory compliance
•	Application engineering
•	Market intelligence

3) The objective:
China efficiency + global customer proximity.

6. Establish a transformation KPI system

1) Growth
•	Revenue
•	New customers
•	Market share
•	International revenue

2) Profitability
•	Gross margin
•	EBIT
•	Price realization
•	Cost-to-serve

3) Market Development
•	New countries
•	Dealer coverage
•	Dealer productivity
•	Customer acquisition

4) Lifecycle
•	Aftermarket revenue
•	Parts penetration
•	Service revenue
•	Installed-base retention

5) Operational Excellence
•	Lead time
•	Inventory turns
•	Warranty cost
•	On-time delivery
•	Product quality
•	Customer uptime`,
    tips: [
      "preferred global midmarket mining-equipment partner",
      "From Chinese Midmarket OEM",
      "Start with a strategic diagnostic",
      "Own the “Value + Reliability” space",
      "“Win Where We Can Win” portfolio strategy",
      "International Market Expansion",
      "Build a Dealer-Centric Midmarket GTM Engine",
      "Build China-to-global operating model",
      "Establish a transformation KPI system"
    ]
  },
  {
    id: "how_to_start",
    title: "How to Start",
    group: 1,
    category: "Role & Fit",
    script: `I would start with a structured diagnostic rather than immediately imposing a strategy.

First, I would understand the LGMRT P&L, portfolio economics, customer segments, competitive position, dealer network, aftermarket performance, supply chain, and organizational capabilities.

Second, I would identify where LGMRT can win internationally without directly conflicting with Sandvik’s premium portfolio, and prioritize the most attractive markets and customer segments.

Third, I would align the leadership team around a focused transformation roadmap covering portfolio, go-to-market, channels, aftermarket, operating model, and organization, with clear financial and operational KPIs.

I would then move quickly into a few prioritized initiatives to demonstrate measurable results and build momentum.`,
    tips: [
      "Diagnostic",
      "Understand LGMRT P&L, portfolio, dealers, aftermarket",
      "Identify and prioritize where to win without conflicting with Sandvik premium",
      "Align leadership team around focused transformation roadmap",
      "Demonstrate measurable results and build momentum"
    ]
  },
  {
    id: "expectations",
    title: "Role Expectations",
    group: 5,
    category: "Growth & Career",
    script: `From a career perspective, my primary consideration is the scope and strategic impact of the role. I am particularly interested in opportunities where I can take broader business responsibility, including P&L, strategy, organization, international growth, and transformation, which is why this position is very attractive to me.

In terms of compensation, I would expect a package that is appropriate for the scope, seniority, and P&L responsibility of the position, but I am flexible and would prefer to understand Sandvik's overall structure and expectations before discussing a specific number.

Regarding timing, I would of course need to manage an appropriate transition from my current role, but I am genuinely interested in this opportunity and would work constructively with Sandvik around the expected timeline.

Most importantly, I am looking for the right long-term business leadership opportunity, and the LGMRT transformation mandate is particularly compelling to me.`,
    tips: [
      "Interested in broader business responsibility",
      "Compensation: appropriate for the scope, seniority, P&L responsibility",
      "Timing: Appropriate transition from my current role",
      "Looking for: right long-term business leadership opportunity"
    ]
  },
  {
    id: "leave_aspen",
    title: "Leave for Sandvik",
    group: 5,
    category: "Growth & Career",
    script: `I have had a very successful and rewarding experience with Aspen Technology, and I am proud of what I have achieved there, particularly the 280% revenue growth and the relationships I have built with major industrial and mining customers. So I am not looking to leave because of dissatisfaction.

What attracts me to Sandvik is the opportunity to take the next step in my leadership journey. The LGMRT role goes beyond commercial leadership—it combines full P&L responsibility, business transformation, operating-model development, international expansion, organization leadership, and lifecycle business development.

These are areas where I have progressively built experience throughout my career, particularly through my previous P&L leadership at Hamon.

What makes this opportunity particularly compelling is the transformation mandate: building a globally competitive midmarket industrial business from a strong Chinese foundation.

I believe my experience in P&L leadership, internationalization, industrial transformation, and mining customer value creation can contribute meaningfully to that ambition.

So for me, this is really about taking on a broader and more strategic business leadership challenge.`,
    tips: [
      "Successful and rewarding experience, proud of what achieved",
      "Not looking to leave because of dissatisfaction",
      "Attract me to Sandvik: next step in my leadership journey, LGMRT role require P&L, transformation, internationalization, lifecycle",
      "Particularly compelling: transformation",
      "I believe my experience can contribute meaningfully to Sandvik ambition"
    ]
  },
  {
    id: "strength",
    title: "Strengths",
    group: 5,
    category: "Growth & Career",
    script: `I would highlight three strengths.

First, I am a transformation-oriented business leader who can connect strategy with execution and measurable P&L outcomes.

Second, I have a proven ability to internationalize and scale industrial businesses, including transforming China-manufactured solutions into competitive global offerings.

Third, I combine strong commercial and stakeholder leadership with a deep understanding of asset-intensive customers, including mining and infrastructure.

I think that combination allows me to build growth while also strengthening the operating model and long-term customer value.`,
    tips: [
      "Transformation-oriented business leader",
      "Proven ability to internationalize and scale industrial businesses",
      "Combine commercial leadership with deep understanding",
      "Build growth, strengthen operating model and long-term customer value"
    ]
  },
  {
    id: "weakness",
    title: "Weaknesses",
    group: 5,
    category: "Growth & Career",
    script: `One area where I have been deliberately developing is my depth of direct mining-equipment OEM experience.

I have strong mining-customer and asset-performance experience, but I have not spent my career inside a traditional mining-equipment manufacturer.

I address that by learning quickly, engaging closely with technical and operational experts, and grounding decisions in customer and business economics.

I see this as a development area, but also as an opportunity to bring a complementary transformation and commercial perspective to LGMRT.`,
    tips: [
      "depth of direct mining-equipment OEM experience",
      "mining-customer, but no career inside",
      "Address by learning quickly",
      "Development area"
    ]
  },
  {
    id: "closing",
    title: "Closing Statement",
    group: 0,
    category: "Profile",
    script: `I would simply reinforce that I recognize I am not the conventional mining-equipment candidate.

What I believe I bring is a combination of capabilities that directly addresses the transformation mandate: full P&L leadership, industrial business transformation, China-to-global internationalization, mining customer understanding, lifecycle value creation, and cross-cultural leadership.

Having looked carefully at what Sandvik is trying to accomplish with LGMRT, I am genuinely excited about the opportunity and believe my experience could contribute meaningfully to that journey.`,
    tips: [
      "Recognize not from mining-equipment OEM",
      "Believe combination of capabilities directly address...",
      "Excited about the opportunity, and believe contribute meaningfully..."
    ]
  },
  {
    id: "questions",
    title: "Questions 2 Ask",
    group: 6,
    category: "Questions",
    script: `1. **What would define success for this role?**
From your perspective, what are the two or three most important outcomes Sandvik would expect the new VP Midmarket China to deliver during the first 12 to 24 months?

2. **What is the real transformation challenge?**
The role description emphasizes transforming LGMRT from a strong Chinese midmarket OEM into an international second-tier offering. From what you have learned from the business, where do you see the biggest transformation challenge today—market positioning, international go-to-market, operating model, aftermarket, organization, or something else?

3. **What differentiates the successful candidate?**
Given the breadth of the mandate, what would you say distinguishes the candidate Sandvik ultimately wants for this role from someone who may have strong mining-equipment experience but less experience in business transformation and international growth?

4. **When you think about LGMRT three years from now, what would you most like to see fundamentally different from today?**`,
    tips: [
      "What would define success for this role?",
      "What is the real transformation challenge?",
      "What differentiates the successful candidate?",
      "When you think about LGMRT three years from now, what would you most like to see fundamentally different?"
    ]
  }
];
