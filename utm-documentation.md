# UTM Taxonomy & Naming Standards  
Version 1.0

---

## Quick Navigation

- [1. Purpose](#1-purpose)
- [2. Marketing Funnel Structure](#2-marketing-funnel-structure)
- [3. Approved utm_medium List](#3-approved-utm_medium-list)
- [4. Approved utm_source List & Medium Mapping](#4-approved-utm_source-list--medium-mapping)
- [5. utm_campaign Naming Convention](#5-utm_campaign-naming-convention)
- [6. utm_content Naming Convention](#6-utm_content-naming-convention)
- [7. utm_term Naming Convention](#7-utm_term-naming-convention)
- [8. Global Naming Rules](#8-global-naming-rules)
- [9. Governance & Enforcement](#9-governance--enforcement)

---

# 1. Purpose

This document defines the official UTM taxonomy and naming standards for W.A. Smith Financial Group.

Objectives:

- Maintain clean, non-fragmented reporting  
- Ensure direct Salesforce field mapping without transformations  
- Preserve acquisition attribution integrity  
- Prevent taxonomy drift  
- Create long-term scalability  

This structure is fixed and controlled.

---

# 2. Marketing Funnel Structure

Organizational funnel groupings:

- Broadcast Media  
- Digital and Creative  
- Email  
- Events  
- Referral  
- Offline  

These categories organize marketing efforts. Attribution is determined strictly by `utm_source` and `utm_medium`.

---

# 3. Approved utm_medium List

## Fixed Vocabulary

- tv  
- paid-search  
- paid-social  
- paid-video  
- display  
- email  
- organic-search  
- organic-social  
- referral  
- event  
- print  

Rules:

- No additional mediums permitted  
- No renaming existing mediums  
- If a tactic does not clearly fit, it must map to the closest approved medium  
- Medium must never describe creative format, audience, or campaign theme  

---

# 4. Approved utm_source List & Medium Mapping

All sources must be:

- lowercase  
- hyphen separated  
- no spaces  
- no special characters  
- stable year over year  

---

## Broadcast Media

Sources:

- tv  
- tv-cleveland-3  
- tv-cleveland-5  
- tv-sarasota-13  
- tv-sarasota-8  

Allowed Medium:

- tv  

---

## Digital and Creative

Sources:

- google  
- facebook  
- instagram  
- linkedin  
- x  
- tiktok  
- youtube  

Medium Mapping:

google  
- paid-search  
- display  
- organic-search  

facebook  
- paid-social  
- organic-social  

instagram  
- paid-social  
- organic-social  

linkedin  
- paid-social  
- organic-social  

x  
- paid-social  
- organic-social  

tiktok  
- paid-social  
- organic-social  

youtube  
- paid-video  
- organic-social  

---

## Email

Sources:

- ascend360-insider  
- email-drip  

Allowed Medium:

- email  

---

## Events

Sources:

- empower-university  
- dinner-seminar  
- lunch-seminar  
- movie-event  
- tax-seminar  
- webinar  

Allowed Medium:

- event  

---

## Referral

Sources:

- genesis-accounting  
- wrobel-and-associates  
- mmg-client  
- direct-referral  
- staff-family-relative  
- referral-event  

Allowed Medium:

- referral  

Referral individual names must be stored in Salesforce, not in UTMs.

---

## Offline

Sources:

- direct-mail  
- print-ad  
- brochure  
- event-materials  
- business-card  

Medium Mapping:

direct-mail → print  
print-ad → print  
brochure → print  
business-card → print  
event-materials → event  

QR identification belongs in `utm_content`, not `utm_medium`.

---

# 5. utm_campaign Naming Convention

Required Structure:

[timeframe]-[initiative]-[topic]

Timeframe formats allowed:

- q1-2026  
- q2-2026  
- q3-2026  
- q4-2026  
- 2026  
- spring-2026  
- fall-2026  

Rules:

- lowercase only  
- hyphen separated  
- must describe strategic initiative  
- must not include platform names  
- must not include medium names  
- must not include creative format  
- must not include audience targeting  

Campaign represents the marketing initiative, not distribution channel.

---

# 6. utm_content Naming Convention

Used strictly for:

- creative type  
- placement  
- variant  
- format length  
- QR identifier  

Construction pattern:

- placement-descriptor  
- asset-variant  

Rules:

- lowercase only  
- hyphen separated  
- must not duplicate campaign name  
- must not describe channel or medium  
- must not include timeframe  

---

# 7. utm_term Naming Convention

Used only for paid-search.

Rules:

- lowercase only  
- hyphen separated  
- must reflect keyword intent  
- must not be used for social, email, referral, event, or print  

If not paid-search, utm_term must remain blank.

---

# 8. Global Naming Rules

Applies to all UTM parameters.

- lowercase only  
- hyphen separated  
- no spaces  
- no underscores  
- no special characters  
- no trailing hyphens  
- no double hyphens  
- no unapproved abbreviations  
- no year added to source  
- no campaign theme added to source  

All entries must pass format validation before link generation.

---

# 9. Governance & Enforcement

1. Only approved dropdown selections allowed for source and medium.  
2. Campaign field must follow required structure.  
3. Content field must pass format validation.  
4. No manual UTM construction outside the official link builder.  
5. Quarterly audit of UTM values in CRM.  
6. New sources require documented approval before addition.  
7. UTMs must not be used for internal website navigation.  
8. CRM tracks individuals; UTMs track marketing channels.  

This taxonomy is production-ready, scalable, and controlled.
