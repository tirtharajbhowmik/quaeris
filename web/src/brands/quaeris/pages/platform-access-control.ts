import type { PlatformAccessControlPageContent } from "@/config/page-types/platform-access-control";

export const platformAccessControlPage = {
  meta: {
    title: "Role-Based Access Control for AI Analytics | Quaeris",
    description:
      "Fine-grained access controls enforced at query time. Every agent answer respects row, column, and dataset permissions — no data escapes governance.",
  },

  // ── Section 01 — Hero ───────────────────────────────────────
  hero: {
    eyebrow: "Security & Control",
    h1: "Metrics scoped to who needs them.",
    subcopy:
      "Access enforcement happens at query time, not in dashboards. When an agent answers a question, every row and column is checked against your user’s role. Only the data they’re permitted to see is returned — built into the execution, not bolted on.",
    primaryCta: { label: "See it live", href: "/contact" },
    secondaryCta: { label: "Read the governance guide", href: "/resources" },
    pipeline: [
      { icon: "users", label: "User" },
      { icon: "message-square", label: "Question" },
      { icon: "shield-check", label: "Role Lookup", gate: true },
      { icon: "code", label: "SQL Generation", granted: true },
      { icon: "database", label: "Warehouse", granted: true },
      { icon: "check", label: "Result (filtered)", granted: true },
    ],
    blockNote:
      "Unauthorized requests are blocked at the gate — and logged to the audit trail",
    figCaption:
      "Diagram of the governed query pipeline: a user’s question passes a role-lookup gate before SQL generation; the warehouse executes the governed query and returns a filtered result.",
  },

  // ── Section 02 — Problem / Solution ─────────────────────────
  problem: {
    ariaLabel: "The access control problem and the Quaeris solution",
    problem: {
      eyebrow: "The problem",
      heading: "The access control dilemma",
      items: [
        "Dashboard filters are easy to bypass — users export data and see restricted rows.",
        "Traditional BI tools enforce access in the UI layer, not in the query. If a user can export, they can see everything.",
        "Governed semantic layers require manual access policy definition — one rule per role, per metric, per table.",
        "AI agents have no built-in access controls; they hallucinate answers without checking the user’s permissions.",
      ],
    },
    solution: {
      eyebrow: "The solution — Quaeris",
      heading: "Access governance built into the agent",
      items: [
        "Access checks run at query time, not at render time. Every SQL execution is sandboxed to the user’s role.",
        "Agents inherit permissions directly from your warehouse (Snowflake, BigQuery, Databricks) — no separate access model to maintain.",
        "Row and column restrictions apply equally to every query path — UI, agent, API, export.",
        "Unauthorized access attempts are logged with full audit trail: who asked, what they asked, when they asked, and what was blocked.",
      ],
    },
  },

  // ── Section 03 — Three Pillars ──────────────────────────────
  pillars: {
    intro: {
      eyebrow: "",
      heading: "Three pillars of governed access",
    },
    cards: [
      {
        icon: "database",
        title: "Row-Level Security",
        body: "Filter entire rows based on user role. A sales analyst sees only their region’s data; a CFO sees consolidated numbers across all regions. The agent enforces this — the user can’t ‘see around’ it by changing the question.",
        cta: { label: "How row filtering works", href: "/learn" },
      },
      {
        icon: "eye-off",
        title: "Column-Level Masking",
        body: "Restrict columns by role. Salary data hidden from ops teams; pricing hidden from customer-facing reps. The agent knows which columns the user can access and won’t return forbidden fields — even if asked directly.",
        cta: { label: "Masking policies", href: "/learn" },
      },
      {
        icon: "shield-check",
        title: "Query-Time Enforcement",
        body: "Access policies run inside the SQL execution, not after. The database itself returns only authorized rows — Quaeris adds no separate layer, no post-processing cache. The source of truth is the warehouse.",
        cta: {
          label: "Warehouse-native architecture",
          href: "/platform/warehouse",
        },
      },
    ],
  },

  // ── Section 04 — How It Works ───────────────────────────────
  howItWorks: {
    intro: {
      eyebrow: "Access at every step",
      heading: "From question to governed answer, without a bypass.",
      subcopy:
        "When a user submits a question, the agent runs a six-step pipeline. At each step, role-based access checks ensure data never escapes the user’s permission boundary.",
    },
    steps: [
      {
        eyebrow: "01",
        heading: "User Authentication",
        body: "Verify the user’s identity and load their assigned roles.",
      },
      {
        eyebrow: "02",
        heading: "Question Parsing",
        body: "Interpret the question into a semantic layer query.",
      },
      {
        eyebrow: "03",
        heading: "Access Policy Evaluation",
        body: "Query the role definitions and row/column filters for this user.",
      },
      {
        eyebrow: "04",
        heading: "Governed SQL Generation",
        body: "Build the SQL with WHERE and SELECT clauses restricted to permitted data.",
      },
      {
        eyebrow: "05",
        heading: "Warehouse Execution",
        body: "Run the SQL against your database — the warehouse is the enforcement point.",
      },
      {
        eyebrow: "06",
        heading: "Answer Audit Log",
        body: "Log the question, the user, the SQL, and the result set to the governance record.",
      },
    ],
    dashboard: {
      title: "Quaeris — Governed query",
      roleBadge: "Region: East Coast, Department: Sales",
      question: "“What is revenue by product?”",
      tableCaption:
        "Illustrative governed query result: rows filtered to the user’s region, margin column masked by role",
      columns: ["Product", "Revenue", "Units", "Margin"],
      rows: [
        {
          cells: [
            { kind: "text", value: "Alpha Suite" },
            { kind: "text", value: "$1.2M" },
            { kind: "text", value: "480" },
            { kind: "masked", value: "Masked" },
          ],
        },
        {
          cells: [
            { kind: "text", value: "Beta Platform" },
            { kind: "text", value: "$940K" },
            { kind: "text", value: "352" },
            { kind: "masked", value: "Masked" },
          ],
        },
        {
          cells: [
            { kind: "text", value: "Gamma API" },
            { kind: "text", value: "$610K" },
            { kind: "text", value: "214" },
            { kind: "masked", value: "Masked" },
          ],
        },
      ],
      rowsNote: "3 of 12 rows visible for this role · Margin column masked",
      caption:
        "Access is scoped in real-time — the answer only contains rows and columns the user can access.",
    },
  },

  // ── Section 05 — Comparison ─────────────────────────────────
  comparison: {
    intro: {
      eyebrow: "",
      heading: "Quaeris vs. traditional BI + AI",
    },
    table: {
      columns: [
        { label: "Capability" },
        { label: "Quaeris (Governed Agent)", highlight: true },
        { label: "Traditional BI Tool" },
        { label: "Ungoverned AI Agent" },
      ],
      rows: [
        {
          feature: "Row-Level Security",
          cells: [
            { kind: "yes", value: "Enforced at query time" },
            { kind: "yes", value: "Enforced in UI; bypassable via export" },
            { kind: "no", value: "Not enforced" },
          ],
        },
        {
          feature: "Column-Level Masking",
          cells: [
            { kind: "yes", value: "Masked before agent sees data" },
            { kind: "yes", value: "Enforced in UI; bypassable via export" },
            { kind: "no", value: "Not enforced" },
          ],
        },
        {
          feature: "Warehouse-Native",
          cells: [
            { kind: "yes", value: "Runs inside warehouse; no data copy" },
            { kind: "text", value: "✓ or ✗ (depends on cloud BI)" },
            { kind: "no", value: "Usually cached or federated" },
          ],
        },
        {
          feature: "Audit Trail for Queries",
          cells: [
            { kind: "yes", value: "Every question, user, SQL, result logged" },
            { kind: "partial", value: "Partial; dashboard views only" },
            { kind: "no", value: "Often no query-level audit" },
          ],
        },
        {
          feature: "Role Inheritance",
          cells: [
            { kind: "yes", value: "Uses warehouse roles directly" },
            { kind: "text", value: "✓ or ~ (depends on connector)" },
            { kind: "no", value: "Separate access model" },
          ],
        },
        {
          feature: "Access Policy as Code",
          cells: [
            { kind: "yes", value: "Defined once, enforced everywhere" },
            { kind: "partial", value: "Per-tool policies" },
            { kind: "no", value: "No policy layer" },
          ],
        },
        {
          feature: "Can Bypass by Exporting?",
          cells: [
            { kind: "no", value: "Export respects filters" },
            { kind: "yes", value: "Exports bypass filters" },
            { kind: "yes", value: "No enforcement on export" },
          ],
        },
        {
          feature: "Multi-Warehouse Support",
          cells: [
            {
              kind: "yes",
              value:
                "Works across Snowflake, BigQuery, Databricks, Redshift, Synapse",
            },
            { kind: "partial", value: "Usually single warehouse vendor" },
            { kind: "partial", value: "Usually single vendor" },
          ],
        },
      ],
      note: "Note: Checkmarks and X marks based on architecture. Traditional BI includes Power BI, Tableau, Looker. Ungoverned AI includes ChatGPT + BI, generic text-to-SQL tools.",
    },
  },

  // ── Section 06 — Use Cases ──────────────────────────────────
  useCases: {
    intro: {
      eyebrow: "",
      heading: "Who benefits",
    },
    cards: [
      {
        icon: "bar-chart-3",
        industry: "Financial Services",
        heading: "Enforced data residency for regulated analytics",
        body: "Traders see positions; risk managers see exposures by desk; compliance sees audit logs. Row-level access per trader ID, column masking on pricing/PnL. EU regulators require audit trails for every access — Quaeris logs every agent query.",
        outcomes: [
          "Row filtering by trader/desk",
          "Column masking on sensitive pricing",
          "Automated compliance audit trail",
          "Multi-currency dataset access per role",
        ],
      },
      {
        icon: "shield-alert",
        industry: "Healthcare / Life Sciences",
        heading: "Patient data privacy with self-serve analytics",
        body: "Analysts can ask questions about patient cohorts without seeing PII. Identifier masking (names, MRNs) is delegated to warehouse-native controls (e.g., Snowflake Dynamic Data Masking, BigQuery Column-Level Security). Researchers access de-identified datasets; clinical teams see full records. All queries are logged.",
        outcomes: [
          "De-identification masking by role",
          "Cohort analysis without PII exposure",
          "Warehouse-delegated identifier masking",
          "Multi-site access control",
        ],
      },
      {
        icon: "store",
        industry: "Retail / CPG",
        heading: "Competitive visibility without exposure",
        body: "Regional managers see their region’s data; competitors (or external partners) in the same warehouse see only anonymized benchmarks. Product pricing hidden from suppliers. SKU-level access control per partner.",
        outcomes: [
          "Partner-level row isolation",
          "Column masking on proprietary pricing",
          "Cross-customer analytics without data leakage",
          "Automated access provisioning per role",
        ],
      },
    ],
  },

  // ── Section 07 — Implementation Details ─────────────────────
  implementation: {
    intro: {
      eyebrow: "",
      heading: "Implementation details",
    },
    rows: [
      {
        eyebrow: "Role definitions: from warehouse to agent",
        heading: "Your roles define access, not ours.",
        body: "Quaeris reads role definitions directly from your warehouse (Snowflake, BigQuery, Databricks). You don’t need to replicate roles in a Quaeris admin panel. If a user is granted read access to a table in Snowflake, Quaeris sees that and enforces it. Role changes sync automatically — no manual reconciliation.",
        cta: { label: "See integrations", href: "/platform/warehouse" },
        visual: {
          type: "flow",
          nodes: [
            { icon: "database", label: "Warehouse roles" },
            { icon: "shield-check", label: "Quaeris role resolver", gate: true },
            { icon: "check", label: "Agent execution" },
          ],
          figCaption:
            "Flow diagram: warehouse roles feed the Quaeris role resolver, which governs agent execution. Role changes in the warehouse sync to the agent automatically.",
        },
      },
      {
        eyebrow: "From policy to SQL: access control translation",
        heading: "Access control becomes WHERE clauses.",
        body: "Behind the scenes, Quaeris translates a user’s role permissions into SQL WHERE and SELECT restrictions. A sales analyst’s query becomes {code}. The database executes the restricted query, not Quaeris — the warehouse is the enforcement point. You can audit the SQL directly.",
        inlineCode:
          "... WHERE region = 'US-East' AND visibility >= user_role_level ...",
        cta: { label: "Audit trail deep-dive", href: "/platform/audit" },
        flip: true,
        visual: {
          type: "code",
          cards: [
            {
              label: "Role definition",
              code: `role: sales_analyst
region: US-East
tables: sales, products
masked_columns: margin, cost`,
            },
            {
              label: "Governed SQL",
              code: `SELECT revenue FROM sales
WHERE salesperson_id = $user_id
  AND region IN (
    SELECT region FROM roles
    WHERE role = $user_role)`,
            },
          ],
        },
      },
    ],
  },

  // ── Section 08 — FAQ ────────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "FAQ",
      heading: "Common access control questions",
    },
    miniCard: {
      title: "Want to see it on your warehouse?",
      body: "Bring one role-sensitive question to a 30-minute demo — we’ll show row and column enforcement live, under different user roles.",
      cta: { label: "Book a Demo", href: "/contact" },
    },
    items: [
      {
        id: "acl-faq-1",
        question: "Does SSO handle access control?",
        answer:
          "SSO (via Okta, Azure AD, etc.) authenticates the user — it confirms they are who they claim to be. Quaeris uses that SSO identity to load their roles from your warehouse and enforces access based on those roles. SSO is the identity layer; warehouse roles are the permission layer. Both are required.",
        defaultOpen: true,
      },
      {
        id: "acl-faq-2",
        question: "Can users bypass row-level security by changing a question?",
        answer:
          "No. Regardless of how a user phrases a question — ‘Show me all revenue’, ‘Give me every product’, ‘I want the full table’ — the access controls run at query execution. The warehouse only returns authorized rows. The agent doesn’t generate unrestricted queries.",
      },
      {
        id: "acl-faq-3",
        question: "What happens if a user asks for data they can’t access?",
        answer:
          "The agent runs the query, the warehouse returns zero rows (the question is answered truthfully: ‘no data available’). The access denial is logged. The user doesn’t see an error; they get a clear message: ‘This dataset is not available for your role.’",
      },
      {
        id: "acl-faq-4",
        question: "Do you support attribute-based access control (ABAC)?",
        answer:
          "Yes. If your warehouse supports ABAC policies (like Snowflake’s Dynamic Data Masking or BigQuery’s column-level access controls), Quaeris enforces them. You define policies in your warehouse; Quaeris respects them. We support any access model your warehouse supports.",
      },
      {
        id: "acl-faq-5",
        question: "How often are role definitions synced?",
        answer:
          "On every query. The agent loads the user’s current roles from your warehouse identity layer at execution time. If a user’s role changes, the next query they run will respect the new permissions — no delay.",
      },
      {
        id: "acl-faq-6",
        question: "Can you mask PII without warehouse support?",
        answer:
          "Quaeris delegates PII masking to your warehouse (Snowflake Dynamic Data Masking, BigQuery Column-Level Security, etc.). We don’t add a separate masking layer — the warehouse is the source of truth. If you need masking on a platform that doesn’t support it, we can discuss custom integration.",
      },
      {
        id: "acl-faq-7",
        question: "What does your audit trail log?",
        answer:
          "Everything: the user’s identity, the question they asked, the roles they held at that moment, the SQL generated, the result set size, the rows returned, and timestamps. You can export this to your SIEM or compliance system.",
      },
      {
        id: "acl-faq-8",
        question: "How is this different from BI row-level security (RLS)?",
        answer:
          "BI RLS is typically UI-level filtering — users see a dashboard with a filter applied. If they export the data or access the underlying database, the RLS doesn’t apply. Quaeris enforces access at the query execution layer inside your warehouse. The database itself returns only authorized rows — no bypass path.",
      },
    ],
  },

  // ── Section 09 — CTA Band ───────────────────────────────────
  cta: {
    eyebrow: "Ready to see it work?",
    heading: "Watch access controls in action.",
    subcopy:
      "We’ll walk through your warehouse setup, show how role definitions translate to governed queries, and let you ask questions under different user roles. 30 minutes, no sales pitch.",
    primary: { label: "Book a demo", href: "/contact" },
    secondary: { label: "Read the guide", href: "/resources" },
  },
} satisfies PlatformAccessControlPageContent;
