/* =====================================================
   Vista Lake Estates - Investor Landing Page V2
   Interactive Features
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================================
    // NAVIGATION
    // =====================================================
    
    const nav = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    
    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navLinks) navLinks.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
            }
        });
    });
    
    // =====================================================
    // TABS
    // =====================================================
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // =====================================================
    // VISION GALLERY TOGGLE (Future/Current Site Views)
    // =====================================================
    
    const visionTabs = document.querySelectorAll('.vision-tab');
    const visionViews = document.querySelectorAll('.vision-view');
    
    visionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetView = this.dataset.view;
            
            // Remove active from all tabs
            visionTabs.forEach(t => t.classList.remove('active'));
            
            // Hide all views
            visionViews.forEach(v => {
                v.classList.remove('active');
                v.style.display = 'none';
            });
            
            // Activate clicked tab
            this.classList.add('active');
            
            // Show corresponding view
            const activeView = document.querySelector(`.vision-view[data-view="${targetView}"]`);
            if (activeView) {
                activeView.classList.add('active');
                activeView.style.display = 'block';
            }
        });
    });
    
    // =====================================================
    // STRATEGY TOGGLE (Returns Section)
    // =====================================================
    
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const strategyPanels = document.querySelectorAll('.strategy-panel');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetPanel = this.dataset.target;
            
            // Remove active from all
            toggleBtns.forEach(b => b.classList.remove('active'));
            strategyPanels.forEach(p => p.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            document.getElementById(targetPanel).classList.add('active');
        });
    });
    
    // =====================================================
    // ACCORDIONS
    // =====================================================
    
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const item = this.parentElement;
            const isOpen = item.classList.contains('open');
            
            // Optional: Close all others in same accordion
            // const accordion = item.parentElement;
            // accordion.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
            
            // Toggle current
            if (isOpen) {
                item.classList.remove('open');
            } else {
                item.classList.add('open');
            }
        });
    });
    
    // =====================================================
    // EMAIL GATE (Data Room)
    // =====================================================
    
    const gateForm = document.getElementById('gate-form');
    const emailGate = document.getElementById('email-gate');
    const dataRoomContent = document.getElementById('data-room-content');
    
    // Check if already unlocked (localStorage)
    if (localStorage.getItem('dataRoomUnlocked')) {
        if (emailGate) emailGate.style.display = 'none';
        if (dataRoomContent) dataRoomContent.style.display = 'block';
    }
    
    if (gateForm) {
        gateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Store email (you'd typically send this to your backend/email service)
                console.log('Email captured:', email);
                
                // Unlock data room
                localStorage.setItem('dataRoomUnlocked', 'true');
                localStorage.setItem('investorEmail', email);
                
                // Show content
                emailGate.style.display = 'none';
                dataRoomContent.style.display = 'block';
                
                // Smooth scroll to content
                dataRoomContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Track event (Google Analytics)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'data_room_unlock', {
                        'event_category': 'engagement',
                        'event_label': email
                    });
                }
            }
        });
    }
    
    // =====================================================
    // CHECKLIST (90-Day Plan)
    // =====================================================
    
    const checkItems = document.querySelectorAll('.check-item input[type="checkbox"]');
    
    // Load saved state
    checkItems.forEach((checkbox, index) => {
        const saved = localStorage.getItem(`checklist_${index}`);
        if (saved === 'true') {
            checkbox.checked = true;
        }
        
        // Save on change
        checkbox.addEventListener('change', function() {
            localStorage.setItem(`checklist_${index}`, this.checked);
            
            // Update badge
            const badge = this.parentElement.querySelector('.badge');
            if (badge && this.checked) {
                badge.className = 'badge badge-verified';
                badge.innerHTML = '<i class="fas fa-check"></i> Complete';
            }
        });
    });
    
    // =====================================================
    // PROGRESS BARS ANIMATION
    // =====================================================
    
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                bar.style.width = bar.style.width; // Trigger animation
            }
        });
    };
    
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Initial check
    
    // =====================================================
    // STRATEGY CARDS (Hero)
    // =====================================================
    
    const strategyCards = document.querySelectorAll('.strategy-card[data-strategy]');
    
    strategyCards.forEach(card => {
        card.addEventListener('click', function() {
            const strategy = this.dataset.strategy;
            const targetBtn = document.querySelector(`.toggle-btn[data-target="strategy-${strategy === 'lots' ? 'a' : 'b'}"]`);
            
            // Scroll to returns section
            document.getElementById('returns').scrollIntoView({ behavior: 'smooth' });
            
            // Trigger the toggle after a delay
            setTimeout(() => {
                if (targetBtn) targetBtn.click();
            }, 500);
        });
    });
    
    // =====================================================
    // INTERSECTION OBSERVER (Animations)
    // =====================================================
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.why-card, .cta-card, .verify-item, .phase-card').forEach(el => {
        observer.observe(el);
    });
    
    // =====================================================
    // DOWNLOAD TRACKING
    // =====================================================
    
    document.querySelectorAll('.doc-item').forEach(link => {
        link.addEventListener('click', function() {
            const docName = this.querySelector('.doc-name')?.textContent || 'Unknown';
            
            // Track event (Google Analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'download', {
                    'event_category': 'documents',
                    'event_label': docName
                });
            }
            
            console.log('Download tracked:', docName);
        });
    });
    
    // =====================================================
    // TOOLTIPS (Badge Hover)
    // =====================================================
    
    document.querySelectorAll('.badge-verified').forEach(badge => {
        badge.setAttribute('title', 'Verified via government records');
    });
    
    document.querySelectorAll('.badge-progress').forEach(badge => {
        badge.setAttribute('title', 'Verification in progress');
    });
    
    document.querySelectorAll('.badge-pending').forEach(badge => {
        badge.setAttribute('title', 'Pending confirmation');
    });
    
    // =====================================================
    // DATE UPDATE
    // =====================================================
    
    const reportDate = document.getElementById('report-date');
    if (reportDate && !reportDate.textContent.includes('2026')) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long' };
        reportDate.textContent = now.toLocaleDateString('en-US', options);
    }
    
    // =====================================================
    // CONSOLE WELCOME
    // =====================================================
    
    console.log('%c Vista Lake Estates ', 'background: #1e3a5f; color: #c9a961; font-size: 20px; padding: 10px;');
    console.log('%c Investment Memorandum - For Accredited Investors Only ', 'background: #0a1628; color: #8ba3bf; padding: 5px;');
    
});

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Format percentage
function formatPercent(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }).format(value / 100);
}

