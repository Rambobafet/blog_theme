const toggleNav = document.getElementById('toggleNavigation');

toggleNav.addEventListener('click', (e) => {
    console.log('e', e)

    toggleNav.setAttribute('aria-expanded', toggleNav.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')
})
