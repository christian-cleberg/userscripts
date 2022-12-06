/* Forked from https://github.com/forLoop42/open-source-alternative-redirector */

// ==UserScript==
// @name Open-Source Alternative Redirector
// @name:ar معيد التوجيه البديل مفتوح المصدر
// @name:bg Алтернативно пренасочване с отворен код
// @name:cs Open-Source alternativní přesměrovač
// @name:da Open Source Alternativ Redirector
// @name:de Open-Source-alternativer Redirector
// @name:es Redirector alternativo de código abierto
// @name:fi Open-Source Alternative Redirector
// @name:fr Redirecteur alternatif open source
// @name:he מפנה אלטרנטיבי בקוד פתוח
// @name:it Reindirizzamento alternativo open source
// @name:ja オープンソースの代替リダイレクター
// @name:ko 오픈 소스 대체 리디렉터
// @name:nl Alternatieve Open Source-redirector
// @name:pl Alternatywny readresator typu open source
// @name:ro Redirector alternativ cu sursă deschisă
// @name:ru Альтернативный перенаправитель с открытым исходным кодом
// @name:tr Açık Kaynak Alternatif Yönlendirici
// @name:uk Альтернативний перенаправник з відкритим вихідним кодом
// @name:zh-CN 开源替代重定向器
// @name:zh-TW 開源替代重定向器
// @namespace -
// @version 10.0.1
// @description Redirects you from proprietary web-services to ethical alternatives(front-end).
// @description:ar يعيد توجيهك من خدمات الويب المسجلة الملكية إلى البدائل الأخلاقية (الواجهة الأمامية).
// @description:bg Пренасочва ви от собствени уеб-услуги към етични алтернативи (front-end).
// @description:cs Přesměruje vás z proprietárních webových služeb na etické alternativy (front-end).
// @description:da Omdirigerer dig fra proprietære web-tjenester til etiske alternativer (front-end).
// @description:de Leitet Sie von proprietären Webdiensten zu ethischen Alternativen (Front-End) weiter.
// @description:es Lo redirige de servicios web propietarios a alternativas éticas (front-end).
// @description:fi Ohjaa sinut patentoiduista verkkopalveluista eettisiin vaihtoehtoihin (käyttöliittymä).
// @description:fr Vous redirige des services Web propriétaires vers des alternatives éthiques (front-end).
// @description:he מפנה אותך משירותי אינטרנט קנייניים לחלופות אתיות (חזית).
// @description:it Ti reindirizza da servizi web proprietari ad alternative etiche (front-end).
// @description:ja 独自のWebサービスから倫理的な代替手段（フロントエンド）にリダイレクトします。
// @description:ko 독점 웹 서비스에서 윤리적 대안(프론트 엔드)으로 리디렉션합니다.
// @description:nl Leidt u om van propriëtaire webservices naar ethische alternatieven (front-end).
// @description:pl Przekierowuje Cię z zastrzeżonych usług internetowych do etycznych alternatyw (front-end).
// @description:ro Vă redirecționează de la servicii web proprietare la alternative etice (front-end).
// @description:ru Перенаправляет вас с проприетарных веб-сервисов на этические альтернативы (интерфейс).
// @description:tr Sizi tescilli web hizmetlerinden etik alternatiflere (ön uç) yönlendirir.
// @description:uk Перенаправляє вас із власних веб-сервісів до етичних альтернатив (фронт-енд).
// @description:zh-CN 将您从专有网络服务重定向到道德替代品（前端）。
// @description:zh-TW 將您從專有網絡服務重定向到道德替代品（前端）。
// @author NotYou
// @include *youtube.com/*
// @include *google.*
// @include *yahoo.com/*
// @include *bing.com/*
// @include *reddit.com/*
// @include *twitter.com/*
// @include *instagram.com/*
// @include *wikipedia.org/*
// @include *medium.com/*
// @include *towardsdatascience.com/*
// @include *i.imgur.com/*
// @include *i.stack.imgur.com/*
// @include *odysee.com/*
// @include *tiktok.com/*
// @include *quora.com/*
// @run-at document-start
// @license GPL-3.0-or-later
// @icon data:image/png;base64,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
// @grant none
// ==/UserScript==
 
var url = new URL(location.href),
 
// INSTANCES //
invidious = 'invidious.cleberg.net',
libreddit = 'libreddit.cleberg.net',
nitter = 'nitter.cleberg.net',
searx = 'search.mdosch.de',
bibliogram = 'bibliogram.pussthecat.org',
wikiless = 'wikiless.org',
lingva = 'lingva.ml',
scribe = 'scribe.rip',
rimgo = 'rimgo.pussthecat.org',
librarian = 'librarian.pussthecat.org',
proxitok = 'proxitok.pussthecat.org',
quetre = 'qr.vern.cc'
 
// YouTube | Invidious //
if(hostHas('youtube.com')) {
    location.replace('https://' + invidious + location.pathname + location.search)
}
 
if(hostHas('google.')) {
    // Google Translate | Lingva Translate //
    if(location.hostname.match(/translate.google.+/)){
        if(location.search === '') {
            location.replace('https://' + lingva)
        } else {
            var
                base = location.search.split('&'),
                lang1 = base[0].split('=')[1],
                lang2 = base[1].split('=')[1],
                text = base[2].split('=')[1]
            location.replace('https://' + lingva + '/' + lang1 + '/' + lang2 + '/' + text)
        }
    // Google | SearX //
    //} else if(location.href.match(/(www\.)?google\.com(\/search)?(?!\/\w)/)) {
    } else if(location.host.match(/www.google.+/) && location.href.match(/google+\..*(\/search)/)) {
        location.replace('https://' + searx + location.pathname + location.search)
    }
}
 
// Yahoo | SearX //
if(hostHas('yahoo.com')) {
    var search = location.search.replace('?p', '?q')
    location.replace('https://' + searx + location.pathname + search)
}
 
// Bing | SearX //
if(hostHas('bing.com')) {
    location.replace('https://' + searx + location.pathname + location.search)
}
 
// Reddit | Libreddit //
if(hostHas('reddit.com')) {
    location.replace('https://' + libreddit + location.pathname + location.search)
}
 
// Twitter | Nitter //
if(hostHas('twitter.com')) {
    location.replace('https://' + nitter + location.pathname + location.search)
}
 
// Wikipedia | Wikiless //
if(hostHas('wikipedia.org')) {
    location.replace('https://' + wikiless + location.pathname + '?lang=' + url.hostname.split('.')[0])
}
 
// Medium | Scribe //
if(hostHas('medium.com') || hostHas('towardsdatascience.com')) {
    location.replace('https://' + scribe + location.pathname + location.search)
}
 
// i.Imgur | Rimgo //
if(hostHas('i.imgur.com')) {
    location.replace('https://' + rimgo + location.pathname + location.search)
}
 
// Odysee | Librarinan //
if(hostHas('odysee.com')) {
    location.replace('https://' + librarian + location.pathname + location.search)
}
 
// TikTok | ProxiTok //
if(hostHas('tiktok.com')) {
    location.replace('https://' + proxitok + location.pathname + location.search)
}
 
// Quora | Quetre //
if(hostHas('quora.com')) {
    location.replace('https://' + quetre + location.pathname + location.search)
}
 
function hostHas(str) {
    return location.host.indexOf(str) != -1
}
