/* ASYNCHRONOUS LOADING OF BACKGROUND VIDEO */
export default function videoObserver() {
  const video = document.querySelector(".projects__background-video");
  if (!video) return;

  const source = video.querySelector("source");
  if (!source) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || source.src) return;

        const videoSrc = source.getAttribute("data-src");
        if (videoSrc) {
          source.setAttribute("src", videoSrc);
          video.load();
        }
        observer.unobserve(video);
      });
    },
    { threshold: 0, rootMargin: '300px 0px' }
  );

  observer.observe(video);
}

