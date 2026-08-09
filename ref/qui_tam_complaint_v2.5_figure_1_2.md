---
title: ""
subtitle: ""
date: ""
documentclass: article
fontsize: 12pt
monofont: "Iosevka Fixed"
geometry: "left=1in,right=1in,top=1in,bottom=1in"
header-includes:
  - \usepackage{fancyhdr}
  - \usepackage{booktabs}
  - \usepackage{array}
  - \usepackage{longtable}
  - \usepackage{hyperref}
  - \usepackage{etoolbox}
  - \usepackage{fancyvrb}
  - \usepackage{setspace}
  - \singlespacing
  - \pagestyle{fancy}
  - \fancyhf{}
  - \fancyhead[C]{\small}
  - \fancyfoot[C]{}
  - \renewcommand{\headrulewidth}{0.4pt}
  - \setlength{\parindent}{2em}
  - \setlength{\parskip}{0pt}
  - \setlength{\LTpre}{6pt}
  - \setlength{\LTpost}{6pt}
  - \setlength{\LTleft}{0pt}
  - \setlength{\LTright}{0pt}
  - \setlength{\leftmargini}{2em}
  - \setlength{\leftmarginii}{2em}
  - \makeatletter
  - \renewcommand\section{\@startsection{section}{1}{\z@}{-3.5ex \@plus -1ex \@minus -.2ex}{2.3ex \@plus .2ex}{\centering\large\bfseries}}
  - \renewcommand\subsection{\@startsection{subsection}{2}{\z@}{-3.25ex \@plus -1ex \@minus -.2ex}{1.5ex \@plus .2ex}{\normalsize\bfseries}}
  - \renewcommand\subsubsection{\@startsection{subsubsection}{3}{\z@}{-3.25ex \@plus -1ex \@minus -.2ex}{1.5ex \@plus .2ex}{\normalsize\bfseries\itshape}}
  - \renewcommand\paragraph{\@startsection{paragraph}{4}{\z@}{-2.5ex \@plus -1ex \@minus -.2ex}{1ex \@plus .2ex}{\normalsize\bfseries}}
  - \renewcommand\subparagraph{\@startsection{subparagraph}{5}{\z@}{-2.5ex \@plus -1ex \@minus -.2ex}{1ex \@plus .2ex}{\normalsize\bfseries\itshape}}
  - \makeatother
  - \renewenvironment{quote}{\vspace{8pt}\begin{list}{}{\setlength{\leftmargin}{4em}\setlength{\rightmargin}{4em}\setlength{\parsep}{0pt}\setlength{\itemsep}{0pt}\setlength{\topsep}{0pt}}\item\relax\small}{\end{list}\vspace{8pt}}

---

