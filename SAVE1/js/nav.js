// assets/js/header.js
document.addEventListener('DOMContentLoaded', () => {
    // Références
    const header = document.getElementById('site-header');
  
    // Définition des liens du menu
    const navItems = [
      { label: 'Accueil', href: 'index.html' },
      { label: 'Blog',   href: 'blog.html'  },
      { label: 'Formation',   href: 'formation.html'  },
      { label: 'À propos', href: 'about.html' },
      { label: 'Inscription', href: 'signup.html', class: 'btn-signup' }
    ];
  
    // Création de la structure
    const container = document.createElement('div');
    container.classList.add('container', 'header-inner');
  
    // Logo
    const logo = document.createElement('a');
    logo.classList.add('logo');
    logo.href = 'index.html';
    logo.textContent = 'CRYPTO Guillaume';
    container.appendChild(logo);
  
    // Bouton toggle pour mobile
    const toggle = document.createElement('button');
    toggle.classList.add('nav-toggle');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
    toggle.innerHTML = '☰'; // caractère burger par défaut
    container.appendChild(toggle);
  
    // Navigation
    const nav = document.createElement('nav');
    nav.classList.add('site-nav');
    const ul = document.createElement('ul');
    navItems.forEach(item => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href        = item.href;
      a.textContent = item.label;
      if (item.class) a.classList.add(item.class);
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    container.appendChild(nav);
  
    // On insère tout dans le header
    header.appendChild(container);
  
    // Gestion de l’ouverture/fermeture du menu mobile
    toggle.addEventListener('click', () => {
        // bascule la classe .open sur le <nav>
        const isOpen = nav.classList.toggle('open');
        // remplace le caractère selon l’état
        toggle.innerHTML = isOpen ? 'X' : '☰';
    });
    
  });