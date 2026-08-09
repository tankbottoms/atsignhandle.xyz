---
title: ""
documentclass: article
fontsize: 12pt
monofont: "Iosevka Fixed"
geometry: "left=1in,right=1in,top=1in,bottom=1in"
header-includes:
 - \usepackage{fancyhdr}
 - \usepackage{booktabs}
 - \usepackage{array}
 - \usepackage{longtable}
 - \usepackage[table]{xcolor}
 - \usepackage{hyperref}
 - \hypersetup{hidelinks}
 - \usepackage{etoolbox}
 - \usepackage{setspace}
 - \singlespacing
 - \AtBeginEnvironment{longtable}{\singlespacing\scriptsize}
 - \pagestyle{fancy}
 - \fancyhf{}
 - \fancyfoot[C]{\thepage}
 - \renewcommand{\headrulewidth}{0pt}
 - \setlength{\parindent}{0pt}
 - \setlength{\parskip}{6pt}
 - \setlength{\LTpre}{6pt}
 - \setlength{\LTpost}{6pt}
 - \setlength{\LTleft}{0pt}
 - \setlength{\LTright}{0pt}
 - \setlength{\LTcapwidth}{\textwidth}
 - \newcommand{\lightrule}{\arrayrulecolor{gray!40}\midrule\arrayrulecolor{black}}
---

\begin{center}
\textbf{TABLE FORMATTING PREVIEW}\\
\textit{Tables 3, 5, 6, 10, 11, and 16 -- Column Width Adjustments}
\end{center}

\vspace{1em}

```{=latex}
\vspace{0.3em}
\begin{scriptsize}
\begin{longtable}{@{} p{3.8cm} p{2.2cm} r r >{\raggedright\arraybackslash}p{\dimexpr\textwidth-6cm-1.6cm-8\tabcolsep\relax} @{}}
\caption*{\small\textbf{\hypertarget{tbl:3}{}Table 3.} Cane Family Coordinated Control Bloc -- Legal Access Technologies Inc. (June 2001)}\\[0.5em]
\toprule
Shareholder & Relationship & Shares & \% & Description \\
\midrule
\endfirsthead
\toprule
Shareholder & Relationship & Shares & \% & Description \\
\midrule
\endhead
Kyleen E. Cane & Principal & 2,871,051 & 48.7\% & \textit{Sole voting/dispositive power} \\
\lightrule
Herb \& Shirley Cane & Parents & 312,500 & 5.35\% & \textit{2636 Arimo, Henderson, NV}$^{*}$ \\
Stuart H. Cane & Brother & 600,000 & 9.88\% & \textit{Mekelburg Trust executor (d.\ 07/28/2016)} \\
\multicolumn{5}{@{}l}{\scriptsize\textit{--- Immediate Family ---}} \\
\lightrule
Myrna L. Mekelburg & Estate & 600,000 & 9.88\% & \textit{SC 13D filed Sept.\ 3, 2002} \\
Brian Mekelburg & Extended family & 312,500 & 5.35\% & \textit{Marina Del Rey, CA} \\
Nancy Mekelburg & Extended family & 312,500 & 5.35\% & \textit{Marina Del Rey, CA}$^{\dagger}$ \\
\multicolumn{5}{@{}l}{\scriptsize\textit{--- Mekelburg Family (linked via Stuart Cane as Trust executor) ---}} \\
\lightrule
\textbf{Total Cane Family Bloc} & & \textbf{5,008,551} & \textbf{85.7\%} & \textit{All 5 filings: June 29, 2001} \\
\lightrule
Jan Wallace + Grace Sim & Associates & 126,000 & 2.2\% & \textit{Debt settlement, June 13, 2001} \\
Former Dynamic public & Dispersed & 490,096 & 8.4\% & \textit{After 153:1 reverse split} \\
Other Tele-Lawyer holders & Associates & 220,446 & 3.8\% & \\
\lightrule
\textbf{Total Outstanding} & & \textbf{5,845,093} & \textbf{100.0\%} & \\
\bottomrule
\\
\multicolumn{5}{@{}l}{\scriptsize\textit{Note:} The 85.7\% figure represents the full coordinated Cane-Mekelburg family bloc as} \\
\multicolumn{5}{@{}l}{\scriptsize documented in Schedule 13G filings. Including Wallace and Sim (2.2\%), 62.9\% of post-merger} \\
\multicolumn{5}{@{}l}{\scriptsize shares were controlled by enterprise insiders, leaving only 12.1\% in dispersed public hands.} \\
\multicolumn{5}{@{}l}{\scriptsize $^{*}$Shirley Cane served as bond surety in \textit{United States v. Discala}, 16-CR-399 (E.D.N.Y.).} \\
\multicolumn{5}{@{}l}{\scriptsize $^{\dagger}$Nancy Mekelburg's listed phone number (702) 312-6255 is the Cane \& Company office line.} \\
\end{longtable}
\end{scriptsize}
```

