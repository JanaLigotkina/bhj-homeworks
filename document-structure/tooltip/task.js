const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.querySelector('.tooltip');

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top,
    left: box.left
  };

}

hasTooltip.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    tooltip.classList.add('tooltip_active');

    let tooltipHeight = tooltip.getBoundingClientRect().height;
    let top = String(getCoords(item).top - tooltipHeight);
    let left = String(getCoords(item).left);

    tooltip.innerHTML = item.title;
    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
  })
})