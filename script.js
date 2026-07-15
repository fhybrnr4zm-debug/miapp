const teams = [
  { name: "Celtics", city: "Boston, MA", conference: "Este", division: "Atlántico", arena: "TD Garden", founded: 1946, titles: 18, color: "#007A33" },
  { name: "Nets", city: "Brooklyn, NY", conference: "Este", division: "Atlántico", arena: "Barclays Center", founded: 1976, titles: 0, color: "#000000" },
  { name: "Knicks", city: "Nueva York, NY", conference: "Este", division: "Atlántico", arena: "Madison Square Garden", founded: 1946, titles: 2, color: "#006BB6" },
  { name: "76ers", city: "Filadelfia, PA", conference: "Este", division: "Atlántico", arena: "Wells Fargo Center", founded: 1949, titles: 3, color: "#ED174C" },
  { name: "Raptors", city: "Toronto, ON", conference: "Este", division: "Atlántico", arena: "Scotiabank Arena", founded: 1995, titles: 1, color: "#CE1141" },
  { name: "Bulls", city: "Chicago, IL", conference: "Este", division: "Central", arena: "United Center", founded: 1966, titles: 6, color: "#CE1141" },
  { name: "Cavaliers", city: "Cleveland, OH", conference: "Este", division: "Central", arena: "Rocket Mortgage FieldHouse", founded: 1970, titles: 1, color: "#6F263D" },
  { name: "Pistons", city: "Detroit, MI", conference: "Este", division: "Central", arena: "Little Caesars Arena", founded: 1941, titles: 3, color: "#C8102E" },
  { name: "Pacers", city: "Indianápolis, IN", conference: "Este", division: "Central", arena: "Gainbridge Fieldhouse", founded: 1967, titles: 0, color: "#FDBB30" },
  { name: "Bucks", city: "Milwaukee, WI", conference: "Este", division: "Central", arena: "Fiserv Forum", founded: 1968, titles: 2, color: "#00471B" },
  { name: "Hawks", city: "Atlanta, GA", conference: "Este", division: "Sudeste", arena: "State Farm Arena", founded: 1946, titles: 1, color: "#E03A3E" },
  { name: "Hornets", city: "Charlotte, NC", conference: "Este", division: "Sudeste", arena: "Spectrum Center", founded: 1988, titles: 0, color: "#00788C" },
  { name: "Heat", city: "Miami, FL", conference: "Este", division: "Sudeste", arena: "Kaseya Center", founded: 1988, titles: 3, color: "#98002E" },
  { name: "Magic", city: "Orlando, FL", conference: "Este", division: "Sudeste", arena: "Kia Center", founded: 1989, titles: 0, color: "#0077C0" },
  { name: "Wizards", city: "Washington, D.C.", conference: "Este", division: "Sudeste", arena: "Capital One Arena", founded: 1961, titles: 1, color: "#E31837" },
  { name: "Nuggets", city: "Denver, CO", conference: "Oeste", division: "Noroeste", arena: "Ball Arena", founded: 1967, titles: 1, color: "#FEC524" },
  { name: "Timberwolves", city: "Minneapolis, MN", conference: "Oeste", division: "Noroeste", arena: "Target Center", founded: 1989, titles: 0, color: "#236192" },
  { name: "Thunder", city: "Oklahoma City, OK", conference: "Oeste", division: "Noroeste", arena: "Paycom Center", founded: 1967, titles: 1, color: "#007AC1" },
  { name: "Trail Blazers", city: "Portland, OR", conference: "Oeste", division: "Noroeste", arena: "Moda Center", founded: 1970, titles: 1, color: "#E03A3E" },
  { name: "Jazz", city: "Salt Lake City, UT", conference: "Oeste", division: "Noroeste", arena: "Delta Center", founded: 1974, titles: 0, color: "#F9A01B" },
  { name: "Warriors", city: "San Francisco, CA", conference: "Oeste", division: "Pacífico", arena: "Chase Center", founded: 1946, titles: 7, color: "#1D428A" },
  { name: "Clippers", city: "Los Ángeles, CA", conference: "Oeste", division: "Pacífico", arena: "Intuit Dome", founded: 1970, titles: 0, color: "#C8102E" },
  { name: "Lakers", city: "Los Ángeles, CA", conference: "Oeste", division: "Pacífico", arena: "Crypto.com Arena", founded: 1947, titles: 17, color: "#552583" },
  { name: "Suns", city: "Phoenix, AZ", conference: "Oeste", division: "Pacífico", arena: "Footprint Center", founded: 1968, titles: 0, color: "#E56020" },
  { name: "Kings", city: "Sacramento, CA", conference: "Oeste", division: "Pacífico", arena: "Golden 1 Center", founded: 1945, titles: 1, color: "#5A2D81" },
  { name: "Mavericks", city: "Dallas, TX", conference: "Oeste", division: "Suroeste", arena: "American Airlines Center", founded: 1980, titles: 1, color: "#00538C" },
  { name: "Rockets", city: "Houston, TX", conference: "Oeste", division: "Suroeste", arena: "Toyota Center", founded: 1967, titles: 2, color: "#CE1141" },
  { name: "Grizzlies", city: "Memphis, TN", conference: "Oeste", division: "Suroeste", arena: "FedExForum", founded: 1995, titles: 0, color: "#5D76A9" },
  { name: "Pelicans", city: "Nueva Orleans, LA", conference: "Oeste", division: "Suroeste", arena: "Smoothie King Center", founded: 1988, titles: 0, color: "#C8102E" },
  { name: "Spurs", city: "San Antonio, TX", conference: "Oeste", division: "Suroeste", arena: "Frost Bank Center", founded: 1967, titles: 5, color: "#C4CED4" }
];

