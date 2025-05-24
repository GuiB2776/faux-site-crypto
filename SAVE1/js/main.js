document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  });

  


  document.addEventListener('DOMContentLoaded', () => {
    // Exemple avec Chart.js (assurez-vous d’inclure <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>)
    function initChart(ctx, label, data, color) {
      return new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
          datasets: [{
            label,
            data,
            fill: true,
            borderColor: color,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: { display: true },
            y: { display: true }
          }
        }
      });
    }
  
    // Initialisation des deux graphiques
    const btcCtx = document.getElementById('btcChart').getContext('2d');
    const ethCtx = document.getElementById('ethChart').getContext('2d');
    initChart(btcCtx, 'BTC', [45000, 47000, 43000, 48000, 50000, 49000], 'rgba(255, 205, 86, 1)');
    initChart(ethCtx, 'ETH', [3000, 3200, 3100, 3300, 3400, 3500], 'rgba(54, 162, 235, 1)');
  });