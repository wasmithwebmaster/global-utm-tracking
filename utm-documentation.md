# W.A. Smith Financial Group

## UTM Tracking & Campaign Naming Standards

Version 1.0

---

# 1. Purpose

This document defines the official UTM taxonomy and campaign naming standards for W.A. Smith Financial Group.

Objectives:

* Maintain clean, non-fragmented reporting
* Eliminate inconsistent tagging
* Ensure direct Salesforce field mapping without transformations
* Preserve acquisition attribution integrity
* Create long-term scalability

This taxonomy is fixed. No deviations without formal update.

---

# 2. Core Attribution Framework

Each UTM parameter has a single responsibility:

* **utm_source** identifies the origin platform or partner.
* **utm_medium** identifies the channel classification.
* **utm_campaign** identifies the initiative.
* **utm_content** identifies creative or placement detail.
* **utm_term** identifies paid-search keywords only.

UTMs are used for acquisition traffic only.
Internal website navigation must not use UTMs.

---

# 3. utm_medium (Fixed Vocabulary)

## Approved Medium List

* tv
* paid-search
* paid-social
* paid-video
* display
* email
* organic-search
* organic-social
* referral
* event
* print

No additional mediums are permitted.

---

# 4. utm_source (Approved List)

All sources must be lowercase and hyphenated. No spaces. No special characters.

## Broadcast

* tv
* tv-cleveland-3
* tv-cleveland-5
* tv-sarasota-13
* tv-sarasota-8

### Example

tv-cleveland-3 + tv
`utm_source=tv-cleveland-3`
`utm_medium=tv`

---

## Paid Digital

* google
* facebook
* instagram
* linkedin
* x
* tiktok
* youtube

### Examples

Google Search Ad
`utm_source=google`
`utm_medium=paid-search`
`utm_campaign=2026-retirement-income`
`utm_term=retirement-income-planning`

Facebook Ad
`utm_source=facebook`
`utm_medium=paid-social`
`utm_campaign=2026-social-security-education`
`utm_content=version-a`

YouTube Ad
`utm_source=youtube`
`utm_medium=paid-video`
`utm_campaign=2026-brand-awareness`
`utm_content=30-second-spot`

Google Display
`utm_source=google`
`utm_medium=display`
`utm_campaign=q2-2026-income-education`

---

## Email Marketing

* ascend360-insider
* email-drip

### Example

Newsletter
`utm_source=ascend360-insider`
`utm_medium=email`
`utm_campaign=2026-tax-planning-promo`
`utm_content=email-header`

Drip Email
`utm_source=email-drip`
`utm_medium=email`
`utm_campaign=q1-2026-retirement-income`
`utm_content=email-body`

---

## Events

* empower-university
* dinner-seminar
* lunch-seminar
* movie-event
* tax-seminar
* webinar

All event sources use:

`utm_medium=event`

### Examples

Dinner Seminar
`utm_source=dinner-seminar`
`utm_medium=event`
`utm_campaign=fall-2026-retirement-income`
`utm_content=invitation-postcard`

Webinar
`utm_source=webinar`
`utm_medium=event`
`utm_campaign=2026-social-security-education`
`utm_content=email-invite`

Empower University
`utm_source=empower-university`
`utm_medium=event`
`utm_campaign=q2-2026-income-series`

---

## Referral

* genesis-accounting
* wrobel-and-associates
* mmg-client
* direct-referral
* staff-family-relative
* referral-event

All referral sources use:

`utm_medium=referral`

### Examples

CPA Referral
`utm_source=genesis-accounting`
`utm_medium=referral`
`utm_campaign=2026-referral-growth`

Direct Client Referral
`utm_source=direct-referral`
`utm_medium=referral`
`utm_campaign=2026-client-referrals`

Referral Event
`utm_source=referral-event`
`utm_medium=referral`
`utm_campaign=2026-client-appreciation`

Individual referring person must be tracked in Salesforce, not in UTMs.

---

## Offline

* direct-mail
* print-ad
* brochure
* event-materials
* business-card

### Medium Mapping

* direct-mail → print
* print-ad → print
* brochure → print
* business-card → print
* event-materials → event

### Examples

Direct Mail
`utm_source=direct-mail`
`utm_medium=print`
`utm_campaign=2026-income-planning`
`utm_content=postcard-version-a`

Brochure QR
`utm_source=brochure`
`utm_medium=print`
`utm_campaign=2026-retirement-income`
`utm_content=brochure-qr`

Event Table QR
`utm_source=event-materials`
`utm_medium=event`
`utm_campaign=fall-2026-dinner-seminar`
`utm_content=event-table-qr`

Business Card QR
`utm_source=business-card`
`utm_medium=print`
`utm_campaign=2026-brand-awareness`
`utm_content=qr-code`

QR is recorded in utm_content, not utm_medium.

---

# 5. utm_campaign Naming Standards

## Structure

`[timeframe]-[initiative]-[topic]`

Rules:

* lowercase only
* hyphen separated
* no spaces
* must describe strategy, not channel

### Approved Examples

* q1-2026-retirement-income
* 2026-tax-planning-promo
* fall-2026-dinner-seminar
* 2026-rmd-education
* q3-2026-social-security

### Not Allowed

* facebook-campaign
* google-ads
* email-blast
* test1

Campaign defines the initiative, not the platform.

---

# 6. utm_content Standards

Used for:

* creative type
* placement
* variant
* format length
* QR placement

## Approved Examples

* primary-cta-button
* benefits-cta-button
* features-cta-button
* final-cta-button
* hero-banner
* sidebar-cta
* email-header
* email-footer
* email-body
* version-a
* version-b
* carousel-ad
* single-image
* video-ad
* testimonial-creative
* offer-creative
* educational-creative
* top-banner
* bottom-banner
* exit-intent
* results-page
* homepage
* landing-page
* thank-you-page
* 30-second-spot
* 60-second-spot
* print-full-page
* print-half-page
* front-panel
* back-panel
* brochure-qr
* event-table-qr
* business-card-qr

---

# 7. utm_term Standards

Used only for paid-search campaigns.

Must represent keyword or audience target.

## Examples

* retirement-income-planning
* can-i-retire-with-700k
* rmd-rules-2026
* ohio-financial-advisor

Not used for social, email, print, referral, or event.

---

# 8. Governance Rules

1. No new mediums without formal approval.
2. No freeform source entries.
3. Campaign names must follow approved structure.
4. UTMs must not be used for internal website navigation.
5. Individual referral names belong in Salesforce fields, not UTMs.
6. Salesforce API field names must match UTM parameters exactly.

---

# 9. Summary Structure

Medium defines channel classification.
Source defines origin platform or partner.
Campaign defines initiative.
Content defines execution detail.
Term defines keyword when applicable.
