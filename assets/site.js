/* GENERATED — 編集元は tools/help_site/assets/site.js */
/* 鉄道運行管理シミュレーター ヘルプサイト 共有スクリプト
   編集元: tools/help_site/assets/site.js（docs/assets/site.js は生成物） */
(function () {
    'use strict';

    /* ---- テーマ切替 ----
       既定はOS設定（prefers-color-scheme）追従。トグルを押すと明示テーマを
       localStorage("theme") に保存し、<html data-theme> で上書きする。
       初期反映は各ページ <head> のインラインスクリプト（FOUC回避）が行う。 */
    var btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', function () {
            var explicit = document.documentElement.dataset.theme;
            var osDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            var current = explicit || (osDark ? 'dark' : 'light');
            var next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = next;
            try { localStorage.setItem('theme', next); } catch (e) { /* private mode 等 */ }
        });
    }

    /* ---- 言語メニュー: 外側クリックで閉じる ---- */
    var langMenu = document.querySelector('details.lang-menu');
    if (langMenu) {
        document.addEventListener('click', function (e) {
            if (langMenu.open && !langMenu.contains(e.target)) { langMenu.open = false; }
        });
    }

    /* ---- ライトボックス（画像クリックで拡大） ----
       figure.shot 内の画像と、本文中の大きな画像（実寸400px以上）が対象。 */
    var lb = document.getElementById('lightbox');
    if (lb) {
        var lbImg = lb.querySelector('img');
        function openLightbox(img) {
            lbImg.src = img.currentSrc || img.src;
            lbImg.alt = img.alt;
            lb.classList.add('open');
        }
        function closeLightbox() { lb.classList.remove('open'); lbImg.src = ''; }

        document.querySelectorAll('main img').forEach(function (img) {
            if (img.closest('.lightbox')) { return; }
            img.addEventListener('click', function () {
                var isShot = !!img.closest('figure.shot');
                if (isShot || img.naturalWidth >= 400) { openLightbox(img); }
            });
            if (img.closest('figure.shot')) { return; }
            img.style.cursor = 'zoom-in';
        });
        lb.addEventListener('click', closeLightbox);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { closeLightbox(); }
        });
    }
})();
