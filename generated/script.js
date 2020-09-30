const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('toggle-sidebar');
const main = document.getElementById('book-main');

function hideSidebar() {
  if (sidebar.className === "hidden") return; // Don't bother
  sidebar.className = "hidden";
  main.className = "wide";
}

function showSidebar() {
  sidebar.className = "shown";
  main.className = "narrow";
}

sidebarToggle.addEventListener(
  'click', (e) => {
    e.stopPropagation();
    if (sidebar.className === "hidden") {
      showSidebar();
    } else {
      hideSidebar();
    }
  }
);

function autohideSidebar() {
  if (window.innerWidth < 800) {
    hideSidebar();
  }
}

autohideSidebar();
window.addEventListener('resize', autohideSidebar);

// For mobile devices/small screens:
// Make clicking anywhere on the sidebar show it,
// and anywhere on the doucment hide it
function narrowScreenSidebarToggle() {
  // It might be better not to run these every time
  // the window changes size, but since resizes are
  // a pretty rare event it doesn't seem worth
  // complicating this logic.
  if (window.innerWidth < 600) {
    main.addEventListener('click', hideSidebar);
    sidebar.addEventListener('click', showSidebar);
  } else { // Wide window
    main.removeEventListener('click', hideSidebar);
    sidebar.removeEventListener('click', showSidebar);
  }
}

narrowScreenSidebarToggle();
window.addEventListener('resize', narrowScreenSidebarToggle);


// Remove "no-animations" after page has loaded
setTimeout( () => { document.body.className=""; },500);
