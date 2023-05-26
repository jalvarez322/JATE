const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visiblity = 'visible';
    butInstall.textContent = 'install'
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'installed';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appisinstalled', (event) => {
    console.log('appisinstalled', event);
})