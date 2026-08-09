---
title: ""
subtitle: ""
date: ""
documentclass: article
fontsize: 11pt
monofont: "Iosevka Fixed"
geometry: "left=1in,right=1in,top=1in,bottom=1in"
header-includes:
  - \usepackage{fancyhdr}
  - \usepackage{hyperref}
  - \usepackage{setspace}
  - \usepackage{booktabs}
  - \usepackage{longtable}
  - \usepackage{array}
  - \usepackage{amssymb}
  - \usepackage[table]{xcolor}
  - \singlespacing
  - \pagestyle{fancy}
  - \fancyhf{}
  - \fancyfoot[C]{\thepage}
  - \renewcommand{\headrulewidth}{0pt}
  - \setlength{\parindent}{0em}
  - \setlength{\parskip}{10pt}
  - \hypersetup{colorlinks=true,linkcolor=blue,urlcolor=blue}

---

```{=latex}
\vspace*{2cm}

\begin{center}
\rule{\textwidth}{0.4pt}\\[2pt]
\textbf{Companion Guide:\\Securities Fraud, Shell Companies, and Federal Enforcement\\[6pt]\normalsize A Non-Expert Reference to the Cane Enterprise Analysis}\\[-4pt]
\rule{\textwidth}{0.4pt}
\end{center}

\vspace{0.3cm}

\begin{center}
\textit{This guide explains the financial, legal, and regulatory concepts\\referenced in the forensic analysis of Attorney Kyleen E.\ Cane's\\securities fraud and federal funds exposure.}
\end{center}
```

\newpage

## I. The Value of a Public Shell Company

A "shell company" is a corporation that exists as a legal entity but has no significant operations or assets. It may have once been a real business that failed, or it may have been created specifically to serve as a vehicle for future transactions. Shell companies are not inherently illegal --- many legitimate mergers begin with one --- but they are the essential raw material for securities fraud.

**Why shells have value.** A company that is already registered with the SEC and has publicly traded stock can be worth hundreds of thousands of dollars to someone who wants to sell securities to the public without going through the lengthy, expensive, and heavily scrutinized Initial Public Offering (IPO) process. Buying control of a shell lets you skip that scrutiny entirely.

**In this case:** Cane did not buy shells --- she manufactured them. Dynamic Associates was a real company with real shareholders. MW Medical was spun off from Dynamic. Through a series of mergers, bankruptcies, and name changes, Cane converted these operating companies into empty vessels she controlled, then used them to sell stock to the public.

## II. How a Reverse Merger Works

In a normal merger, Company A buys Company B. In a **reverse merger**, the smaller private company (Tele-Lawyer) arranges to be acquired by the larger public company (Dynamic Associates), but the private company's owners end up controlling the combined entity. The "public shell" survives as the legal entity --- keeping its stock ticker, SEC registration, and shareholder base --- but the people running it are entirely new.

**Why it matters.** A reverse merger lets a private company become publicly traded overnight, without filing an IPO registration statement, without underwriter due diligence, and without the SEC reviewing the transaction in advance. The new controllers inherit a ready-made public company with existing shareholders who have no idea what just happened to their investment.

**The stock split trick.** To ensure the new controllers own the vast majority of the combined company, a reverse stock split is typically executed simultaneously. In Cane's case, a **153:1 reverse split** meant that every 153 shares held by existing Dynamic shareholders became 1 share. This diluted the original public shareholders by 99.35%. The Tele-Lawyer shareholders (Cane's family) received new shares at the post-split ratio, giving them 85.7% of the combined entity.

**The effect on real people.** If you owned 15,300 shares of Dynamic Associates worth \$15,300, after the reverse split you owned 100 shares. Meanwhile, the Cane family held over 5 million shares. Your ownership went from meaningful to microscopic.

## III. What Is a CUSIP Number?

A **CUSIP** (Committee on Uniform Securities Identification Procedures) is a nine-character alphanumeric code that uniquely identifies a specific security --- like a Social Security number for a stock or bond. Every publicly traded stock, bond, mutual fund, and derivative in North America has one.

**Why it matters here.** When a company changes its name (MW Medical $\rightarrow$ Davi Skin), a new CUSIP is issued. The old shares under the old CUSIP must be exchanged for new shares under the new CUSIP. This exchange process --- handled by the stock transfer agent --- is where restricted shares can be quietly converted to free-trading shares if no one is watching closely. Davi Skin's CUSIP was **238528103**. The certificate register under this CUSIP is the forensic proof of the entire liquidation scheme.

## IV. SEC Filing Types and Requirements

The SEC requires public companies to disclose their financial condition and ownership structure through standardized filings. Understanding these filing types is essential to understanding how Cane concealed her control.

