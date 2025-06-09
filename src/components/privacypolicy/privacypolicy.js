import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> 08.06.2025</p>

      <p>This privacy policy explains how Knitt Mates handles user privacy.</p>

      <h2>Information Collection</h2>
      <p>
        We do not collect any personal information such as names, email addresses, or phone numbers.
        However, we use third-party services that may collect certain data automatically for advertising purposes.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Our app uses <strong>Google AdMob</strong> to display ads. AdMob may collect and use device information 
        (such as your device's advertising ID) to serve relevant ads.
        You can manage your ad preferences in your device settings.
      </p>
      <p>
        For more information, please refer to{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google’s Privacy Policy
        </a>.
      </p>

      <h2>Cookies</h2>
      <p>
        Our app does not use cookies directly. However, AdMob may use similar technologies to personalize ads.
      </p>

      <h2>Data Security</h2>
      <p>
        We do not store or transmit any personal data ourselves.
        Any data collected by third-party services is handled according to their respective privacy policies.
      </p>

      <h2>Changes</h2>
      <p>
        This privacy policy may be updated from time to time. Changes to our privacy policy will be posted on this page.
        Users are encouraged to check this page regularly to stay informed of any changes.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this privacy policy, please contact us at{' '}
        <a href="mailto:knittmates@gmail.com">knittmates@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;