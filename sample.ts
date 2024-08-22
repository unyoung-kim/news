import _ from "lodash";

export const SAMPLE = [
  [
    {
      headline: "Humidity sucks. Transaera has a new way to deal with it",
      excerpt:
        "The startup’s core technology is a proprietary material that absorbs moisture from the air, allowing air conditioning to cool buildings more efficiently.",
      time: "21 seconds ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1488823371.jpeg?resize=300,200",
      url: "https://techcrunch.com/2024/08/09/humidity-sucks-transaera-has-a-new-way-to-deal-with-it/",
    },
    {
      headline:
        "CloudPay, a payroll services provider, lands $120M in new funding",
      excerpt:
        "In 1996, two companies, Patersons HR and Payroll Solutions, formed a venture called CloudPay to provide payroll and payments services to enterprise clients. CloudPay grew quietly over the next several…",
      time: "14 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1286996969.jpg?resize=300,233",
      url: "https://techcrunch.com/2024/08/09/humidity-sucks-transaera-has-a-new-way-to-deal-with-it/",
    },
    {
      headline: "A comprehensive list of 2024 tech layoffs",
      excerpt:
        "The tech layoff wave is still going strong in 2024. Following significant workforce reductions in 2022 and 2023, this year has already seen 60,000 job cuts across 254 companies, according to independent layoffs tracker Layoffs.fyi. Companies like Tesla, Amazon, Google, TikTok, Snap and Microsoft have conducted sizable layoffs in the…",
      time: "14 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/02/layoffs-e1684946575831.jpg?resize=720,387",
      url: "https://techcrunch.com/2024/08/08/tech-layoffs-2024-list/",
    },
    {
      headline:
        "Archer to set up air taxi network in LA by 2026 ahead of World Cup",
      excerpt:
        "Los Angeles is notorious for its back-to-back traffic. Three events that promise to bring in millions of spectators from around the world — the 2026 World Cup, the Super Bowl…",
      time: "16 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/Archer-Aviation-Midnight.jpg?resize=300,178",
      url: "https://techcrunch.com/2024/08/08/archer-to-set-up-air-taxi-network-in-la-by-2026-ahead-of-world-cup/",
    },
    {
      headline:
        "Cohere co-founder Nick Frosst thinks everyone needs to be more realistic about what AI can and cannot do",
      excerpt:
        "AI companies are gobbling up investor money and securing sky-high valuations early in their life cycle. This dynamic has many calling the AI industry a bubble. Nick Frosst, a co-founder…",
      time: "18 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1251294520.jpg?resize=300,199",
      url: "https://techcrunch.com/2024/08/08/cohere-co-founder-nick-frosst-thinks-everyone-needs-to-be-more-realistic-on-what-ai-can-and-cannot-do/",
    },
    {
      headline:
        "Flint Capital raises a $160M through an unusual fund-raising strategy",
      excerpt:
        "Flint Capital just closed its third fund at $160 million. Its has a unique strategy for finding its limited partner investors.",
      time: "19 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2014/07/13334048894_6e8b421c4e_o-e1438887295188.jpg?resize=300,145",
      url: "https://techcrunch.com/2024/08/08/flint-capital-raises-a-160m-through-unusual-fund-raising-strategy/",
    },
    {
      headline: "Chime and Dave execs are coming to TechCrunch Disrupt 2024",
      excerpt:
        "The rise of neobanks has been fascinating to witness, as a number of companies in recent years have grown from merely challenging traditional banks to being massive players in and…",
      time: "21 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/Muthukumar_Wilk_tc_disrupt_2024_speaker-carousel_1920x1080.png?resize=300,169",
      url: "https://techcrunch.com/2024/08/08/chime-and-dave-execs-are-coming-to-techcrunch-disrupt-2024/",
    },
    {
      headline:
        "Cocoon is transforming steel production runoff into a greener cement alternative",
      excerpt:
        "Cocoon is a new startup built on the belief that greener steel production and the creation of concrete slag doesn’t have to be an either/or proposition.",
      time: "23 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/2.-Cocoon-Plant-Deployment-Mockup.jpg?resize=300,169",
      url: "https://techcrunch.com/2024/08/08/cocoon-is-making-steel-production-runoff-into-a-greener-cement-alternative/",
    },
    {
      headline: "Anduril raises $1.5B at a $14B valuation",
      excerpt:
        "The Palmer Luckey-founded defense startup wants to become a serious rival to longstanding kingpins, and has been clocking some big wins.",
      time: "1 day ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-2152503873.jpg?resize=300,171",
      url: "https://techcrunch.com/2024/08/07/anduril-raises-1-5b-to-hyper-scale-defense-production/",
    },
    {
      headline:
        "UK satellite startup Blue Skies Space wants to sell astronomy data ‘as a service’",
      excerpt:
        "The satellite is designed to complement data provided by existing astronomical efforts such as that of the famed Hubble Telescope.",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/F05659C8-A6A3-491D-8A7A-D6DF8BBD6EE1-scaled-1-e1723022290103.jpeg?w=430",
      url: "https://techcrunch.com/2024/08/07/uk-satellite-startup-blue-skies-space-wants-to-sell-astronomy-data-as-a-service/",
    },
    {
      headline:
        "From Skims to Stripe, here are the startups that are likely — or definitely — not having IPOs this year",
      excerpt:
        "Last year’s investor dreams of a strong 2024 IPO pipeline have faded, if not fully disappeared, as we settle in to the second half of the year. This year delivered…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/09/53200113510_bb815ce7d9_k.jpg?resize=300,200",
      url: "https://techcrunch.com/2024/08/07/startups-not-likely-to-ipo-2024/",
    },
    {
      headline:
        "Techstars is laying off 17%, ending its J.P. Morgan-backed programs",
      excerpt:
        "Techstars is cutting 17% of its staff and will end its $80 million J.P. Morgan-backed AdvancingCities program once the fund is completely deployed.",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/03/techstars-tension.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/techstars-is-laying-off-17-percent-ending-jp-morgan-backed-programs/",
    },
    {
      headline:
        "Mechanical Orchard, led by ex-Pivotal CEO, scores $50M round led by Alphabet’s GV",
      excerpt:
        "Digital transformation — the process of transforming outdated apps and processes with cloud technologies and digital workflows — can be a risky undertaking. In 2023, Harvard Business Review reported that…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1486318910.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/mechanical-orchard-led-by-ex-pivotal-ceo-scores-50-million-round-led-by-alphabets-gv/",
    },
    {
      headline:
        "Bandana lands new investment to help hourly wage workers find good jobs",
      excerpt:
        "Most startups are looking to solve a problem inside a business, but Bandana, a New York City-based startup, has a different goal. It wants to help people at the lower…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-2163865907.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/bandana-lands-new-investment-to-help-hourly-wage-workers-find-good-jobs/",
    },
    {
      headline:
        "Flourish Ventures on repeat founders, emerging markets and when not to hop on the AI bandwagon",
      excerpt:
        "In today’s episode of Equity Podcast, Mary Ann Azevedo talked to Flourish Ventures co-founders Tilman Ehrbeck, Emmalyn Shaw and Arjuna Costa about a variety of…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/TC-Flourish-Partners.webp?w=430",
      url: "https://techcrunch.com/podcast/flourish-ventures-on-repeat-founders-emerging-markets-and-when-not-to-hop-on-the-ai-bandwagon/",
    },
    {
      headline: "Database startup Neon nabs a Microsoft investment",
      excerpt:
        "In a sign that big tech companies are ready and willing to shell out cash for database tech, Neon, a startup building an open source alternative to AWS Aurora Postgres,…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-488979113.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/database-startup-neon-nabs-a-microsoft-investment/",
    },
    {
      headline:
        "Ex-Clubhouse employees take another swing at a social networking startup",
      excerpt:
        "The ex-Clubhouse, Netflix employees raised $1.65M for an app that combines social media, networking, and dating.",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/IMG_3036.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/ex-clubhouse-employees-take-another-swing-at-a-social-networking-startup/",
    },
    {
      headline:
        "Fintech Payoneer is buying 5-year-old global payroll startup Skuad for $61M in cash",
      excerpt:
        "New York-based fintech Payoneer has acquired Skuad, a Singapore-based global HR and payroll startup, for $61 million in cash, the company exclusively told TechCrunch.  Payoneer said it could also pay…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/Sundeep-Sahi_23-10-10_0518.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/payoneer-is-buying-5-year-old-global-payroll-startup-skaud-for-61m-cash/",
    },
    {
      headline:
        "Airbnb details plans to expand beyond short-term rentals, including co-hosting and relaunching ‘experiences’",
      excerpt:
        "Airbnb CEO Brian Chesky suggested on Tuesday’s Q2 earnings call with investors that the company will soon expand into new products and services, including co-hosting, a relaunch of Airbnb’s “experiences,”…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2018/10/GettyImages-1052001922.jpg?w=430",
      url: "https://techcrunch.com/2024/08/06/airbnb-details-plans-to-expand-beyond-short-term-rentals-including-co-hosting-and-relaunching-experiences/",
    },
    {
      headline:
        "Nearly a decade before co-founding Cohere, Nick Frosst thought he was late to AI",
      excerpt:
        "When Nick Frosst was in college over a decade ago, he was worried he was a little late to the AI game. Frosst, a co-founder…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1757707025.jpg?w=430",
      url: "https://techcrunch.com/podcast/nearly-a-decade-before-co-founding-cohere-nick-frosst-thought-he-was-late-to-ai/",
    },
    {
      headline: "Bluesky adds Techdirt founder Mike Masnick to its board",
      excerpt:
        "According to a company blog post, the team was already leaning on Masnick for advice, so adding him to the board is a “natural next step” in formalizing their relationship.",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/08/bluesky-004.jpg?w=430",
      url: "https://techcrunch.com/2024/08/06/bluesky-adds-techdirt-founder-mike-masnick-to-its-board/",
    },
    {
      headline:
        "Enhance your startup’s success with the ScaleUp Program at TechCrunch Disrupt 2024",
      excerpt:
        "Are you a Series A to B startup looking to make a significant impact in the tech world? The ScaleUp Startups Exhibitor Program at TechCrunch Disrupt 2024 is your gateway…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/ScaleupStartups_circle_header.png?w=430",
      url: "https://techcrunch.com/2024/08/06/enhance-your-startups-success-with-the-scaleup-program-at-techcrunch-disrupt-2024/",
    },
    {
      headline:
        "MuukTest is putting GenAI at the center of software QA testing",
      excerpt:
        "Every piece of software needs to go through software quality assurance testing. It usually involves a human tester creating a series of test cases, and then checking the software interface…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1273058761.jpg?w=430",
      url: "https://techcrunch.com/2024/08/06/muuktest-is-putting-genai-at-the-center-of-software-qa-testing/",
    },
    {
      headline:
        "Who cut the plant-based cheese? Plonts did with microbes, and it’s stinky",
      excerpt:
        "Plonts’ cheese is made from soybeans, one of the most efficient ways to grow protein. Soybeans themselves are not very flavorful, and that is where fermentation and aging, help Plonts…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/Plonts-Grilled-Cheese2-credit-Stephanie-Gonot.jpg?w=430",
      url: "https://techcrunch.com/2024/08/06/who-cut-the-plant-based-cheese-plonts-did-with-microbes-and-its-stinky/",
    },
    {
      headline:
        "Hyperspace is using ‘domain-specific computing’ to accelerate database searches",
      excerpt:
        "Hyperspace, a Tel Aviv-based startup, says its custom cloud instances for database searches can dramatically speed up queries.",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/12/GettyImages-1425576452.jpg?w=430",
      url: "https://techcrunch.com/2024/08/06/hyperspace-is-building-custom-instances-to-accelerate-database-searches/",
    },
    {
      headline:
        "AI-powered water heater could banish cold showers and carbon pollution",
      excerpt:
        "Cala Systems’ water heater pairs an advanced heat pump with an AI-powered control system to forecast hot water demand.",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1368214406.jpeg?w=430",
      url: "https://techcrunch.com/2024/08/06/ai-powered-water-heater-could-banish-cold-showers-and-carbon-pollution/",
    },
    {
      headline:
        "German computer scientists raise $30 million to help companies make sense of their data",
      excerpt:
        "It’s not easy for organizations to become data-driven, despite the aspirations many have to get there. Even orgs with data analytics teams often struggle to make effective use of their…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/01/GettyImages-1283371967.jpg?w=430",
      url: "https://techcrunch.com/2024/08/06/knime-lets-users-build-workflows-to-automate-data-analytics-task/",
    },
    {
      headline:
        "H3X scales up its electric aerospace ambitions with $20M in new funding",
      excerpt:
        "Many industries that rely on legacy energy sources are aiming to electrify or at least streamline their operations, but for countless use cases, the tech just isn’t there. H3X is changing the game with electric motors so compact and efficient that the aerospace and marine world — not to mention…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/Founders_shop.jpg?w=720",
      url: "https://techcrunch.com/2024/08/06/h3x-scales-up-its-electric-aerospace-ambitions-with-20m-in-new-funding/",
    },
    {
      headline:
        "Announcing the agenda for the AI Stage at TechCrunch Disrupt 2024",
      excerpt:
        "We’re so excited to announce that we’ve added a dedicated AI Stage presented by Google Cloud to TechCrunch Disrupt 2024. It joins Fintech, SaaS and Space as the other industry-focused…",
      time: "4 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/AIindustry_StagePartner_tcdisrupt2024_1200x629.png?w=430",
      url: "https://techcrunch.com/2024/08/05/announcing-the-agenda-for-the-ai-stage-at-techcrunch-disrupt-2024/",
    },
    {
      headline:
        "Placer.ai boosts valuation to $1.5B after quietly raising another $75M",
      excerpt:
        "A startup developing AI market research based on location data, and backed by a who’s who, has quietly raised, TechCrunch has learned.",
      time: "4 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-1487910618.jpg?w=430",
      url: "https://techcrunch.com/2024/08/05/placer-ai-boosts-valuation-to-1-5b-after-quietly-raising-another-75m/",
    },
  ],
  [
    {
      headline: "A comprehensive list of 2024 tech layoffs",
      excerpt:
        "The tech layoff wave is still going strong in 2024. Following significant workforce reductions in 2022 and 2023, this year has already seen 60,000 job cuts across 254 companies, according to independent layoffs tracker Layoffs.fyi. Companies like Tesla, Amazon, Google, TikTok, Snap and Microsoft have conducted sizable layoffs in the…",
      time: "14 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/02/layoffs-e1684946575831.jpg?resize=720,387",
      url: "https://techcrunch.com/2024/08/08/tech-layoffs-2024-list/",
    },
    {
      headline:
        "Cohere co-founder Nick Frosst thinks everyone needs to be more realistic about what AI can and cannot do",
      excerpt:
        "AI companies are gobbling up investor money and securing sky-high valuations early in their life cycle. This dynamic has many calling the AI industry a bubble. Nick Frosst, a co-founder…",
      time: "18 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1251294520.jpg?resize=300,199",
      url: "https://techcrunch.com/2024/08/08/cohere-co-founder-nick-frosst-thinks-everyone-needs-to-be-more-realistic-on-what-ai-can-and-cannot-do/",
    },
    {
      headline:
        "Flint Capital raises a $160M through an unusual fund-raising strategy",
      excerpt:
        "Flint Capital just closed its third fund at $160 million. Its has a unique strategy for finding its limited partner investors.",
      time: "19 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2014/07/13334048894_6e8b421c4e_o-e1438887295188.jpg?resize=300,145",
      url: "https://techcrunch.com/2024/08/08/flint-capital-raises-a-160m-through-unusual-fund-raising-strategy/",
    },
    {
      headline:
        "From Skims to Stripe, here are the startups that are likely — or definitely — not having IPOs this year",
      excerpt:
        "Last year’s investor dreams of a strong 2024 IPO pipeline have faded, if not fully disappeared, as we settle in to the second half of the year. This year delivered…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/09/53200113510_bb815ce7d9_k.jpg?resize=300,200",
      url: "https://techcrunch.com/2024/08/07/startups-not-likely-to-ipo-2024/",
    },
    {
      headline:
        "Techstars is laying off 17%, ending its J.P. Morgan-backed programs",
      excerpt:
        "Techstars is cutting 17% of its staff and will end its $80 million J.P. Morgan-backed AdvancingCities program once the fund is completely deployed.",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/03/techstars-tension.jpg?resize=300,169",
      url: "https://techcrunch.com/2024/08/07/techstars-is-laying-off-17-percent-ending-jp-morgan-backed-programs/",
    },
    {
      headline:
        "Flourish Ventures on repeat founders, emerging markets and when not to hop on the AI bandwagon",
      excerpt:
        "In today’s episode of Equity Podcast, Mary Ann Azevedo talked to Flourish Ventures co-founders Tilman Ehrbeck, Emmalyn Shaw and Arjuna Costa about a variety of…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/TC-Flourish-Partners.webp?resize=300,171",
      url: "https://techcrunch.com/podcast/flourish-ventures-on-repeat-founders-emerging-markets-and-when-not-to-hop-on-the-ai-bandwagon/",
    },
    {
      headline:
        "Nearly a decade before co-founding Cohere, Nick Frosst thought he was late to AI",
      excerpt:
        "When Nick Frosst was in college over a decade ago, he was worried he was a little late to the AI game. Frosst, a co-founder…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1757707025.jpg?resize=300,200",
      url: "https://techcrunch.com/podcast/nearly-a-decade-before-co-founding-cohere-nick-frosst-thought-he-was-late-to-ai/",
    },
    {
      headline:
        "From golf to hunting, a new crop of startups want to make these experiences even better",
      excerpt:
        "COVID-19 pushed people to take up outdoor activities. Now, startups are helping companies and consumers keep up with demand.",
      time: "5 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-889811488.jpg?resize=300,196",
      url: "https://techcrunch.com/2024/08/04/from-golf-to-hunting-a-new-crop-of-startups-want-to-make-these-experiences-even-better/",
    },
    {
      headline:
        "AI friends, deepfake foes and which Tiger Global partner is leaving now",
      excerpt:
        "AI hardware has taken on a new shape with Friend’s $99 necklace — a pendant that gives you an AI friend to talk to and…",
      time: "7:30 am PDT • August 2, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/05/gpt4o-featured.png?resize=300,169",
      url: "https://techcrunch.com/podcast/ai-friends-deepfake-foes-and-which-tiger-global-partner-is-leaving-now/",
    },
    {
      headline:
        "Rediff, once an internet pioneer in India, sells majority stake for $3M",
      excerpt:
        "Payments infrastructure firm Infibeam Avenues has acquired a majority 54% stake in Rediff.com for up to $3 million, a dramatic twist of fate for the 28-year-old business that was the…",
      time: "4:08 am PDT • August 2, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/rediff.jpg?resize=300,161",
      url: "https://techcrunch.com/2024/08/02/rediff-once-a-pioneer-of-internet-services-in-india-sells-majority-stake-for-3m/",
    },
    {
      headline:
        "How filming a cappella concerts and dance recitals led Northzone’s newest partner Molly Alter to a career in VC",
      excerpt:
        "Molly Alter wears a lot of hats. She’s a mocumentary filmmaker working on a project about an alternate reality where charades is big business. She’s a caesar salad connoisseur and…",
      time: "12:03 pm PDT • August 1, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/Molly-TechCrunch.jpg?w=430",
      url: "https://techcrunch.com/2024/08/01/how-filming-a-capella-concerts-and-dance-recitals-led-northzones-newest-partner-molly-alter-to-a-career-in-vc/",
    },
    {
      headline: "Sequoia-backed Knowde raises Series C at a valuation cut",
      excerpt:
        "The San Jose-based startup raised $60 million in a round that values it lower than the $500 million valuation it garnered in its most recent round, according to multiple sources.",
      time: "10:03 am PDT • August 1, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-182843782.jpg?w=430",
      url: "https://techcrunch.com/2024/08/01/sequoia-backed-knowde-raises-series-c-at-a-valuation-cut/",
    },
    {
      headline: "Over 100 VCs pledge support for Kamala Harris",
      excerpt:
        "More than 100 VCs, including Reid Hoffman, Vinod Khosla and Mark Cuban have pledged to vote for Vice President Kamala Harris in the upcoming U.S. presidential election. Mobilizing under the…",
      time: "9:44 am PDT • July 31, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/YouTube-Thumb-Text-4-3.png?w=430",
      url: "https://techcrunch.com/2024/07/31/over-100-silicon-valley-vcs-pledge-to-vote-for-kamala-harris/",
    },
    {
      headline:
        "TechCrunch Minute: Investors pour money into non-alcoholic beverages",
      excerpt:
        "Startups are attracting serious funding to provide fun, alcohol-free drink options at the bar and in other social contexts. Earlier this year, canned water company…",
      time: "9:00 am PDT • July 31, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/YouTube-Thumb-Text-4-5.png?w=430",
      url: "https://techcrunch.com/video/techcrunch-minute-investors-pour-money-into-non-alcoholic-beverages/",
    },
    {
      headline:
        "Global startup funding is picking up with AI still in the spotlight",
      excerpt:
        "Global startup funding was up 16% in the second quarter, according to Crunchbase data, led by an uptick in mega-rounds. That increase was led, unsurprisingly,…",
      time: "7:10 am PDT • July 31, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/03/GettyImages-1502217391.jpg?w=430",
      url: "https://techcrunch.com/podcast/global-startup-funding-is-picking-up-with-ai-still-in-the-spotlight/",
    },
    {
      headline: "Leaf helps farms decipher the troves of data they generate",
      excerpt:
        "Farms produce a lot of data. From machines to irrigation systems, farms generate a lot of information that could be helpful to both them and the companies that serve them.…",
      time: "6:03 am PDT • July 31, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/bailey_headshot_2020-11.jpg?w=430",
      url: "https://techcrunch.com/2024/07/31/leaf-helps-farms-decipher-the-troves-of-data-they-generate/",
    },
    {
      headline: "Tiger Global partner Alex Cook to leave firm, sources say",
      excerpt:
        "Alex Cook, a partner at Tiger Global who oversaw some of its largest fintech investments and India deals, is departing the firm after a tenure of nearly seven years, three…",
      time: "8:50 pm PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-109480856.jpg?w=430",
      url: "https://techcrunch.com/2024/07/30/tiger-global-partner-alex-cook-to-leave-firm-sources-say/",
    },
    {
      headline:
        "SEC charges BitClout founder Nader Al-Naji with fraud; says proceeds paid for L.A. mansion, gifts",
      excerpt:
        "The founder of once-hyped crypto startup BitClout is facing trouble. On Tuesday, the SEC charged him with fraud and other offenses.",
      time: "12:56 pm PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-1388597365.jpg?w=430",
      url: "https://techcrunch.com/2024/07/30/sec-charged-crypto-founder-bitclout-startup-backed-by-a16z-sequoia/",
    },
    {
      headline:
        "Hey, there ARE growth funds in Europe — Kennet raises $287M for its largest fund to date",
      excerpt:
        "Europe is routinely castigated by tech industry observers for having too few “growth capital” funds, and, compared to the U.S., that’s true. That said, it is nowhere near nonexistent on…",
      time: "8:53 am PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/Kennet-has-raised-E266-million-for-its-largest-fund-to-date.jpg?w=430",
      url: "https://techcrunch.com/2024/07/30/hey-there-are-growth-funds-in-europe-kennet-raises-287m-for-its-largest-fund-to-date/",
    },
    {
      headline:
        "Moxxie Ventures, led by ex-Twitter media head, raises $95M third fund",
      excerpt:
        "The fundraising environment is challenging for emerging managers, defined as VC firms raising their first through third time. But Katie Jacobs Stanton, a former head of media at Twitter who…",
      time: "8:00 am PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/Katie-Stanton.jpg?w=430",
      url: "https://techcrunch.com/2024/07/30/moxxie-ventures-led-by-ex-twitter-media-head-raises-95m-third-fund/",
    },
    {
      headline:
        "Siddhi Capital grabs $135M for Fund II to invest in consumer packaged goods startups",
      excerpt:
        "Siddhi Capital’s second fund of $135 million is double the size of the venture capital firm’s first fund and will go into CPG and food tech startups.",
      time: "6:05 am PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1289163664.jpg?w=430",
      url: "https://techcrunch.com/2024/07/30/siddhi-capital-fund-2/",
    },
    {
      headline:
        "Zoe, a microbiome-focused nutrition company, raises $15M to expand in the US",
      excerpt:
        "Zoe sends customers at-home testing materials to collect blood or feces to test blood fat, blood sugar, and gut microbiome health. Following those results, the company scores every food (on…",
      time: "12:00 am PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/ZOE_Improve_16_9@2x-2.png?w=430",
      url: "https://techcrunch.com/2024/07/30/nutrition-microbiome-zoe/",
    },
    {
      headline:
        "DEI backlash: Stay up-to-date on the latest legal and corporate challenges",
      excerpt: "It’s clear that this year will be a turning point for DEI.",
      time: "9:38 am PDT • July 29, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/02/DEI-must-DIE.jpg?w=720",
      url: "https://techcrunch.com/2024/07/29/dei-backlash-stay-up-to-date-on-the-latest-legal-and-corporate-challenges/",
    },
    {
      headline:
        "Stripe’s easy-peasy acquisition and why is Twitch still losing money?",
      excerpt:
        "Welcome back to another recap of Equity, TechCrunch’s flagship podcast about the business of startups. Today’s episode is packed with M&A talk, how one YouTuber…",
      time: "9:37 am PDT • July 29, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/04/Stripe-resized.webp?w=430",
      url: "https://techcrunch.com/2024/07/29/dei-backlash-stay-up-to-date-on-the-latest-legal-and-corporate-challenges/",
    },
    {
      headline:
        "GovWell is bringing automation and efficiency to local governments",
      excerpt:
        "Government websites aren’t known for cutting-edge tech. GovWell co-founder and CTO Ben Cohen discovered this while trying to help his dad, a contractor, apply for building permits. Cohen worked as…",
      time: "6:01 am PDT • July 29, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/IMG_4111.jpg?w=430",
      url: "https://techcrunch.com/2024/07/29/govwell-is-bringing-automation-and-efficiency-to-local-governments/",
    },
    {
      headline:
        "Stay up-to-date on the amount of venture dollars going to underrepresented founders",
      excerpt:
        "Stay up-to-date on the latest funding news for Black and women founders.",
      time: "9:00 am PDT • July 27, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/03/magnifying-glass-coins.jpg?w=720",
      url: "https://techcrunch.com/2024/07/27/stay-up-to-date-on-the-amount-of-venture-dollars-going-to-underrepresented-founders/",
    },
    {
      headline:
        "Alphabet is clearly looking to buy, so who’s selling, and why did Wiz say no?",
      excerpt:
        "Welcome back to another recap of Equity, TechCrunch’s flagship podcast about the business of startups. This episode is packed with some significant fundraises, a potentially…",
      time: "7:05 am PDT • July 26, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-2162704124.jpg?w=430",
      url: "https://techcrunch.com/podcast/alphabet-is-clearly-looking-to-buy-so-whos-selling-and-why-did-wiz-say-no/",
    },
    {
      headline:
        "Here’s why David Sacks, Paul Graham and other big Silicon Valley names had a brawl on X over VC behavior",
      excerpt:
        "A decade-old drama involving VC David Sacks and Rippling founder Parker Conrad has blown up on X with many among the Silicon Valley elite taking sides.",
      time: "12:59 pm PDT • July 25, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2016/09/disrupt_sf16_david_sacks-3705.jpg?w=430",
      url: "https://techcrunch.com/2024/07/25/david-sacks-paul-graham-silicon-valley-names-brawl-on-x-over-vc-behavior/",
    },
    {
      headline:
        "ZoomInfo alum raises $15M for startup that builds AI sales engineers",
      excerpt:
        "Until a year ago, Arjun Pillai had the comfortable yet important role of chief data officer at ZoomInfo, a B2B database company. But the serial entrepreneur was getting antsy. He…",
      time: "8:00 am PDT • July 25, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-2080972792.jpg?w=430",
      url: "https://techcrunch.com/2024/07/25/zoominfo-alum-raises-15m-for-startup-that-builds-ai-sales-engineers/",
    },
    {
      headline:
        "Endeavor CEO says long-term capital needs to be prioritized in emerging ecosystems",
      excerpt:
        "Venture capital has become a more global industry as the tech sector slowly decentralizes. In 2022, more than 50% of VC deployed globally was invested in startups outside the U.S., according to data available from the National Science Foundation (NSF) — a stark contrast to 20 years ago, when nearly…",
      time: "6:34 am PDT • July 25, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-1040860808.jpg?w=720",
      url: "https://techcrunch.com/2024/07/25/endeavor-ceo-says-long-term-capital-needs-to-be-prioritized-in-emerging-ecosystems/",
    },
  ],
];

