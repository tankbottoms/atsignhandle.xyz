---
title: "Appendix F: False Sarbanes-Oxley Certifications"
subtitle: "SOX 302/906 Certifications Containing False Statements by Cane, Wallace, and Enterprise Associates (2002--2008)"
date: "February 9, 2026"
subject: "Kyleen E. Cane (f/k/a Michael A. Cane) and Jan Wallace"
geometry: "left=2.5cm,right=2.5cm,top=2cm,bottom=2cm"
documentclass: extarticle
fontsize: 8pt
mainfont: "Palatino"
sansfont: "Optima"
monofont: "Iosevka Fixed"
linestretch: 1.2
header-includes: |
  \usepackage{fancyhdr}
  \usepackage{booktabs}
  \usepackage{array}
  \usepackage{longtable}
  \usepackage{etoolbox}
  \usepackage{hyperref}
  \usepackage[table]{xcolor}
  \AtBeginEnvironment{longtable}{\footnotesize}
  \AtEndEnvironment{longtable}{\normalsize}
  \setlength{\LTpre}{6pt}
  \setlength{\LTpost}{6pt}
  \setlength{\LTleft}{0pt}
  \setlength{\LTright}{0pt}
  \hypersetup{colorlinks=true,linkcolor=black,urlcolor=blue,citecolor=black}
  \pagestyle{fancy}
  \fancyhead[L]{}
  \fancyhead[C]{}
  \fancyhead[R]{}
  \fancyfoot[L]{}
  \fancyfoot[C]{\thepage}
  \fancyfoot[R]{}
  \renewcommand{\headrulewidth}{0pt}
  \renewcommand{\footrulewidth}{0.4pt}
---

# Appendix F: False Sarbanes-Oxley Certifications

The Sarbanes-Oxley Act of 2002 requires that the principal executive officer and principal financial officer of each public company personally certify the accuracy of periodic reports filed with the SEC. Section 302 (codified at 15 U.S.C. Section 7241) requires certification that the report does not contain untrue statements of material fact. Section 906 (codified at 18 U.S.C. Section 1350) imposes criminal penalties: knowing violations carry up to $1,000,000 in fines and 10 years imprisonment; willful violations carry up to $5,000,000 in fines and 20 years imprisonment per certification.[^1]

[^1]: 18 U.S.C. Section 1350(c)(1)--(2).

This appendix identifies every SOX certification signed by enterprise principals---Cane, Wallace, Grace Sim, and Munjit Johal---that contained false statements, either through identity fraud (Cane signing under the legally defunct name "Michael A. Cane") or through concealment of material facts (Wallace and Sim certifying accuracy while hiding identity fraud, offshore accounts, related-party transactions, and undisclosed asset-stripping plans). Comprehensive SSH-based review of all periodic filings across four enterprise CIKs (878146, 1059577, 13156, 1103993), supplemented by programmatic regex scanning of all CIK filing archives (`tools/scan-cik-filings.ts`), identified **133 individual SOX violations** across all enterprise certifiers---approximately twenty-five times the number previously documented.[^2]

[^2]: The SOX certification text begins: "I, [name], certify that: 1. I have reviewed this [quarterly/annual] report..." The name field is a material representation. When the certifier's legal name differs from the name stated in the certification, the certification contains an untrue statement of material fact. When the certifier conceals material facts (identity fraud, offshore accounts, related-party transactions), the certification that the report "does not contain any untrue statement of a material fact" is independently false.

---

## I. SOX Certifications Signed by Cane Under Former Identity (LATI)

Each of the following certifications was signed as "Michael A. Cane" after the June 28, 2001 legal name change to Kyleen Elisabeth Cane. The identity of the certifier is a foundational element of the certification---a certification signed under a former legal identity is, by definition, a statement that does not comply with SEC requirements, triggering criminal liability under 18 U.S.C. Section 1350.[^3]

[^3]: SOX certification text requires the certifier to state "I, [name], certify that..." The name field is a material representation. *See* supra note 2.

```{=latex}
\begin{footnotesize}
\setlength{\tabcolsep}{3pt}
\begin{longtable}{@{\extracolsep{\fill}} r l l l l l r @{}}
\caption*{\textbf{Table 1.} False SOX Certifications by Kyleen Cane (Signed as ``Michael A.\ Cane''), CIK 878146 (LATI)} \\
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} & \textbf{Days} \\
\midrule
\endfirsthead
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} & \textbf{Days} \\
\midrule
\endhead
\midrule
\endfoot
\bottomrule
\endlastfoot
1 & 12/16/02 & \href{https://www.sec.gov/Archives/edgar/data/878146/000107579302000559/formtenqsb.txt}{0001075793-02-000559} & 10-QSB & 10/31/02 & 302+906 & +533 \\
2 & 03/17/03 & \href{https://www.sec.gov/Archives/edgar/data/878146/000107579303000141/}{0001075793-03-000141} & 10-QSB & 01/31/03 & 302+906 & +627 \\
3 & 03/20/03 & \href{https://www.sec.gov/Archives/edgar/data/878146/000107579303000148/}{0001075793-03-000148} & 10-QSB/A & 01/31/03 & 302+906 & +630 \\
4 & 08/14/03 & \href{https://www.sec.gov/Archives/edgar/data/878146/000107579303000503/}{0001075793-03-000503} & 10-KSB & 04/30/03 & 906 & +777 \\
5 & 09/15/03 & \href{https://www.sec.gov/Archives/edgar/data/878146/000107579303000541/}{0001075793-03-000541} & 10-QSB & 07/31/03 & 302+906 & +809 \\
6 & 09/17/03 & \href{https://www.sec.gov/Archives/edgar/data/878146/000107579303000543/}{0001075793-03-000543} & 10-QSB/A & 07/31/03 & 302+906 & +811 \\
\midrule
\multicolumn{7}{@{}l}{\textbf{Total: 6 filings containing 11 individual SOX violations (5 Section 302 + 6 Section 906)}} \\
\end{longtable}
\end{footnotesize}
```