```{=latex}
\thispagestyle{empty}
\pagenumbering{gobble}
\newpage
\vspace*{\fill}

\begin{center}
{\fontsize{8pt}{9.6pt}\selectfont
\begin{BVerbatim}
CHAIN 1: CIK 878146 -- Tele-Lawyer -> Dynamic -> LATI (1989--2006)
------------------------------------------------------------------
  Tele-Lawyer, Inc. (NV, 12/29/1995)
  |  Sole Officer: Michael A. Cane (Pres/Sec/Dir)
  |
  +-- REVERSE MERGER: 06/12/2001 --> Dynamic Associates Inc. (CIK 878146)
  |   153:1 reverse split (99.3% dilution of public float)
  |   Wallace & Sim resign; Cane renamed Kyleen E. Cane (06/28/2001)
  |
  +-- ==> LEGAL ACCESS TECHNOLOGIES INC. (LATI)
  |       CEO: Kyleen E. Cane (48.7% beneficial owner, 2,871,051 shares)
  |       Family bloc: 85.7% (5,008,551 of 5,845,093 shares)
  |       Subsidiaries: Genesis Health (Medicare), P&H Industries, Microthermia

          ----------------------- * -----------------------

CHAIN 2: CIK 1059577 -- MW Medical -> Davi Skin (1997--2012)
-------------------------------------------------------------
  MW Medical Inc. (NV, 12/04/1997)
  |  Spun off 03/11/1998 (1:1 to Dynamic shareholders)
  |  CEO: Jan Wallace | Counsel: Michael A. Cane, Esq.
  |
  +-- BANKRUPTCY: 01/22/2002, In re MW Medical, 02-01090-PHX-RTB (D. Ariz.)
  |   Sole Secured Creditor: Jan Wallace ($615,871+, ALL assets)
  |   Subsidiaries distributed to insiders:
  |     MW Asia (95% to Sim) | MW Europe (95% to Drummond)
  |     NW South America (95% to Brown) | MW Fitness (95% to Wallace)
  |     Microwave Debtor (95% to Wallace)
  |
  +-- ==> DAVI SKIN INC. (emerged 06/24/2004)
  |       CEO: Wallace | Director: Cane | CFO: Grace Sim
  |       CEDE & CO. total: 2,249,825 shares (36 certs, Jun 2004--Mar 2007)
  |
  +-- SEC REGISTRATION REVOKED: 08/27/2012

          ----------------------- * -----------------------

CHAIN 3: CIK 13156 -- SDI -> Galaxy Gaming (2000--2020)
--------------------------------------------------------
  Secured Diversified Investment Ltd (SDI) (NV, name change 05/17/2000)
  |  Original entity: Book Corp of America
  |
  +-- HOSTILE TAKEOVER (2005--2007)
  |   Wallace: "compliance expert" -- manufactured accounting irregularities
  |   Cane: outside securities counsel --> board control
  |   Johal: CFO installed (contradictory SOX certifications)
  |   Iomega Investments (Wallace): 15M shares (48.97%) --> 20:1 split
  |
  +-- INVOLUNTARY BANKRUPTCY: Cane Clark as petitioning creditor
  |   Reorganization plan prepared jointly with debtor (Johal-controlled)
  |   25,000,000 shares issued to Galaxy Gaming shareholders
  |
  +-- ==> GALAXY GAMING, INC. (operational Feb 2009)
          Cane Clark creditors installed Johal as CEO
\end{BVerbatim}
}
\end{center}

\vspace{0.8cm}

\begin{center}
{\fontsize{9pt}{10.8pt}\selectfont\textbf{Figure 1.} Chain 1: Tele-Lawyer $\to$ Dynamic $\to$ LATI (CIK 878146); Chain 2: MW Medical $\to$ Davi Skin (CIK 1059577); Chain 3: SDI $\to$ Galaxy Gaming (CIK 13156). See Appendix D.}
\end{center}

\vspace*{\fill}
\newpage

\begin{center}
{\fontsize{7pt}{8.4pt}\selectfont
\begin{BVerbatim}
                    DYNAMIC ASSOCIATES INC. (DAI) (1989-2001)[^1]
    ┌───────────────────────────────────────────────────────────────────┐
    │ CIK: 0000878146 | Nevada | Inc: Jul 20, 1989[^2]                  │         ┌────────────────────────────────────────┐
    │ SEC File: 000-19457 | President/CEO: Jan Wallace                  │    2.   │   REVERSE MERGER: June 12, 2001[^3]    │
    │ Capital Raised: $30M claimed ($8.6M documented)                   │────────►│   153:1 Reverse Split (99.3% dilution) │
    │ Market Cap: $70M claimed | SEC Filings: 134 documents             │         │   Acquirer: Tele-Lawyer Inc. (private) │ 1.
    └───────────────────────────────────────────────────────────────────┘         │   Founded: May 1989[^4]                │
                                    │                                             │   CEO: Michael A. Cane → Kyleen E Cane │
                                    │                                             │   (name change: June 28, 2001[^5])     │
                                    │                                             └────────────────────────────────────────┘
                                    │                                                                 │
        ┌───────────────────────────┼─────────────────────────────────────┬───────────────────────────┘ 3.
        │                           │                                     │                           |
        ▼                           ▼                                     ▼                           ▼
┌──────────────────┐    ┌──────────────────┐         ┌──────────────────────┐      ┌──────────────────────────────────┐
│  P&H Industries  │    │ Microthermia Inc │         │ Genesis Health Mgmt  │      │ LEGAL ACCESS TECHNOLOGIES INC.   │
│  (California)    │    │  (San Jose, CA)  │         │   (Multi-state)      │      │ (LATI) (2001-2006)[^6]           │
│  Manufacturing   │    │ Medical device   │         │ 32 rural hospitals   │      │ CIK: 0000878146 (retained)       │
│  Sold: $5M       │    │   technology     │         │    7 states          │      │ CEO/President: Kyleen E. Cane    │
└──────────────────┘    └──────────────────┘         └──────────────────────┘      │ Owner: 48.7% (Cane bloc: 85.7%)  │
        │                                                                          │ Business: Legal tech/services    │
        │           4.         ┌───────────────────────────────────────────┐       │ SEC TERMINATED: Aug 30, 2006[^7] │
        └─────────────────────►│ MW MEDICAL INC. (MWMI) (1997-2004)[^8]    │       └──────────────────────────────────┘
                               │ CIK: 0001059577 | Nevada | Dec 4, 1997    │
                               │ SPUN OFF: March 11, 1998[^9] (1:1 to      │
                               │ Dynamic shareholders)                     │
                               │ President/CEO: Jan Wallace                │
                               │ Legal Counsel: Michael A. Cane, Esq.[^10] │
                               │ Capital Raised: $9M (documented)[^11]     │
                               │ Market Cap: $100M claimed                 │
                               └───────────────────────────────────────────┘
                                    │
                                    │ BANKRUPTCY FILED: Jan 22, 2002[^12]
                                 1. │ Sole Secured Creditor: Jan Wallace[^13]
                                 2. │ Amount: $615,871+ (secured by ALL assets)
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
                ▼                   ▼                   ▼
    ┌────────────────────┐ ┌─────────────────┐ ┌───────────────────┐           ┌──────────────────────┐
    │ NW SOUTH AMERICA   │ │   MW EUROPE     │ │   MW ASIA/NW ASIA │           │   MW FITNESS[^14]    │◄───┐
    │   (Nevada)[^14]    │ │   (Nevada)[^14] │ │    (Nevada)[^14]  │           │    (Nevada)          │    │
    │ 95% to Tyler Brown │ │ 95% to Dean     │ │  95% to Grace Sim │           │ 95% to Jan Wallace   │    │
    │  (wage claims)     │ │   Drummond      │ │  (wage claims)    │           │ (unsecured portion   │    │
    │                    │ │ (wage claims)   │ │                   │           │  of secured claim)   │    │
    └────────────────────┘ └─────────────────┘ │ CONTRACT: $250K   │           └──────────────────────┘    │
                                               │ sale to Beardmore │                                       │
                                    |          │ (Dec 6, 2002)[^15]│───────────────────────────────────────┘
                                    |          └───────────────────┘
                                    │
                                    │
                                    ▼
                       ┌────────────────────────────┐
                       │  MICROWAVE DEBTOR[^16]     │
                       │  (MW Medical reorganized)  │◄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
                       │  95% to Jan Wallace        │                   ┊
                       │  (unsecured portion of     │                   ┊ (dashed: reorganization)
                       │   secured claim)           │                   ┊
                       └────────────────────────────┘                   ┊
                                    │                                   ┊ 
                               1.   │ EMERGED: Jun 24, 2004[^17]        ┊
                                    ▼                                   ┊
                   ┌─────────────────────────────────────┐              ┊
                   │ DAVI SKIN INC. (2004-2012)[^18]     │              ┊
                   │ CIK: 0001059577 (retained)          │              ┊
                   │ CEO: Jan Wallace[^19]               │──────────────┘
                   │ Director: Kyleen Cane[^19]          │
                   │ Business: Skincare/cosmetics        │
                   │ SEC REVOKED: August 27, 2012[^20]   │
                   └─────────────────────────────────────┘
\end{BVerbatim}
}
\end{center}

\vspace{0.8cm}

\begin{center}
{\fontsize{9pt}{10.8pt}\selectfont\textbf{Figure 2.} Dynamic Associates $\to$ MW Medical $\to$ Davi Skin: reverse merger, bankruptcy subsidiary distribution, and emergence.}
\end{center}
\newpage
```