\vspace{2em}

```{=latex}
\vspace{0.25em}
\begin{scriptsize}
\begin{longtable}{@{} p{4cm} p{2.4cm} p{3.4cm} r p{\dimexpr\textwidth-9.8cm-2cm-8\tabcolsep\relax} @{}}
\caption*{\textbf{\hypertarget{tbl:6}{}Table 6.} Undisclosed Offshore Account Infrastructure and Share Holdings}\\[0.5em]
\toprule
Entity & Jurisdiction & Bank/Custodian & Davi Skin Shares & \% Float\textsuperscript{a} \\
\midrule
\endfirsthead
\toprule
Entity & Jurisdiction & Bank/Custodian & Davi Skin Shares & \% Float\textsuperscript{a} \\
\midrule
\endhead
Hepburn Holdings Ltd. & Bermuda & Bank of NT Butterfield\textsuperscript{b} & 573,847 & 9.68 \\
Arch Ltd. & Bermuda & LOM Securities\textsuperscript{c} & 573,847 & 9.68 \\
Sunshine Ltd. & Bermuda & LOM Securities\textsuperscript{c} & 573,847 & 9.68 \\
Chloe Group & Cayman Islands & LOM Securities\textsuperscript{c} & 573,847 & 9.68 \\
(unnamed accounts) & Bermuda & Bank of Bermuda Ltd.\textsuperscript{d} & --- & --- \\
Aberdeen Holdings Ltd. Inc. & Bermuda & LOM Securities\textsuperscript{c} & 33 & $<$0.01 \\
Bridge Street Services & Bermuda & (facilitator) & --- & --- \\
Stone Bridge Services Ltd. & Bermuda & (facilitator) & --- & --- \\
\lightrule
\multicolumn{3}{l}{\textbf{Offshore Subtotal (Wallace-controlled)}} & \textbf{2,295,421} & \textbf{38.73} \\
% --- Domestic nominee concealment layer (Cane-controlled via LATI) ---
\lightrule
CEDE \& CO. (DTC) & United States & Depository Trust Co.\textsuperscript{e} & 2,249,825 & 37.96 \\
\lightrule
\multicolumn{3}{l}{\textbf{Total Enterprise-Controlled Shares}} & \textbf{4,545,246} & \textbf{76.69} \\
\bottomrule\\[0.25em]
\multicolumn{5}{l}{\textsuperscript{a}Percentage of 5,926,598 free-trading shares (July 13, 2007 Pacific Stock Transfer report).} \\
\multicolumn{5}{l}{\textsuperscript{b}Account 20.006.840.351501.100. \textsuperscript{c}LOM Building, 27 Reid St., Hamilton, Bermuda.} \\
\multicolumn{5}{l}{\textsuperscript{d}Account 1010-956504. \textsuperscript{e}DTC Participant Account (Cane-controlled via LATI issuance).} \\
\end{longtable}
\end{scriptsize}
```

\vspace{2em}