const grid = document.getElementById('teams-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');
const modal = document.getElementById('team-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

let currentFilter = 'all';
let currentSearch = '';

function renderTeams() {
  const filtered = teams.filter(function (team) {
    const matchesFilter = currentFilter === 'all' || team.conference === currentFilter;
    const q = currentSearch.trim().toLowerCase();
    const matchesSearch = q === '' || team.name.toLowerCase().indexOf(q) !== -1 || team.city.toLowerCase().indexOf(q) !== -1;
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
  }

  resultsCount.textContent = filtered.length + ' equipo' + (filtered.length === 1 ? '' : 's') + ' encontrado' + (filtered.length === 1 ? '' : 's');

  filtered.forEach(function (team) {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.setProperty('--team-color', team.color);

    const title = document.createElement('h3');
    title.textContent = team.name;

    const cityEl = document.createElement('p');
    cityEl.className = 'team-city';
    cityEl.textContent = team.city;

    const meta = document.createElement('div');
    meta.className = 'team-meta';

    const conf = document.createElement('span');
    conf.textContent = team.conference;

    const div = document.createElement('span');
    div.textContent = team.division;

    meta.appendChild(conf);
    meta.appendChild(div);

    card.appendChild(title);
    card.appendChild(cityEl);
    card.appendChild(meta);

    card.addEventListener('click', function () {
      openModal(team);
    });

    grid.appendChild(card);
  });
}

function openModal(team) {
  modalBody.innerHTML = '';
  modal.querySelector('.modal-content').style.setProperty('--team-color', team.color);

  const h2 = document.createElement('h2');
  h2.textContent = team.name;

  const cityP = document.createElement('p');
  cityP.className = 'modal-city';
  cityP.textContent = team.city;

  modalBody.appendChild(h2);
  modalBody.appendChild(cityP);

  const rows = [
    ['Conferencia', team.conference],
    ['División', team.division],
    ['Arena', team.arena],
    ['Fundado', team.founded],
    ['Campeonatos', team.titles]
  ];

  rows.forEach(function (row) {
    const rowEl = document.createElement('div');
    rowEl.className = 'detail-row';

    const label = document.createElement('span');
    label.textContent = row[0];

    const value = document.createElement('span');
    value.textContent = row[1];

    rowEl.appendChild(label);
    rowEl.appendChild(value);
    modalBody.appendChild(rowEl);
  });

  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', function (e) {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

searchInput.addEventListener('input', function (e) {
  currentSearch = e.target.value;
  renderTeams();
});

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterBtns.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTeams();
  });
});

renderTeams();
