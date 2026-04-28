const places = [
  {
    id: "dubki-chaika",
    name: "Дубки - Лысая гора - Чайка",
    region: "Самара рядом",
    area: "Самара, Красноглинский район",
    style: "trail",
    mood: "лесной тренировочный круг",
    difficulty: "средне",
    distance: "около 26 км",
    surface: "лес, грунт, подъёмы",
    bestFor: "после работы, интервалы, короткий кантри",
    access: "городской старт от Демократической",
    coords: [53.306652, 50.194637],
    route: [
      [53.306652, 50.194637],
      [53.322, 50.214],
      [53.342, 50.226],
      [53.351662, 50.234634],
    ],
    summary:
      "Городская связка через Дубки, Лысую гору, Управленческий и Чайку. Хорошая база для регулярных тренировок без долгого выезда из города.",
    source: "https://www.wikiloc.com/trails/mountain-biking/russia/samara/samara",
  },
  {
    id: "chaika",
    name: "УСЦ «Чайка»",
    region: "Самара рядом",
    area: "Управленческий",
    style: "trail",
    mood: "ровный вход в лес",
    difficulty: "легко",
    distance: "короткие лесные круги",
    surface: "широкие трассы, лес",
    bestFor: "разминка, семейный выезд, спокойный темп",
    access: "удобный подъезд и парковка",
    coords: [53.351662, 50.234634],
    route: [
      [53.351662, 50.234634],
      [53.358, 50.226],
      [53.365, 50.236],
      [53.354, 50.245],
      [53.351662, 50.234634],
    ],
    summary:
      "Спортивная база и понятная точка входа в лесные петли Красной Глинки. Место без лишней драмы, когда хочется просто покататься.",
    source: "https://orgeo.ru/place/1842",
  },
  {
    id: "tip-tyav",
    name: "Тип-Тяв",
    region: "Самара рядом",
    area: "Красная Глинка",
    style: "scenic",
    mood: "скалы, карьер и Волга",
    difficulty: "сложно",
    distance: "локальные петли 20-40 км",
    surface: "камень, грунт, кромка карьера",
    bestFor: "видовой трейл, техничные куски, фото на закате",
    access: "лучше ехать с навигацией",
    coords: [53.401891, 50.161179],
    route: [
      [53.401891, 50.161179],
      [53.394, 50.178],
      [53.383, 50.168],
      [53.389, 50.146],
    ],
    summary:
      "Одна из самых узнаваемых точек Сокольих гор: рельеф, виды на Волгу и участки вокруг карьера. Для аккуратного райдера, не для автопилота.",
    source: "https://2gis.ru/samara/geo/2533970575098082",
  },
  {
    id: "tsarev-kurgan",
    name: "Царев Курган",
    region: "Самара рядом",
    area: "Волжский, Красноярский район",
    style: "scenic",
    mood: "быстрый видовой подъём",
    difficulty: "средне",
    distance: "локальные круги",
    surface: "грунт, подъём, обзорные тропы",
    bestFor: "подъёмы, короткий выезд, связка с Сокольими",
    access: "подходит как отдельная точка дня",
    coords: [53.422588, 50.11874],
    route: [
      [53.422588, 50.11874],
      [53.418, 50.125],
      [53.413, 50.116],
      [53.421, 50.104],
    ],
    summary:
      "Отдельная гора у места впадения Сока в Волгу. Небольшая по масштабу, но выразительная по рельефу и виду.",
    source: "https://orgeo.ru/place/759",
  },
  {
    id: "verblyud",
    name: "Гора Верблюд",
    region: "Самарская Лука",
    area: "Ширяево",
    style: "park",
    mood: "классика Самарской Луки",
    difficulty: "средне",
    distance: "около 10 км пешего маршрута рядом",
    surface: "грунт, камень, парковая территория",
    bestFor: "виды, неспешный день, связка с Ширяево",
    access: "проверяй правила нацпарка",
    coords: [53.408993, 50.07492],
    route: [
      [53.408993, 50.07492],
      [53.402, 50.083],
      [53.396, 50.074],
      [53.405, 50.061],
    ],
    summary:
      "Видовая точка рядом с Ширяево. На велосипеде лучше планировать как аккуратный подъезд и прогулочно-видовой день внутри правил нацпарка.",
    source: "https://npsamluka.ru/turpriyuty-i-mesta-dlya-otdyha/gora-verblyud-2/",
  },
  {
    id: "south-zhiguli",
    name: "По Южным Жигулям",
    region: "Самарская Лука",
    area: "Южное побережье Самарской Луки",
    style: "long",
    mood: "официальный веломаршрут",
    difficulty: "средне",
    distance: "45 км",
    surface: "21 км грунт, 24 км асфальт",
    bestFor: "однодневный тур, Волга, рельеф",
    access: "маршрут нацпарка",
    coords: [53.1475, 49.9656],
    route: [
      [53.1475, 49.9656],
      [53.13, 49.89],
      [53.108, 49.816],
      [53.087, 49.735],
      [53.064, 49.67],
    ],
    summary:
      "Готовый формат на день: грунт, асфальт, волжские панорамы и жигулёвский рельеф без необходимости самому собирать нитку с нуля.",
    source: "https://npsamluka.ru/turisticheskie-marshruty/velomarshrut-po-yuzhnym-zhigulyam/",
  },
  {
    id: "zhiguli-marathon",
    name: "Марафон по Жигулям",
    region: "Самарская Лука",
    area: "Национальный парк «Самарская Лука»",
    style: "long",
    mood: "большой автономный выезд",
    difficulty: "сложно",
    distance: "135 км",
    surface: "грунт, лес, протяжённый рельеф",
    bestFor: "2-4 дня, выносливость, туринг на грунтах",
    access: "планируй ночёвки и разрешения",
    coords: [53.2613, 49.8989],
    route: [
      [53.2613, 49.8989],
      [53.22, 49.78],
      [53.18, 49.62],
      [53.31, 49.43],
      [53.400833, 49.303056],
    ],
    summary:
      "Самый протяжённый веломаршрут нацпарка. Это уже не прогулка, а полноценное приключение с навигацией, запасом воды и нормальным планом.",
    source: "https://zapovedtravel.ru/Route/Details/3795bc81-a121-49a3-9829-ff10d0cab7e3",
  },
  {
    id: "molodetsky",
    name: "Молодецкий курган",
    region: "Жигули",
    area: "Усинский залив",
    style: "park",
    mood: "сильный рельеф и Волга",
    difficulty: "сложно",
    distance: "часть больших жигулёвских связок",
    surface: "крутой рельеф, грунт, камень",
    bestFor: "подготовленные райдеры, виды, жёсткий набор",
    access: "проверяй доступность территории",
    coords: [53.400833, 49.303056],
    route: [
      [53.400833, 49.303056],
      [53.394, 49.318],
      [53.386, 49.302],
      [53.396, 49.284],
    ],
    summary:
      "Западная оконечность Жигулёвских гор у слияния Усы и Волги. Красиво, резко и требовательно к ногам.",
    source: "https://ru.ruwiki.ru/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86%D0%BA%D0%B8%D0%B9_%D0%BA%D1%83%D1%80%D0%B3%D0%B0%D0%BD",
  },
  {
    id: "mogutova",
    name: "Могутова гора",
    region: "Жигули",
    area: "Жигулёвск",
    style: "scenic",
    mood: "вид на ГЭС и Тольятти",
    difficulty: "сложно",
    distance: "локальные подъёмы",
    surface: "камень, грунт, крутые склоны",
    bestFor: "видовая точка в жигулёвской связке",
    access: "местами круто и каменисто",
    coords: [53.394805, 49.515745],
    route: [
      [53.394805, 49.515745],
      [53.405, 49.505],
      [53.413, 49.524],
      [53.402, 49.543],
    ],
    summary:
      "Вершина в черте Жигулёвска с видами на ГЭС, Волгу и Тольятти. Лучше работает как часть большого выезда по Жигулям.",
    source: "https://investinzhigulevsk.ru/tourist/guide/",
  },
  {
    id: "lysaya-zhigulevsk",
    name: "Лысая гора, Моркваши",
    region: "Жигули",
    area: "Жигулёвск",
    style: "park",
    mood: "морквашинский склон",
    difficulty: "сложно",
    distance: "локальные тропы и подъём",
    surface: "склон, грунт, каменистые участки",
    bestFor: "короткий, но насыщенный рельефный выезд",
    access: "проверяй границы нацпарка",
    coords: [53.433416, 49.550843],
    route: [
      [53.433416, 49.550843],
      [53.424, 49.544],
      [53.417, 49.558],
      [53.428, 49.571],
    ],
    summary:
      "Видовая вершина у Морквашинской долины и Жигулёвской ГЭС. Рельеф компактный, но не мягкий.",
    source: "https://2gis.ru/togliatti/geo/3096920528519406",
  },
  {
    id: "otvazhnaya",
    name: "Гора Отважная",
    region: "Жигули",
    area: "Жигулёвск",
    style: "scenic",
    mood: "ретранслятор и водохранилище",
    difficulty: "средне",
    distance: "видовая точка",
    surface: "грунтовый подъезд, крутые края",
    bestFor: "панорама, связка с городом",
    access: "у краёв держи скорость под контролем",
    coords: [53.423572, 49.438657],
    route: [
      [53.423572, 49.438657],
      [53.414, 49.457],
      [53.402, 49.445],
      [53.41, 49.424],
    ],
    summary:
      "Гора с ретранслятором и сильным видом на водохранилище. Хороша как точка маршрута, но требует аккуратности на краях склонов.",
    source: "https://2gis.ru/togliatti/geo/70030076280883068",
  },
  {
    id: "yagodinsky",
    name: "Ягодинский лес",
    region: "Дальние петли",
    area: "Зеленовка, Ставропольский район",
    style: "long",
    mood: "лесной грунтовый день",
    difficulty: "средне",
    distance: "около 95 км",
    surface: "лесные дороги, грунт",
    bestFor: "выносливость, ровный темп, разведка",
    access: "лучше ехать с треком",
    coords: [53.5371, 49.4517],
    route: [
      [53.5371, 49.4517],
      [53.58, 49.51],
      [53.62, 49.43],
      [53.59, 49.34],
      [53.5371, 49.4517],
    ],
    summary:
      "Длинная лесная петля в районе Зеленовки. Это место не про один вау-спуск, а про хороший грунтовый километраж.",
    source: "https://rus.bike/tracks?page=2&region=63",
  },
  {
    id: "muranka",
    name: "Муранка",
    region: "Дальние петли",
    area: "Шигонский район",
    style: "long",
    mood: "запад области и сельские грунты",
    difficulty: "средне",
    distance: "84-96 км",
    surface: "грунт, сельские дороги",
    bestFor: "длинный кантрийный день",
    access: "запас воды и навигация обязательны",
    coords: [53.1747, 48.9896],
    route: [
      [53.1747, 48.9896],
      [53.12, 49.05],
      [53.08, 48.96],
      [53.14, 48.88],
      [53.1747, 48.9896],
    ],
    summary:
      "Дальняя грунтовая зона на западе области. Подходит для тех, кто любит пространство, тишину и длинный темп.",
    source: "https://rus.bike/tracks?page=11&region=63",
  },
  {
    id: "vokrug-soka",
    name: "Вокруг Сока",
    region: "Дальние петли",
    area: "Красноярский район",
    style: "long",
    mood: "большая петля по реке",
    difficulty: "сложно",
    distance: "около 114 км",
    surface: "грунт, лес, водоразделы",
    bestFor: "сильный дневной выезд",
    access: "лучше стартовать рано",
    coords: [53.4938, 50.3906],
    route: [
      [53.4938, 50.3906],
      [53.58, 50.34],
      [53.65, 50.45],
      [53.57, 50.58],
      [53.4938, 50.3906],
    ],
    summary:
      "Большая петля вокруг Сока по Красноярскому району. Формат для тех, кто хочет не точку, а полноценный день в седле.",
    source: "https://rus.bike/tracks?page=11&region=63",
  },
];

