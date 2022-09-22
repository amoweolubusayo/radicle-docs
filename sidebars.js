const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: ['what-is-radicle', 'get-started', 'troubleshooting'],
    },
    {
      type: 'category',
      label: 'Using Radicle',
      collapsed: false,
      items: [
        'using-radicle/create',
        'using-radicle/view-share',
        'using-radicle/push',
        'using-radicle/clone',
        'using-radicle/track-review-merge',
        'using-radicle/identity',
      ]
    },
    {
      type: 'category',
      label: 'Understanding Radicle',
      collapsed: false,
      items: ['understanding-radicle/why-radicle', 'understanding-radicle/how-it-works', 'understanding-radicle/glossary', 'understanding-radicle/faq']
    },
    {
      type: 'category',
      label: 'Get involved',
      collapsed: false,
      items: ['get-involved/join-the-community', 'get-involved/obtain-rad']
    }
  ],
};

module.exports = sidebars;
