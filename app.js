const spots = [
  {
    id: "dubki-lysaya-chaika",
    name: "Дубки - Лысая гора - Чайка",
    area: "Самара, Красноглинский район",
    type: "spot",
    difficulty: "средне",
    surface: "лес, грунт, подъёмы",
    distance: "около 26 км по популярному треку",
    coords: [53.306652, 50.194637],
    summary:
      "Городская связка для тренировок: старт от Демократической, лес Дубки, подъём на Лысую гору, выход к Управленческому и Чайке.",
    source: "https://www.wikiloc.com/trails/mountain-biking/russia/samara/samara",
  },
  {
    id: "chaika",
    name: "УСЦ «Чайка»",
    area: "Самара, Управленческий",
    type: "spot",
    difficulty: "легко",
    surface: "широкие трассы, лес",
    distance: "круги до 11 км зимой; летом лесные петли",
    coords: [53.351662, 50.234634],
    summary:
      "Спортивная база и удобная точка входа в лесные круги Красной Глинки. Хорошо подходит для короткой тренировки рядом с городом.",
    source: "https://orgeo.ru/place/1842",
  },
  {
    id: "tip-tyav",
    name: "Тип-Тяв",
    area: "Самара, Красная Глинка",
    type: "spot",
    difficulty: "сложно",
    surface: "камень, грунт, кромка карьера",
    distance: "локальные трейлы и петли 20-40 км",
    coords: [53.401891, 50.161179],
    summary:
      "Одна из самых узнаваемых точек Сокольих гор: рельеф, виды на Волгу и техничные участки вокруг карьера.",
    source: "https://2gis.ru/samara/geo/2533970575098082",
  },
  {
    id: "tsarev-kurgan",
    name: "Царев Курган",
    area: "Волжский, Красноярский район",
    type: "spot",
    difficulty: "средне",
    surface: "грунт, подъём, обзорные тропы",
    distance: "локальные круги и подъёмы",
    coords: [53.422588, 50.11874],
    summary:
      "Отдельная гора у места впадения Сока в Волгу. Небольшой, но выразительный рельеф для подъёмов, спусков и связки с Сокольими горами.",
    source: "https://orgeo.ru/place/759",
  },
  {
    id: "verblyud",
    name: "Гора Верблюд",
    area: "Ширяево, Самарская Лука",
    type: "park",
    difficulty: "средне",
    surface: "грунт, камень, парковая территория",
    distance: "10 км прогулочный маршрут, часть подъездов на велосипеде",
    coords: [53.408993, 50.07492],
    summary:
      "Ключевая точка Самарской Луки рядом с Ширяево. Отличный видовой спот, но внутри нацпарка важно заранее проверить правила посещения.",
    source: "https://npsamluka.ru/turpriyuty-i-mesta-dlya-otdyha/gora-verblyud-2/",
  },
  {
    id: "south-zhiguli",
    name: "Веломаршрут «По Южным Жигулям»",
    area: "Самарская Лука",
    type: "route",
    difficulty: "средне",
    surface: "21 км грунт, 24 км асфальт",
    distance: "45 км",
    coords: [53.1475, 49.9656],
    summary:
      "Официальный однодневный маршрут нацпарка вдоль южного побережья Самарской Луки со сложным рельефом и волжскими панорамами.",
    source: "https://npsamluka.ru/turisticheskie-marshruty/velomarshrut-po-yuzhnym-zhigulyam/",
  },
  {
    id: "zhiguli-marathon",
    name: "«Марафон по Жигулям»",
    area: "Национальный парк «Самарская Лука»",
    type: "route",
    difficulty: "сложно",
    surface: "грунт, лес, протяжённый рельеф",
    distance: "135 км",
    coords: [53.2613, 49.8989],
    summary:
      "Самый протяжённый веломаршрут нацпарка: 2-4 дня для подготовленных велосипедистов, с приютами и местами отдыха по нитке маршрута.",
    source: "https://zapovedtravel.ru/Route/Details/3795bc81-a121-49a3-9829-ff10d0cab7e3",
  },
  {
    id: "molodetsky",
    name: "Молодецкий курган",
    area: "Жигулёвские горы, Усинский залив",
    type: "park",
    difficulty: "сложно",
    surface: "крутой рельеф, грунт, камень",
    distance: "часть больших жигулёвских маршрутов",
    coords: [53.400833, 49.303056],
    summary:
      "Западная оконечность Жигулёвских гор у слияния Усы и Волги. Сильный рельеф, красивые виды и место для подготовленных райдеров.",
    source: "https://ru.ruwiki.ru/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86%D0%BA%D0%B8%D0%B9_%D0%BA%D1%83%D1%80%D0%B3%D0%B0%D0%BD",
  },
  {
    id: "mogutova",
    name: "Могутова гора",
    area: "Жигулёвск",
    type: "spot",
    difficulty: "сложно",
    surface: "камень, грунт, крутые склоны",
    distance: "локальные подъёмы и связки по Жигулёвску",
    coords: [53.394805, 49.515745],
    summary:
      "Обособленная вершина в черте Жигулёвска с видами на ГЭС, Волгу и Тольятти. Подходит как точка в больших жигулёвских связках.",
    source: "https://investinzhigulevsk.ru/tourist/guide/",
  },
  {
    id: "lysaya-zhigulevsk",
    name: "Лысая гора, Моркваши",
    area: "Жигулёвск",
    type: "park",
    difficulty: "сложно",
    surface: "склон, грунт, каменистые участки",
    distance: "локальные тропы и подъём от Морквашей",
    coords: [53.433416, 49.550843],
    summary:
      "Видовая вершина у Морквашинской долины и Жигулёвской ГЭС. Территория связана с нацпарком, поэтому перед катанием проверь доступность.",
    source: "https://2gis.ru/togliatti/geo/3096920528519406",
  },
  {
    id: "otvazhnaya",
    name: "Гора Отважная",
    area: "Жигулёвск",
    type: "spot",
    difficulty: "средне",
    surface: "грунтовый подъезд, крутые края",
    distance: "видовая точка и связка с Жигулёвском",
    coords: [53.423572, 49.438657],
    summary:
      "Гора с ретранслятором и сильным видом на водохранилище. Можно добраться на велосипеде, но у краёв склонов нужны осторожность и контроль скорости.",
    source: "https://2gis.ru/togliatti/geo/70030076280883068",
  },
  {
    id: "yagodinsky",
    name: "Ягодинский лес",
    area: "Зеленовка, Ставропольский район",
    type: "route",
    difficulty: "средне",
    surface: "лесные дороги, грунт",
    distance: "около 95 км по опубликованному треку",
    coords: [53.5371, 49.4517],
    summary:
      "Длинная лесная петля в районе Зеленовки и Ставропольского района. Хороший вариант для выносливости и грунтового темпа.",
    source: "https://rus.bike/tracks?page=2&region=63",
  },
  {
    id: "muranka",
    name: "Муранка",
    area: "Шигонский район",
    type: "route",
    difficulty: "средне",
    surface: "грунт, сельские дороги",
    distance: "84-96 км по опубликованным трекам",
    coords: [53.1747, 48.9896],
    summary:
      "Дальняя грунтовая зона на западе области. Подходит для длинного кантрийного дня и разведки сельских дорог.",
    source: "https://rus.bike/tracks?page=11&region=63",
  },
  {
    id: "vokrug-soka",
    name: "Вокруг Сока",
    area: "Красноярский район",
    type: "route",
    difficulty: "сложно",
    surface: "грунт, лес, водоразделы",
    distance: "около 114 км по проектному треку",
    coords: [53.4938, 50.3906],
    summary:
      "Большая петля вокруг реки Сок по Красноярскому району. Лучше планировать как полноценный дневной выезд с навигацией.",
    source: "https://rus.bike/tracks?page=11&region=63",
  },
];

