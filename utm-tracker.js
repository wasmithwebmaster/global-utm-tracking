// Store source link in session storage when the page loads
document.addEventListener('DOMContentLoaded', function() {
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

  // Function to populate hidden fields
  function populateHiddenFields(form) {
    const fieldMappings = {
      'Page_Name': ['Page-Converted'],
      'guide_name': ['Download-Requested'],
      'Source_Link': ['Source-Link'],
      'UTM_Parameters': ['Campaign-Information'],

      // NEW: map individual UTM values to separate hidden fields
      'utm_source': ['campaign_source'],
      'utm_medium': ['campaign_medium'],
      'utm_campaign': ['campaign_name'],
      'utm_term': ['campaign_term'],
      'utm_content': ['campaign_content']
    };

    const storedUTMParamsRaw = sessionStorage.getItem('utmParams') || '';
    let storedUTMParamsObj = {};
    if (storedUTMParamsRaw) {
      try {
        storedUTMParamsObj = JSON.parse(storedUTMParamsRaw) || {};
      } catch (e) {
        storedUTMParamsObj = {};
      }
    }

    const fields = {
      'Page_Name': document.title || window.location.pathname,
      'guide_name': document.title || window.location.pathname,
      'Source_Link': sessionStorage.getItem('originalSource') || '',
      'UTM_Parameters': storedUTMParamsRaw || '',

      // NEW: populate from stored utmParams (if present)
      'utm_source': storedUTMParamsObj.utm_source || '',
      'utm_medium': storedUTMParamsObj.utm_medium || '',
      'utm_campaign': storedUTMParamsObj.utm_campaign || '',
      'utm_term': storedUTMParamsObj.utm_term || '',
      'utm_content': storedUTMParamsObj.utm_content || ''
    };

    const isContentPath = window.location.pathname.indexOf('/content') !== -1;

    Object.keys(fieldMappings).forEach(fieldName => {
      const possibleNames = fieldMappings[fieldName];
      let field = null;

      for (let name of possibleNames) {
        field = form.querySelector(`input[name="${name}"]`);
        if (field) break;
      }

      // NEW: conditional Download-Requested behavior
      if (fieldName === 'guide_name' && !isContentPath) {
        // Safest approach: remove the input if it exists, otherwise do not create it.
        if (field) field.remove();
        return;
      }

      if (field) {
        field.value = fields[fieldName];
      } else {
        // If field doesn't exist, create it
        field = document.createElement('input');
        field.type = 'hidden';
        field.name = possibleNames[0];
        field.value = fields[fieldName];
        form.appendChild(field);
      }
    });
  }

  // Populate hidden fields for all forms
  document.querySelectorAll('form').forEach(populateHiddenFields);
});
