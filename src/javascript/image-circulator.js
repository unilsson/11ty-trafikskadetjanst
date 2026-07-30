const banner = document.querySelector("#adBanner");

if (banner) {
  const images = [
    {
      src: "/circulator-images/blankgarport.jpg",
      alt: "En garageport som har blivit intryckt av ett fordon",
    },
    {
      src: "/circulator-images/dalarovagen.jpg",
      alt: "En trafikolycka där ett fordon har skadat utrustning vid en väg",
    },
    {
      src: "/circulator-images/grind2.jpg",
      alt: "En grind som har blivit nedkörd av ett fordon",
    },
  ];

  let currentIndex = Math.floor(Math.random() * images.length);

  const showImage = (index) => {
    const image = images[index];
    banner.src = image.src;
    banner.alt = image.alt;
  };

  for (const image of images) {
    const preload = new Image();
    preload.src = image.src;
  }

  showImage(currentIndex);

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!reducedMotion) {
    window.setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 7000);
  }
}