```{=latex}
\vspace{0.8em}
\begin{scriptsize}
\begin{longtable}{@{} p{2.8cm} r r r p{\dimexpr\textwidth-2.8cm-4.5cm-8\tabcolsep\relax} @{}}
\caption*{\normalsize\textbf{\hypertarget{tbl:11}{}Table 11.} CEDE \& CO. Certificate Deposits -- Davi Skin Inc. (CIK 0001059577)}\\
\toprule
Period & Certs & Shares & Cumulative & Key Certificates \\
\midrule
\endfirsthead
\toprule
Period & Certs & Shares & Cumulative & Key Certificates \\
\midrule
\endhead
2004 (Jun--Dec) & 3 & 21,950 & 21,950 & 2029--2030, 5095 \\
2005 (Mar--Dec) & 9 & 254,051 & 276,001 & 5107 (125,000 on 03/29) \\
2006 (Feb--Nov) & 14 & 385,439 & 661,440 & 5240 (100,000 on 06/27) \\
2007 (Jan--Jun) & 10 & 1,588,385 & 2,249,825 & \textbf{5304 (946,085 on 03/05)} \\
\lightrule
\textbf{Total} & \textbf{36} & \textbf{2,249,825} & & Cert range: 2029--5323 \\
\lightrule
\multicolumn{5}{l}{\textit{LOM Nominee Issuance (for comparison):}} \\
04/03/2007 & 4 & 2,295,388 & --- & 5309--5312 ($4 \times 573{,}847$) \\
\bottomrule\\[0.25em]
\multicolumn{5}{@{}l}{\scriptsize Source: Pacific Stock Transfer Co., Active Shareholder Report (July 13, 2007).} \\
\multicolumn{5}{@{}l}{\scriptsize Note: 70.6\% of all CEDE deposits occurred in Jan--Jun 2007, contemporaneous with} \\
\multicolumn{5}{@{}l}{\scriptsize the LOM nominee issuance. Cert 5304 (946,085 shares) was deposited 29 days before} \\
\multicolumn{5}{@{}l}{\scriptsize certs 5309--5312 (LOM nominees), confirming operational synchronization.} \\
\end{longtable}
\end{scriptsize}
```

\newpage

```{=latex}
\vspace{0.8em}
\begin{scriptsize}
\begin{longtable}{@{} p{6.5cm} r p{\dimexpr\textwidth-6.5cm-2cm-4\tabcolsep\relax} @{}}
\caption*{\textbf{\hypertarget{tbl:5}{}Table 5.} Medicare Revenue Extraction -- Officer and Related-Party Payments}\\
\toprule
Category & Amount & Recipient / Nature \\
\midrule
\endfirsthead
\toprule
Category & Amount & Recipient / Nature \\
\midrule
\endhead
\multicolumn{3}{l}{\textbf{Direct Officer Compensation}} \\
Wallace salary (1995--2001) & \$553,958 & CEO Dynamic Associates / LATI \\
Cane salary (2000--2003) & \$362,500 & CEO/President LATI \\
\lightrule
\multicolumn{3}{l}{\textbf{Cane Self-Dealing}} \\
Law firm fees (2002--2005) & \$321,234 & Cane \& Associates / Cane Clark LLP \\
Office sublease & $\sim$\$37,000 & 17\% LATI space at \$3,107--\$5,215/mo \\
UCC-1 secured loan & Undisclosed & Senior lien on all LATI assets \\
\lightrule
\multicolumn{3}{l}{\textbf{Additional Officer / Related-Party Extractions}} \\
Grace Sim salary & \$256,800 & Secretary/Treasurer/CFO (1997--1999) \\
Logan Anderson + Amteck & \$545,921 & Sec/Treasurer + entity payments \\
Harry Moll consulting & \$120,000 & Consultant/Director (1996) \\
Genesis attorney retainer & $\sim$\$480,000 & \$10--15K/month (1996--1998) \\
Genesis consultant & $\sim$\$660,000 & \$30K/month former owner (1997--1998) \\
Billy Means consulting & $\sim$\$392,667 & Consultant (1996--1998) \\
\lightrule
\textbf{Subtotal (Officer/Related-Party)} & $\sim$\textbf{\$3,730,080} & \\
\lightrule
\multicolumn{3}{l}{\textbf{Offshore Regulation S Investor Interest}} \\
Convertible note interest (1996--2000) & $\sim$\$3,284,884 & VMR/Florian Homm, Giano Capital, Upper Mill \\
\lightrule
\textbf{TOTAL DOCUMENTED EXTRACTION} & $\sim$\textbf{\$7,014,964} & \\
\lightrule
\multicolumn{3}{l}{\scriptsize Plus additional undocumented salary, options, and overhead allocations} \\
\multicolumn{3}{l}{\scriptsize charged to Medicare cost-plus reimbursement during 1994--2001 period} \\
\lightrule
\textbf{ESTIMATED TOTAL EXTRACTION} & \textbf{>\$10,260,000} & From \$49.3M--\$55.3M Medicare revenue \\
\bottomrule
\end{longtable}
\end{scriptsize}
```

