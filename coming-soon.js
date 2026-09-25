/* ============================================
   KYMOH — Coming Soon | JS
   ============================================ */

(function () {
    'use strict';

    // ---------- Subtle Parallax on background ----------
    const bgImage = document.getElementById('bg-image');

    if (bgImage && window.innerWidth > 768) {
        document.addEventListener('mousemove', function (e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            bgImage.style.transform = 'scale(1.03) translate(' + (x * -6) + 'px, ' + (y * -6) + 'px)';
            bgImage.style.transition = 'transform 0.3s ease-out';
        });
    }

})();
