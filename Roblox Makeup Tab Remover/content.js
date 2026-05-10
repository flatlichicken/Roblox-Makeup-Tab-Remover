function removeMakeup() {
    // 1. I search for ALL links and buttons in the menu area
    const elements = document.querySelectorAll('a, span, .menu-link, .submenu-link, .filter-option');
    
    elements.forEach(el => {
        // 2. Check if the text is exactly "Makeup"
        if (el.innerText && el.innerText.trim() === "Makeup") {
            // 3. Find the closest list item or container and delete it
            const container = el.closest('li') || el;
            container.remove();
            console.log("Makeup removed from sub-menu.");
        }
    });
}

const applyWidthFix = () => {
    const tabs = document.querySelector('.rbx-tabs-horizontal .nav-tabs');
    const container = document.querySelector('.rbx-tabs-horizontal');
    const dropdown = document.querySelector('.tab-horizontal-submenu');

    if (dropdown) {
        dropdown.style.setProperty('width', '930px', 'important');
    }

    if (tabs) {
        tabs.style.setProperty('width', 'max-content', 'important');
        tabs.style.setProperty('display', 'flex', 'important');

        const tabItems = tabs.querySelectorAll('li');
        tabItems.forEach(item => {
            item.style.setProperty('min-width', '155px', 'important');
            item.style.setProperty('flex', '0 0 auto', 'important');
            item.style.setProperty('height', '36px', 'important');
            
            const link = item.querySelector('a');
            if (link) {
                link.style.setProperty('display', 'flex', 'important');
                link.style.setProperty('justify-content', 'center', 'important');
                link.style.setProperty('padding', '0px', 'important');
                link.style.setProperty('line-height', '36px', 'important');
            }
        });
    }
    
    if (container) {
        container.style.setProperty('width', 'max-content', 'important');
        container.style.setProperty('overflow', 'visible', 'important');
    }
};

function runloop() {
removeMakeup();
applyWidthFix();
requestAnimationFrame(runLoop)
}

// Watch for changes
const observer = new MutationObserver(() => {
    removeMakeup();
    applyWidthFix();
});
observer.observe(document.body, { childList: true, subtree: true });