\vspace{2em}

```{=latex}
\vspace{0.8em}
\begin{scriptsize}
\begin{longtable}{@{} p{2cm} p{6cm} r p{\dimexpr\textwidth-10.5cm-6\tabcolsep\relax} @{}}
\caption*{\textbf{Table 10.} SDI Pre-Petition Asset Stripping and Post-Petition Shell Conversion}\\
\toprule
\textbf{Date} & \textbf{Transaction} & \textbf{Amount} & \textbf{Recipient} \\
\midrule
Jul 2005 & Cannery West casino sale & \$9,000,000 & SDI (proceeds not reinvested) \\
Aug 2005 & Management purge (Strand, Biddle, Trolf terminated) & --- & Enterprise control established \\
Mar 4, 2005 & Derivative share issuance & 400,000 shares & Wallace \\
Oct 11, 2005 & Derivative share issuance & 250,000 shares & Johal \\
2005--2006 & Additional derivative shares & 500,000 shares & Johal \\
2005--2007 & Inflated salary accruals & Undisclosed & Wallace, executive staff \\
Feb 2, 2006 & Iomega Investments 13D filing & 15,000,000 shares & Wallace-controlled LLC \\
Jun 16, 2008 & Involuntary bankruptcy petition & --- & Cane Clark LLP (own client) \\
Feb 2009 & Shell sale to Galaxy Gaming & 25,000,000 shares & Galaxy Gaming shareholders \\
\bottomrule
\end{longtable}
\end{scriptsize}
```

\vspace{2em}

```{=latex}
\begin{scriptsize}
\begin{longtable}{@{} p{5cm} p{3.5cm} p{\dimexpr\textwidth-8.5cm-4\tabcolsep\relax} @{}}
\caption*{\textbf{Table 16.} Prior Action vs.\ Current Action: New Claims}\\
\toprule
\textbf{Claim Category} & \textbf{Prior Action (10-cv-6399)} & \textbf{Current Action} \\
\midrule
FBAR / Reverse False Claims & Not alleged & \$72M+ penalties; 21 years non-filing \\
\lightrule
RICO (civil) & Not alleged & 18+ predicate act categories; four-decade pattern \\
\lightrule
Shell Trafficking (6 CIKs) & Not alleged & Dynamic, MW Medical, LATI, Davi Skin, SDI, LVGI \\
\lightrule
Identity Fraud Infrastructure & Not alleged & False SSNs, immigration fraud, alias ``Joan Reardon'' \\
\lightrule
CEDE \& CO.\ Certificate Tracing & Not alleged & Offshore nominee beneficial ownership chain \\
\lightrule
Post-2010 Retaliation & Not possible (pre-dated) & Death threats, default judgment fraud, settlement extortion \\
\lightrule
MOD Scheme (\$35M+) & Not alleged & Five-step fraud sequence; manufactured prosecution \\
\lightrule
CARES Act (Galaxy Gaming) & Not possible (pre-dated) & \$4.8M government loans through tainted shell \\
\lightrule
Medicare (Spertell/Hunter) & Mortgage fraud only & OIG-excluded employees; \$49.3M cost-plus billings \\
\bottomrule
\end{longtable}
\end{scriptsize}
```
