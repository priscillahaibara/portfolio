/* ASYNCHRONOUS LOADING OF BACKGROUND VIDEO */
const video = document.querySelector(".projects__background-video");
const source = video.querySelector("source");

export default function videoObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const videoSrc = source.getAttribute("data-src");
        if (videoSrc) {
          source.setAttribute("src", videoSrc);
          video.load();
        }
        observer.unobserve(video);
      });
    },
    { threshold: 0 }
  );
  observer.observe(video);
}
