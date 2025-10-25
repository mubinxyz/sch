// static/js/script.js 

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Store original size on first load
var originalSize = null;

window.addEventListener('load', function() {
    var img = document.querySelector('img');
    img.style.width = '100%';
    img.onload = function() {
        // Store original size if not stored yet
        if (!originalSize) {
            originalSize = {
                width: img.offsetWidth,
                height: img.offsetHeight
            };
        }
        // Reset to original size
        img.style.width = originalSize.width + 'px';
        img.style.height = originalSize.height + 'px';
        
        window.scrollTo(
            (document.body.scrollWidth - window.innerWidth) / 2,
            (document.body.scrollHeight - window.innerHeight) / 2
        );
    };
    if (img.complete) {
        img.onload();
    }
});