```{=latex}
\vspace{0.1cm}
\begin{center}
\footnotesize
\renewcommand{\arraystretch}{1.3}
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}} l p{10cm}}
\toprule
\textbf{Filing} & \textbf{What It Is} \\
\midrule
\textbf{10-K / 10-KSB} & Annual report. Financial statements, management discussion, beneficial ownership table listing everyone who owns more than 5\%. This is where the company must disclose who controls it. \\
\textbf{10-Q / 10-QSB} & Quarterly report. Updated financials filed every three months. \\
\textbf{8-K} & Current report. Filed within four business days of any ``material event'' --- a merger, bankruptcy, change of officers, or any event that would matter to an investor. \\
\textbf{DEF 14A} & Definitive proxy statement. Sent to shareholders before a vote. Contains the beneficial ownership table and board nominees. The Dynamic DEF 14A is the filing that shows both sides of the reverse merger. \\
\textbf{Schedule 13D} & Filed by anyone acquiring more than 5\% of a public company \textit{with the intent to influence control}. Must disclose the purpose of the acquisition. \\
\textbf{Schedule 13G} & A shorter version of 13D, available only to ``passive'' investors --- those who claim they are \textit{not} seeking to change or influence control. Cane's family members all filed 13G (passive) rather than 13D (active), concealing their coordinated control. \\
\textbf{Form 3 / 4 / 5} & Insider ownership reports. Form 3 = initial report when becoming an insider. Form 4 = changes in ownership. Form 5 = annual summary of transactions not previously reported. Cane's Form 5 is the filing that contains the backdated name change. \\
\textbf{Regulation S} & Not a filing but an \textit{exemption} --- allows sale of securities to non-U.S.\ persons without SEC registration. See Section VII below. \\
\bottomrule
\end{tabular*}
\end{center}
\vspace{0.1cm}
```

**The 5% threshold.** Federal securities law draws a bright line at 5% ownership. Below 5%, you are generally invisible to regulators. Above 5%, you must file a Schedule 13D or 13G disclosing your identity, the number of shares you own, and your intentions. Cane calibrated the four LOM offshore nominees at exactly 3.97% each --- just below the threshold --- to avoid triggering any disclosure requirement.

## V. Beneficial Ownership and Concealed Control

**Beneficial ownership** means you have the economic benefit or voting power over shares, even if you are not the registered holder. If your mother holds shares at your direction, you are the beneficial owner and must report them.

**How Cane concealed control.** Cane reported owning 48.7% individually --- below the 50% majority threshold. But her parents (Herb and Shirley Cane), brother (Stuart Cane), and extended family (the Mekelburgs) collectively held an additional 36.4%, bringing the family total to 85.7%. All five family filings were submitted on the same date (June 29, 2001), three days after Cane's own filing. No filing disclosed the family relationship or coordinated nature of the holdings. Each family member filed a Schedule 13G (passive investor), when in reality they were acting as a coordinated group under Cane's direction --- which would have required a joint Schedule 13D disclosing the group's combined 85.7% control.

## VI. Subsidiary Spin-Offs and Tax-Free Events

A **spin-off** occurs when a parent company distributes shares of a subsidiary to its existing shareholders, creating a separate publicly traded company. Under Section 355 of the Internal Revenue Code, this can be done **tax-free** if certain conditions are met.

**How Cane used it.** MW Medical was spun off from Dynamic Associates on March 11, 1998, with shares distributed 1:1 to Dynamic shareholders. This created a second public entity (CIK 1059577) with the same ownership structure as the first. Cane now controlled two public shells instead of one --- doubling her capacity to issue and sell securities --- without paying any tax on the transaction.

**The multiplication effect.** Each shell can authorize millions of shares. Each shell has its own CUSIP, its own transfer agent, its own SEC filings. By spinning off subsidiaries, Cane created parallel pipelines for converting private ownership into publicly tradable stock.

## VII. Regulation S and Opinion Letters

**Regulation S** is an SEC exemption that allows U.S.\ companies to sell securities to investors outside the United States without registering those securities with the SEC. The theory is that foreign investors are protected by their own countries' securities laws. In practice, Regulation S has been one of the most abused exemptions in securities fraud.

**How it works.** Shares issued under Regulation S carry a "restrictive legend" --- a notation on the stock certificate stating they cannot be sold in the United States for a specified period (typically 40 days to one year). After the restriction period, the legend can be removed, and the shares become "free-trading" --- indistinguishable from any other share on the open market.