const styles = {
  all: "Все",
  trail: "Трейлы",
  scenic: "Видовые",
  long: "Длинные",
  park: "ООПТ",
};

const regions = ["Все районы", "Самара рядом", "Самарская Лука", "Жигули", "Дальние петли"];

const collections = [
  {
    id: "near-city",
    title: "После работы",
    text: "Короткие места рядом с Самарой.",
    match: (place) => place.region === "Самара рядом",
  },
  {
    id: "volga-views",
    title: "Виды на Волгу",
    text: "Горы, кромки и обзорные точки.",
    match: (place) => place.style === "scenic" || ["verblyud", "molodetsky"].includes(place.id),
  },
  {
    id: "big-day",
    title: "Большой день",
    text: "Маршруты, где нужны вода и план.",
    match: (place) => place.style === "long",
  },
  {
    id: "park-rules",
    title: "Нацпарк и ООПТ",
    text: "Красиво, но сначала проверь правила.",
    match: (place) => place.style === "park",
  },
];

const state = {
  style: "all",
  region: "Все районы",
  collection: null,
  query: "",
  selectedId: "tip-tyav",
};

const colorByStyle = {
  trail: "#237b9c",
  scenic: "#d85932",
  long: "#1f6b4d",
  park: "#7b4ca0",
};

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: true,
}).setView([53.34, 49.86], 8);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap",
}).addTo(map);

