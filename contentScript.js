var arr_localstorage_hold = ['sfchronicle.com'];
var localstorage_hold = arr_localstorage_hold.some(function(url) {
    return window.location.href.indexOf(url) !== -1;
});

if (!localstorage_hold){
    window.localStorage.clear();
}

if (location.hostname.endsWith('rep.repubblica.it')) {
    if (location.href.includes('/pwa/')) {
        location.href = location.href.replace('/pwa/', '/ws/detail/');
    }

    if (location.href.includes('/ws/detail/')) {
        const paywall = document.querySelector('.paywall[subscriptions-section="content"]');
        if (paywall) {
            paywall.removeAttribute('subscriptions-section');
            const preview = document.querySelector('ffdiv[subscriptions-section="content-not-granted"]');
            if (preview) {
                preview.remove();
            }
        }
    }
}

if (window.location.href.indexOf("americanbanker.com") !== -1) {
    const paywall = document.getElementsByClassName('embargo-content')[0];
    if (paywall)
        paywall.classList.remove('embargo-content');
}

if (window.location.href.indexOf('telegraaf.nl') !== -1) {
    setTimeout(function () {
        const paywall = document.getElementById('TEMPRORARY_METERING_ID');
        if (paywall) {
            window.location.reload(true);
        }
    }, 1000); // Delay (in milliseconds)
}

if (window.location.href.indexOf('ad.nl') !== -1 || window.location.href.indexOf('ed.nl') !== -1) {
    let paywall = document.querySelector('.article__component.article__component--paywall-module-notification');
    removeDOMElement(paywall);
}

if (window.location.href.indexOf("washingtonpost.com") !== -1) {
    if (location.href.includes('/gdpr-consent/')) {
        const free_button = document.querySelector('.gdpr-consent-container .continue-btn.button.free');
        if (free_button)
            free_button.click();

        setTimeout(function () {
            const gdprcheckbox = document.querySelector('.gdpr-consent-container .consent-page:not(.hide) #agree');
            if (gdprcheckbox) {
                gdprcheckbox.checked = true;
                gdprcheckbox.dispatchEvent(new Event('change'));

                document.querySelector('.gdpr-consent-container .consent-page:not(.hide) .continue-btn.button.accept-consent').click();
            }
        }, 300); // Delay (in milliseconds)
    }
}

if (window.location.href.indexOf("wsj.com") !== -1) {
    if (location.href.includes('/articles/')) {
        const close_button = document.querySelector('.close-btn');
        if (close_button)
            close_button.click();
    }
}

if (window.location.href.indexOf("sloanreview.mit.edu") !== -1) {
    document.querySelector('#cboxClose').click();
}

if (window.location.href.indexOf("mexiconewsdaily.com") !== -1) {
    document.addEventListener('DOMContentLoaded', () => {
        const sideNotification = document.querySelector('.pigeon-widget-prompt');
        const subMessage = document.querySelector('.sub_message_container');
        const popup = document.querySelector('.popupally-pro-outer-full-width-7-fluid_qemskqa');
        const bgFocusRemoverId = document.getElementById('popup-box-pro-gfcr-7');

        removeDOMElement(sideNotification, subMessage, popup, bgFocusRemoverId);
    });
}

if (window.location.href.indexOf("theathletic.com") !== -1) {
    const landing_banner = document.querySelector('.logged-out-landing-banner');
    const sample_banner = document.querySelector('.main-sample-banner');
    const bottom_banner = document.querySelector('.border-bottom-cc');
    const subscribe = document.querySelector('.subscribe-ad-text');
    removeDOMElement(landing_banner, sample_banner, bottom_banner, subscribe);
}

if (window.location.href.indexOf("the-american-interest.com") !== -1) {
  const counter = document.getElementById('article-counter');
  removeDOMElement(counter);
}

if (window.location.href.indexOf("nzherald.co.nz") !== -1) {
    const paywall = document.getElementById('article-content');
    if (paywall) {
        const premium = document.getElementsByClassName('premium-sub')[0];
        removeDOMElement(premium);
        paywall.classList.remove('premium-content');
        paywall.classList.add('full-content');
        removeClassesByPrefix(paywall, 'QUnW');
        var paras = paywall.querySelectorAll("p, span, h2, div");
        for (var i = 0; i < paras.length; i++){     
            removeClassesByPrefix(paras[i], 'QUnW');
            paras[i].classList.remove("ellipsis");
            paras[i].removeAttribute('style');
        }
    }
}

if (window.location.href.indexOf("thestar.com") !== -1) {
    const paywall = document.querySelector('.basic-paywall-new');
    removeDOMElement(paywall);
    const tbc = document.querySelectorAll('.text-block-container');
    for (let i = 0; i < tbc.length; i++) {
        tbc[i].removeAttribute('style');
    }
}

