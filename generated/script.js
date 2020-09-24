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
  'click', () => {
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
    main.addEventListener('click', hideSidebar);
  }
}

window.addEventListener('resize', autohideSidebar);

autohideSidebar();

// Remove "no-animations" after page has loaded
setTimeout( () => { document.body.className=""; },500);