L.control.zoom({ position: "bottomleft" }).addTo(map);

const routeLayer = L.layerGroup().addTo(map);
const markerLayer = L.layerGroup().addTo(map);
const markers = new Map();
const bounds = L.latLngBounds(places.map((place) => place.coords));

places.forEach((place) => {
  const marker = L.circleMarker(place.coords, {
    radius: place.id === state.selectedId ? 12 : 9,
    weight: 3,
    color: place.id === state.selectedId ? "#17211d" : colorByStyle[place.style],
    fillColor: colorByStyle[place.style],
    fillOpacity: 0.92,
  }).addTo(markerLayer);

  marker.bindPopup(
    `<p class="popup-title">${place.name}</p><p class="popup-text">${place.area}<br>${place.distance}</p>`
  );
  marker.on("click", () => selectPlace(place.id, true));
  markers.set(place.id, marker);
});

map.fitBounds(bounds, { padding: [42, 42] });

const searchInput = document.querySelector("#searchInput");
const placeList = document.querySelector("#placeList");
const placeDetail = document.querySelector("#placeDetail");

buildStyleFilters();
buildRegionFilters();
buildCollections();
updateStats();
render();

document.querySelector("#fitMap").addEventListener("click", () => {
  map.fitBounds(bounds, { padding: [42, 42] });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  state.collection = null;
  render();
});

