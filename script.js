document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    const container = document.getElementById('project-detail-container');
    const details = document.querySelectorAll('.project-detail');
    const closeButtons = document.querySelectorAll('.project-detail .close');
  
    // Open detail
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project');
        const detail = document.getElementById(`project-${id}`);
        container.style.display = 'flex';
        detail.style.display = 'block';
      });
    });
  
    // Close detail
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        container.style.display = 'none';
        details.forEach(d => d.style.display = 'none');
      });
    });
  
    // Click outside detail to close
    container.addEventListener('click', e => {
      if (e.target === container) {
        container.style.display = 'none';
        details.forEach(d => d.style.display = 'none');
      }
    });
  });
  