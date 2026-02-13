<script>
(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // Store landing page as Source Link once per session
    if (!sessionStorage.getItem('originalSource')) {
      sessionStorage.setItem('originalSource', window.location.href);
    }

    // Initialize session timestamps
    if (!sessionStorage.getItem('first_seen_ts')) {
      sessionStorage.setItem('first_seen_ts', new Date().toISOString());
    }

    // Read UTM parameters from the current URL
    const getUTMParameters = () => {
      const params = new URLSearchParams(window.location.search);
      const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      const result = {};

      keys.forEach((key) => {
        result[key] = params.get(key) || '';
      });

      return result;
    };

    // Persist UTMs to session storage (set only if present, do not overwrite existing session values)
    const utmParams = getUTMParameters();
    Object.keys(utmParams).forEach((key) => {
      const value = utmParams[key];
      if (value && !sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, value);
      }
    });

    const setOrCreateHiddenField = (form, name, value) => {
      let field = form.querySelector(`input[name="${name}"]`);
      if (!field) {
        field = document.createElement('input');
        field.type = 'hidden';
        field.name = name;
        form.appendChild(field);
      }
      field.value = value || '';
    };

    const populateHiddenFields = (form) => {
      // Existing fields
      setOrCreateHiddenField(
        form,
        'Page-Converted',
        document.title || window.location.pathname
      );

      setOrCreateHiddenField(
        form,
        'Download-Requested',
        document.title || window.location.pathname
      );

      setOrCreateHiddenField(
        form,
        'Source-Link',
        sessionStorage.getItem('originalSource') || ''
      );

      // UTM fields (always present, sometimes empty)
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
        setOrCreateHiddenField(
          form,
          key,
          sessionStorage.getItem(key) || ''
        );
      });

      // Session timestamps
      setOrCreateHiddenField(
        form,
        'first_seen_ts',
        sessionStorage.getItem('first_seen_ts') || ''
      );

      setOrCreateHiddenField(
        form,
        'last_seen_ts',
        sessionStorage.getItem('last_seen_ts') || ''
      );
    };

    const attachSubmitHandler = (form) => {
      // Avoid double binding if scripts run more than once
      if (form.dataset.utmAuditBound === '1') return;
      form.dataset.utmAuditBound = '1';

      form.addEventListener('submit', () => {
        // Timestamp the conversion moment
        const nowIso = new Date().toISOString();
        sessionStorage.setItem('last_seen_ts', nowIso);

        // Ensure hidden fields reflect final values at submission time
        populateHiddenFields(form);

        // Force last_seen_ts to the exact submit-time value
        setOrCreateHiddenField(form, 'last_seen_ts', nowIso);

        // Optional: If you ever decide Page-Converted should be the actual conversion URL instead of title/path,
        // swap this line in place of the current Page-Converted assignment above:
        // setOrCreateHiddenField(form, 'Page-Converted', window.location.href);
      });
    };

    // Apply to all forms on the page
    document.querySelectorAll('form').forEach((form) => {
      populateHiddenFields(form);
      attachSubmitHandler(form);
    });
  });
})();
</script>