**Opinion letters.** To remove a restrictive legend, the stock transfer agent requires a legal opinion letter from a securities attorney certifying that the restriction period has expired and the shares may lawfully be traded. This letter is the key that unlocks restricted shares.

**The conflict of interest.** Cane served simultaneously as (a) the beneficial owner of the restricted shares, (b) the corporate attorney for the issuing company, and (c) the attorney issuing the opinion letters authorizing legend removal. She was, in effect, writing herself permission slips to sell her own stock. No independent attorney reviewed the transactions. No disclosure was made to the transfer agent that the attorney requesting legend removal was also the beneficial owner of the shares.

## VIII. CEDE & CO. and the Depository Trust Company

**CEDE & CO.** is the nominee name used by the **Depository Trust Company (DTC)**, which is the central securities depository for the United States. When you buy stock through a brokerage, your shares are almost certainly held in "street name" at CEDE & CO. This is normal --- it allows electronic settlement without physical stock certificates changing hands.

**Why it matters here.** When shares are deposited at CEDE & CO., they become anonymous. The stock transfer agent's register shows "CEDE & CO." as the holder, not the actual beneficial owner. The beneficial owner is recorded only in the brokerage's internal records. This is how Cane's family bloc disappeared from view: shares registered in their names were deposited at CEDE & CO., making them untraceable through public SEC filings.

**The certificate register.** The Pacific Stock Transfer register page (Exhibit C in the forensic analysis) is the critical document because it shows the physical certificates *before* they were deposited at CEDE & CO. --- the last point in the chain where the shares are traceable to specific individuals. The register shows 36 sequential CEDE & CO. certificates (Nos. 2029--5323), proving that a massive block of shares moved from identifiable holders into the anonymous DTC system over a three-year period.

## IX. The Stock Transfer Agent

A **stock transfer agent** (in this case, Pacific Stock Transfer Co.) is the company that maintains the official registry of who owns a company's stock. They issue and cancel stock certificates, process transfers, and handle corporate actions like stock splits and name changes.

**Who audits the transfer agent?** Transfer agents are registered with the SEC under Section 17A of the Securities Exchange Act. The SEC's Office of Compliance Inspections and Examinations (OCIE) conducts periodic examinations. However, small transfer agents handling microcap and penny stocks receive far less scrutiny than major agents like Computershare or American Stock Transfer. Pacific Stock Transfer, based in Las Vegas, handled the Davi Skin registry.

**The vulnerability.** The transfer agent relies on the legal opinion of the company's attorney to determine whether shares can be released from restriction. If the attorney is dishonest --- or is secretly the beneficial owner of the shares --- the transfer agent has no independent way to detect the fraud. The system is built on trust, and that trust was exploited.

## X. Bankruptcy as a Fraud Tool

Chapter 11 bankruptcy is designed to help struggling companies reorganize and continue operating. But in Cane's hands, it served a different purpose: **extinguishing outside equity**.

**How it worked.** MW Medical filed Chapter 11 on January 22, 2002. Jan Wallace held a \$615,871 secured claim against the company --- meaning she had a lien on all of MW Medical's assets. In bankruptcy, secured creditors are paid before unsecured creditors, and unsecured creditors are paid before equity holders. If the company's assets are worth less than the secured debt, equity holders (shareholders) get nothing.

**The manufactured position.** Wallace's secured claim was not an arm's-length transaction. It was a series of loans made by Cane's domestic partner to a company controlled by Cane, secured by all of the company's assets. The purpose was to ensure that when the company filed bankruptcy, Wallace would be first in line and all other shareholders would be wiped out.

**11 U.S.C. Section 1145.** This provision of the Bankruptcy Code exempts securities issued under a confirmed reorganization plan from SEC registration requirements. Shares issued under Section 1145 are automatically free-trading --- no registration statement, no restrictive legends, no waiting period. This is how the post-bankruptcy shell (which became Davi Skin) could immediately issue tradable shares.

## XI. The Name Change and Identity Backdating

**Corporate name changes** are routine --- companies rebrand regularly. But combined with a **personal name change**, the effect is to sever the documentary trail.

**The timeline.**

- Dynamic Associates $\rightarrow$ Legal Access Technologies, Inc. (LATI): corporate name change, same CIK
- MW Medical $\rightarrow$ Davi Skin: post-bankruptcy transformation, same CIK
- Michael A. Cane $\rightarrow$ Kyleen E. Cane: personal name change

**The backdating.** Cane reported to the SEC (via Form 5, filed July 22, 2004) that the personal name change occurred on June 28, 2001 --- three days after the reverse merger. But a Clark County, Nevada quitclaim deed recorded May 19, 2004 references a "court ordered change of name," and Cane continued operating as Michael A. Cane through at least late 2003. The actual name change occurred approximately two and a half years after the date reported to the SEC.

