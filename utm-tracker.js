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
    // Store individual UTM parameters
    sessionStorage.setItem('utm_campaign', utmParams.utm_campaign || '');
    sessionStorage.setItem('utm_source', utmParams.utm_source || '');
    sessionStorage.setItem('utm_medium', utmParams.utm_medium || '');
    sessionStorage.setItem('utm_content', utmParams.utm_content || '');
    sessionStorage.setItem('utm_term', utmParams.utm_term || '');
  }
  // Function to populate hidden fields
  function populateHiddenFields(form) {
    const fieldMappings = {
      'Page_Name': ['Page-Converted'],
      'guide_name': ['Download-Requested'],
      'Source_Link': ['Source-Link'],
      'UTM_Parameters': ['Campaign-Information'],
      'Campaign_Name': ['Campaign-Name'],
      'Campaign_Source': ['Campaign-Source'],
      'Campaign_Medium': ['Campaign-Medium'],
      'Campaign_Content': ['Campaign-Content'],
      'Campaign_Term': ['Campaign-Term']
    };
    const fields = {
      'Page_Name': document.title || window.location.pathname,
      'guide_name': document.title || window.location.pathname,
      'Source_Link': sessionStorage.getItem('originalSource') || '',
      'UTM_Parameters': sessionStorage.getItem('utmParams') || '',
      'Campaign_Name': sessionStorage.getItem('utm_campaign') || '',
      'Campaign_Source': sessionStorage.getItem('utm_source') || '',
      'Campaign_Medium': sessionStorage.getItem('utm_medium') || '',
      'Campaign_Content': sessionStorage.getItem('utm_content') || '',
      'Campaign_Term': sessionStorage.getItem('utm_term') || ''
    };
    Object.keys(fieldMappings).forEach(fieldName => {
      const possibleNames = fieldMappings[fieldName];
      let field = null;
      for (let name of possibleNames) {
        field = form.querySelector(`input[name="${name}"]`);
        if (field) break;
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
