// app-config.js - Edit this file to customize your landing page
const APP_CONFIG = {
    // Basic App Info
    appName: "ConvoQuest",
    pageTitle: "ConvoQuest - Deep Conversations, Fun Games",
    metaDescription: "A conversation game app featuring deep discussion cards, Would You Rather, Rapid Fire, and more. Connect meaningfully with friends and loved ones.",

    // App Assets
    logoIcon: "images/convoquest-icon.png", // 32x32 app icon for navigation
    logoIconFooter: "images/convoquest-icon.png", // if other version for footer

    // Colors (CSS custom properties) - DARK MODE
    colors: {
        // Main brand colors
        mainColor: "#8B5CF6", // Purple accent

        buttonColor: "#8B5CF6",
        buttonHighlight: "#A78BFA",

        linkColor: "#E5E7EB",
        linkHighlight: "#8B5CF6",

        // Text colors
        mainText: "#FFFFFF",
        secondaryText: "#9CA3AF",

        // Background colors
        bgMain: "#121212",
        bgSecondary: "#1E1E1E",

        // Logo colors
        logoColorLight: "#FFFFFF",   // Top navigation logo
        logoColorDark: "#FFFFFF",    // Footer logo

        // UI elements
        borderColor: "#2D2D2D",
        shadow: "0 10px 30px rgba(0,0,0,0.4)",
        shadowLight: "0 5px 15px rgba(0,0,0,0.3)"
    },

    // Hero Section
    hero: {
        title: "Turn conversations into adventures",
        subtitle: "Deep conversations, fun challenges, and meaningful connections. ConvoQuest brings people closer through engaging card games and interactive experiences.",
        phoneImage: "images/convoquest-hero.png",
        downloadButtonText: "Download for iOS"
    },

    // Games Section
    games: {
        title: "Games for every moment",
        subtitle: "From deep talks to rapid-fire fun, there's something for everyone",
        items: [
            {
                icon: "images/cards.png",
                title: "Conversation Cards",
                description: "Thought-provoking questions that spark deep, meaningful conversations. Perfect for getting to know someone on a deeper level."
            },
            {
                icon: "images/rather.png",
                title: "Would You Rather",
                description: "Classic dilemmas with a twist. Make impossible choices and discover what really matters to you and your friends."
            },
            {
                icon: "images/stopwatch.png",
                title: "Rapid Fire",
                description: "Race against the clock! Discover your partner's favorites in a fast-paced challenge. Who knows each other best?"
            },
            {
                icon: "images/flags.png",
                title: "Green Flag / Red Flag",
                description: "Reveal your deal-breakers and must-haves. Learn what makes relationships work for you and others."
            }
        ]
    },

    // Features Section
    features: {
        title: "How it works",
        subtitle: "Simple, fun, and meaningful",
        items: [
            {
                icon: "fas fa-gamepad",
                title: "Choose a Game",
                description: "Pick from conversation cards, Would You Rather, Rapid Fire, or more fun games",
                image: "images/screen-1.png"
            },
            {
                icon: "fas fa-users",
                title: "Play Together",
                description: "Gather with friends, family, or a date and dive into meaningful conversations",
                image: "images/screen-2.png"
            },
            {
                icon: "fas fa-heart",
                title: "Connect Deeper",
                description: "Discover new things about each other and create memorable moments together",
                image: "images/screen-3.png"
            }
        ]
    },

    // About Section
    about: {
        title: "Hi, I'm Filip",
        paragraphs: [
            "I created ConvoQuest because I noticed something in my own life: the best moments with friends and loved ones always started with a great conversation. But sometimes, getting past the small talk is the hardest part.",
            "I wanted to build something that makes it <strong>easy and fun</strong> to connect on a deeper level whether you're on a first date, hanging out with old friends, or just looking for something more meaningful than \"how was your day?\"",
            "ConvoQuest is designed to spark those conversations that matter and create moments you'll actually remember. Hope you enjoy it as much as I enjoyed making it!"
        ],
        signature: {
            name: "Filip",
            title: "ConvoQuest creator",
            avatar: "images/filip.jpeg"
        },
        mainPhoto: "images/filip.jpeg"
    },

    // Contact & Social
    contact: {
        email: "filiphood.creative@gmail.com",
        twitter: "https://twitter.com/filip_hood",
    },

    // Footer
    footer: {
        copyright: "© 2025 ConvoQuest. Made with love by Filip."
    },

    // App Store Links
    appStore: {
        ios: "https://apps.apple.com/us/app/convo-quests/id6754917075",
        android: ""
    }
};

