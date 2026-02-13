// Store source link in session storage when the page loads
document.addEventListener('DOMContentLoaded', function () {
  if (!sessionStorage.getItem('originalSource')) {
    sessionStorage.setItem('originalSource', document.referrer || window.location.href);
  }

  // Get UTM parameters
  function getUTMParameters() {
    const utmParams = {};
    const params = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      if (params.has(param)) {
        utmParams[param] = params.get(param);
      }
    });
    return utmParams;
  }

  // Store UTM parameters in session storage
  const utmParams = getUTMParameters();
  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem('utmParams', JSON.stringify(utmParams));
  }

  // Helper to safely read stored UTM params as an object
  function getStoredUTMObject() {
    const raw = sessionStorage.getItem('utmParams');
    if (!raw) return {};
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  // Function to populate hidden fields
  function populateHiddenFields(form) {
    const isContentPath = window.location.pathname.indexOf('/content') !== -1;

    // Field mappings: internal key -> [actual input name(s) to look for]
    // If not found, the first name in the array is used when creating.
    const fieldMappings = {
      'Page_Name': ['Page-Converted'],
      'guide_name': ['Download-Requested'], // will be conditional below
      'Source_Link': ['Source-Link'],
      'UTM_Parameters': ['Campaign-Information'],

      // New individual UTM mappings
      'campaign_source': ['campaign_source'],
      'campaign_medium': ['campaign_medium'],
      'campaign_name': ['campaign_name'],
      'campaign_term': ['campaign_term'],
      'campaign_content': ['campaign_content']
    };

    const storedUtmObj = getStoredUTMObject();

    const fields = {
      'Page_Name': document.title || window.location.pathname,
      // Only set guide_name when /content is in the URL path
      'guide_name': isContentPath ? (document.title || window.location.pathname) : null,
      'Source_Link': sessionStorage.getItem('originalSource') || '',
      'UTM_Parameters': sessionStorage.getItem('utmParams') || '',

      // New individual UTM values (empty string if missing)
      'campaign_source': storedUtmObj.utm_source || '',
      'campaign_medium': storedUtmObj.utm_medium || '',
      'campaign_name': storedUtmObj.utm_campaign || '',
      'campaign_term': storedUtmObj.utm_term || '',
      'campaign_content': storedUtmObj.utm_content || ''
    };

    Object.keys(fieldMappings).forEach(fieldKey => {
      // Skip Download-Requested entirely unless /content is in the URL
      if (fieldKey === 'guide_name' && !isContentPath) return;

      const possibleNames = fieldMappings[fieldKey];
      let field = null;

      for (let name of possibleNames) {
        field = form.querySelector(`input[name="${name}"]`);
        if (field) break;
      }

      const value = fields[fieldKey];

      // If value is null/undefined, do not create/populate
      if (value === null || value === undefined) return;

      if (field) {
        field.value = value;
      } else {
        // If field doesn't exist, create it
        field = document.createElement('input');
        field.type = 'hidden';
        field.name = possibleNames[0];
        field.value = value;
        form.appendChild(field);
      }
    });
  }

  // Populate hidden fields for all forms
  document.querySelectorAll('form').forEach(populateHiddenFields);
});
