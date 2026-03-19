// Page navigation and dark mode
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');

    function showLoadingScreen() {
        if (loadingScreen && loadingBar) {
            loadingScreen.style.display = 'flex';
            loadingScreen.classList.remove('hidden');
            loadingBar.style.width = '0%';
            void loadingBar.offsetWidth;
            setTimeout(() => {
                loadingBar.style.width = '100%';
            }, 10);
        }
    }

    function hideLoadingScreen() {
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1600);
        }
    }

    if (document.readyState === 'complete') {
        hideLoadingScreen();
    } else {
        window.addEventListener('load', hideLoadingScreen);
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const footerLinks = document.querySelectorAll('.footer-nav a[data-page]');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (darkModeToggle) {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            body.classList.add('dark-mode');
            darkModeToggle.classList.add('active');
            darkModeToggle.setAttribute('aria-checked', 'true');
            darkModeToggle.querySelector('.toggle-icon').textContent = '☀️';
        } else {
            darkModeToggle.setAttribute('aria-checked', 'false');
        }

        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            darkModeToggle.classList.toggle('active');
            const isDark = body.classList.contains('dark-mode');
            darkModeToggle.setAttribute('aria-checked', isDark ? 'true' : 'false');
            if (isDark) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.querySelector('.toggle-icon').textContent = '☀️';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.querySelector('.toggle-icon').textContent = '🌙';
            }
        });
    }

    const pageTitles = {
        'home': 'Aura Market LLC — Organize better. Travel smarter.',
        'about': 'About Us — Aura Market LLC'
    };

    function switchPage(targetPage) {
        showLoadingScreen();
        pages.forEach(page => page.classList.remove('active'));
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });
        footerLinks.forEach(link => link.removeAttribute('aria-current'));

        const selectedLink = document.querySelector(`[data-page="${targetPage}"]`);
        if (selectedLink) {
            selectedLink.classList.add('active');
            selectedLink.setAttribute('aria-current', 'page');
        }
        footerLinks.forEach(link => {
            if (link.getAttribute('data-page') === targetPage) {
                link.setAttribute('aria-current', 'page');
            }
        });

        setTimeout(() => {
            const selectedPage = document.getElementById(targetPage);
            if (selectedPage) selectedPage.classList.add('active');
            document.title = pageTitles[targetPage] || `${targetPage.charAt(0).toUpperCase() + targetPage.slice(1).replace('-', ' ')} — Aura Market LLC`;
            hideLoadingScreen();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    const logo = document.getElementById('logo-home');
    if (logo) {
        logo.addEventListener('click', () => switchPage('home'));
        logo.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                switchPage('home');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            switchPage(this.getAttribute('data-page'));
        });
    });

    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            switchPage(this.getAttribute('data-page'));
        });
    });

    const ctaHero = document.querySelector('#cta-hero');
    if (ctaHero) {
        ctaHero.addEventListener('click', function(e) {
            e.preventDefault();
            const homePage = document.getElementById('home');
            if (!homePage.classList.contains('active')) {
                switchPage('home');
                setTimeout(() => scrollToSection('value-proposition'), 300);
            } else {
                scrollToSection('value-proposition');
            }
        });
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: section.offsetTop - headerHeight - 20,
                behavior: 'smooth'
            });
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && !this.hasAttribute('data-page')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const currentPage = document.querySelector('.page.active');
                    if (currentPage && currentPage.contains(targetElement)) {
                        e.preventDefault();
                        scrollToSection(targetId);
                    }
                }
            }
        });
    });
});