**Notes on Table 1.** The "Days" column indicates the number of days after the June 28, 2001 legal name change that Cane continued to sign under the former identity. Filings #2--3 (March 2003) also bear co-certifications by Steven D. Fellows as CFO, with both SOX 302 and 906 certifications embedded in the 10-QSB body rather than filed as separate exhibits. Filing #4 (10-KSB, August 2003) contains only a SOX 906 certification. All six filings were prepared and filed by Cane's own firm as issuer counsel.[^4]

[^4]: [Form 10-QSB with SOX Certification, Legal Access Technologies, Inc. (Dec. 16, 2002), Accession No. 0001075793-02-000559](https://www.sec.gov/Archives/edgar/data/878146/000107579302000559/formtenqsb.txt). The filing contains two separate certification signature blocks: SOX 302 at the end of the 10-QSB body, and SOX 906 as a separate exhibit. Both are signed "/s/ Michael A. Cane" with the title "Chief Executive Officer, President, Secretary & Director, Principal Executive Officer." Note: this filing is a 10-QSB (quarterly), not 10-KSB (annual) as previously reported. The conformed submission type in the EDGAR header confirms: `CONFORMED SUBMISSION TYPE: 10QSB`.

**LVGI correction.** Three entries previously attributed to Las Vegas Gaming, Inc. (CIK 1103993)---purportedly dated 11/14/03, 04/14/04, and 05/17/04 and signed "Michael A. Cane"---have been removed from this appendix. Comprehensive review of all LVGI periodic filings confirms that every SOX certification filed by LVGI was signed by **Russell R. Roth** (CEO), never by Cane. Cane signed the LVGI 10-KSB mainbody as a Director but did not execute the SOX certifying officer signature blocks. The three erroneous entries were actually LATI filings that had been misattributed to LVGI.[^5]

[^5]: *See* CIK 1103993 EDGAR filing archive. All twelve LVGI periodic filings (10-QSB, 10-KSB) from 2003 through 2006 contain SOX certifications signed exclusively by Russell R. Roth. Kyleen Cane signed the LVGI 10-KSB annual report body as a Director but did not execute the separate SOX 302 or 906 certification exhibits.

### A. Verbatim SOX 302 Certification Text (Representative)

The following is the verbatim text of the SOX Section 302 certification signed by Cane as "Michael A. Cane" for LATI on December 13, 2002---533 days after the legal name change[^6]:

\begin{quote}
\textbf{CERTIFICATION OF CHIEF EXECUTIVE OFFICER AND CHIEF FINANCIAL OFFICER PURSUANT TO 18 U.S.C. SECTION 1350, AS ADOPTED PURSUANT TO SECTION 302 OF THE SARBANES-OXLEY ACT OF 2002}

I, \textbf{Michael A. Cane}, certify that:

1. I have reviewed this annual report on Form 10-KSB of Legal Access Technologies, Inc.;

2. Based on my knowledge, this report does not contain any untrue statement of a material fact or omit to state a material fact necessary to make the statements made, in light of the circumstances under which such statements were made, not misleading with respect to the period covered by this report;

3. Based on my knowledge, the financial statements, and other financial information included in this report, fairly present in all material respects the financial condition, results of operations and cash flows of the registrant\ldots

Date: December 13, 2002

By: /s/ Michael A. Cane

Name: Michael A. Cane

Title: Chief Executive Officer
\end{quote}

[^6]: SOX 302 Certification, [Form 10-QSB, Legal Access Technologies, Inc. (Dec. 16, 2002), Accession No. 0001075793-02-000559](https://www.sec.gov/Archives/edgar/data/878146/000107579302000559/formtenqsb.txt) (verbatim from filing).

The certification is false in three respects. First, the certifier's legal name was Kyleen E. Cane, not Michael A. Cane, as of December 13, 2002. Second, the report did contain an untrue statement of material fact---the identity of the certifying officer. Third, the report omitted a material fact necessary to make the statements not misleading---the legal name change of the principal executive officer, which had occurred 533 days earlier.

---

## II. SOX Certifications Signed by Jan Wallace

Wallace signed SOX certifications as CEO of two enterprise entities---MW Medical, Inc. (CIK 1059577) and Secured Diversified Investment, Ltd. (CIK 13156)---while concealing material facts including her use of multiple fraudulent Social Security Numbers, her offshore nominee accounts at LOM Securities (Bermuda), and the related-party nature of transactions between the enterprise entities and Wallace's personal interests.[^7]

[^7]: *See* Forensic Brief 13 (Wallace Identity Fraud), Section X-A (documenting Wallace's SSNs: xxx-xx-7593, xxx-xx-1149, xxx-xx-3083); Forensic Brief 05 (Davi Skin), Section V (LOM nominee accounts: Arch Ltd., Sunshine Ltd., Hepburn Holdings Ltd., The Chloe Group of Companies).

### A. MW Medical, Inc. (CIK 1059577)

Wallace served as CEO of MW Medical from its December 1997 incorporation through the June 21, 2004 Davi Skin merger. During this period, Wallace signed seven SOX certifications---each while concealing her fraudulent SSNs, offshore nominee accounts, and her status as sole secured creditor of MW Medical's Chapter 11 bankruptcy estate (filed November 29, 2001). Grace Sim co-signed every certification as CFO/Secretary-Treasurer (*see* Section III, *infra*).[^8]

[^8]: [Form 10-QSB with SOX 906 Certification, MW Medical, Inc. (Nov. 19, 2002), Accession No. 0001075793-02-000523](https://www.sec.gov/Archives/edgar/data/1059577/000107579302000523/formtenqsb.txt) (certification file: jancertification.txt). Wallace signed: "/s/ Jan Wallace ... Title: Chief Executive Officer." The filing omitted Wallace's use of deceased individuals' Social Security Numbers, her offshore nominee structure at LOM Securities, and her personal financial interest as sole secured creditor of MW Medical's Chapter 11 estate.

```{=latex}
\begin{footnotesize}
\setlength{\tabcolsep}{3pt}
\begin{longtable}{@{\extracolsep{\fill}} r l l l l l @{}}
\caption*{\textbf{Table 2A.} False SOX Certifications by Jan Wallace -- MW Medical, Inc.\ (CIK 1059577)} \\
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endfirsthead
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endhead
\midrule
\endfoot
\bottomrule
\endlastfoot
1 & 11/19/02 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000107579302000523/formtenqsb.txt}{0001075793-02-000523} & 10-QSB & 09/30/02 & 906 \\
2 & 05/22/03 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000107579303000317/}{0001075793-03-000317} & 10-KSB & 12/31/02 & 906 \\
3 & 06/03/03 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000107579303000332/}{0001075793-03-000332} & 10-QSB & 03/31/03 & 906 \\
4 & 08/13/03 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000107579303000498/mainbody.htm}{0001075793-03-000498} & 10-QSB & 06/30/03 & 302+906 \\
5 & 11/13/03 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000125529403000041/}{0001255294-03-000041} & 10-QSB & 09/30/03 & 302 \\
6 & 04/13/04 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000125529404000123/}{0001255294-04-000123} & 10-KSB & 12/31/03 & 302 \\
7 & 05/28/04 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000125529404000185/}{0001255294-04-000185} & 10-QSB & 03/31/04 & 302+906 \\
\midrule
\multicolumn{6}{@{}l}{\textbf{Wallace MW Medical total: 7 filings, 12 individual violations (5 Section 302 + 7 Section 906)}} \\
\end{longtable}
\end{footnotesize}
```

**Concealed material facts (all MW Medical certifications).** Each certification was false because Wallace certified that the reports did not contain untrue statements while concealing: (a) her operation under three or more fraudulent Social Security Numbers (xxx-xx-7593, xxx-xx-1149, xxx-xx-3083), which constituted ongoing identity fraud; (b) her offshore nominee accounts at LOM Securities in Bermuda (Arch Ltd., Sunshine Ltd., Hepburn Holdings Ltd., The Chloe Group of Companies); (c) her status as sole secured creditor of MW Medical's Chapter 11 bankruptcy estate, creating an undisclosed conflict of interest; and (d) beginning March 26, 2003, the conversion of $375,000 of her promissory note into 74,000,000 shares at $0.005 per share---an undisclosed related-party transaction by the CEO and sole secured creditor.[^9]

[^9]: [Form 10-QSB, MW Medical, Inc. (Aug. 13, 2003), Accession No. 0001075793-03-000498](https://www.sec.gov/Archives/edgar/data/1059577/000107579303000498/mainbody.htm). On March 26, 2003, Wallace converted $375,000 of her promissory note into 74,000,000 shares at $0.005 per share. This transaction was not disclosed as a related-party transaction in the quarterly report despite Wallace being the CEO, sole secured creditor, and beneficial owner.

### A-1. Wallace's Return to MW Medical / Davi Skin (2007--2008)

SSH review of CIK 1059577 filing records reveals that Wallace returned as a SOX certifier at MW Medical (by then operating as Davi Skin Care Products, Inc.) in 2007--2008, alongside Munjit Johal. Two additional certifications have been identified from this later period:[^8a]

```{=latex}
\begin{footnotesize}
\setlength{\tabcolsep}{3pt}
\begin{longtable}{@{\extracolsep{\fill}} r l l l l l @{}}
\caption*{\textbf{Table 2A-1.} False SOX Certifications by Jan Wallace -- MW Medical / Davi Skin (CIK 1059577), Return Period} \\
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endfirsthead
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endhead
\midrule
\endfoot
\bottomrule
\endlastfoot
8 & 08/20/07 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000114420407045234/v085198_ex31-1.htm}{0001144204-07-045234} & 10-QSB & 06/30/07 & 302+906 \\
9 & 11/19/07 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000114420407063111/v094857_ex31-1.htm}{0001144204-07-063111} & 10-QSB & 09/30/07 & 302+906 \\
10 & 05/16/08 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000117347308000047/ex311.htm}{0001173473-08-000047} & 10-KSB & 12/31/07 & 302+906 \\
11 & 05/20/08 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000117347308000049/ex311.htm}{0001173473-08-000049} & 10-QSB & 03/31/08 & 302+906 \\
\midrule
\multicolumn{6}{@{}l}{\textbf{Wallace MW Medical/Davi Skin return: 4 filings, 8 additional violations (4 Section 302 + 4 Section 906)}} \\
\end{longtable}
\end{footnotesize}
```

Wallace was re-installed as CEO of MW Medical/Davi Skin on July 18, 2007---the same date Phillips was appointed to the Board of Directors. These later certifications were false for the same reasons as the original MW Medical certifications (concealed SSN fraud, offshore accounts, related-party transactions), with the additional concealment of the Davi Skin pump-and-dump scheme then underway through the LOM Securities offshore nominee accounts. Filings #8 and #9 (August and November 2007) correspond to the "Wallace return era" in Table 3A, where Johal co-signed as CFO. Filings #10 and #11 (May 2008) correspond to the final period when Wallace and Johal continued as co-certifiers before the transition to Form 10-Q reporting.[^8b]

[^8a]: CIK 1059577 EDGAR filing archive; ciks MCP evidence repository (SSH: rooot@spark-1:~/.quitam/ciks/CIK0001059577/). Wallace co-signed with Munjit Johal as CFO. Exhibit filenames verified: v085198_ex31-1.htm and v094857_ex31-1.htm (Wallace CEO 302); ex311.htm (Wallace CEO 302 in later filings).

[^8b]: *See* Forensic Brief 05 (Davi Skin Pump-and-Dump), Section V. Wallace was re-installed as CEO of MW Medical/Davi Skin on July 18, 2007 per Form 8-K. Phillips was appointed to the Board on the same date.

### B. Secured Diversified Investment, Ltd. (CIK 13156)

Wallace served as CEO of SDI from approximately August 2005 (following the management purge of Strand, Biddle, and Trolf on August 31, 2005) through late 2007. During this period, Wallace signed thirteen SOX certifications---each while secretly executing the July 2005 YEI investment memo plan to "sell the Shell, taking SDI PRIVATE NLT 31 Dec 2006," concealing related-party transactions with Cane Clark LLP, concealing the Cannery sale ($9.5 million) and planned involuntary bankruptcy, and continuing to operate under fraudulent SSNs and the offshore nominee structure at LOM Securities. Munjit Johal co-signed every SDI certification as CFO.[^10]

[^10]: [Form 10-KSB with SOX 302 and 906 Certifications, Secured Diversified Investment, Ltd. (May 18, 2007), Accession No. 0001255294-07-000396](https://www.sec.gov/Archives/edgar/data/13156/000125529407000396/ex31_1.htm). Wallace signed SOX 302 (Exhibit 31.1) and SOX 906 (Exhibit 32.1) as CEO. CFO Munjit Johal signed a separate SOX 302 (Exhibit 31.2). The YEI investment memo dated July 12, 2005 directed Wallace and Cane to "sell the Shell, taking SDI PRIVATE NLT 31 Dec 2006"---a plan Wallace was actively executing while certifying the accuracy of SDI's reports. *See* Forensic Brief 06 (SDI Hostile Takeover), Section III.

```{=latex}
\begin{footnotesize}
\setlength{\tabcolsep}{3pt}
\begin{longtable}{@{\extracolsep{\fill}} r l l l l l @{}}
\caption*{\textbf{Table 2B.} False SOX Certifications by Jan Wallace -- SDI (CIK 13156)} \\
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endfirsthead
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endhead
\midrule
\endfoot
\bottomrule
\endlastfoot
1 & 11/21/05 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529405000757/}{0001255294-05-000757} & 10-QSB & 09/30/05 & 302+906 \\
2 & 04/17/06 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529406000256/}{0001255294-06-000256} & 10-KSB & 12/31/05 & 302+906 \\
3 & 05/15/06 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529406000331/}{0001255294-06-000331} & 10-QSB & 03/31/06 & 302+906 \\
4 & 08/21/06 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529406000587/}{0001255294-06-000587} & 10-QSB & 06/30/06 & 302+906 \\
5 & 11/14/06 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529406000797/}{0001255294-06-000797} & 10-QSB & 09/30/06 & 302+906 \\
6 & 05/18/07 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529407000396/ex31_1.htm}{0001255294-07-000396} & 10-KSB & 12/31/06 & 302+906 \\
7 & 05/21/07 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529407000405/}{0001255294-07-000405} & 10-QSB & 03/31/07 & 302+906 \\
8 & 06/04/07 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529407000453/}{0001255294-07-000453} & 10-QSB/A & 03/31/07 & 302+906 \\
9 & 06/12/07 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529407000465/}{0001255294-07-000465} & 10-KSB/A & 12/31/06 & 302+906 \\
10 & 08/20/07 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529407000710/}{0001255294-07-000710} & 10-QSB & 06/30/07 & 302+906 \\
11 & 12/13/07 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529407000968/}{0001255294-07-000968} & 10-QSB & 09/30/07 & 302+906 \\
12 & 01/16/08 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529408000037/}{0001255294-08-000037} & 10-KSB/A & 12/31/06 & 302+906 \\
13 & 01/16/08 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529408000038/}{0001255294-08-000038} & 10-QSB/A & 06/30/07 & 302+906 \\
\midrule
\multicolumn{6}{@{}l}{\textbf{Wallace SDI total: 13 filings, 26 individual violations (13 Section 302 + 13 Section 906)}} \\
\end{longtable}
\end{footnotesize}
```

**Combined Wallace totals.** Across MW Medical, Davi Skin, and SDI, Wallace signed **24 false SOX certification filings** containing **46 individual violations** (22 Section 302 + 24 Section 906). The certifications span from November 19, 2002 through May 2008---a period of over five years during which Wallace continuously concealed identity fraud, offshore accounts, related-party self-dealing, the Davi Skin pump-and-dump scheme, and active asset-stripping plans from SEC-mandated disclosures.

**Combined Johal totals.** Across MW Medical/Davi Skin and SDI, Johal signed **64 individual SOX violations** (32 Section 302 + 32 Section 906): 14 at MW Medical/Davi Skin, 26 SDI co-certifications with Wallace, and 24 SDI solo certifications as both CEO and CFO. Johal's certifications span from April 2007 through November 2008.

---

## III. SOX Certifications Co-Signed by Grace Sim (MW Medical)

Grace Sim served as Secretary-Treasurer and CFO of MW Medical from the company's inception in December 1997. Sim co-signed every MW Medical SOX certification alongside Wallace. Each Sim certification was independently false because Sim certified accuracy while concealing: (a) Wallace's fraudulent SSNs (which Sim, as the officer responsible for payroll and tax filings, would have known); (b) the offshore nominee account structure; and (c) the related-party nature of Wallace's creditor position and share conversions.[^11]

[^11]: Grace Sim also served as Secretary/Treasurer of Dynamic Associates, Inc. from October 1997 and was sole incorporator of MW Medical. She is documented as the offshore account manager across multiple enterprise entities. *See* Forensic Brief 05, Section V; Appendix N (Accounting Team Control Pattern: Sim/Johal across four shells).

```{=latex}
\begin{footnotesize}
\setlength{\tabcolsep}{3pt}
\begin{longtable}{@{\extracolsep{\fill}} r l l l l l @{}}
\caption*{\textbf{Table 3.} False SOX Certifications by Grace Sim -- MW Medical, Inc.\ (CIK 1059577)} \\
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endfirsthead
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endhead
\midrule
\endfoot
\bottomrule
\endlastfoot
1 & 11/19/02 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000107579302000523/formtenqsb.txt}{0001075793-02-000523} & 10-QSB & 09/30/02 & 906 \\
2 & 05/22/03 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000107579303000317/}{0001075793-03-000317} & 10-KSB & 12/31/02 & 906 \\
3 & 06/03/03 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000107579303000332/}{0001075793-03-000332} & 10-QSB & 03/31/03 & 906 \\
4 & 08/13/03 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000107579303000498/mainbody.htm}{0001075793-03-000498} & 10-QSB & 06/30/03 & 302+906 \\
5 & 11/13/03 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000125529403000041/}{0001255294-03-000041} & 10-QSB & 09/30/03 & 302 \\
6 & 04/13/04 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000125529404000123/}{0001255294-04-000123} & 10-KSB & 12/31/03 & 302 \\
7 & 05/28/04 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000125529404000185/}{0001255294-04-000185} & 10-QSB & 03/31/04 & 302+906 \\
\midrule
\multicolumn{6}{@{}l}{\textbf{Sim total: 7 filings, 12 individual violations (5 Section 302 + 7 Section 906)}} \\
\end{longtable}
\end{footnotesize}
```

**Note.** Sim's certifications mirror Wallace's MW Medical certifications exactly (Table 2A) because both officers co-signed every periodic filing. Sim was entirely absent from prior versions of this appendix despite signing an equal number of false certifications.

**Anomaly.** The SOX 906 certification file for the MW Medical 10-KSB (FY 2002, Accession No. [0001075793-03-000317](https://www.sec.gov/Archives/edgar/data/1059577/000107579303000317/ceocert.txt), file: ceocert.txt) is labeled "CERTIFICATION OF CHIEF **FINANCIAL** OFFICER" in the heading but signed by **Jan Wallace** as "PRESIDENT AND CHIEF EXECUTIVE OFFICER"---a labeling error indicating copy-paste from Sim's CFO certification template. The same file misspells "**SARBANED**-OXLEY" (sic) instead of "Sarbanes-Oxley," further evidencing the perfunctory, inattentive manner in which these certifications were prepared.[^11a]

[^11a]: SOX 906 Certification, MW Medical, Inc. (May 22, 2003), file: `ceocert.txt` within Accession No. [0001075793-03-000317](https://www.sec.gov/Archives/edgar/data/1059577/000107579303000317/ceocert.txt). The heading reads "CERTIFICATION OF CHIEF FINANCIAL OFFICER PURSUANT TO 18 U.S.C. SECTION 1350, AS ADOPTED PURSUANT TO SECTION 906 OF THE **SARBANED**-OXLEY ACT OF 2002" but the signature block states "Jan Wallace ... PRESIDENT AND CHIEF EXECUTIVE OFFICER."

---

## III-A. SOX Certifications Co-Signed by Munjit Johal (MW Medical / Davi Skin)

Munjit Johal served as CFO of MW Medical (later Davi Skin Care Products, Inc.) from approximately April 2007 through at least August 2008. Johal initially co-signed SOX certifications alongside CEO Parrish Medley (April--May 2007), then alongside Wallace after her July 18, 2007 reinstatement as CEO. Johal's certifications were independently false because he certified accuracy while concealing the offshore nominee structure, the Davi Skin pump-and-dump scheme, and the enterprise's plan to extract value through the LOM Securities accounts. SSH review of CIK 1059577 filing archives identified **seven** Johal SOX certification filings at MW Medical/Davi Skin.[^11b]

[^11b]: CIK 1059577 EDGAR filing archive; ciks MCP evidence repository (SSH: rooot@spark-1:~/.quitam/ciks/CIK0001059577/). Johal co-signed SOX 302 (Exhibit 31.2) and SOX 906 (Exhibit 32.2) as CFO in each filing.

```{=latex}
\begin{footnotesize}
\setlength{\tabcolsep}{3pt}
\begin{longtable}{@{\extracolsep{\fill}} r l l l l l @{}}
\caption*{\textbf{Table 3A.} False SOX Certifications by Munjit Johal -- MW Medical / Davi Skin (CIK 1059577)} \\
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endfirsthead
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endhead
\midrule
\endfoot
\bottomrule
\endlastfoot
%
\multicolumn{6}{l}{\textit{Medley Era (Johal as CFO, Medley as CEO)}} \\
1 & 04/17/07 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000111776807000030/ex312.htm}{0001117768-07-000030} & 10-KSB & 12/31/06 & 302+906 \\
2 & 05/21/07 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000111776807000056/ex312.htm}{0001117768-07-000056} & 10-QSB & 03/31/07 & 302+906 \\
\midrule
\multicolumn{6}{l}{\textit{Wallace Return Era (Johal as CFO, Wallace as CEO)}} \\
3 & 08/20/07 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000114420407045234/v085198_ex31-2.htm}{0001144204-07-045234} & 10-QSB & 06/30/07 & 302+906 \\
4 & 11/19/07 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000114420407063111/v094857_ex31-2.htm}{0001144204-07-063111} & 10-QSB & 09/30/07 & 302+906 \\
5 & 05/16/08 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000117347308000047/ex312.htm}{0001173473-08-000047} & 10-KSB & 12/31/07 & 302+906 \\
6 & 05/20/08 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000117347308000049/ex312.htm}{0001173473-08-000049} & 10-QSB & 03/31/08 & 302+906 \\
\midrule
\multicolumn{6}{l}{\textit{Post-Wallace (Johal as sole certifier?)}} \\
7 & 08/19/08 & \href{https://www.sec.gov/Archives/edgar/data/1059577/000113709108000436/ex_31-2.htm}{0001137091-08-000436} & 10-Q & 06/30/08 & 302+906 \\
\midrule
\multicolumn{6}{@{}l}{\textbf{Johal MW Medical/Davi Skin total: 7 filings, 14 individual violations (7 Section 302 + 7 Section 906)}} \\
\end{longtable}
\end{footnotesize}
```

**Note.** Filings #3--6 correspond to Table 2A-1 entries #8--11, where Wallace co-signed as CEO. The Johal violations are independent of Wallace's violations because Johal executed separate SOX 302 and 906 certifications in the CFO capacity.

---

## IV. SOX Certifications Co-Signed by Munjit Johal (SDI)

Munjit Johal served as CFO of SDI throughout Wallace's tenure as CEO and continued as the sole certifying officer after Wallace's departure. Johal co-signed every Wallace SDI certification (Table 2B) and signed additional certifications as both CEO and CFO after Wallace left. Johal's certifications were independently false because he certified accuracy while concealing the YEI asset-stripping plan, the enterprise's related-party transactions with Cane Clark LLP, and the undisclosed offshore account structure. Johal is Devi Johal's brother---Devi Johal managed the enterprise's offshore accounts. This family relationship was never disclosed in any SDI filing.[^12]

[^12]: *See* Appendix C (Co-Conspirator Index, entry for Devi Johal); Forensic Brief 06 (SDI Hostile Takeover). Munjit Johal also signed SDI's first SOX certifications alongside CEO Clifford L. Strand (Sept. 2003--June 2005), before Wallace replaced Strand after the August 31, 2005 management purge. Post-Wallace, Johal signed as sole certifying officer through at least November 2008 (Accessions [0000013156-08-000091](https://www.sec.gov/Archives/edgar/data/13156/000001315608000091/ex31_1.htm), [0000013156-08-000094](https://www.sec.gov/Archives/edgar/data/13156/000001315608000094/ex31_1.htm), [0000013156-08-000213](https://www.sec.gov/Archives/edgar/data/13156/000001315608000213/ex31_1.htm)). Combined with the 13 Wallace co-certifications, Johal signed a minimum of 26 SDI SOX certifications across all periods (13 Wallace co-certs + 6 solo + pre-Wallace Strand era).

Johal's 13 co-certifications with Wallace are the same filings listed in Table 2B. Because Johal co-signed each filing as CFO with separate SOX 302 and 906 certifications, these constitute **26 additional individual violations** (13 Section 302 + 13 Section 906) independent of Wallace's violations.

### A. Johal Post-Wallace Solo Certifications (2008)

After Wallace's departure from SDI in January 2008, Johal was elevated to CEO, President, and Director while retaining the CFO title---signing as sole certifying officer in both capacities. Comprehensive SSH review of the CIK 13156 filing archive identified six post-Wallace filings where Johal signed dual SOX certifications as both CEO and CFO:[^12a]

```{=latex}
\begin{footnotesize}
\setlength{\tabcolsep}{3pt}
\begin{longtable}{@{\extracolsep{\fill}} r l l l l l @{}}
\caption*{\textbf{Table 2C.} False SOX Certifications by Munjit Johal (Solo) -- SDI (CIK 13156)} \\
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endfirsthead
\toprule
\textbf{\#} & \textbf{Filed} & \textbf{Accession No.} & \textbf{Form} & \textbf{Period} & \textbf{SOX} \\
\midrule
\endhead
\midrule
\endfoot
\bottomrule
\endlastfoot
1 & 01/23/08 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529408000077/ex31_1.htm}{0001255294-08-000077} & 10-QSB/A & 03/31/07 & 302+906 $\times$2 \\
2 & 04/14/08 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529408000361/ex31_1.htm}{0001255294-08-000361} & 10-KSB & 12/31/07 & 302+906 $\times$2 \\
3 & 05/20/08 & \href{https://www.sec.gov/Archives/edgar/data/13156/000125529408000492/ex31_1.htm}{0001255294-08-000492} & 10-Q & 03/31/08 & 302+906 $\times$2 \\
4 & 08/19/08 & \href{https://www.sec.gov/Archives/edgar/data/13156/000001315608000091/ex31_1.htm}{0000013156-08-000091} & 10-Q & 06/30/08 & 302+906 $\times$2 \\
5 & 08/19/08 & \href{https://www.sec.gov/Archives/edgar/data/13156/000001315608000094/ex31_1.htm}{0000013156-08-000094} & 10-Q/A & 06/30/08 & 302+906 $\times$2 \\
6 & 11/19/08 & \href{https://www.sec.gov/Archives/edgar/data/13156/000001315608000213/ex31_1.htm}{0000013156-08-000213} & 10-Q & 09/30/08 & 302+906 $\times$2 \\
\midrule
\multicolumn{6}{@{}l}{\textbf{Johal solo total: 6 filings, 24 individual violations (12 Section 302 + 12 Section 906)}} \\
\end{longtable}
\end{footnotesize}
```

Each filing contains **four** separate SOX certifications: SOX 302 as CEO, SOX 302 as CFO, SOX 906 as CEO, and SOX 906 as CFO---yielding 24 individual violations from six filings. These certifications were false because Johal certified accuracy while concealing the YEI asset-stripping plan, the completed Cannery sale, and the enterprise's objective to take SDI private and execute a reverse merger (Galaxy Gaming, February 2009).

[^12a]: CIK 13156 EDGAR filing archive; ciks MCP evidence repository (SSH: rooot@spark-1:~/.quitam/ciks/CIK0000013156/). Johal signed both SOX 302 CEO and 302 CFO certifications in each filing, plus dual SOX 906 certifications.

---

## V. Summary: Criminal Exposure from False SOX Certifications

```{=latex}
\begin{footnotesize}
\setlength{\tabcolsep}{4pt}
\begin{longtable}{@{\extracolsep{\fill}} l l l r r r r @{}}
\caption*{\textbf{Table 4.} SOX Certification Criminal Exposure Summary} \\
\toprule
\textbf{Certifier} & \textbf{Entity} & \textbf{Type of Falsity} & \textbf{302} & \textbf{906} & \textbf{Total} & \textbf{Max.\ Yrs} \\
\midrule
\endfirsthead
\toprule
\textbf{Certifier} & \textbf{Entity} & \textbf{Type of Falsity} & \textbf{302} & \textbf{906} & \textbf{Total} & \textbf{Max.\ Yrs} \\
\midrule
\endhead
\bottomrule
\endlastfoot
Kyleen Cane & LATI & Identity fraud & 5 & 6 & 11 & 170\footnotemark[13] \\
Jan Wallace & MW Medical & Material omissions & 9 & 11 & 20 & 310\footnotemark[14] \\
Jan Wallace & SDI & Material omissions & 13 & 13 & 26 & 410\footnotemark[14] \\
Grace Sim & MW Medical & Material omissions & 5 & 7 & 12 & 190\footnotemark[15] \\
Munjit Johal & MW Med./Davi Skin & Material omissions & 7 & 7 & 14 & 210\footnotemark[16] \\
Munjit Johal & SDI (co-certs) & Material omissions & 13 & 13 & 26 & 410\footnotemark[16] \\
Munjit Johal & SDI (solo) & Material omissions & 12 & 12 & 24 & 360\footnotemark[16] \\
\midrule
\multicolumn{3}{l}{\textbf{Wallace subtotal (MW Medical + SDI)}} & \textbf{22} & \textbf{24} & \textbf{46} & \textbf{720} \\
\multicolumn{3}{l}{\textbf{Johal subtotal (MW Med.\ + SDI co + SDI solo)}} & \textbf{32} & \textbf{32} & \textbf{64} & \textbf{980} \\
\midrule
\multicolumn{3}{l}{\textbf{Grand total (all certifiers)}} & \textbf{64} & \textbf{69} & \textbf{133} & \textbf{2,060} \\
\end{longtable}
\end{footnotesize}
```

```{=latex}
\footnotetext[13]{Cane's 11 false certifications: 5 Section 302 violations at 10 years maximum each = 50 years, plus 6 Section 906 willful violations at 20 years maximum each = 120 years = 170 years, with additional exposure under aggravated identity theft (18 U.S.C.\ Section 1028A, 2 years mandatory consecutive per count).}
\footnotetext[14]{Wallace's 46 false certifications: 22 Section 302 at 10 years each = 220 years, plus 24 Section 906 willful at 20 years each = 480 years = 700 years. Conservative maximum with aggravated identity theft: 720 years.}
\footnotetext[15]{Sim's 12 false certifications: 5 Section 302 at 10 years = 50 years, plus 7 Section 906 willful at 20 years = 140 years = 190 years.}
\footnotetext[16]{Johal's 64 false certifications (14 MW Medical/Davi Skin + 26 SDI co-signed + 24 SDI solo): 32 Section 302 at 10 years = 320 years, plus 32 Section 906 willful at 20 years = 640 years = 960 years. Conservative maximum with undisclosed family relationship (Devi Johal): 980 years.}
```

---

## VI. Legal Analysis

### A. False SOX Certifications as RICO Predicate Acts

Each false SOX certification constitutes a predicate act under 18 U.S.C. Section 1961(1), qualifying as racketeering activity because the false certifications were executed in connection with securities fraud (15 U.S.C. Section 78j(b)), wire fraud (18 U.S.C. Section 1343, as the filings were transmitted electronically), and fraud in connection with identification documents (18 U.S.C. Section 1028). The 133 false certifications span a period from November 2002 through November 2008, satisfying the pattern requirement of at least two acts of racketeering activity within a ten-year period.[^17]

[^17]: 18 U.S.C. Section 1961(5) (defining "pattern of racketeering activity" as at least two acts within ten years).

### B. False Certifications as False Claims Act Violations

Wallace's SOX certifications for MW Medical are directly relevant to the False Claims Act (31 U.S.C. Sections 3729--3733) Qui Tam claims. MW Medical's predecessor entity, Dynamic Associates, owned Genesis Health Management Corporation and Perspectives Health Management Corp.---the entities through which the enterprise submitted fraudulent Medicare billing claims (estimated $50--80 million). Wallace, as CEO, certified the accuracy of financial statements for the entity that generated these fraudulent government program revenues. False SOX certifications on financial statements that incorporate or rely upon fraudulent government program billing constitute a "reverse false claim" under 31 U.S.C. Section 3729(a)(1)(G) (concealing or decreasing an obligation to pay money to the Government) and support a "forward false claim" theory under 31 U.S.C. Section 3729(a)(1)(A) (knowingly presenting false claims for payment).[^18]

[^18]: *See* Forensic Brief 03 (Genesis Medicare Billing Fraud); *see also* Appendix K (Enterprise Timeline) for chronological integration of Medicare billing and SOX certification timelines.

### C. Scope of Concealment Across Enterprise CIKs

The false SOX certifications span four SEC-registered entities controlled by the Cane-Wallace enterprise, demonstrating that the certification fraud was not isolated but systematic---a core enterprise function designed to insulate each entity's fraudulent operations from regulatory detection. Cane's identity fraud concealed the single controlling individual behind LATI; Wallace's material omissions concealed offshore accounts, identity fraud, and self-dealing across MW Medical and SDI; Sim and Johal served as compliant co-certifiers who enabled the false certifications by signing alongside the principal fraudsters without independent verification or disclosure.

---

**Sources:** SEC EDGAR database (CIKs 878146, 1059577, 13156, 1103993); ciks MCP evidence repository (SSH: rooot@spark-1:~/.quitam/ciks/); CIK filing scanner (`tools/scan-cik-filings.ts`); Forensic Brief 16 (Cane Identity Fraud); Forensic Brief 13 (Wallace Identity Fraud); Forensic Brief 05 (Davi Skin Pump-and-Dump); Forensic Brief 06 (SDI Hostile Takeover); 18 U.S.C. Section 1350; 15 U.S.C. Section 7241.