// Function to apply configuration to the page
function applyConfig() {
    // Update page title and meta
    document.title = APP_CONFIG.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = APP_CONFIG.metaDescription;

    // Update CSS custom properties for colors
    const root = document.documentElement;
    Object.entries(APP_CONFIG.colors).forEach(([key, value]) => {
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--${cssVar}`, value);
    });

    // Update navigation logo
    const navLogo = document.getElementById('nav-logo');
    if (navLogo) {
        const navLogoImg = navLogo.querySelector('img');
        if (navLogoImg) {
            navLogoImg.src = APP_CONFIG.logoIcon;
            navLogoImg.alt = APP_CONFIG.appName;
        }
        // Update logo text color
        navLogo.style.color = APP_CONFIG.colors.logoColorLight;
    }

    // Update footer logo
    const footerLogo = document.getElementById('footer-logo');
    if (footerLogo) {
        const footerLogoImg = footerLogo.querySelector('img');
        if (footerLogoImg) {
            footerLogoImg.src = APP_CONFIG.logoIconFooter || APP_CONFIG.logoIcon;
            footerLogoImg.alt = APP_CONFIG.appName;
        }
        // Update footer logo text color
        footerLogo.style.color = APP_CONFIG.colors.logoColorDark;
    }

    // Update hero section
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroPhoneImage = document.getElementById('hero-phone-image');
    const downloadBtn = document.getElementById('download-ios-btn');

    if (heroTitle) heroTitle.textContent = APP_CONFIG.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = APP_CONFIG.hero.subtitle;
    if (heroPhoneImage) {
        heroPhoneImage.src = APP_CONFIG.hero.phoneImage;
        heroPhoneImage.alt = `${APP_CONFIG.appName} App`;
    }
    if (downloadBtn) {
        downloadBtn.innerHTML = `<i class="fab fa-apple"></i> ${APP_CONFIG.hero.downloadButtonText}`;
        if (APP_CONFIG.appStore.ios) {
            downloadBtn.href = APP_CONFIG.appStore.ios;
        }
    }

    // Update games section
    const gamesTitle = document.getElementById('games-title');
    const gamesSubtitle = document.getElementById('games-subtitle');
    if (gamesTitle) gamesTitle.textContent = APP_CONFIG.games.title;
    if (gamesSubtitle) gamesSubtitle.textContent = APP_CONFIG.games.subtitle;

    // Update features section
    const featuresTitle = document.getElementById('features-title');
    if (featuresTitle) featuresTitle.textContent = APP_CONFIG.features.title;
    const featuresSubtitle = document.getElementById('features-subtitle');
    if (featuresSubtitle) featuresSubtitle.textContent = APP_CONFIG.features.subtitle;

    APP_CONFIG.features.items.forEach((feature, index) => {
        const num = index + 1;
        const featureTitle = document.getElementById(`feature-${num}-title`);
        const featureDesc = document.getElementById(`feature-${num}-desc`);
        const featureImage = document.querySelector(`.feature-card:nth-child(${num}) .feature-image`);
        const featureIcon = document.querySelector(`.feature-card:nth-child(${num}) .feature-icon i`);

        if (featureTitle) featureTitle.textContent = feature.title;
        if (featureDesc) featureDesc.textContent = feature.description;
        if (featureImage) {
            featureImage.src = feature.image;
            featureImage.alt = feature.title;
        }
        if (featureIcon) featureIcon.className = feature.icon;
    });

    // Update about section
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.innerHTML = APP_CONFIG.about.title;

    APP_CONFIG.about.paragraphs.forEach((paragraph, index) => {
        const aboutText = document.getElementById(`about-text-${index + 1}`);
        if (aboutText) aboutText.innerHTML = paragraph;
    });

    // Update signature
    const signatureName = document.getElementById('signature-name');
    const signatureTitle = document.getElementById('signature-title');
    const signatureAvatar = document.getElementById('signature-avatar');
    const aboutAvatar = document.getElementById('about-avatar');

    if (signatureName) signatureName.textContent = APP_CONFIG.about.signature.name;
    if (signatureTitle) signatureTitle.textContent = APP_CONFIG.about.signature.title;
    if (signatureAvatar) signatureAvatar.src = APP_CONFIG.about.signature.avatar;
    if (aboutAvatar) aboutAvatar.src = APP_CONFIG.about.mainPhoto;

    // Update social links
    const twitterLink = document.getElementById('twitter-link');
    const emailLink = document.getElementById('email-link');

    if (twitterLink) twitterLink.href = APP_CONFIG.contact.twitter;
    if (emailLink) emailLink.href = `mailto:${APP_CONFIG.contact.email}`;

    // Update footer
    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright) footerCopyright.textContent = APP_CONFIG.footer.copyright;

    console.log('ConvoQuest config applied successfully!');
}

// Apply configuration when page loads
document.addEventListener('DOMContentLoaded', applyConfig);

// Function to apply basic config to subpages (privacy, terms)
function applySubpageConfig() {
    // Update CSS custom properties for colors
    const root = document.documentElement;
    Object.entries(APP_CONFIG.colors).forEach(([key, value]) => {
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--${cssVar}`, value);
    });

    // Update all logos
    const logos = document.querySelectorAll('.logo img');
    logos.forEach(logo => {
        logo.src = APP_CONFIG.logoIcon;
        logo.alt = APP_CONFIG.appName;
    });

    // Update all email links
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${APP_CONFIG.contact.email}`;
        if (link.textContent.includes('@')) {
            link.textContent = APP_CONFIG.contact.email;
        }
    });

    // Update footer copyright
    const footerCopyright = document.querySelector('.footer-bottom p');
    if (footerCopyright) {
        footerCopyright.textContent = APP_CONFIG.footer.copyright;
    }

    console.log('Subpage config applied successfully!');
}

// Apply configuration based on page type
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('hero-title')) {
        // Main page
        applyConfig();
    } else {
        // Subpage (privacy, terms)
        applySubpageConfig();
    }
});