function buildStyleFilters() {
  const container = document.querySelector("#styleFilters");
  Object.entries(styles).forEach(([value, label]) => {
    const button = createChip(label, value === state.style);
    button.addEventListener("click", () => {
      state.style = value;
      state.collection = null;
      render();
    });
    container.append(button);
  });
}

function buildRegionFilters() {
  const container = document.querySelector("#regionFilters");
  regions.forEach((region) => {
    const button = createChip(region, region === state.region);
    button.addEventListener("click", () => {
      state.region = region;
      state.collection = null;
      render();
    });
    container.append(button);
  });
}

function buildCollections() {
  const container = document.querySelector("#collectionList");
  collections.forEach((collection) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "collection-button";
    button.innerHTML = `<strong>${collection.title}</strong><span>${collection.text}</span>`;
    button.addEventListener("click", () => {
      state.collection = state.collection === collection.id ? null : collection.id;
      render();
    });
    container.append(button);
  });
}

function createChip(label, active) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "chip";
  button.classList.toggle("is-active", active);
  button.textContent = label;
  return button;
}

function render() {
  syncControls();
  const visible = filteredPlaces();
  const selected = visible.find((place) => place.id === state.selectedId) || visible[0] || places[0];
  state.selectedId = selected.id;

  document.querySelector("#visibleCount").textContent = visible.length;
  document.querySelector("#listTitle").textContent = state.collection
    ? collections.find((item) => item.id === state.collection).title
    : "Все веломеста";
  document.querySelector("#mapTitle").textContent = selected.name;

  renderMarkers(visible, selected.id);
  renderRoutes(visible, selected);
  renderDetail(selected);
  renderList(visible, selected.id);
}

function syncControls() {
  [...document.querySelector("#styleFilters").children].forEach((button) => {
    button.classList.toggle("is-active", button.textContent === styles[state.style]);
  });
  [...document.querySelector("#regionFilters").children].forEach((button) => {
    button.classList.toggle("is-active", button.textContent === state.region);
  });
  [...document.querySelector("#collectionList").children].forEach((button, index) => {
    button.classList.toggle("is-active", collections[index].id === state.collection);
  });
}

