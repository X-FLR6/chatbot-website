import React, { useEffect } from "react";

function PrivacyPage() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://cdn.iubenda.com/iubenda.js";

    const tag = document.getElementsByTagName("script")[0];
    tag.parentNode.insertBefore(s, tag);
  }, []);

  return (
    <a
      href={`https://www.iubenda.com/privacy-policy/93104698`}
      className="iubenda-white no-brand iubenda-noiframe iubenda-embed iub-body-embed"
      title="Privacy Policy"
    >
      Privacy Policy
    </a>
  );
}

export default PrivacyPage;
