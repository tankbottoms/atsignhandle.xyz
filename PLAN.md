# Explainer Enhancement Plan

## Status: Executing edits to index.html

## Source Materials (ref/)
- `qui_tam_complaint_tables.md` — 6 tables: family bloc, offshore, CEDE deposits, Medicare, SDI, new claims
- `qui_tam_complaint_v2.5_figure_1_2.md` — ASCII diagrams of 3 entity chains
- `concise-analysis-cert-5304-cane.md` — CIK analysis, certificate register, CEDE breakdown
- `E_false_sec_filings.md` — 1,335 false filings across 5 CIKs
- `F_false_sox_certifications.md` — SOX certs, name change backdating, RICO predicates
- `K_enterprise_timeline.md` — 6 phases 1989–2015
- `companion-explainer-securities-fraud-primer.md` — 17-section primer

## Three Parallel Entity Chains

### Chain 1 — CIK 878146
Tele-Lawyer Inc (May 1989, private NV) → Dynamic Associates Inc (Jul 20 1989, public NV)
→ [Reverse Merger June 12 2001, 153:1 split, 99.35% dilution]
→ LATI (Kyleen E. Cane CEO 48.7%, family bloc 85.7% = 5,008,551 shares)

### Chain 2 — CIK 1059577
MW Medical Inc (incorporated Dec 4 1997, spun off Mar 11 1998 1:1)
CEO Jan Wallace, counsel Michael A. Cane
→ [Chapter 11 BK Jan 22 2002, Wallace sole secured creditor $615,871]
→ [§ 1145 exemption, subsidiaries to insiders: MW Asia→Grace Sim 95%, MW Europe→Dean Drummond 95%]
→ Microwave Debtor reorganized → Davi Skin Inc June 24 2004 (CIK 1059577 retained)
CEO Wallace, Director Kyleen Cane, CFO Grace Sim

### Chain 3 — CIK 13156
Book Corp of America → SDI (name change May 17 2000)
→ [Hostile takeover 2005–2007: Wallace "compliance expert", Cane board control, Iomega Investments (Wallace) 15M shares 48.97%]
→ $9M Cannery West casino asset strip (2005)
→ [Involuntary BK June 2008, Cane Clark petitioning creditor]
→ Galaxy Gaming Inc (operational Feb 2009)
→ $4.8M CARES Act pandemic relief (2020)

## Key Data Points for HTML

### Family Bloc (Table 3)
- Kyleen E. Cane: 48.7% of LATI (principal)
- Shirley Cane (mother): ~5.35%
- Extended Mekelburg family: ~31.65%
- Total family bloc: 85.7% = 5,008,551 shares
- Reported to SEC: 48.7% (below 50% threshold)

### Offshore Infrastructure (Table 6)
- 4 LOM nominees each at 3.97%: Arch Ltd, Sunshine Ltd, Chloe Group, Hepburn Holdings
- Combined 15.88% concealed — all below 5% Schedule 13D threshold
- Bank of NT Butterfield acct 20.006.840.351501.100
- Bank of Bermuda acct 1010-956504

### CEDE Deposits (Table 11)
- 36 sequential certs (Nos. 2029–5323), June 2004–June 2007
- 70.6% occurred Jan–Jun 2007
- Cert 5304 (Mar 5 2007): 946,085 shares
- Certs 5309–5312 (Apr 3 2007): 4 × 573,847 shares
- Total enterprise control: 76.69% of free-trading float

### Name Change Fraud
- Cane reported name change as June 28, 2001 (Kyleen E. Cane → Michael A. Cane)
- Continued operating as Michael A. Cane through late 2003
- Actual court-ordered change documented: May 19, 2004 quitclaim deed
- Signed false SOX certifications under wrong name identity for 3+ years

### Federal Funds Exposure
- $49.3M Medicare billing (Genesis Health Mgmt, 32 rural hospitals)
- $6.4M securities liquidation (offshore accounts)
- $4.8M CARES Act pandemic relief (Galaxy Gaming 2020)
- Undetermined Fannie Mae mortgage volume

## HTML Changes to Make

### Priority 1: Fix pipeline step accuracy
- Step 1: Should clearly state Tele-Lawyer merges INTO Dynamic (not just Tele-Lawyer→LATI)
- Step 2: Add MW Medical chain info + subsidiary distribution to insiders
- Step 3: Rename to "LATI Accumulates Federal Funds" — Genesis Health $49.3M Medicare
- Step 4: Keep Davi Skin offshore liquidation

### Priority 2: Add family bloc table HTML
- After section-ownership, add HTML table showing breakdown
- 85.7% family bloc breakdown with names and percentages

### Priority 3: Add SDI/Galaxy section
- New scroll section with SDI → Galaxy chain
- CARES Act fraud ($4.8M pandemic relief)

### Priority 4: Add accordion sections
- False SEC Filings (1,335 total)
- False SOX Certifications + name change backdating
- Regulation S abuse (4 nominees at 3.97%)

### Priority 5: Enhance closing
- More specific evidence items
- Panama Papers connection
- FBI investigation 2015

## CF Deployment

Using mgmt-test-atsignhandle pattern:
- `wrangler.toml` with `[assets] directory = "public"`
- SHA path: `public/5ea7f3a2/index.html`
- Worker name: `cane-explainer`
- Account: Mark.phillips@protonmail.com (fb4898c65c3c5607354cb43e8dea7c8f)
- Token: in /Users/mark.phillips/Developer/fontawesome/.env

URL: https://cane-explainer.mark-phillips-protonmail-com.workers.dev/5ea7f3a2/
