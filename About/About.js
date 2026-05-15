// Sidebar Elements
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');

//Mega Menu Elements
const boatsTrigger = document.querySelector('.boats-trigger');
const megaMenu = document.getElementById('boatsMegaMenu');

// Toggle Sidebar
openBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

const closeAll = () => {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    megaMenu.classList.remove('active'); // Close mega menu too
    document.body.style.overflow = 'auto';
};

closeBtn.addEventListener('click', closeAll);
menuOverlay.addEventListener('click', closeAll);

// Toggle Boats Mega Menu on Click
boatsTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    megaMenu.classList.toggle('active');
});

// Close when clicking outside
document.addEventListener('click', (e) => {
    if (!megaMenu.contains(e.target) && e.target !== boatsTrigger) {
        megaMenu.classList.remove('active');
    }
});