if (window.location.href.indexOf("afr.com") !== -1) {
    document.addEventListener('DOMContentLoaded', () => {
        const hidden_image = document.querySelectorAll('img');
        for (let i = 0; i < hidden_image.length; i++) {
            var src = hidden_image[i].src;
            if ('src: ' + src.indexOf(".gif") !== -1) {
                var data_src = hidden_image[i].getAttribute("data-src");
                if (data_src)
                    hidden_image[i].setAttribute('src', data_src);
            }
        }
        const plista = document.querySelector('div[data-plista-placement="underArticle_Group"]');
        removeDOMElement(plista);
    });
}

if (window.location.href.indexOf("parool.nl") !== -1 || window.location.href.indexOf("trouw.nl") !== -1 || window.location.href.indexOf("volkskrant.nl") !== -1) {
    document.addEventListener('DOMContentLoaded', () => {
        const paywall = document.querySelector('div[data-temptation-position="ARTICLE_BOTTOM"]');
        const hidden_section = document.querySelector('div[data-temptation-position="ARTICLE_INLINE"]');
        removeDOMElement(paywall, hidden_section);
    });
}

if (window.location.href.indexOf("firstthings.com") !== -1) {
    const paywall = document.getElementsByClassName('paywall')[0];
    removeDOMElement(paywall);
}

if (window.location.href.indexOf("bloomberg.com") !== -1) {
    document.addEventListener('DOMContentLoaded', () => {
        const fence = document.querySelector('.fence-body');
        if (fence){
            fence.classList.remove('fence-body');
        }
        const paywall = document.getElementById('paywall-banner');
        removeDOMElement(paywall);
    });
}

if (window.location.href.indexOf("bloombergquint.com") !== -1) {
    const articlesLeftModal = document.getElementsByClassName('paywall-meter-module__story-paywall-container__1UgCE')[0];
    const paywall = document.getElementById('paywallDmp');
    removeDOMElement(articlesLeftModal, paywall);
}

if (window.location.href.indexOf("medium.com") !== -1) {
    const bottomMessageText = 'Get one more story in your member preview when you sign up. It’s free.';
    const DOMElementsToTextDiv = pageContains('div', bottomMessageText);
    if (DOMElementsToTextDiv[2]) removeDOMElement(DOMElementsToTextDiv[2]);
}

if (window.location.href.indexOf("theglobeandmail.com") !== -1) {
    document.addEventListener('DOMContentLoaded', () => {
        const lazy_image = document.querySelectorAll('.js-lazyimage');
        for (let i = 0; i < lazy_image.length; i++) {
            lazy_image[i].classList.remove('js-lazyimage');
        }
        const hidden_image = document.querySelectorAll('img');
        for (let i = 0; i < hidden_image.length; i++) {
            var src = hidden_image[i].src;
            if (src.indexOf("data:image/gif") !== -1) {
                var data_src = hidden_image[i].getAttribute("data-src");
                if (data_src)
                    hidden_image[i].setAttribute('src', data_src);
                var data_bg = hidden_image[i].getAttribute("data-bg");
                if (data_bg)
                    hidden_image[i].setAttribute('src', data_bg);
            }
        }
    });
}

if (window.location.href.indexOf("examiner.com.au") !== -1 || window.location.href.indexOf("thecourier.com.au") !== -1) {
  const subscribe_truncate = document.querySelector('.subscribe-truncate');
  if (subscribe_truncate)
      subscribe_truncate.classList.remove('subscribe-truncate');
  const subscriber_hider = document.querySelectorAll('.subscriber-hider');
  for (let i = 0; i < subscriber_hider.length; i++) {
      subscriber_hider[i].classList.remove('subscriber-hider');
  }
}


if (window.location.href.indexOf("medium.com") !== -1) {
    const bottomMessageText = 'Get one more story in your member preview when you sign up. It’s free.';
    const DOMElementsToTextDiv = pageContains('div', bottomMessageText);
    if (DOMElementsToTextDiv[2]) removeDOMElement(DOMElementsToTextDiv[2]);
}


if (window.location.href.indexOf('lemonde.fr') !== -1) {
    document.addEventListener('DOMContentLoaded', () => {
        const hidden_section = document.getElementsByClassName('article__content--restricted-media')[0];
        if (hidden_section)
            hidden_section.classList.remove('article__content--restricted-media');
        const longform_article_restricted = document.getElementsByClassName('article__content--restricted')[0];     
        if (longform_article_restricted)
            longform_article_restricted.classList.remove('article__content--restricted');   
        const longform_paywall = document.getElementsByClassName('paywall--longform')[0];       
        if (longform_paywall)
            longform_paywall.classList.remove('paywall--longform'); 
        const paywall = document.getElementById('js-paywall-content');
        const friend_paywall = document.getElementsByClassName('friend--paywall')[0];
        const cookie_banner = document.getElementById('cookie-banner');
        removeDOMElement(paywall, friend_paywall, cookie_banner);
    });
}
    
