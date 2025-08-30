// This is a simple JavaScript file that adds interactivity to the HTML page

/**Getting the side bar and overlay color to appear when the menu button is pressed. */

  const sideNavBar = document.getElementById("my-side-nav");
  const overlay = document.getElementById("background-overlay");

  function openNav() {
    if (sideNavBar.style.width != "250px") {
        sideNavBar.style.width = "250px";
        overlay.style.display = "block";
    }
    else {
        sideNavBar.style.width = "0px";
        overlay.style.display = "none";
    } 
  }

  function closeNav() {
    sideNavBar.style.width = "0";
    overlay.style.display = "none";
  }
