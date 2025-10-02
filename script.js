const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const tabId = item.getAttribute('data-tab');
        
        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to clicked nav item
        item.classList.add('active');
        
        // Remove active class from all tab contents
        tabContents.forEach(content => content.classList.remove('active'));
        // Add active class to corresponding tab content
        document.getElementById(tabId).classList.add('active');
    });
});