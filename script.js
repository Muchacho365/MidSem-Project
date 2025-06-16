// Responsive navigation and dropdowns


// Responsive form layout (optional, for extra mobile friendliness)
            document.addEventListener("DOMContentLoaded", function () {
                const form = document.querySelector(".container-booking-form");
                if (form) {
                    function updateFormLayout() {
                        if (window.innerWidth < 600) {
                            form.style.flexDirection = "column";
                        } else {
                            form.style.flexDirection = "row";
                        }
                    }
                    updateFormLayout();
                    window.addEventListener("resize", updateFormLayout);
                }
                // Flight search handler
                const searchForm =
                    document.getElementById("flight-search-form");
                if (searchForm) {
                    searchForm.addEventListener("submit", function (e) {
                        e.preventDefault();
                        const from = searchForm.elements["from"].value;
                        const to = searchForm.elements["to"].value;
                        const date = searchForm.elements["date"].value;
                        alert(
                            `Searching flights from ${from} to ${to} on ${date}`
                        );
                        // You can replace alert with actual search logic or redirect
                    });
                }
            });

// Get references to menu toggle button and navigation
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.container-main-nav');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle mobile navigation menu
if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });
}

// Handle dropdowns for mobile: open/close on click
// On desktop, dropdowns open on hover (handled by CSS)
dropdowns.forEach(function (dropdown) {
    const link = dropdown.querySelector('a');
    if (link) {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                // Close other open dropdowns
                dropdowns.forEach(function (d) {
                    if (d !== dropdown) d.classList.remove('open');
                });
                // Toggle this dropdown
                dropdown.classList.toggle('open');
            }
        });
    }
});

// Optional: Close nav or dropdowns when clicking outside (mobile)
document.addEventListener('click', function (e) {
    if (!e.target.closest('.container-header-content')) {
        if (mainNav) mainNav.classList.remove('active');
        dropdowns.forEach(function (d) { d.classList.remove('open'); });
    }
});

// Optional: On window resize, remove mobile classes if switching to desktop
window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
        if (mainNav) mainNav.classList.remove('active');
        dropdowns.forEach(function (d) { d.classList.remove('open'); });
    }
});

// Responsive booking form: focus effect for accessibility
const bookingInputs = document.querySelectorAll('.container-booking-form input');
bookingInputs.forEach(function(input) {
    input.addEventListener('focus', function() {
        input.style.borderColor = '#8d1846';
    });
    input.addEventListener('blur', function() {
        input.style.borderColor = '#ccc';
    });
});

// Prevent form submission (demo only)
const bookingForm = document.querySelector('.container-booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Search functionality coming soon!');
    });
}

// End of script.js
