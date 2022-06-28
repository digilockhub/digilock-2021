
window.loadMetaData = (whichVideo) => {

  if (whichVideo === '6216703423001' || whichVideo === '6229146951001') { // Digilink video or test video
    gsap.timeline({
      duration: 0,
      ease: "elastic",
      delay: .1
    })
      .fromTo(".header", { marginLeft: -50, opacity: 0 }, { marginLeft: 0, opacity: 1, stagger: .2 })
      .to(".vjs-big-play-button", { opacity: 1 })
  }

}