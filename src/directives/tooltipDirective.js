const init = (el, binding) => {
  const position = 'bottom';
  const tooltipText = binding.value || 'Tooltip text';
  el.setAttribute('position', position);
  el.setAttribute('tooltip', tooltipText);
};

const tooltipDirective = (app) => {
  app.directive('tooltip', {
    mounted(el, binding) {
      init(el, binding);
    },
    updated(el, binding) {
      init(el, binding);
    },
  });
};

export default tooltipDirective;
