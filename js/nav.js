document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('site-header');
    const navItems = [
      { label: 'Accueil', href: 'index.html' },
      {
        label: 'Blog',
        href: '#',
        children: [
          {
            label: 'Actualités',
            href: 'blog.html',
            children: [
              { label: 'Bitcoin', href: 'blog.html#bitcoin' },
              { label: 'Ethereum', href: 'blog.html#ethereum' },
              { label: 'Altcoins', href: 'blog.html#altcoins' }
            ]
          },
          {
            label: 'Tutoriels',
            href: '#',
            children: [
              { label: 'Grille-pain Mining', href: 'blog.html#tuto1' },
              { label: 'ASIC vs GPU', href: 'blog.html#tuto2' },
              { label: 'Configuration Wallet', href: 'blog.html#tuto3' }
            ]
          },
          {
            label: 'Analyses',
            href: '#',
            children: [
              { label: 'TA Chart', href: 'blog.html#analyse1' },
              { label: 'Sentiment', href: 'blog.html#analyse2' },
              { label: 'Reviews ICO', href: 'blog.html#analyse3' }
            ]
          }
        ]
      },
      { label: 'Formation', href: 'formation.html' },
      { label: 'À propos', href: 'about.html' },
      { label: 'Inscription', href: 'signup.html', class: 'btn-signup' }
    ];
  
    // Crée un <li> + <a> + éventuel <button> + <ul> de children
    function createMenuItem(item) {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href        = item.href;
      a.textContent = item.label;
      if (item.class) a.classList.add(item.class);
      li.appendChild(a);
  
      if (item.children) {
        li.classList.add('has-dropdown');
        // bouton +/− pour mobile
        const toggler = document.createElement('button');
        toggler.classList.add('dd-toggle');
        toggler.setAttribute('aria-expanded', 'false');
        toggler.innerHTML = '+';
        li.appendChild(toggler);
  
        // sous-menu
        const subUl = document.createElement('ul');
        subUl.classList.add('dropdown-menu');
        item.children.forEach(child => {
          subUl.appendChild(createMenuItem(child));
        });
        li.appendChild(subUl);
  
        // toggle du dropdown (mobile)
        toggler.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = li.classList.toggle('open');
          toggler.setAttribute('aria-expanded', isOpen);
          toggler.innerHTML = isOpen ? '−' : '+';
        });
      }
      return li;
    }
  
    // Construction du header + burger + nav
    const container = document.createElement('div');
    container.classList.add('container', 'header-inner');
  
    const logo = document.createElement('a');
    logo.classList.add('logo');
    logo.href = 'index.html';
    logo.textContent = 'CryptoFolie';
    container.appendChild(logo);
  
    const toggle = document.createElement('button');
    toggle.classList.add('nav-toggle');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
    toggle.innerHTML = '☰';
    container.appendChild(toggle);
  
    const nav = document.createElement('nav');
    nav.classList.add('site-nav');
    const ul  = document.createElement('ul');
    navItems.forEach(item => ul.appendChild(createMenuItem(item)));
    nav.appendChild(ul);
    container.appendChild(nav);
    header.appendChild(container);
  
    // Gestion du burger principal
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.innerHTML = open ? 'X' : '☰';
    });
  });
  