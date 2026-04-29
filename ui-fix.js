(() => {
  const css = `
    .photo-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:18px}
    .photo-card{position:relative;display:block;min-width:0;aspect-ratio:4/3;margin:0;overflow:hidden;border:0;border-radius:8px;background:var(--soft,#eef3ef);cursor:zoom-in;padding:0}
    .photo-card img{display:block;width:100%;height:100%;object-fit:cover}
    .photo-card figcaption{position:absolute;inset:auto 0 0;display:block;padding:22px 7px 7px;color:#fff;background:linear-gradient(180deg,transparent,rgba(12,28,21,.82));font-size:11px;font-weight:850;line-height:1.18;text-align:left}
    .place-card button{display:grid;grid-template-columns:82px minmax(0,1fr);grid-template-rows:auto auto;gap:7px 12px;align-items:start;padding:11px}
    .card-thumb{grid-row:1/3;display:block;width:82px;height:82px;aspect-ratio:auto;border-radius:7px;background:var(--soft,#eef3ef);object-fit:cover}
    .card-row{min-width:0}
    .card-row h3{font-size:15px;line-height:1.18}
    .card-row small{display:block;margin-top:3px;line-height:1.25}
    .card-row .tag{flex:0 0 auto}
    .card-meta{grid-column:2;margin-top:0}
    .card-meta span{font-size:11px;line-height:1.15}
    .popup-card{min-width:190px}
    .popup-photo{display:block;width:100%;height:96px;margin:0 0 9px;border:0;border-radius:8px;overflow:hidden;background:var(--soft,#eef3ef);padding:0;cursor:zoom-in}
    .popup-photo img{display:block;width:100%;height:100%;object-fit:cover}
    .photo-lightbox{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(12,28,21,.78)}
    .photo-lightbox.is-open{display:flex}
    .photo-lightbox-inner{position:relative;display:grid;gap:10px;width:min(980px,100%);max-height:92vh}
    .photo-lightbox img{display:block;width:100%;max-height:80vh;object-fit:contain;border-radius:8px;background:#0c1c15;box-shadow:0 24px 80px rgba(0,0,0,.28)}
    .photo-lightbox-caption{display:flex;align-items:center;justify-content:space-between;gap:14px;color:#fff;font-weight:850}
    .photo-lightbox-caption a{color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.55)}
    .photo-lightbox-close{position:absolute;right:0;top:-48px;width:40px;height:40px;border:1px solid rgba(255,255,255,.28);border-radius:8px;color:#fff;background:rgba(23,33,29,.72);font-size:28px;line-height:1}
    @media (max-width:560px){.photo-gallery{grid-template-columns:1fr}.place-card button{grid-template-columns:72px minmax(0,1fr)}.card-thumb{width:72px;height:72px}}
  `;

  const tag = document.createElement("style");
  tag.textContent = css;
  document.head.append(tag);

  const bigPhoto = (photo) => photo.full || photo.src.replace("width=900", "width=1600").replace("width=640", "width=1600");

  function popupContent(place) {
    const cover = place.photos?.[0];
    return `
      <div class="popup-card">
        ${
          cover
            ? `<button type="button" class="popup-photo" data-photo-place="${place.id}" data-photo-index="0"><img src="${cover.src}" alt="${cover.caption}" loading="lazy" /></button>`
            : ""
        }
        <p class="popup-title">${place.name}</p>
        <p class="popup-text">${place.area}<br>${place.distance}</p>
      </div>
    `;
  }

  let lightbox;

  function ensureLightbox() {
    if (lightbox) return lightbox;
    lightbox = document.createElement("div");
    lightbox.className = "photo-lightbox";
    lightbox.innerHTML = `
      <div class="photo-lightbox-inner" role="dialog" aria-modal="true" aria-label="Фото места">
        <button type="button" class="photo-lightbox-close" aria-label="Закрыть">&times;</button>
        <img alt="" />
        <div class="photo-lightbox-caption">
          <span></span>
          <a target="_blank" rel="noreferrer">Оригинал</a>
        </div>
      </div>
    `;
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.closest(".photo-lightbox-close")) {
        lightbox.classList.remove("is-open");
      }
    });
    document.body.append(lightbox);
    return lightbox;
  }

  function openPhoto(placeId, index) {
    const place = places.find((item) => item.id === placeId);
    const item = place?.photos?.[index];
    if (!item) return;

    const box = ensureLightbox();
    box.querySelector("img").src = bigPhoto(item);
    box.querySelector("img").alt = `${place.name}: ${item.caption}`;
    box.querySelector(".photo-lightbox-caption span").textContent = `${place.name} · ${item.caption}`;
    box.querySelector(".photo-lightbox-caption a").href = item.page || item.src;
    box.classList.add("is-open");
  }

  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-photo-place]");
    if (!opener) return;
    event.preventDefault();
    openPhoto(opener.dataset.photoPlace, Number(opener.dataset.photoIndex || 0));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox) lightbox.classList.remove("is-open");
  });

  places.forEach((place) => {
    const marker = markers.get(place.id);
    if (marker) marker.bindPopup(popupContent(place), { maxWidth: 230 });
  });

  renderDetail = function renderDetailWithBetterPhotos(place) {
    const gallery = place.photos
      .map(
        (photo, index) => `
          <button type="button" class="photo-card" data-photo-place="${place.id}" data-photo-index="${index}" aria-label="Открыть фото: ${photo.caption}">
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy" />
            <figcaption>${photo.caption}</figcaption>
          </button>
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

  renderList = function renderBetterList(visible, selectedId) {
    placeList.innerHTML = "";

    if (!visible.length) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "По этим фильтрам пока нет мест.";
      placeList.append(empty);
      return;
    }

    visible.forEach((place) => {
      const cover = place.photos?.[0];
      const item = document.createElement("article");
      item.className = "place-card";
      item.classList.toggle("is-selected", place.id === selectedId);
      item.innerHTML = `
        <button type="button" aria-label="Показать ${place.name}">
          ${cover ? `<img class="card-thumb" src="${cover.src}" alt="${cover.caption}" loading="lazy" />` : ""}
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

  updateStats();
  render();
})();