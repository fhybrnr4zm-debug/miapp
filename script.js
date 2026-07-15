const teams = [
  { name: "Celtics", city: "Boston, MA", conference: "Este", division: "Atlántico", arena: "TD Garden", capacity: 19156, founded: 1946, titles: 18, color: "#007A33", players: ["Bill Russell", "Larry Bird", "Paul Pierce"], blurb: "La franquicia con más campeonatos de la historia de la NBA, cuna de grandes dinastías en los años 60 y 2000." },
  { name: "Nets", city: "Brooklyn, NY", conference: "Este", division: "Atlántico", arena: "Barclays Center", capacity: 17732, founded: 1976, titles: 0, color: "#000000", players: ["Jason Kidd", "Vince Carter", "Kevin Durant"], blurb: "Se mudó de Nueva Jersey a Brooklyn en 2012 y todavía busca su primer título de la NBA." },
  { name: "Knicks", city: "Nueva York, NY", conference: "Este", division: "Atlántico", arena: "Madison Square Garden", capacity: 19812, founded: 1946, titles: 2, color: "#006BB6", players: ["Patrick Ewing", "Walt Frazier", "Willis Reed"], blurb: "Uno de los equipos más históricos y mediáticos de la liga, con sede en el Madison Square Garden." },
  { name: "76ers", city: "Filadelfia, PA", conference: "Este", division: "Atlántico", arena: "Wells Fargo Center", capacity: 20478, founded: 1949, titles: 3, color: "#ED174C", players: ["Wilt Chamberlain", "Julius Erving", "Allen Iverson"], blurb: "Franquicia con raíces en Filadelfia desde los años 60, célebre por el 'Trust the Process'." },
  { name: "Raptors", city: "Toronto, ON", conference: "Este", division: "Atlántico", arena: "Scotiabank Arena", capacity: 19800, founded: 1995, titles: 1, color: "#CE1141", players: ["Vince Carter", "Chris Bosh", "Kyle Lowry"], blurb: "Único equipo canadiense de la NBA; se coronó campeón en 2019." },
  { name: "Bulls", city: "Chicago, IL", conference: "Este", division: "Central", arena: "United Center", capacity: 20917, founded: 1966, titles: 6, color: "#CE1141", players: ["Michael Jordan", "Scottie Pippen", "Dennis Rodman"], blurb: "Dominaron los años 90 con seis títulos gracias a Michael Jordan y Scottie Pippen." },
  { name: "Cavaliers", city: "Cleveland, OH", conference: "Este", division: "Central", arena: "Rocket Mortgage FieldHouse", capacity: 19432, founded: 1970, titles: 1, color: "#6F263D", players: ["LeBron James", "Kyrie Irving", "Mark Price"], blurb: "Le dieron a Cleveland su primer título en 2016 tras remontar un 1-3 en las Finales." },
  { name: "Pistons", city: "Detroit, MI", conference: "Este", division: "Central", arena: "Little Caesars Arena", capacity: 20332, founded: 1941, titles: 3, color: "#C8102E", players: ["Isiah Thomas", "Joe Dumars", "Ben Wallace"], blurb: "Conocidos como los 'Bad Boys' de finales de los 80 por su estilo físico y defensivo." },
  { name: "Pacers", city: "Indianápolis, IN", conference: "Este", division: "Central", arena: "Gainbridge Fieldhouse", capacity: 17923, founded: 1967, titles: 0, color: "#FDBB30", players: ["Reggie Miller", "Rik Smits", "Paul George"], blurb: "Nunca han ganado un título de la NBA, aunque sí varios de la antigua ABA." },
  { name: "Bucks", city: "Milwaukee, WI", conference: "Este", division: "Central", arena: "Fiserv Forum", capacity: 17341, founded: 1968, titles: 2, color: "#00471B", players: ["Kareem Abdul-Jabbar", "Giannis Antetokounmpo", "Sidney Moncrief"], blurb: "Campeones en 2021 liderados por Giannis Antetokounmpo." },
  { name: "Hawks", city: "Atlanta, GA", conference: "Este", division: "Sudeste", arena: "State Farm Arena", capacity: 16600, founded: 1946, titles: 1, color: "#E03A3E", players: ["Dominique Wilkins", "Bob Pettit", "Trae Young"], blurb: "Fundados en 1946, pasaron por Tri-Cities, Milwaukee y St. Louis antes de asentarse en Atlanta." },
  { name: "Hornets", city: "Charlotte, NC", conference: "Este", division: "Sudeste", arena: "Spectrum Center", capacity: 19077, founded: 1988, titles: 0, color: "#00788C", players: ["Larry Johnson", "Alonzo Mourning", "Kemba Walker"], blurb: "Franquicia relanzada en 2004 tras la mudanza del equipo original a Nueva Orleans." },
  { name: "Heat", city: "Miami, FL", conference: "Este", division: "Sudeste", arena: "Kaseya Center", capacity: 19600, founded: 1988, titles: 3, color: "#98002E", players: ["Dwyane Wade", "Alonzo Mourning", "Tim Hardaway"], blurb: "Tres veces campeones, conocidos por su exigente cultura de trabajo y disciplina." },
  { name: "Magic", city: "Orlando, FL", conference: "Este", division: "Sudeste", arena: "Kia Center", capacity: 18846, founded: 1989, titles: 0, color: "#0077C0", players: ["Shaquille O'Neal", "Penny Hardaway", "Dwight Howard"], blurb: "Han llegado a las Finales de la NBA en dos ocasiones sin conseguir el título." },
  { name: "Wizards", city: "Washington, D.C.", conference: "Este", division: "Sudeste", arena: "Capital One Arena", capacity: 20356, founded: 1961, titles: 1, color: "#E31837", players: ["Wes Unseld", "Elvin Hayes", "John Wall"], blurb: "Se llamaron Bullets hasta 1997, cuando cambiaron su nombre a Wizards." },
  { name: "Nuggets", city: "Denver, CO", conference: "Oeste", division: "Noroeste", arena: "Ball Arena", capacity: 19520, founded: 1967, titles: 1, color: "#FEC524", players: ["Alex English", "Dikembe Mutombo", "Nikola Jokić"], blurb: "Consiguieron su primer título en 2023 de la mano de Nikola Jokić." },
  { name: "Timberwolves", city: "Minneapolis, MN", conference: "Oeste", division: "Noroeste", arena: "Target Center", capacity: 18978, founded: 1989, titles: 0, color: "#236192", players: ["Kevin Garnett", "Kevin Love", "Karl-Anthony Towns"], blurb: "Aún no han logrado llegar a unas Finales de la NBA." },
  { name: "Thunder", city: "Oklahoma City, OK", conference: "Oeste", division: "Noroeste", arena: "Paycom Center", capacity: 18203, founded: 1967, titles: 1, color: "#007AC1", players: ["Gary Payton", "Kevin Durant", "Russell Westbrook"], blurb: "Antes fueron los Seattle SuperSonics, campeones en 1979." },
  { name: "Trail Blazers", city: "Portland, OR", conference: "Oeste", division: "Noroeste", arena: "Moda Center", capacity: 19393, founded: 1970, titles: 1, color: "#E03A3E", players: ["Clyde Drexler", "Bill Walton", "Damian Lillard"], blurb: "Su único título llegó en 1977 con Bill Walton como estrella." },
  { name: "Jazz", city: "Salt Lake City, UT", conference: "Oeste", division: "Noroeste", arena: "Delta Center", capacity: 18306, founded: 1974, titles: 0, color: "#F9A01B", players: ["John Stockton", "Karl Malone", "Pete Maravich"], blurb: "Se fundaron en Nueva Orleans en 1974 y se mudaron a Utah en 1979." },
  { name: "Warriors", city: "San Francisco, CA", conference: "Oeste", division: "Pacífico", arena: "Chase Center", capacity: 18064, founded: 1946, titles: 7, color: "#1D428A", players: ["Stephen Curry", "Wilt Chamberlain", "Rick Barry"], blurb: "Dinastía reciente con cuatro títulos entre 2015 y 2022 gracias a Stephen Curry." },
  { name: "Clippers", city: "Los Ángeles, CA", conference: "Oeste", division: "Pacífico", arena: "Intuit Dome", capacity: 18000, founded: 1970, titles: 0, color: "#C8102E", players: ["Elgin Baylor", "Chris Paul", "Kawhi Leonard"], blurb: "Todavía no han logrado llegar a unas Finales de la NBA." },
  { name: "Lakers", city: "Los Ángeles, CA", conference: "Oeste", division: "Pacífico", arena: "Crypto.com Arena", capacity: 18997, founded: 1947, titles: 17, color: "#552583", players: ["Magic Johnson", "Kareem Abdul-Jabbar", "Kobe Bryant"], blurb: "Segunda franquicia con más títulos de la historia, símbolo de Hollywood." },
  { name: "Suns", city: "Phoenix, AZ", conference: "Oeste", division: "Pacífico", arena: "Footprint Center", capacity: 17071, founded: 1968, titles: 0, color: "#E56020", players: ["Charles Barkley", "Steve Nash", "Devin Booker"], blurb: "Han llegado tres veces a las Finales de la NBA sin conseguir el título." },
  { name: "Kings", city: "Sacramento, CA", conference: "Oeste", division: "Pacífico", arena: "Golden 1 Center", capacity: 17608, founded: 1945, titles: 1, color: "#5A2D81", players: ["Oscar Robertson", "Chris Webber", "DeMarcus Cousins"], blurb: "Ganaron su único título en 1951, cuando eran los Rochester Royals." },
  { name: "Mavericks", city: "Dallas, TX", conference: "Oeste", division: "Suroeste", arena: "American Airlines Center", capacity: 19200, founded: 1980, titles: 1, color: "#00538C", players: ["Dirk Nowitzki", "Michael Finley", "Luka Dončić"], blurb: "Su único anillo llegó en 2011 liderados por Dirk Nowitzki." },
  { name: "Rockets", city: "Houston, TX", conference: "Oeste", division: "Suroeste", arena: "Toyota Center", capacity: 18055, founded: 1967, titles: 2, color: "#CE1141", players: ["Hakeem Olajuwon", "Yao Ming", "James Harden"], blurb: "Campeones consecutivos en 1994 y 1995 con Hakeem Olajuwon." },
  { name: "Grizzlies", city: "Memphis, TN", conference: "Oeste", division: "Suroeste", arena: "FedExForum", capacity: 17794, founded: 1995, titles: 0, color: "#5D76A9", players: ["Pau Gasol", "Mike Conley", "Zach Randolph"], blurb: "Se fundaron en Vancouver en 1995 y se mudaron a Memphis en 2001." },
  { name: "Pelicans", city: "Nueva Orleans, LA", conference: "Oeste", division: "Suroeste", arena: "Smoothie King Center", capacity: 16867, founded: 1988, titles: 0, color: "#C8102E", players: ["Chris Paul", "Anthony Davis", "David West"], blurb: "Se llamaron Hornets hasta 2013, cuando adoptaron el nombre Pelicans." },
  { name: "Spurs", city: "San Antonio, TX", conference: "Oeste", division: "Suroeste", arena: "Frost Bank Center", capacity: 18418, founded: 1967, titles: 5, color: "#C4CED4", players: ["Tim Duncan", "David Robinson", "Manu Ginóbili"], blurb: "Ganaron cinco títulos entre 1999 y 2014 con una cultura de continuidad ejemplar." }
];

