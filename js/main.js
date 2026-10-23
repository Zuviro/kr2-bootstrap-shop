document.addEventListener('DOMContentLoaded', () => {
  initCatalogFilter();
  initOrderForm();
});

function initCatalogFilter() {
  const container = document.querySelector('[data-products-container]');
  if (!container) return;

  const search   = document.getElementById('filter-search');
  const category = document.getElementById('filter-category');
  const reset    = document.getElementById('filter-reset');
  const counter  = document.getElementById('filter-count');

  const items = Array.from(container.querySelectorAll('[data-product]'));

  function apply() {
    const q   = (search?.value || '').trim().toLowerCase();
    const cat = category?.value || '';

    let visible = 0;
    items.forEach((el) => {
      const name = (el.dataset.name || '').toLowerCase();
      const itemCat = el.dataset.category || '';
      const ok = (!q || name.includes(q)) && (!cat || itemCat === cat);
      el.classList.toggle('d-none', !ok);
      if (ok) visible++;
    });
    if (counter) counter.textContent = visible;
  }

  [search, category].forEach((el) => el?.addEventListener('input', apply));
  reset?.addEventListener('click', (e) => {
    e.preventDefault();
    if (search) search.value = '';
    if (category) category.value = '';
    apply();
  });

  apply();
}

function initOrderForm() {
  const form = document.getElementById('orderForm');
  const toastEl = document.getElementById('orderToast');
  if (!form || !toastEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 4000 }).show();
    form.reset();
    form.classList.remove('was-validated');
  });
}