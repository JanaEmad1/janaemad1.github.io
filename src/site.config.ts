// Everything you are likely to change lives here.
export const site = {
  name: { ar: 'جنى عماد', en: 'Jana Emad' },
  brand: { ar: 'جنى', en: 'Jana' },
  // Paste your Mostaql profile link here once your account is ready, e.g. 'https://mostaql.com/u/yourname'.
  // Every "contact / request a quote" button then points to Mostaql (Mostaql rules: no off-platform contact),
  // and the buttons switch back to saying "on Mostaql". While it is empty, they point to your GitHub profile.
  mostaqlUrl: '',
  githubUrl: 'https://github.com/JanaEmad1',
  url: 'https://janaemad1.github.io',
};

export const onMostaql = site.mostaqlUrl !== '';
/** Where every contact / quote button goes. */
export const contactUrl = site.mostaqlUrl || site.githubUrl;