const typeLabels = {
  all: "Все типы",
  spot: "Споты",
  route: "Маршруты",
  park: "ООПТ",
};

const difficultyLabels = {
  all: "Любая",
  "легко": "Легко",
  "средне": "Средне",
  "сложно": "Сложно",
};

const state = {
  type: "all",
  difficulty: "all",
  query: "",
  selectedId: spots[0].id,
};

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: true,
}).setView([53.33, 49.85], 9);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap",
}).addTo(map);

L.control.zoom({ position: "bottomleft" }).addTo(map);

const markers = new Map();
const bounds = L.latLngBounds(spots.map((spot) => spot.coords));

spots.forEach((spot) => {
  const marker = L.circleMarker(spot.coords, {
    radius: 9,
    weight: 3,
    color: markerColor(spot),
    fillColor: markerColor(spot),
    fillOpacity: 0.88,
  }).addTo(map);

  marker.bindPopup(
    `<p class="popup-title">${spot.name}</p><p class="popup-text">${spot.area}<br>${spot.distance}</p>`
  );
  marker.on("click", () => selectSpot(spot.id, true));
  markers.set(spot.id, marker);
});

map.fitBounds(bounds, { padding: [36, 36] });

const spotList = document.querySelector("#spotList");
const searchInput = document.querySelector("#searchInput");