export const FLATTENED_SAMPLE = _.flatten(SAMPLE);

export const filtered = [
  [
    {
      headline:
        "CloudPay, a payroll services provider, lands $120M in new funding",
      excerpt:
        "In 1996, two companies, Patersons HR and Payroll Solutions, formed a venture called CloudPay to provide payroll and payments services to enterprise clients. CloudPay grew quietly over the next several…",
      time: "14 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1286996969.jpg?resize=300,233",
      url: "https://techcrunch.com/2024/08/09/humidity-sucks-transaera-has-a-new-way-to-deal-with-it/",
    },
  ],
  [
    {
      headline:
        "Flint Capital raises a $160M through an unusual fund-raising strategy",
      excerpt:
        "Flint Capital just closed its third fund at $160 million. Its has a unique strategy for finding its limited partner investors.",
      time: "19 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2014/07/13334048894_6e8b421c4e_o-e1438887295188.jpg?resize=300,145",
      url: "https://techcrunch.com/2024/08/08/flint-capital-raises-a-160m-through-unusual-fund-raising-strategy/",
    },
    {
      headline: "Anduril raises $1.5B at a $14B valuation",
      excerpt:
        "The Palmer Luckey-founded defense startup wants to become a serious rival to longstanding kingpins, and has been clocking some big wins.",
      time: "1 day ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-2152503873.jpg?resize=300,171",
      url: "https://techcrunch.com/2024/08/07/anduril-raises-1-5b-to-hyper-scale-defense-production/",
    },
  ],
  [
    {
      headline:
        "Mechanical Orchard, led by ex-Pivotal CEO, scores $50M round led by Alphabet’s GV",
      excerpt:
        "Digital transformation — the process of transforming outdated apps and processes with cloud technologies and digital workflows — can be a risky undertaking. In 2023, Harvard Business Review reported that…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1486318910.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/mechanical-orchard-led-by-ex-pivotal-ceo-scores-50-million-round-led-by-alphabets-gv/",
    },
    {
      headline:
        "Bandana lands new investment to help hourly wage workers find good jobs",
      excerpt:
        "Most startups are looking to solve a problem inside a business, but Bandana, a New York City-based startup, has a different goal. It wants to help people at the lower…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-2163865907.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/bandana-lands-new-investment-to-help-hourly-wage-workers-find-good-jobs/",
    },
  ],
  [
    {
      headline: "Database startup Neon nabs a Microsoft investment",
      excerpt:
        "In a sign that big tech companies are ready and willing to shell out cash for database tech, Neon, a startup building an open source alternative to AWS Aurora Postgres,…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-488979113.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/database-startup-neon-nabs-a-microsoft-investment/",
    },
    {
      headline:
        "Ex-Clubhouse employees take another swing at a social networking startup",
      excerpt:
        "The ex-Clubhouse, Netflix employees raised $1.65M for an app that combines social media, networking, and dating.",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/IMG_3036.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/ex-clubhouse-employees-take-another-swing-at-a-social-networking-startup/",
    },
    {
      headline:
        "Fintech Payoneer is buying 5-year-old global payroll startup Skuad for $61M in cash",
      excerpt:
        "New York-based fintech Payoneer has acquired Skuad, a Singapore-based global HR and payroll startup, for $61 million in cash, the company exclusively told TechCrunch.  Payoneer said it could also pay…",
      time: "2 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/Sundeep-Sahi_23-10-10_0518.jpg?w=430",
      url: "https://techcrunch.com/2024/08/07/payoneer-is-buying-5-year-old-global-payroll-startup-skaud-for-61m-cash/",
    },
  ],
  [],
  [
    {
      headline:
        "German computer scientists raise $30 million to help companies make sense of their data",
      excerpt:
        "It’s not easy for organizations to become data-driven, despite the aspirations many have to get there. Even orgs with data analytics teams often struggle to make effective use of their…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/01/GettyImages-1283371967.jpg?w=430",
      url: "https://techcrunch.com/2024/08/06/knime-lets-users-build-workflows-to-automate-data-analytics-task/",
    },
    {
      headline:
        "H3X scales up its electric aerospace ambitions with $20M in new funding",
      excerpt:
        "Many industries that rely on legacy energy sources are aiming to electrify or at least streamline their operations, but for countless use cases, the tech just isn’t there. H3X is changing the game with electric motors so compact and efficient that the aerospace and marine world — not to mention…",
      time: "3 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/Founders_shop.jpg?w=720",
      url: "https://techcrunch.com/2024/08/06/h3x-scales-up-its-electric-aerospace-ambitions-with-20m-in-new-funding/",
    },
    {
      headline:
        "Placer.ai boosts valuation to $1.5B after quietly raising another $75M",
      excerpt:
        "A startup developing AI market research based on location data, and backed by a who’s who, has quietly raised, TechCrunch has learned.",
      time: "4 days ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-1487910618.jpg?w=430",
      url: "https://techcrunch.com/2024/08/05/placer-ai-boosts-valuation-to-1-5b-after-quietly-raising-another-75m/",
    },
  ],
  [
    {
      headline:
        "Flint Capital raises a $160M through an unusual fund-raising strategy",
      excerpt:
        "Flint Capital just closed its third fund at $160 million. Its has a unique strategy for finding its limited partner investors.",
      time: "20 hours ago",
      image:
        "https://techcrunch.com/wp-content/uploads/2014/07/13334048894_6e8b421c4e_o-e1438887295188.jpg?resize=300,145",
      url: "https://techcrunch.com/2024/08/08/flint-capital-raises-a-160m-through-unusual-fund-raising-strategy/",
    },
  ],
  [],
  [
    {
      headline: "Sequoia-backed Knowde raises Series C at a valuation cut",
      excerpt:
        "The San Jose-based startup raised $60 million in a round that values it lower than the $500 million valuation it garnered in its most recent round, according to multiple sources.",
      time: "10:03 am PDT • August 1, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-182843782.jpg?w=430",
      url: "https://techcrunch.com/2024/08/01/sequoia-backed-knowde-raises-series-c-at-a-valuation-cut/",
    },
    {
      headline:
        "Global startup funding is picking up with AI still in the spotlight",
      excerpt:
        "Global startup funding was up 16% in the second quarter, according to Crunchbase data, led by an uptick in mega-rounds. That increase was led, unsurprisingly,…",
      time: "7:10 am PDT • July 31, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/03/GettyImages-1502217391.jpg?w=430",
      url: "https://techcrunch.com/podcast/global-startup-funding-is-picking-up-with-ai-still-in-the-spotlight/",
    },
  ],
  [
    {
      headline:
        "Hey, there ARE growth funds in Europe — Kennet raises $287M for its largest fund to date",
      excerpt:
        "Europe is routinely castigated by tech industry observers for having too few “growth capital” funds, and, compared to the U.S., that’s true. That said, it is nowhere near nonexistent on…",
      time: "8:53 am PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/Kennet-has-raised-E266-million-for-its-largest-fund-to-date.jpg?w=430",
      url: "https://techcrunch.com/2024/07/30/hey-there-are-growth-funds-in-europe-kennet-raises-287m-for-its-largest-fund-to-date/",
    },
    {
      headline:
        "Moxxie Ventures, led by ex-Twitter media head, raises $95M third fund",
      excerpt:
        "The fundraising environment is challenging for emerging managers, defined as VC firms raising their first through third time. But Katie Jacobs Stanton, a former head of media at Twitter who…",
      time: "8:00 am PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/Katie-Stanton.jpg?w=430",
      url: "https://techcrunch.com/2024/07/30/moxxie-ventures-led-by-ex-twitter-media-head-raises-95m-third-fund/",
    },
  ],
  [
    {
      headline:
        "Siddhi Capital grabs $135M for Fund II to invest in consumer packaged goods startups",
      excerpt:
        "Siddhi Capital’s second fund of $135 million is double the size of the venture capital firm’s first fund and will go into CPG and food tech startups.",
      time: "6:05 am PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1289163664.jpg?w=430",
      url: "https://techcrunch.com/2024/07/30/siddhi-capital-fund-2/",
    },
    {
      headline:
        "Zoe, a microbiome-focused nutrition company, raises $15M to expand in the US",
      excerpt:
        "Zoe sends customers at-home testing materials to collect blood or feces to test blood fat, blood sugar, and gut microbiome health. Following those results, the company scores every food (on…",
      time: "12:00 am PDT • July 30, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/ZOE_Improve_16_9@2x-2.png?w=430",
      url: "https://techcrunch.com/2024/07/30/nutrition-microbiome-zoe/",
    },
  ],
  [
    {
      headline:
        "Stay up-to-date on the amount of venture dollars going to underrepresented founders",
      excerpt:
        "Stay up-to-date on the latest funding news for Black and women founders.",
      time: "9:00 am PDT • July 27, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/03/magnifying-glass-coins.jpg?w=720",
      url: "https://techcrunch.com/2024/07/27/stay-up-to-date-on-the-amount-of-venture-dollars-going-to-underrepresented-founders/",
    },
    {
      headline:
        "ZoomInfo alum raises $15M for startup that builds AI sales engineers",
      excerpt:
        "Until a year ago, Arjun Pillai had the comfortable yet important role of chief data officer at ZoomInfo, a B2B database company. But the serial entrepreneur was getting antsy. He…",
      time: "8:00 am PDT • July 25, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-2080972792.jpg?w=430",
      url: "https://techcrunch.com/2024/07/25/zoominfo-alum-raises-15m-for-startup-that-builds-ai-sales-engineers/",
    },
    {
      headline:
        "Endeavor CEO says long-term capital needs to be prioritized in emerging ecosystems",
      excerpt:
        "Venture capital has become a more global industry as the tech sector slowly decentralizes. In 2022, more than 50% of VC deployed globally was invested in startups outside the U.S., according to data available from the National Science Foundation (NSF) — a stark contrast to 20 years ago, when nearly…",
      time: "6:34 am PDT • July 25, 2024",
      image:
        "https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-1040860808.jpg?w=720",
      url: "https://techcrunch.com/2024/07/25/endeavor-ceo-says-long-term-capital-needs-to-be-prioritized-in-emerging-ecosystems/",
    },
  ],
];