if (window.location.href.indexOf("canberratimes.com.au") !== -1) {
        const paywall = document.querySelector('.subscribe-article.news-article-body.article__body');
        paywall.classList.remove('subscribe-article');
        var subscribe = document.getElementsByClassName('subscriber-container')[0];
        removeDOMElement(subscribe);
        var content = document.getElementsByClassName('subscriber-hider');
        for (var i = 0; i < content.length; i++) {
        content[i].classList.remove('subscriber-hider');
    }
}

if (window.location.href.indexOf("estadao.com.br") !== -1) {
        const paywall = document.getElementById('paywall-iframe-estadao');
        removeDOMElement(paywall);
        
        const paywall2 = document.getElementById('paywall-wrapper-iframe-estadao');
        removeDOMElement(paywall2);

        while(document.documentElement.style.overflow !== "scroll"){
        document.documentElement.style.overflow = "scroll"
        document.documentElement.style.position = "relative"
    }
}

if (window.location.href.indexOf("folha.uol.com.br") !== -1) {
        const paywall = document.getElementById('paywall-screen');
        removeDOMElement(paywall);
        
        const paywall2 = document.getElementById('paywall-fill');
        removeDOMElement(paywall2);

        for (div=0; div < document.querySelectorAll('div').length; div++) {
          document.querySelectorAll('div')[div].style.overflow = "auto";
        };
}

if (window.location.href.indexOf("nexojornal.com.br") !== -1) {
       const content = document.getElementsByClassName('Datawall__wrap-container___1eJah');

       if (content)
            for (var i = 0; i < content.length; i++) {
                 content[i].remove();}

       while(document.documentElement.style.overflow !== "scroll"){
        document.documentElement.style.overflow = "scroll"
        document.documentElement.style.position = "relative"
   }
}


if (window.location.href.indexOf("ledevoir.com") !== -1) {
        const counter = document.querySelector('.full.hidden-print.popup-msg');
        removeDOMElement(counter);
}

if (window.location.href.includes('ft.com')) {
    const cookie_banner = document.querySelector('.n-messaging-banner__outer');
    removeDOMElement(cookie_banner);
}

if (window.location.href.indexOf("thehindu.com") !== -1) {
        const paywall = document.getElementById('test');
        removeDOMElement(paywall);
}

if (window.location.href.indexOf("nytimes.com") !== -1) {
    const preview_button = document.querySelector('.css-3s1ce0');
        if (preview_button)
            preview_button.click();
}

if (window.location.href.indexOf("leparisien.fr") !== -1) {
        window.removeEventListener('scroll', this.scrollListener);
        const paywall = document.querySelector('.relative.piano-paywall.below_nav.sticky');
        removeDOMElement(paywall);
        setTimeout(function () {
            var content = document.getElementsByClassName('content');
            for (var i = 0; i < content.length; i++) {
                content[i].removeAttribute("style");
            }
        }, 300); // Delay (in milliseconds)
}

if (window.location.href.indexOf("economist.com") !== -1) {
    document.addEventListener('DOMContentLoaded', () => {
        const subscribe = document.querySelector('.subscription-proposition');
        const advert = document.querySelector('.advert');
		const wrapper = document.getElementById('bottom-page-wrapper');
		removeDOMElement(subscribe, advert, wrapper);
		setTimeout(function () {
			const paywall = document.querySelector('.layout-article-regwall');;
			if (paywall) {
				window.location.reload(true);
			}
		}, 500); // Delay (in milliseconds)
	});
}

if (window.location.href.indexOf("bizjournals.com") !== -1) {
        const sheet_overlay = document.querySelector('.sheet-overlay');
        const chunk_paywall = document.querySelector('.chunk--paywall');
        removeDOMElement(sheet_overlay, chunk_paywall);
        const overlaid = document.querySelectorAll('.is-overlaid');
        for (var i = 0; i < overlaid.length; i++) {
            overlaid[i].classList.remove('is-overlaid');
        }
        const body_hidden = document.querySelector('.js-pre-chunks__story-body');
        body_hidden.removeAttribute('style');
}

if (window.location.href.indexOf("the-tls.co.uk") !== -1) {
        const paywall = document.querySelector('.tls-subscriptions-banner__closed-skin');
        removeDOMElement(paywall);
}

function removeDOMElement(...elements) {
    for (let element of elements) {
        if (element)
            element.remove();
    }
}

function removeClassesByPrefix(el, prefix) {
    for (var i = 0; i < el.classList.length; i++){
        if (el.classList[i].startsWith(prefix)) {
            el.classList.remove(el.classList[i]);
        }
    }
}

function pageContains(selector, text) {
    let elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function(element){
        return RegExp(text).test(element.textContent);
    });
}