buildFilters("typeFilters", typeLabels, "type");
buildFilters("difficultyFilters", difficultyLabels, "difficulty");
updateStats();
render();

document.querySelector("#fitMap").addEventListener("click", () => {
  map.fitBounds(bounds, { padding: [36, 36] });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

function buildFilters(containerId, labels, stateKey) {
  const container = document.querySelector(`#${containerId}`);

  Object.entries(labels).forEach(([value, label]) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = label;
    button.dataset.value = value;
    button.addEventListener("click", () => {
      state[stateKey] = value;
      [...container.children].forEach((item) => item.classList.toggle("is-active", item === button));
      render();
    });
    container.append(button);
  });

  container.firstElementChild.classList.add("is-active");
}

function render() {
  const visible = filteredSpots();
  spotList.innerHTML = "";

  spots.forEach((spot) => {
    const marker = markers.get(spot.id);
    if (visible.includes(spot)) {
      marker.addTo(map);
    } else {
      marker.remove();
    }
  });

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "По этим фильтрам пока ничего не найдено.";
    spotList.append(empty);
    return;
  }

  visible.forEach((spot) => {
    const card = document.createElement("article");
    card.className = "spot-card";
    card.classList.toggle("is-selected", spot.id === state.selectedId);
    card.innerHTML = `
      <button class="spot-main" type="button" aria-label="Показать ${spot.name} на карте">
        <div class="card-top">
          <h3>${spot.name}</h3>
          <span class="badge ${spot.type}">${typeLabels[spot.type]}</span>
        </div>
        <div class="spot-meta">
          <span>${spot.area}</span>
          <span>${difficultyLabels[spot.difficulty]}</span>
          <span>${spot.distance}</span>
          <span>${spot.surface}</span>
        </div>
        <p>${spot.summary}</p>
      </button>
      <a class="source-link" href="${spot.source}" target="_blank" rel="noreferrer">Источник</a>
    `;

    card.querySelector(".spot-main").addEventListener("click", () => {
      selectSpot(spot.id, true);
    });
    spotList.append(card);
  });
}

function filteredSpots() {
  return spots.filter((spot) => {
    const haystack = `${spot.name} ${spot.area} ${spot.summary} ${spot.surface}`.toLowerCase();
    const matchesType = state.type === "all" || spot.type === state.type;
    const matchesDifficulty = state.difficulty === "all" || spot.difficulty === state.difficulty;
    const matchesQuery = !state.query || haystack.includes(state.query);
    return matchesType && matchesDifficulty && matchesQuery;
  });
}

function selectSpot(id, moveMap = false) {
  state.selectedId = id;
  const spot = spots.find((item) => item.id === id);
  const marker = markers.get(id);

  markers.forEach((item, markerId) => {
    const markerSpot = spots.find((entry) => entry.id === markerId);
    item.setStyle({
      radius: markerId === id ? 12 : 9,
      color: markerId === id ? "#14211c" : markerColor(markerSpot),
      fillColor: markerColor(markerSpot),
    });
  });

  if (moveMap) {
    map.setView(spot.coords, Math.max(map.getZoom(), 11), { animate: true });
    marker.openPopup();
  }

  render();
  document.querySelector(".spot-card.is-selected")?.scrollIntoView({
    block: "nearest",
    behavior: "smooth",
  });
}

function markerColor(spot) {
  if (spot.type === "route") return "#1e674a";
  if (spot.type === "park") return "#d84f2a";
  return "#2a7fa3";
}

function updateStats() {
  document.querySelector("#spotCount").textContent = spots.filter((spot) => spot.type === "spot").length;
  document.querySelector("#routeCount").textContent = spots.filter((spot) => spot.type === "route").length;
  document.querySelector("#parkCount").textContent = spots.filter((spot) => spot.type === "park").length;
}
