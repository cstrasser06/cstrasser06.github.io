if (navigator.userAgent.match(/Android/i)) {
    document.documentElement.classList.add('is-android');
} else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    document.documentElement.classList.add('is-ios');
}