export const categorizedNews = [
  {
    headline:
      "CloudPay, a payroll services provider, lands $120M in new funding",
    excerpt:
      "In 1996, two companies, Patersons HR and Payroll Solutions, formed a venture called CloudPay to provide payroll and payments services to enterprise clients. CloudPay grew quietly over the next several…",
    time: "14 hours ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1286996969.jpg?resize=300,233",
    url: "https://techcrunch.com/2024/08/09/humidity-sucks-transaera-has-a-new-way-to-deal-with-it/",
    sources: null,
  },
  {
    headline:
      "Flint Capital raises a $160M through an unusual fund-raising strategy",
    excerpt:
      "Flint Capital just closed its third fund at $160 million. Its has a unique strategy for finding its limited partner investors.",
    time: "19 hours ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2014/07/13334048894_6e8b421c4e_o-e1438887295188.jpg?resize=300,145",
    url: "https://techcrunch.com/2024/08/08/flint-capital-raises-a-160m-through-unusual-fund-raising-strategy/",
    sources: [
      "https://techcrunch.com/2024/08/08/flint-capital-raises-a-160m-through-unusual-fund-raising-strategy/",
      "https://techcrunch.com/2024/08/08/flint-capital-raises-a-160m-through-unusual-fund-raising-strategy/",
    ],
  },
  {
    headline: "Anduril raises $1.5B at a $14B valuation",
    excerpt:
      "The Palmer Luckey-founded defense startup wants to become a serious rival to longstanding kingpins, and has been clocking some big wins.",
    time: "1 day ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-2152503873.jpg?resize=300,171",
    url: "https://techcrunch.com/2024/08/07/anduril-raises-1-5b-to-hyper-scale-defense-production/",
    sources: null,
  },
  {
    headline:
      "Mechanical Orchard, led by ex-Pivotal CEO, scores $50M round led by Alphabet’s GV",
    excerpt:
      "Digital transformation — the process of transforming outdated apps and processes with cloud technologies and digital workflows — can be a risky undertaking. In 2023, Harvard Business Review reported that…",
    time: "2 days ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-1486318910.jpg?w=430",
    url: "https://techcrunch.com/2024/08/07/mechanical-orchard-led-by-ex-pivotal-ceo-scores-50-million-round-led-by-alphabets-gv/",
    sources: null,
  },
  {
    headline:
      "Bandana lands new investment to help hourly wage workers find good jobs",
    excerpt:
      "Most startups are looking to solve a problem inside a business, but Bandana, a New York City-based startup, has a different goal. It wants to help people at the lower…",
    time: "2 days ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-2163865907.jpg?w=430",
    url: "https://techcrunch.com/2024/08/07/bandana-lands-new-investment-to-help-hourly-wage-workers-find-good-jobs/",
    sources: null,
  },
  {
    headline: "Database startup Neon nabs a Microsoft investment",
    excerpt:
      "In a sign that big tech companies are ready and willing to shell out cash for database tech, Neon, a startup building an open source alternative to AWS Aurora Postgres,…",
    time: "2 days ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-488979113.jpg?w=430",
    url: "https://techcrunch.com/2024/08/07/database-startup-neon-nabs-a-microsoft-investment/",
    sources: null,
  },
  {
    headline:
      "Ex-Clubhouse employees take another swing at a social networking startup",
    excerpt:
      "The ex-Clubhouse, Netflix employees raised $1.65M for an app that combines social media, networking, and dating.",
    time: "2 days ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/08/IMG_3036.jpg?w=430",
    url: "https://techcrunch.com/2024/08/07/ex-clubhouse-employees-take-another-swing-at-a-social-networking-startup/",
    sources: null,
  },
  {
    headline:
      "Fintech Payoneer is buying 5-year-old global payroll startup Skuad for $61M in cash",
    excerpt:
      "New York-based fintech Payoneer has acquired Skuad, a Singapore-based global HR and payroll startup, for $61 million in cash, the company exclusively told TechCrunch.  Payoneer said it could also pay…",
    time: "2 days ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/08/Sundeep-Sahi_23-10-10_0518.jpg?w=430",
    url: "https://techcrunch.com/2024/08/07/payoneer-is-buying-5-year-old-global-payroll-startup-skaud-for-61m-cash/",
    sources: null,
  },
  {
    headline:
      "German computer scientists raise $30 million to help companies make sense of their data",
    excerpt:
      "It’s not easy for organizations to become data-driven, despite the aspirations many have to get there. Even orgs with data analytics teams often struggle to make effective use of their…",
    time: "3 days ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/01/GettyImages-1283371967.jpg?w=430",
    url: "https://techcrunch.com/2024/08/06/knime-lets-users-build-workflows-to-automate-data-analytics-task/",
    sources: null,
  },
  {
    headline:
      "H3X scales up its electric aerospace ambitions with $20M in new funding",
    excerpt:
      "Many industries that rely on legacy energy sources are aiming to electrify or at least streamline their operations, but for countless use cases, the tech just isn’t there. H3X is changing the game with electric motors so compact and efficient that the aerospace and marine world — not to mention…",
    time: "3 days ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/08/Founders_shop.jpg?w=720",
    url: "https://techcrunch.com/2024/08/06/h3x-scales-up-its-electric-aerospace-ambitions-with-20m-in-new-funding/",
    sources: null,
  },
  {
    headline:
      "Placer.ai boosts valuation to $1.5B after quietly raising another $75M",
    excerpt:
      "A startup developing AI market research based on location data, and backed by a who’s who, has quietly raised, TechCrunch has learned.",
    time: "4 days ago",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-1487910618.jpg?w=430",
    url: "https://techcrunch.com/2024/08/05/placer-ai-boosts-valuation-to-1-5b-after-quietly-raising-another-75m/",
    sources: null,
  },
  {
    headline: "Sequoia-backed Knowde raises Series C at a valuation cut",
    excerpt:
      "The San Jose-based startup raised $60 million in a round that values it lower than the $500 million valuation it garnered in its most recent round, according to multiple sources.",
    time: "10:03 am PDT • August 1, 2024",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-182843782.jpg?w=430",
    url: "https://techcrunch.com/2024/08/01/sequoia-backed-knowde-raises-series-c-at-a-valuation-cut/",
    sources: null,
  },
  {
    headline:
      "Global startup funding is picking up with AI still in the spotlight",
    excerpt:
      "Global startup funding was up 16% in the second quarter, according to Crunchbase data, led by an uptick in mega-rounds. That increase was led, unsurprisingly,…",
    time: "7:10 am PDT • July 31, 2024",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/03/GettyImages-1502217391.jpg?w=430",
    url: "https://techcrunch.com/podcast/global-startup-funding-is-picking-up-with-ai-still-in-the-spotlight/",
    sources: null,
  },
  {
    headline:
      "Hey, there ARE growth funds in Europe — Kennet raises $287M for its largest fund to date",
    excerpt:
      "Europe is routinely castigated by tech industry observers for having too few “growth capital” funds, and, compared to the U.S., that’s true. That said, it is nowhere near nonexistent on…",
    time: "8:53 am PDT • July 30, 2024",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/07/Kennet-has-raised-E266-million-for-its-largest-fund-to-date.jpg?w=430",
    url: "https://techcrunch.com/2024/07/30/hey-there-are-growth-funds-in-europe-kennet-raises-287m-for-its-largest-fund-to-date/",
    sources: null,
  },
  {
    headline:
      "Moxxie Ventures, led by ex-Twitter media head, raises $95M third fund",
    excerpt:
      "The fundraising environment is challenging for emerging managers, defined as VC firms raising their first through third time. But Katie Jacobs Stanton, a former head of media at Twitter who…",
    time: "8:00 am PDT • July 30, 2024",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/07/Katie-Stanton.jpg?w=430",
    url: "https://techcrunch.com/2024/07/30/moxxie-ventures-led-by-ex-twitter-media-head-raises-95m-third-fund/",
    sources: null,
  },
  {
    headline:
      "Siddhi Capital grabs $135M for Fund II to invest in consumer packaged goods startups",
    excerpt:
      "Siddhi Capital’s second fund of $135 million is double the size of the venture capital firm’s first fund and will go into CPG and food tech startups.",
    time: "6:05 am PDT • July 30, 2024",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1289163664.jpg?w=430",
    url: "https://techcrunch.com/2024/07/30/siddhi-capital-fund-2/",
    sources: null,
  },
  {
    headline:
      "Zoe, a microbiome-focused nutrition company, raises $15M to expand in the US",
    excerpt:
      "Zoe sends customers at-home testing materials to collect blood or feces to test blood fat, blood sugar, and gut microbiome health. Following those results, the company scores every food (on…",
    time: "12:00 am PDT • July 30, 2024",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/07/ZOE_Improve_16_9@2x-2.png?w=430",
    url: "https://techcrunch.com/2024/07/30/nutrition-microbiome-zoe/",
    sources: null,
  },
  {
    headline:
      "Stay up-to-date on the amount of venture dollars going to underrepresented founders",
    excerpt:
      "Stay up-to-date on the latest funding news for Black and women founders.",
    time: "9:00 am PDT • July 27, 2024",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/03/magnifying-glass-coins.jpg?w=720",
    url: "https://techcrunch.com/2024/07/27/stay-up-to-date-on-the-amount-of-venture-dollars-going-to-underrepresented-founders/",
    sources: null,
  },
  {
    headline:
      "ZoomInfo alum raises $15M for startup that builds AI sales engineers",
    excerpt:
      "Until a year ago, Arjun Pillai had the comfortable yet important role of chief data officer at ZoomInfo, a B2B database company. But the serial entrepreneur was getting antsy. He…",
    time: "8:00 am PDT • July 25, 2024",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-2080972792.jpg?w=430",
    url: "https://techcrunch.com/2024/07/25/zoominfo-alum-raises-15m-for-startup-that-builds-ai-sales-engineers/",
    sources: null,
  },
  {
    headline:
      "Endeavor CEO says long-term capital needs to be prioritized in emerging ecosystems",
    excerpt:
      "Venture capital has become a more global industry as the tech sector slowly decentralizes. In 2022, more than 50% of VC deployed globally was invested in startups outside the U.S., according to data available from the National Science Foundation (NSF) — a stark contrast to 20 years ago, when nearly…",
    time: "6:34 am PDT • July 25, 2024",
    image:
      "https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-1040860808.jpg?w=720",
    url: "https://techcrunch.com/2024/07/25/endeavor-ceo-says-long-term-capital-needs-to-be-prioritized-in-emerging-ecosystems/",
    sources: null,
  },
];