**Why it matters.** Anyone investigating Davi Skin's ownership traces back through CEDE & CO. certificates to Cane family Schedule 13G filings --- all filed under the name **Michael A. Cane**. Without knowing that Michael A. Cane and Kyleen E. Cane are the same person, the investigator hits a dead end. The backdating was designed to make it appear that the name change predated the merger, severing the trail at the point of origin.

## XII. Sarbanes-Oxley Certifications

The **Sarbanes-Oxley Act of 2002** (SOX) was enacted after the Enron and WorldCom scandals to improve corporate accountability. Two sections are relevant here:

**Section 302** requires the CEO and CFO to personally certify in each quarterly (10-Q) and annual (10-K) report that:

- They have reviewed the report
- It contains no material misstatements or omissions
- The financial statements fairly present the company's condition
- They have disclosed any significant internal control deficiencies

**Section 906** imposes criminal penalties for false certifications: up to \$1 million fine and 10 years imprisonment for knowing violations; up to \$5 million fine and 20 years for willful violations.

**In this case.** Across CIKs 878146 (Dynamic/LATI) and 1059577 (MW Medical/Davi Skin), the enterprise filed 40 SOX certifications under penalty of perjury (25 Section 302, 15 Section 906). Each certification attested that the financial statements were accurate and complete --- while concealing the family bloc's control, the CEDE & CO. share accumulation, the offshore nominee structure, and all related-party transactions.

## XIII. Regulation S Abuse and Offshore Liquidation

**The LOM Securities structure.** LOM Securities (Bermuda) Ltd.\ is an offshore brokerage. On April 3, 2007, four certificates (Nos. 5309--5312) were issued to four LOM nominee accounts, each receiving exactly 573,847 shares --- a total of 2,295,388 shares. Each nominee held exactly 3.97% of Davi Skin's outstanding stock.

**Why 3.97%?** Because the SEC requires anyone holding 5% or more to file a Schedule 13D or 13G. By calibrating each nominee at exactly 3.97%, Cane ensured that no filing would be triggered, and no regulator would learn that a single enterprise controlled four separate nominee accounts holding a combined 15.88% of the company.

**The liquidation.** Between the CEDE & CO. deposits (2,249,825 shares) and the LOM nominees (2,295,388 shares), the enterprise controlled 76.69% of Davi Skin's free-trading stock. This was sold into the public market for \$6,385,033. The proceeds flowed into offshore bank accounts: Bank of Bermuda (account 1010-956504) and Bank of NT Butterfield (account 20.006.840.351501.100).

## XIV. What Is a Qui Tam Action?

A **qui tam** action is a lawsuit filed by a private citizen (called a "relator") on behalf of the United States government under the **False Claims Act** (31 U.S.C. \S\S~3729--3733). The term comes from the Latin phrase *qui tam pro domino rege quam pro se ipso* --- "who sues on behalf of the king as well as for himself."

**How it works.**

1. The relator files a complaint under seal (secret) in federal court
2. The complaint and all evidence are served on the U.S. Department of Justice
3. The government has 60 days (often extended) to investigate and decide whether to "intervene" (take over the case) or "decline" (let the relator proceed alone)
4. If the government intervenes and recovers money, the relator receives 15--25% of the recovery
5. If the government declines and the relator wins, the relator receives 25--30%