const grid = document.getElementById('teams-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');
const modal = document.getElementById('team-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const statsBar = document.getElementById('stats-bar');

let currentFilter = 'all';
let currentSearch = '';

function renderStats() {
  if (!statsBar) return;
  const totalTitles = teams.reduce(function (sum, t) { return sum + t.titles; }, 0);
  const mostTitlesTeam = teams.reduce(function (best, t) { return t.titles > best.titles ? t : best; }, teams[0]);
  const oldestTeam = teams.reduce(function (best, t) { return t.founded < best.founded ? t : best; }, teams[0]);
  const withoutTitle = teams.filter(function (t) { return t.titles === 0; }).length;

  const stats = [
    { label: 'Equipos', value: teams.length },
    { label: 'Campeonatos totales', value: totalTitles },
    { label: 'Más campeonatos', value: mostTitlesTeam.name + ' (' + mostTitlesTeam.titles + ')' },
    { label: 'Equipo más antiguo', value: oldestTeam.name + ' (' + oldestTeam.founded + ')' },
    { label: 'Sin campeonato', value: withoutTitle }
  ];

  statsBar.innerHTML = '';
  stats.forEach(function (s) {
    const card = document.createElement('div');
    card.className = 'stat-card';

    const value = document.createElement('div');
    value.className = 'stat-value';
    value.textContent = s.value;

    const label = document.createElement('div');
    label.className = 'stat-label';
    label.textContent = s.label;

    card.appendChild(value);
    card.appendChild(label);
    statsBar.appendChild(card);
  });
}

function renderTeams() {
  const filtered = teams.filter(function (team) {
    const matchesFilter = currentFilter === 'all' || team.conference === currentFilter;
    const q = currentSearch.trim().toLowerCase();
    const matchesSearch = q === '' ||
      team.name.toLowerCase().indexOf(q) !== -1 ||
      team.city.toLowerCase().indexOf(q) !== -1 ||
      team.players.some(function (p) { return p.toLowerCase().indexOf(q) !== -1; });
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

    const blurb = document.createElement('p');
    blurb.className = 'team-blurb';
    blurb.textContent = team.blurb;

    const meta = document.createElement('div');
    meta.className = 'team-meta';

    const conf = document.createElement('span');
    conf.textContent = team.conference + ' · ' + team.division;

    const titlesSpan = document.createElement('span');
    titlesSpan.textContent = '🏆 ' + team.titles;

    meta.appendChild(conf);
    meta.appendChild(titlesSpan);

    card.appendChild(title);
    card.appendChild(cityEl);
    card.appendChild(blurb);
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

  const blurbP = document.createElement('p');
  blurbP.className = 'modal-blurb';
  blurbP.textContent = team.blurb;

  modalBody.appendChild(h2);
  modalBody.appendChild(cityP);
  modalBody.appendChild(blurbP);

  const rows = [
    ['Conferencia', team.conference],
    ['División', team.division],
    ['Arena', team.arena],
    ['Capacidad', team.capacity.toLocaleString('es-ES') + ' asientos'],
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

  const playersTitle = document.createElement('h4');
  playersTitle.className = 'players-title';
  playersTitle.textContent = 'Leyendas del equipo';
  modalBody.appendChild(playersTitle);

  const playersWrap = document.createElement('div');
  playersWrap.className = 'players-wrap';
  team.players.forEach(function (p) {
    const chip = document.createElement('span');
    chip.className = 'player-chip';
    chip.textContent = p;
    playersWrap.appendChild(chip);
  });
  modalBody.appendChild(playersWrap);

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

renderStats();
renderTeams();
