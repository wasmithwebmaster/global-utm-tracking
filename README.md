# Webflow UTM Tracker & Form Auto-Populate

Automatic UTM parameter tracking and form field population for Webflow sites. Captures campaign data, source links, and page information to pass through to your forms and marketing automation tools.

## Overview

This script automatically tracks marketing campaign data and user journey information, then populates hidden fields in your Webflow forms. Data persists throughout the user's session, ensuring accurate attribution even if they navigate multiple pages before converting.

## Features

- **UTM Parameter Tracking** - Automatically captures and stores all UTM parameters (source, medium, campaign, term, content)
- **Source Link Preservation** - Tracks the original referrer or landing page throughout the user's session
- **Auto-Populate Forms** - Automatically fills hidden fields in all forms across your site
- **Session Persistence** - Uses sessionStorage to maintain data across page visits
- **Multi-Form Support** - Works with unlimited forms on the same page or across your site
- **Auto-Field Creation** - Creates hidden fields if they don't exist in your forms

## What It Tracks

| Data Type | Description | Example |
|-----------|-------------|---------|
| Page Name | Current page title or URL path | "Home - My Company" |
| Source Link | Original referrer or landing page URL | "https://google.com/search?q=..." |
| UTM Parameters | All UTM campaign tracking data | `{"utm_source":"google","utm_medium":"cpc"}` |

## Installation

### Step 1: Add Script to Webflow

1. In Webflow Designer, go to **Project Settings**
2. Navigate to **Custom Code** tab
3. In the **Footer Code** section, paste:

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR-USERNAME/YOUR-REPO-NAME@main/utm-tracker.js"></script>
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub details.

### Step 2: Configure Form Fields

The script looks for hidden fields with specific names. You can use any of these name variations:

**For Page Name:**
- `Page-Converted`
- (or script creates `Page_Name`)

**For Download/Guide Name:**
- `Download-Requested`
- (or script creates `guide_name`)

**For Source Link:**
- `Source-Link`
- (or script creates `Source_Link`)

**For UTM Parameters:**
- `Campaign-Information`
- (or script creates `UTM_Parameters`)

If these fields don't exist in your form, the script will automatically create them as hidden fields.

### Step 3: Publish Your Site

Click **Publish** in Webflow. The script will now track data and populate forms site-wide.

## How It Works

### 1. Initial Page Load
When a user first arrives on your site:
- Original referrer URL is stored in sessionStorage
- Any UTM parameters in the URL are captured and stored

### 2. During Session
As the user navigates your site:
- Source link and UTM data persist in sessionStorage
- Data is available on every page they visit

### 3. Form Submission
When a user encounters any form:
- Script automatically populates hidden fields with tracked data
- Form submits with complete attribution information
- Data can be passed to Zapier, Make, or other automation tools

## Example Usage

### Sample URL with UTM Parameters
```
https://yoursite.com/landing-page?utm_source=google&utm_medium=cpc&utm_campaign=summer-sale
```

### Data Captured
- **Page Name**: "Landing Page - Your Company"
- **Source Link**: "https://google.com/search?q=financial+planning"
- **UTM Parameters**: `{"utm_source":"google","utm_medium":"cpc","utm_campaign":"summer-sale"}`

### Form Field Values
All forms on your site will automatically receive:
```
Page-Converted: "Landing Page - Your Company"
Download-Requested: "Landing Page - Your Company"
Source-Link: "https://google.com/search?q=financial+planning"
Campaign-Information: {"utm_source":"google","utm_medium":"cpc","utm_campaign":"summer-sale"}
```

## Use Cases

- **Marketing Attribution** - Track which campaigns drive conversions
- **Lead Scoring** - Prioritize leads based on traffic source
- **A/B Testing** - Identify which landing pages perform best
- **ROI Tracking** - Connect form submissions to specific ad campaigns
- **CRM Integration** - Pass campaign data to Salesforce, HubSpot, etc.

## Browser Compatibility

- Chrome/Edge (all versions)
- Firefox (all versions)
- Safari (all versions)
- Works with sessionStorage-enabled browsers

## Privacy & Data

- All data is stored in the user's browser sessionStorage
- Data is cleared when the browser session ends
- No cookies are set
- No external services are called
- GDPR/CCPA compliant when used appropriately

## Troubleshooting

### Forms not populating
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify script is loading: `console.log(sessionStorage.getItem('utmParams'))`

### UTM parameters not captured
- Verify URL contains UTM parameters
- Check that parameters use lowercase: `utm_source` not `UTM_SOURCE`

### Source link showing current page instead of referrer
- This is expected if user arrives directly (no referrer)
- Script will use current page URL as fallback

## Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License - feel free to use in personal and commercial projects.

## Support

For questions or issues:
1. Check the Troubleshooting section above
2. Open an issue in this repository
3. Review Webflow's Custom Code documentation

---

**Note:** This script is designed for Webflow but can be adapted for other platforms with form handling capabilities.
