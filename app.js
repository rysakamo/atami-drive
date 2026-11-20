const genre = document.querySelector('#genre');
const budget = document.querySelector('#budget');
const cards = document.querySelector('#cards');
const count = document.querySelector('#count');
const map = document.querySelector('#map');
const mapKey = document.querySelector('#map-key');

for (const category of new Set(spots.map(spot => spot.cat))) {
  genre.add(new Option(category, category));
}

function renderCard(spot) {
  const card = document.createElement('article');
  card.className = 'card';
  card.id = 'spot-' + spot.n;
  card.tabIndex = -1;
  card.setAttribute('aria-labelledby', 'title-' + spot.n);

  const maps = new URL('https://www.google.com/maps/search/');
  maps.search = new URLSearchParams({
    api: 1,
    query: (spot.mapQuery || spot.name) + ' 静岡県',
  });

  card.innerHTML = `
    <div class="photo">
      <span class="photo-placeholder">写真準備中</span>
      <span class="number">${spot.n}</span>
      ${spot.photoNote ? `<span class="photo-note">${spot.photoNote}</span>` : ''}
    </div>
    <div class="card-body">
      <span class="tag">${spot.cat}</span>
      <h3 id="title-${spot.n}">${spot.name}</h3>
      <p class="description">${spot.desc}</p>
      <dl class="info">
        <div><dt>料金</dt><dd class="price">${spot.priceText}</dd></div>
        <div><dt>滞在目安</dt><dd>${spot.time}</dd></div>
        <div><dt>駐車料金</dt><dd>${spot.parking}</dd></div>
      </dl>
      <div class="links">
        <a href="${spot.url}">公式・観光情報</a>
        <a href="${maps}">Googleマップ</a>
        ${spot.parkingUrl ? `<a href="${spot.parkingUrl}">駐車場案内</a>` : ''}
        ${spot.priceUrl ? `<a href="${spot.priceUrl}">料金案内</a>` : ''}
      </div>
    </div>`;
  if (spot.img) {
    const image = new Image();
    image.alt = spot.name + 'の写真';
    image.loading = 'lazy';
    image.addEventListener('error', () => image.remove(), { once: true });
    image.src = spot.img;
    card.querySelector('.photo').append(image);
  }
  cards.append(card);
  return card;
}

function mapLink(spot, label) {
  const link = document.createElement('a');
  link.href = '#spot-' + spot.n;
  link.textContent = label;
  link.addEventListener('click', () => {
    const card = document.getElementById('spot-' + spot.n);
    if (card.hidden) resetFilters();
    card.focus({ preventScroll: true });
  });
  return link;
}

const entries = spots.map(spot => {
  const card = renderCard(spot);
  const pin = mapLink(spot, spot.n);
  pin.className = 'pin';
  pin.setAttribute('aria-label', spot.n + ' ' + spot.name + 'のカードへ');
  pin.style.left = spot.mapPosition[0] + '%';
  pin.style.top = spot.mapPosition[1] + '%';
  map.append(pin);

  const item = document.createElement('li');
  item.append(mapLink(spot, spot.n + ' ' + spot.name));
  mapKey.append(item);
  return { spot, card };
});

function matchesBudget({ price, minimumPrice }, selection) {
  if (!selection) return true;
  if (selection === 'unknown') return price === null;
  if (selection === 'over') return (price ?? minimumPrice ?? 0) > 2000;
  if (price === null) return false;
  return price <= Number(selection);
}

function applyFilters() {
  let visible = 0;
  for (const { spot, card } of entries) {
    card.hidden = (genre.value !== '' && spot.cat !== genre.value)
      || !matchesBudget(spot, budget.value);
    if (!card.hidden) visible += 1;
  }
  count.textContent = visible > 0
    ? `${spots.length}件中 ${visible}件を表示`
    : '条件に合うスポットはありません。';
}

function resetFilters() {
  genre.value = '';
  budget.value = '';
  applyFilters();
}

genre.addEventListener('change', applyFilters);
budget.addEventListener('change', applyFilters);
document.querySelector('#reset').addEventListener('click', resetFilters);
applyFilters();
