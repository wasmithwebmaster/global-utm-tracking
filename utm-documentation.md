# W.A. Smith Financial Group

## UTM Tracking & Campaign Naming Standards

Version 1.0

---

# 1. Purpose

This document defines the official UTM taxonomy and campaign naming standards for W.A. Smith Financial Group.

The objective is to:

* Maintain clean, non-fragmented reporting
* Eliminate inconsistent tagging
* Ensure direct Salesforce field mapping without transformation logic
* Preserve acquisition attribution integrity
* Create long-term scalability without taxonomy drift

This structure prioritizes operational discipline over flexibility.

---

# 2. Core Attribution Principles

1. Medium must mean one thing only.
2. Source identifies the platform, partner, or channel origin.
3. Campaign identifies the initiative or promotion.
4. Content identifies creative, placement, or variant.
5. UTMs are only used for acquisition traffic.
6. Internal site behavior is not tracked via UTMs.

---

# 3. UTM Parameter Definitions

## utm_source

Identifies where the traffic originated.

Rules:

* lowercase only
* hyphen separated
* no spaces
* no special characters
* no freeform entries

Examples:

* google
* facebook
* youtube
* tv-cleveland-3
* tv-sarasota-13
* genesis-accounting
* direct-referral
* dinner-seminar

---

## utm_medium

Identifies the marketing channel classification.

Approved Medium List (fixed vocabulary):

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

No additional mediums may be created.

---

## utm_campaign

Identifies the initiative or promotion.

Rules:

* lowercase
* hyphen separated
* no spaces
* no special characters
* must include time reference or thematic anchor
* no vague names like “campaign1”

Naming structure:
[timeframe]-[initiative]-[topic]

Examples:

* q1-2026-retirement-income
* 2026-tax-planning-promo
* fall-2026-dinner-seminar
* 2026-tv-brand-awareness
* 2026-rmd-education

Campaign naming must describe strategy, not channel.

Incorrect:

* facebook-retargeting
* google-ads
* email-blast

Correct:

* 2026-social-security-education
* q3-2026-income-planning

---

## utm_content

Identifies creative version, placement, or format.

Rules:

* lowercase
* hyphen separated
* describes execution
* never used for channel
* never duplicates campaign meaning

Examples:

* hero-banner
* primary-cta-button
* email-header
* version-a
* version-b
* 30-second-spot
* brochure-qr
* dinner-invite-postcard
* seminar-landing-page
* video-thumbnail-a

Use utm_content to identify:

* creative variant
* A/B tests
* format length
* QR placement
* button location

---

## utm_term

Used only for keyword-level paid search tracking.

Rules:

* Only used for paid-search campaigns.
* Must represent the keyword or audience segment.
* Should be auto-populated from ad platform when possible.

Examples:

* retirement-income-planning
* can-i-retire-with-700k
* rmd-rules-2026
* ohio-financial-advisor

Do not manually invent utm_term unless required.

---

# 4. Referral Attribution Standards

## Question: How do we know who the referral was?

The answer is: source identifies the referral origin. Medium stays constant as referral.

Example:

If referral came from Genesis Accounting:

* utm_source=genesis-accounting
* utm_medium=referral

If referral came from a direct client:

* utm_source=direct-referral
* utm_medium=referral

If referral came from staff:

* utm_source=staff-family-relative
* utm_medium=referral

If referral originated at a referral event:

* utm_source=referral-event
* utm_medium=referral
* utm_campaign=2026-client-appreciation

The specific referring person should not be placed in UTMs. That belongs in Salesforce fields such as:

* referring_contact_name
* referring_partner
* referral_type
* referral_event_name

UTMs track marketing source category. CRM tracks individual relationships.

---

# 5. Event Tracking Standards

All seminars, webinars, dinners, and educational sessions use:

* utm_medium=event

The specific event type is the source.

Examples:

Dinner seminar:

* utm_source=dinner-seminar
* utm_medium=event
* utm_campaign=fall-2026-retirement-income
* utm_content=invitation-postcard

Webinar:

* utm_source=webinar
* utm_medium=event
* utm_campaign=2026-social-security-education
* utm_content=email-invite

Empower University:

* utm_source=empower-university
* utm_medium=event
* utm_campaign=q2-2026-income-series

---

# 6. TV Tracking Standards

All broadcast placements use:

* utm_medium=tv

If separate tracking links are not used per channel, then source may remain:

* tv

If unique tracking links are used:

* tv-cleveland-3
* tv-sarasota-13

Example:

* utm_source=tv-cleveland-3
* utm_medium=tv
* utm_campaign=2026-brand-awareness
* utm_content=30-second-spot

If all channels share one link:

* utm_source=tv
* utm_medium=tv

---

# 7. Offline & QR Tracking

QR codes do not define the channel.

Correct structure:

Brochure QR:

* utm_source=brochure
* utm_medium=print
* utm_campaign=2026-income-planning
* utm_content=brochure-qr

Business card QR:

* utm_source=business-card
* utm_medium=print
* utm_campaign=2026-brand-awareness
* utm_content=qr-code

Event table QR:

* utm_source=event-materials
* utm_medium=event
* utm_campaign=fall-2026-dinner-seminar
* utm_content=event-table-qr

---

# 8. Paid Digital Standards

Google Ads Search:

* utm_source=google
* utm_medium=paid-search
* utm_campaign=2026-retirement-income
* utm_term=keyword

Google Display:

* utm_source=google
* utm_medium=display

Facebook Ads:

* utm_source=facebook
* utm_medium=paid-social

YouTube Ads:

* utm_source=youtube
* utm_medium=paid-video

---

# 9. Organic Digital Standards

Organic Search:

* utm_source=google
* utm_medium=organic-search

Organic Social:

* utm_source=facebook
* utm_medium=organic-social

Only use UTMs for organic if distributing links externally (email, social, QR, etc.). Do not use UTMs for internal website navigation.

---

# 10. Governance Rules

1. No new mediums may be created.
2. No freeform source entries.
3. Campaign names must follow structure.
4. UTMs may not be used for internal link tracking.
5. Any new source must be added to the master taxonomy list before use.
6. Salesforce fields must match UTM parameter names exactly to avoid Zapier transforms.

---

# 11. Why This Structure Is Used

This structure prevents:

* Medium fragmentation
* Duplicate reporting categories
* Salesforce parsing issues
* Attribution overwriting
* Campaign naming chaos
* Vendor-based data inconsistency
* Long-term CRM contamination

Large organizations do not allow marketers to invent UTMs per campaign. They operate from fixed taxonomies and enforced dropdown logic.

Discipline creates clean data. Clean data enables strategic decisions.

---

# 12. Summary

Medium defines the channel classification.
Source defines the specific origin.
Campaign defines the initiative.
Content defines execution detail.
Term defines keyword when applicable.

CRM stores relationship-level detail.
UTMs store marketing-level attribution.

This structure is fixed and scalable.
