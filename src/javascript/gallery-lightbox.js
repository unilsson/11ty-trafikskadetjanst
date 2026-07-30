(() => {
  "use strict";

  const items = Array.from(
    document.querySelectorAll("[data-gallery-item]"),
  );
  const lightbox = document.querySelector("[data-gallery-lightbox]");

  if (items.length === 0 || !lightbox) {
    return;
  }

  const image = lightbox.querySelector(
    "[data-gallery-lightbox-image]",
  );
  const caption = lightbox.querySelector(
    "[data-gallery-lightbox-caption]",
  );
  const closeButtons = lightbox.querySelectorAll(
    "[data-gallery-close]",
  );
  const previousButton = lightbox.querySelector(
    "[data-gallery-previous]",
  );
  const nextButton = lightbox.querySelector("[data-gallery-next]");
  const closeButton = lightbox.querySelector(
    ".gallery-lightbox__close",
  );

  if (
    !image ||
    !caption ||
    !previousButton ||
    !nextButton ||
    !closeButton
  ) {
    return;
  }

  let activeIndex = 0;
  let returnFocus = null;

  const normaliseIndex = (index) => {
    if (index < 0) {
      return items.length - 1;
    }

    if (index >= items.length) {
      return 0;
    }

    return index;
  };

  const showImage = (index) => {
    activeIndex = normaliseIndex(index);

    const item = items[activeIndex];
    const source = item.dataset.gallerySrc || "";
    const alt = item.dataset.galleryAlt || "";
    const text = item.dataset.galleryCaption || "";

    image.src = source;
    image.alt = alt;
    caption.textContent = `${text} – bild ${activeIndex + 1} av ${items.length}`;
  };

  const openLightbox = (index, trigger) => {
    returnFocus = trigger;
    showImage(index);
    lightbox.hidden = false;
    document.body.classList.add("gallery-lightbox-is-open");
    closeButton.focus();
  };

  const closeLightbox = () => {
    if (lightbox.hidden) {
      return;
    }

    lightbox.hidden = true;
    image.src = "";
    image.alt = "";
    caption.textContent = "";
    document.body.classList.remove("gallery-lightbox-is-open");

    if (returnFocus instanceof HTMLElement) {
      returnFocus.focus();
    }
  };

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      openLightbox(index, item);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeLightbox);
  });

  previousButton.addEventListener("click", () => {
    showImage(activeIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showImage(activeIndex + 1);
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
      return;
    }

    if (event.key === "ArrowLeft") {
      showImage(activeIndex - 1);
      return;
    }

    if (event.key === "ArrowRight") {
      showImage(activeIndex + 1);
    }
  });
})();
