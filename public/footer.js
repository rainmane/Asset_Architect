document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer style="margin-top: 80px; padding: 40px 20px; border-top: 1px solid #eee; text-align: center; font-family: sans-serif; font-size: 14px; color: #666; line-height: 1.6;">
        <nav style="margin-bottom: 20px;">
            <a href="/privacy" style="margin: 0 10px; color: #666; text-decoration: none;">Privacy Policy</a> | 
            <a href="/terms" style="margin: 0 10px; color: #666; text-decoration: none;">Terms & Disclaimers</a>
        </nav>
        
        <div style="max-width: 800px; margin: 0 auto 20px auto; font-size: 11px; color: #999; line-height: 1.5;">
            <strong>Legal Disclaimer:</strong> Asset Architect is an educational resource and data-analysis tool provider. We are not licensed real estate brokers, attorneys, or financial advisors. All information, including ROI projections and renovation insights, is provided for illustrative purposes only. Real estate investing involves significant risk. Always consult with a qualified professional before making any financial decisions.
        </div>

        <p style="margin: 0;">&copy; 2026 Asset Architect</p>
    </footer>`;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
