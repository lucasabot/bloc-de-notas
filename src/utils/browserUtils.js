export const isFirefox = () => typeof InstallTrigger !== 'undefined';

export function scrollTo(element, to, duration) {
  const start = element.scrollTop;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = () => {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

Math.easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t -= 1;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

export const forceResize = () => {
  /*
   * Trigger window resize function in javascript
   * source path : http://codrate.com/questions/how-can-trigger-the-window-resize-event-manually-in-javascript
   */
  if (typeof Event === 'function') {
    // modern browsers
    window.dispatchEvent(new Event('resize'));
  } else {
    // This will be executed on old browsers and especially IE
    const resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
  }
};