function filteredPlaces() {
  const collection = collections.find((item) => item.id === state.collection);

  return places.filter((place) => {
    const text = `${place.name} ${place.region} ${place.area} ${place.mood} ${place.summary}`.toLowerCase();
    const matchesQuery = !state.query || text.includes(state.query);
    const matchesStyle = state.style === "all" || place.style === state.style;
    const matchesRegion = state.region === "Все районы" || place.region === state.region;
    const matchesCollection = !collection || collection.match(place);
    return matchesQuery && matchesStyle && matchesRegion && matchesCollection;
  });
}

function renderMarkers(visible, selectedId) {
  const visibleIds = new Set(visible.map((place) => place.id));

  places.forEach((place) => {
    const marker = markers.get(place.id);
    if (visibleIds.has(place.id)) {
      marker.addTo(markerLayer);
      marker.setStyle({
        radius: place.id === selectedId ? 12 : 9,
        color: place.id === selectedId ? "#17211d" : colorByStyle[place.style],
        fillColor: colorByStyle[place.style],
      });
    } else {
      marker.remove();
    }
  });
}

function renderRoutes(visible, selected) {
  routeLayer.clearLayers();

  visible.forEach((place) => {
    if (!place.route) return;
    const isSelected = place.id === selected.id;
    L.polyline(place.route, {
      color: colorByStyle[place.style],
      weight: isSelected ? 5 : 2,
      opacity: isSelected ? 0.9 : 0.34,
      dashArray: isSelected ? null : "6 10",
    }).addTo(routeLayer);
  });
}

function renderDetail(place) {
  placeDetail.innerHTML = `
    <div class="detail-kicker">
      <span class="tag ${place.style}">${styles[place.style]}</span>
      <span class="tag">${place.difficulty}</span>
    </div>
    <h2>${place.name}</h2>
    <p>${place.summary}</p>
    <div class="detail-grid">
      <div><span>Район</span><strong>${place.area}</strong></div>
      <div><span>Дистанция</span><strong>${place.distance}</strong></div>
      <div><span>Покрытие</span><strong>${place.surface}</strong></div>
      <div><span>Лучше для</span><strong>${place.bestFor}</strong></div>
    </div>
    <p>${place.access}</p>
    <div class="detail-actions">
      <a href="${place.source}" target="_blank" rel="noreferrer">Источник</a>
      <button type="button" id="centerPlace">В центр карты</button>
    </div>
  `;

  document.querySelector("#centerPlace").addEventListener("click", () => {
    focusMap(place);
  });
}

function renderList(visible, selectedId) {
  placeList.innerHTML = "";

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "По этим фильтрам пока нет мест.";
    placeList.append(empty);
    return;
  }

  visible.forEach((place) => {
    const item = document.createElement("article");
    item.className = "place-card";
    item.classList.toggle("is-selected", place.id === selectedId);
    item.innerHTML = `
      <button type="button" aria-label="Показать ${place.name}">
        <div class="card-row">
          <div>
            <h3>${place.name}</h3>
            <small>${place.region} · ${place.mood}</small>
          </div>
          <span class="tag ${place.style}">${styles[place.style]}</span>
        </div>
        <div class="card-meta">
          <span>${place.difficulty}</span>
          <span>${place.distance}</span>
          <span>${place.surface}</span>
        </div>
      </button>
    `;
    item.querySelector("button").addEventListener("click", () => selectPlace(place.id, true));
    placeList.append(item);
  });
}

function selectPlace(id, moveMap = false) {
  state.selectedId = id;
  render();

  const place = places.find((item) => item.id === id);
  if (moveMap && place) {
    focusMap(place);
    markers.get(id).openPopup();
  }
}

function focusMap(place) {
  map.setView(place.coords, Math.max(map.getZoom(), 11), { animate: true });
}

function updateStats() {
  document.querySelector("#totalCount").textContent = places.length;
  document.querySelector("#longCount").textContent = places.filter((place) => place.style === "long").length;
  document.querySelector("#parkCount").textContent = places.filter((place) => place.style === "park").length;
}
