export const navigationList = [
  {
    to: 'home',
    label: 'Home',
    icon: 'zmdi-widgets',
    dashboardDisplay: false,
    basePage: true,
  }, {
    to: 'icon',
    label: 'Icon',
    icon: 'zmdi-image',
    dashboardDisplay: true,
  }, {
    to: 'typography',
    label: 'Typography',
    icon: 'zmdi-font',
    dashboardDisplay: true,
  }, {
    to: 'class',
    label: 'Class',
    icon: 'zmdi-labels',
    dashboardDisplay: true,
    children: [
      {
        to: 'class/easy',
        label: 'Easy Class',
        dashboardDisplay: true,
      },
      {
        to: 'class/scss',
        label: 'SCSS',
        dashboardDisplay: true,
      }
    ]
  }, {
    to: 'widget',
    label: 'Widget',
    icon: 'zmdi-labels',
    dashboardDisplay: true,
    children: [
      {
        to: 'widget/button',
        label: 'Button',
        dashboardDisplay: true,
      },
      {
        to: 'widget/input',
        label: 'Input',
        dashboardDisplay: true,
      },
      {
        to: 'widget/grid',
        label: 'Grid',
        dashboardDisplay: true,
      }
    ]
  }
];
