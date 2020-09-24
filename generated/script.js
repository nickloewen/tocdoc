const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('toggle-sidebar');
const main = document.getElementById('book-main');

function hideSidebar() {
  sidebar.className = "hidden";
  main.className = "wide";
  window.setTimeout(
    () => { sidebarToggle.textContent = "→"; },
    125);
}

function showSidebar() {
  sidebar.className = "shown";
  main.className = "narrow";
  window.setTimeout(
    () => { sidebarToggle.textContent = "×"; },
    125); // Transition time from CSS
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

if (screen.width < 600) {
  hideSidebar();
}
