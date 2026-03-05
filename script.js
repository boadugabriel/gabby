function showAnnouncement() {
  const announcements = document.getElementById("announcements");
  announcements.scrollIntoView({ behavior: "smooth" });
}

// ansec-header-component
class AnsecHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="logo">
          <h1>Anum Presbyterian Senior High (ANSEC)</h1>
          <a href="index.html">
            <img src="img/ansecLogo.jpg" alt="ANSEC Logo">
          </a>
        </div>

        <!-- Unified Navigation -->
        <nav class="navbar">
          <button class="menu-toggle" onclick="toggleMenu()">☰</button>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="admissions.html">Admissions</a></li>
            <li><a href="academics.html">Academics</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="#introduction">Introduction & Setting</a></li>
            <li><a href="#academics">Academic Programs</a></li>
            <li><a href="#boarding">Boarding Houses</a></li>
            <li><a href="#extracurricular">Extracurricular Life</a></li>
            <li><a href="#staff">Staff & Leadership</a></li>
            <li><a href="#alumni">Alumni & Legacy</a></li>
            <li><a href="#community">Community Impact</a></li>
            <li><a href="#vision">Vision for the Future</a></li>
            <li><a href="#encouragement">Encouragement & Inspiration</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
          </ul>
        </nav>
      </header>
      <div class="overlay" onclick="toggleMenu()"></div>
    `;
  }
}
customElements.define('ansec-header-component', AnsecHeader);

function toggleMenu() {
  const nav = document.querySelector('.navbar ul');
  const overlay = document.querySelector('.overlay');
  nav.classList.toggle('show');
  overlay.classList.toggle('active');
}

// ansec-footer-component
class AnsecFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>&copy; 2026 Anum Presbyterian Senior High (ANSEC). All rights reserved.</p>
      </footer>
    `;
  }
}
customElements.define('ansec-footer-component', AnsecFooter);

function submitForm(event) {
  event.preventDefault(); // Prevent page reload
  alert("Thank you for contacting ANSEC! We will get back to you soon.");
  return false;
}

// Accordion toggle
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("accordion-header")) {
    const body = e.target.nextElementSibling;
    body.style.display = body.style.display === "block" ? "none" : "block";
  }
});

