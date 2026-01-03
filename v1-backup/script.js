/**
 * Vista Lake Estates - Strategy Report
 * Interactive JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    setReportDate();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize progress tracking
    initProgressTracking();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize intersection observers
    initIntersectionObservers();
    
    // Initialize checkbox persistence
    initCheckboxPersistence();
});

/**
 * Set the report date
 */
function setReportDate() {
    const options = { year: 'numeric', month: 'long' };
    const dateStr = new Date().toLocaleDateString('en-US', options);
    
    const reportDate = document.getElementById('report-date');
    const footerDate = document.getElementById('footer-date');
    
    if (reportDate) reportDate.textContent = dateStr;
    if (footerDate) footerDate.textContent = `Generated: ${new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    })}`;
}

/**
 * Initialize navigation behavior
 */
function initNavigation() {
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                if (window.scrollY > 100) {
                    nav.style.boxShadow = '0 4px 20px rgba(10, 22, 40, 0.1)';
                } else {
                    nav.style.boxShadow = 'none';
                }
                
                // Update active nav link
                updateActiveNavLink();
                
                lastScrollY = window.scrollY;
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Initialize progress tracking for checkboxes
 */
function initProgressTracking() {
    const checkboxes = document.querySelectorAll('.action-item input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateWeekProgress(this);
            saveCheckboxState(this);
        });
    });
    
    // Load saved states
    loadCheckboxStates();
}

/**
 * Update visual progress indicator for a week
 */
function updateWeekProgress(checkbox) {
    const weekCard = checkbox.closest('.week-card');
    const allCheckboxes = weekCard.querySelectorAll('input[type="checkbox"]');
    const checkedCount = weekCard.querySelectorAll('input[type="checkbox"]:checked').length;
    const totalCount = allCheckboxes.length;
    const progress = (checkedCount / totalCount) * 100;
    
    // Add progress indicator if not exists
    let progressBar = weekCard.querySelector('.week-progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'week-progress-bar';
        progressBar.innerHTML = '<div class="week-progress-fill"></div>';
        weekCard.querySelector('.week-header').appendChild(progressBar);
        
        // Add styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .week-progress-bar {
                position: absolute;
                right: 24px;
                width: 100px;
                height: 6px;
                background: rgba(0,0,0,0.1);
                border-radius: 100px;
                overflow: hidden;
            }
            .week-header {
                position: relative;
            }
            .week-progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #c9a962, #d4ba7a);
                border-radius: 100px;
                transition: width 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }
    
    progressBar.querySelector('.week-progress-fill').style.width = `${progress}%`;
    
    // Update week card appearance if complete
    if (progress === 100) {
        weekCard.classList.add('completed');
    } else {
        weekCard.classList.remove('completed');
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize intersection observers for animations
 */
function initIntersectionObservers() {
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
    const elementsToAnimate = document.querySelectorAll(
        '.exec-card, .data-card, .gap-card, .phase-card, .principle-card, .week-card, .team-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Save checkbox state to localStorage
 */
function saveCheckboxState(checkbox) {
    const id = checkbox.id;
    const state = checkbox.checked;
    
    let savedStates = JSON.parse(localStorage.getItem('vle-action-items') || '{}');
    savedStates[id] = state;
    localStorage.setItem('vle-action-items', JSON.stringify(savedStates));
}

/**
 * Load checkbox states from localStorage
 */
function loadCheckboxStates() {
    const savedStates = JSON.parse(localStorage.getItem('vle-action-items') || '{}');
    
    Object.entries(savedStates).forEach(([id, state]) => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.checked = state;
            updateWeekProgress(checkbox);
        }
    });
}

/**
 * Initialize checkbox persistence
 */
function initCheckboxPersistence() {
    // Add reset button to action plan section
    const actionSection = document.getElementById('action-plan');
    if (actionSection) {
        const resetBtn = document.createElement('button');
        resetBtn.className = 'reset-progress-btn';
        resetBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                <path d="M21 3v5h-5"/>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                <path d="M8 16H3v5"/>
            </svg>
            Reset Progress
        `;
        resetBtn.addEventListener('click', resetProgress);
        
        const header = actionSection.querySelector('.section-header');
        if (header) {
            header.style.position = 'relative';
            resetBtn.style.cssText = `
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                background: transparent;
                border: 1px solid #c4d3e3;
                border-radius: 6px;
                color: #2a4a72;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
            `;
            header.appendChild(resetBtn);
        }
    }
}

/**
 * Reset all progress
 */
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('vle-action-items');
        document.querySelectorAll('.action-item input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
            updateWeekProgress(cb);
        });
    }
}

/**
 * Export to PDF functionality (enhanced print)
 */
function exportToPDF() {
    // Hide navigation and non-essential elements
    document.body.classList.add('printing');
    
    window.print();
    
    // Restore after print dialog
    setTimeout(() => {
        document.body.classList.remove('printing');
    }, 1000);
}

// Add print styles
const printStyles = document.createElement('style');
printStyles.textContent = `
    @media print {
        .nav,
        .scroll-indicator,
        .reset-progress-btn,
        .week-progress-bar {
            display: none !important;
        }
        
        .content-section {
            page-break-inside: avoid;
        }
        
        .gap-card,
        .phase-card,
        .principle-card {
            break-inside: avoid;
        }
        
        body {
            font-size: 11pt;
        }
        
        .cover-page {
            height: 100vh;
        }
        
        .exec-card,
        .data-card,
        .gap-card,
        .phase-card,
        .principle-card,
        .week-card,
        .team-card {
            opacity: 1 !important;
            transform: none !important;
        }
    }
    
    .week-card.completed {
        border-color: #10b981;
    }
    
    .week-card.completed .week-header {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), white);
    }
    
    .reset-progress-btn:hover {
        background: #e8eef5 !important;
        border-color: #8ba3bf !important;
    }
`;
document.head.appendChild(printStyles);

// Console branding
console.log('%c Lake Vista Estates ', 'background: #0a1628; color: #c9a962; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 4px;');
console.log('%c Full Data Inventory & Blue-Chip Strategy Report ', 'color: #2a4a72; font-size: 12px; padding: 5px;');

