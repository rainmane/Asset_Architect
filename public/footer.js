document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer style="margin-top: 80px; padding: 40px 20px; border-top: 1px solid #eee; text-align: center; font-family: sans-serif; font-size: 14px; color: #666; line-height: 2;">
        <nav>
            <a href="/privacy" style="margin: 0 10px;">Privacy Policy</a> | 
            <a href="/terms" style="margin: 0 10px;">Terms & Disclaimers</a>
        </nav>
        <p>&copy; 2026 Asset Architect</p>
    </footer>`;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
