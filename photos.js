(() => {
  const css = `
    .photo-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:18px}
    .photo-card{position:relative;min-width:0;aspect-ratio:4/3;margin:0;overflow:hidden;border-radius:8px;background:var(--soft,#eef3ef)}
    .photo-card img,.card-thumb{display:block;width:100%;height:100%;object-fit:cover}
    .photo-card figcaption{position:absolute;inset:auto 0 0;display:flex;align-items:flex-end;justify-content:space-between;gap:6px;padding:20px 7px 7px;color:#fff;background:linear-gradient(180deg,transparent,rgba(12,28,21,.78));font-size:11px;font-weight:800;line-height:1.18}
    .photo-card figcaption span{min-width:0}
    .photo-card figcaption a{flex:0 0 auto;color:#fff;text-decoration:none;opacity:.86}
    .place-card button{gap:12px}
    .card-thumb{aspect-ratio:16/9;border-radius:7px;background:var(--soft,#eef3ef)}
    @media (max-width:560px){.photo-gallery{grid-template-columns:1fr}}
  `;
  const tag = document.createElement("style");
  tag.textContent = css;
  document.head.append(tag);

  const photo = (file) => ({
    caption: file.replace(/\.[^.]+$/, ""),
    src: `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}?width=900`,
    page: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replaceAll("%20", "_")}`,
  });

  const sokol = [
    "Лысая гора - panoramio.jpg",
    "На дне старого котлована Сокского карьера. - panoramio.jpg",
    "Царевщина.Вид с горы на Красной Глинке. - panoramio.jpg",
  ];
  const zhiguli = ["Молодецкий курган 02.JPG", "Вид с Девьей горы.jpg", "Девья гора.JPG"];
  const tlt = [
    "Турбаза\"Подснежник\"22.12.2012 - panoramio.jpg",
    "Турбаза\"Подснежник\" 22.12.2012 - panoramio.jpg",
    "Komsomolskoye shosse 22 - 3.jpg",
  ];

  const photos = {
    "dubki-chaika": sokol,
    chaika: [
      "Krasnoglinsky City District, Samara, Samara Oblast, Russia - panoramio - Николай Куркин (2).jpg",
      "Krasnoglinsky City District, Samara, Samara Oblast, Russia - panoramio - Николай Куркин (1).jpg",
      "Дерево с переплетёнными стволами. - panoramio.jpg",
    ],
    "tip-tyav": [
      "На дне старого котлована Сокского карьера. - panoramio.jpg",
      "Царевщина.Вид с горы на Красной Глинке. - panoramio.jpg",
      "Красная Глинка.Горнолыжка. - panoramio.jpg",
    ],
    "tsarev-kurgan": [
      "Царев Курган - panoramio (8).jpg",
      "Царев Курган - panoramio (1).jpg",
      "Царев Курган - panoramio (6).jpg",
    ],
    verblyud: [
      "Лес около Ширяево - panoramio.jpg",
      "Отвесная скала около Ширяево - panoramio.jpg",
      "Ширяево (Самарская область) PIC 0345.jpg",
    ],
    "south-zhiguli": [
      "Volga River P8160561 2200.jpg",
      "Volga River P8160565 2200.jpg",
      "135-18 \"Саратов-Горький\".jpg",
    ],
    "zhiguli-marathon": [
      "Volzhsky District, Samara Oblast, Russia - panoramio (47).jpg",
      "Volga river P8101287 2200.jpg",
      "Volga River. River cruise ship Valeriy Chkalov P5171824 2200.jpg",
    ],
    molodetsky: zhiguli,
    mogutova: ["Вид с Могутовой горы (5).jpg", "Вид с Могутовой горы (6).jpg", "Вид с Могутовой горы (3).jpg"],
    "lysaya-zhigulevsk": [
      "Моркваши, район города Жигулёвск.jpg",
      "Жигулевск. Утес Скальный.jpg",
      "Вид с Могутовой горы (4).jpg",
    ],
    otvazhnaya: [
      "Zhigulyovsk, Samara Oblast, Russia - panoramio.jpg",
      "Zhigulyovsk, Samara Oblast, Russia - panoramio (1).jpg",
      "Zhiguli Hydroelectric Station-3878.jpg",
    ],
    yagodinsky: ["Winter forest in Zelenovka.jpg", "Togliattikauchuk 20210526.jpg", "Spiridon Trimiphuntskiy church.jpg"],
    muranka: ["Muranskiy Bor 7877.jpg", "Volga River P5171702 2200.jpg", "Volga River. Pecherskoye P5171727 2200.jpg"],
    "vokrug-soka": ["Sok river 1964.jpg", "Krasnyy-yar.jpg", "Krasnoyarsky District, Samara Oblast, Russia - panoramio (23).jpg"],
    antonovka: tlt,
  };

  const antonovka = {
    id: "antonovka",
    name: "Трейл-парк «Антоновка»",
    region: "Жигули",
    area: "Тольятти, Портпосёлок",
    style: "trail",
    mood: "лесные трейлы и трамплины",
    difficulty: "средне",
    distance: "локальные трейловые линии",
    surface: "сосновый лес, грунт, контруклоны, трамплины",
    bestFor: "трейловое катание, прыжки, тренировка техники",
    access: "координаты из опубликованного велогида: 53.473018, 49.387144",
    coords: [53.473018, 49.387144],
    route: [
      [53.473018, 49.387144],
      [53.468, 49.392],
      [53.464, 49.384],
      [53.469, 49.376],
      [53.473018, 49.387144],
    ],
    summary:
      "Локальный трейл-парк в Тольятти, построенный местными райдерами в лесу. По опубликованным описаниям подходит любителям и райдерам среднего уровня.",
    source: "https://www.sobaka.ru/smr/entertainment/sport/198244",
  };

  if (!places.some((place) => place.id === antonovka.id)) places.push(antonovka);
  places.forEach((place) => {
    place.photos = (photos[place.id] || sokol).map(photo);
  });

  const added = places.find((place) => place.id === "antonovka");
  if (added) {
    bounds.extend(added.coords);
    if (!markers.has(added.id)) {
      const marker = L.circleMarker(added.coords, {
        radius: added.id === state.selectedId ? 12 : 9,
        weight: 3,
        color: added.id === state.selectedId ? "#17211d" : colorByStyle[added.style],
        fillColor: colorByStyle[added.style],
        fillOpacity: 0.92,
      }).addTo(markerLayer);
      marker.bindPopup(`<p class="popup-title">${added.name}</p><p class="popup-text">${added.area}<br>${added.distance}</p>`);
      marker.on("click", () => selectPlace(added.id, true));
      markers.set(added.id, marker);
    }
  }

  renderDetail = function renderDetailWithPhotos(place) {
    const gallery = place.photos
      .map(
        (item) => `
          <figure class="photo-card">
            <img src="${item.src}" alt="${item.caption}" loading="lazy" />
            <figcaption><span>${item.caption}</span><a href="${item.page}" target="_blank" rel="noreferrer">Фото</a></figcaption>
          </figure>
        `
      )
      .join("");

    placeDetail.innerHTML = `
      <div class="detail-kicker">
        <span class="tag ${place.style}">${styles[place.style]}</span>
        <span class="tag">${place.difficulty}</span>
      </div>
      <h2>${place.name}</h2>
      <p>${place.summary}</p>
      <div class="photo-gallery">${gallery}</div>
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
    document.querySelector("#centerPlace").addEventListener("click", () => focusMap(place));
  };

  renderList = function renderListWithPhotos(visible, selectedId) {
    placeList.innerHTML = "";
    if (!visible.length) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "По этим фильтрам пока нет мест.";
      placeList.append(empty);
      return;
    }

    visible.forEach((place) => {
      const cover = place.photos[0];
      const item = document.createElement("article");
      item.className = "place-card";
      item.classList.toggle("is-selected", place.id === selectedId);
      item.innerHTML = `
        <button type="button" aria-label="Показать ${place.name}">
          <img class="card-thumb" src="${cover.src}" alt="${cover.caption}" loading="lazy" />
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
  };

  window.addEventListener("load", () => {
    map.invalidateSize();
    map.fitBounds(bounds, { padding: [42, 42] });
  });

  updateStats();
  render();
})();
