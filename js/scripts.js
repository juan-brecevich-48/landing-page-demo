window.addEventListener('DOMContentLoaded', event => {
    const renderConfig = () => {
        const cfg = window.pageConfig;
        if (!cfg) {
            return;
        }

        setPageMetadata(cfg);
        setNavBar(cfg);
        setMasthead(cfg);
        setFeatures(cfg);
        setShowcases(cfg);
        setContact(cfg);
    };

    renderConfig();
});

function setPageMetadata(cfg) {
    // page metadata
    document.title = cfg.site.title || document.title;
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon && cfg.site.favicon) {
        favicon.href = cfg.site.favicon;
    }
}

function setNavBar(cfg) {
    const brand = document.getElementById('navBrand');
    if (brand && cfg.nav.brand) {
        brand.textContent = cfg.nav.brand;
    }

    const signupBtn = document.getElementById('navBtn');
    if (signupBtn && cfg.nav.button) {
        signupBtn.textContent = cfg.nav.button.text;
        signupBtn.href = cfg.nav.button.href;
    }
    const logoImg = document.getElementById('navLogo');
    if (logoImg && cfg.nav.logo) {
        logoImg.src = cfg.nav.logo;
        logoImg.alt = cfg.nav.brand || 'Logo';
    }
}
function setMasthead(cfg) {
    const mastheadTitle = document.getElementById('mastheadTitle');
    const mastheadSubtitle = document.getElementById('mastheadSubtitle');
    const mastheadBtn = document.getElementById('mastheadBtn');
    const mastheadBackground = document.getElementById('masthead');

    if (mastheadTitle && cfg.masthead.title) {
        mastheadTitle.textContent = cfg.masthead.title;
    }
    if (mastheadSubtitle && cfg.masthead.subtitle) {
        mastheadSubtitle.textContent = cfg.masthead.subtitle;
    }
    if (mastheadBtn && cfg.masthead.button) {
        mastheadBtn.textContent = cfg.masthead.button.text;
        mastheadBtn.href = cfg.masthead.button.href;
    }
    if (mastheadBackground) {
        if (cfg.masthead.backgroundImg) {
            mastheadBackground.style.backgroundImage = `url('${cfg.masthead.backgroundImg}')`;
        }
        if (cfg.masthead.backgroundAlt) {
            mastheadBackground.setAttribute('aria-label', cfg.masthead.backgroundAlt);
        }
        if (cfg.masthead.backgroundColor) {
            mastheadBackground.style.backgroundColor = cfg.masthead.backgroundColor;
        }
    }
}
function setFeatures(cfg){
    const featureIcon1 = document.getElementById('featureIcon1');
    const featureTitle1 = document.getElementById('featureTitle1');
    const featureText1 = document.getElementById('featureText1');
    const featureIcon2 = document.getElementById('featureIcon2');
    const featureTitle2 = document.getElementById('featureTitle2');
    const featureText2 = document.getElementById('featureText2');
    const featureIcon3 = document.getElementById('featureIcon3');
    const featureTitle3 = document.getElementById('featureTitle3');
    const featureText3 = document.getElementById('featureText3');

    if (featureIcon1 && cfg.features.featureOne.icon) {
        featureIcon1.className = cfg.features.featureOne.icon;
    }
    if (featureTitle1 && cfg.features.featureOne.title) {
        featureTitle1.textContent = cfg.features.featureOne.title;
    }
    if (featureText1 && cfg.features.featureOne.text) {
        featureText1.textContent = cfg.features.featureOne.text;
    }
    if (featureIcon2 && cfg.features.featureTwo.icon) {
        featureIcon2.className = cfg.features.featureTwo.icon;
    }
    if (featureTitle2 && cfg.features.featureTwo.title) {
        featureTitle2.textContent = cfg.features.featureTwo.title;
    }
    if (featureText2 && cfg.features.featureTwo.text) {
        featureText2.textContent = cfg.features.featureTwo.text;
    }
    if (featureIcon3 && cfg.features.featureThree.icon) {
        featureIcon3.className = cfg.features.featureThree.icon;
    }
    if (featureTitle3 && cfg.features.featureThree.title) {
        featureTitle3.textContent = cfg.features.featureThree.title;
    }
    if (featureText3 && cfg.features.featureThree.text) {
        featureText3.textContent = cfg.features.featureThree.text;
    }   
}

function setShowcases(cfg) {
    const showcaseTitle1 = document.getElementById('showcaseTitle1');
    const showcaseText1 = document.getElementById('showcaseText1');
    const showcaseImage1 = document.getElementById('showcaseImage1');
    const showcaseTitle2 = document.getElementById('showcaseTitle2');
    const showcaseText2 = document.getElementById('showcaseText2');
    const showcaseImage2 = document.getElementById('showcaseImage2');
    const showcaseTitle3 = document.getElementById('showcaseTitle3');
    const showcaseText3 = document.getElementById('showcaseText3');
    const showcaseImage3 = document.getElementById('showcaseImage3');

    if (showcaseTitle1 && cfg.showcases.showcaseOne.title) {
        showcaseTitle1.textContent = cfg.showcases.showcaseOne.title;
    }
    if (showcaseText1 && cfg.showcases.showcaseOne.text) {
        showcaseText1.textContent = cfg.showcases.showcaseOne.text;
    }
    if (showcaseTitle2 && cfg.showcases.showcaseTwo.title) {
        showcaseTitle2.textContent = cfg.showcases.showcaseTwo.title;
    }
    if (showcaseText2 && cfg.showcases.showcaseTwo.text) {
        showcaseText2.textContent = cfg.showcases.showcaseTwo.text;
    }
    if (showcaseTitle3 && cfg.showcases.showcaseThree.title) {
        showcaseTitle3.textContent = cfg.showcases.showcaseThree.title;
    }
    if (showcaseText3 && cfg.showcases.showcaseThree.text) {
        showcaseText3.textContent = cfg.showcases.showcaseThree.text;
    }
    if (showcaseImage1 && cfg.showcases.showcaseOne.image) {
        showcaseImage1.src = cfg.showcases.showcaseOne.image.src;
        showcaseImage1.alt = cfg.showcases.showcaseOne.image.alt;
    }
    if (showcaseImage2 && cfg.showcases.showcaseTwo.image) {
        showcaseImage2.src = cfg.showcases.showcaseTwo.image.src;
        showcaseImage2.alt = cfg.showcases.showcaseTwo.image.alt;
    }
    if (showcaseImage3 && cfg.showcases.showcaseThree.image) {
        showcaseImage3.src = cfg.showcases.showcaseThree.image.src;
        showcaseImage3.alt = cfg.showcases.showcaseThree.image.alt;
    }
}

function setContact(cfg) {
    const contactTitle = document.getElementById('contactTitle');
    const contactBackground = document.getElementById('contact');

    if (contactTitle && cfg.contact.title) {
        contactTitle.textContent = cfg.contact.title;
    }

    if (contactBackground) {
        if (cfg.contact.backgroundImg) {
            contactBackground.style.backgroundImage = `url('${cfg.contact.backgroundImg}')`;
        }
        if (cfg.contact.backgroundAlt) {
            contactBackground.setAttribute('aria-label', cfg.contact.backgroundAlt);
        }
        if (cfg.contact.backgroundColor) {
            contactBackground.style.backgroundColor = cfg.contact.backgroundColor;
        }
    }
}