**Why it applies here.** The False Claims Act covers any fraud that causes the government to pay money it would not otherwise have paid, or to lose money it was owed. The Cane enterprise touched federal funds in multiple ways: Medicare billing (\$49.3 million), SEC-regulated securities (false filings that enabled a \$6.4 million fraud), SBA pandemic loans (\$835,300), Federal Reserve lending (\$4 million), and Fannie Mae mortgages (undetermined). Each false SEC filing, each false SOX certification, and each fraudulent Medicare claim is a potential False Claims Act violation carrying treble damages (three times the government's loss) plus \$11,000--\$27,894 per false claim.

## XV. RICO --- Racketeer Influenced and Corrupt Organizations Act

**RICO** (18 U.S.C. \S\S~1961--1968) was designed to dismantle organized crime enterprises. It allows civil suits (not just criminal prosecution) against anyone who conducts the affairs of an "enterprise" through a "pattern of racketeering activity."

**The elements.**

1. **Enterprise**: Any legal entity, association, or group of individuals associated in fact. Here: the network of shell companies, family members, offshore accounts, and professional enablers.
2. **Pattern**: At least two predicate acts within a 10-year period. Here: hundreds of false SEC filings, 40 false SOX certifications, wire fraud (each electronic filing is a separate act), mail fraud, money laundering, obstruction.
3. **Conduct**: The defendant must have participated in the "operation or management" of the enterprise (*Reves v. Ernst & Young*, 507 U.S. 170 (1993)). Cane was the architect and operator --- she directed every entity transformation, signed every opinion letter, and controlled every SEC filing.

**Civil RICO remedies.** A successful civil RICO plaintiff can recover **treble damages** (three times actual losses), plus attorney's fees. This makes RICO one of the most powerful tools available to victims of organized financial fraud.

**Why the scheme qualifies.** RICO requires a pattern of predicate acts --- not a single fraud, but a systematic course of criminal conduct. The Cane enterprise operated across four states, two countries, six CIKs, and 25 years. Each entity transformation, each false filing, each offshore transfer, and each concealment of beneficial ownership is a separate predicate act. The enterprise did not commit one crime --- it committed hundreds.

## XVI. FBAR --- Foreign Bank Account Reports

U.S.\ persons who have a financial interest in or signature authority over foreign bank accounts exceeding \$10,000 at any time during the year must file a **Report of Foreign Bank and Financial Accounts (FBAR)** with the Financial Crimes Enforcement Network (FinCEN).

**Penalties.** Non-willful violations: up to \$14,489 per account per year. Willful violations: the greater of \$144,886 per account per year or 50% of the account balance at the time of the violation.

**In this case.** The offshore liquidation proceeds flowed into Bank of Bermuda and Bank of NT Butterfield accounts. Neither Cane nor Wallace filed FBARs for any year from 2005 through the present --- estimated civil penalties exceeding \$72 million based on 21 consecutive years of non-filing on accounts that received \$6.4 million in pump-and-dump proceeds.

## XVII. The Sophistication of the Money Laundering Architecture

What distinguishes the Cane enterprise from a simple stock fraud is the **layered architecture** designed to defeat every category of regulatory oversight simultaneously:

**Layer 1 --- Identity.** The name change from Michael A. Cane to Kyleen E. Cane, backdated in SEC records, severed the documentary trail connecting the current operator to the original beneficial ownership filings.

**Layer 2 --- Ownership.** Individual Schedule 13G filings by family members concealed coordinated 85.7% control behind the appearance of passive, independent investors each holding 5--10%.

**Layer 3 --- Entity transformation.** Four sequential corporate transformations (Tele-Lawyer $\rightarrow$ Dynamic/LATI $\rightarrow$ MW Medical $\rightarrow$ Davi Skin), each with a new name, new CUSIP, and new transfer agent records, created enough documentary distance that tracing shares from origin to liquidation requires forensic reconstruction.

**Layer 4 --- Bankruptcy.** Chapter 11 extinguished all outside equity, eliminating any shareholder who might ask questions or file complaints. The manufactured secured-creditor position ensured Cane's interests survived.

**Layer 5 --- Legend removal.** Cane's dual role as beneficial owner and opinion-letter attorney allowed restricted shares to be converted to free-trading shares without any independent review.

**Layer 6 --- Anonymization.** Deposit at CEDE & CO. (DTC) erased the beneficial owner's identity from public records. Shares that were traceable to specific Cane family members became anonymous electronic entries.

**Layer 7 --- Offshore calibration.** Four LOM nominees, each holding exactly 3.97% (below the 5% disclosure threshold), distributed the offshore tranche across multiple accounts to avoid triggering any single reporting requirement.

**Layer 8 --- Liquidation.** The combined enterprise position (76.69% of float) was sold into the public market over months, with proceeds flowing to offshore accounts in Bermuda that were never reported to the IRS.

**No single layer is unusual.** Reverse mergers happen every day. Bankruptcy filings are routine. CEDE & CO. holds trillions of dollars in securities. What makes this scheme sophisticated is that **every layer was designed to defeat a specific regulatory safeguard**, and they were executed in sequence over six years by the same person who served as corporate attorney, beneficial owner, opinion-letter author, and SEC filer --- a person whose identity was itself concealed through a backdated name change.

The architecture required expert knowledge of SEC filing requirements, beneficial ownership thresholds, Regulation S exemptions, bankruptcy preference rules, stock transfer mechanics, and offshore banking structures. It was not opportunistic fraud --- it was engineered.

```{=latex}
\vspace{1cm}

\begin{center}
\rule{0.5\textwidth}{0.4pt}
\end{center}

\vspace{0.5cm}

\begin{center}
\textit{This companion guide is intended to be read alongside the\\``Forensic Analysis of Attorney Kyleen E.\ Cane's Securities Fraud\\and Federal Funds Exposure'' and its exhibits.}
\end{center}
```
