const url =
  'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg';

const brokenImageUrl = 'https://glue.cdbcdn.com/bicep/bicep.jpg';

export const images = [
  {
    alternativeText: 'Two cats',
    url,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'Two cats',
  },
  {
    alternativeText: 'Two more cats',
    url,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'Two more cats',
  },
  {
    alternativeText: 'Much cats',
    url,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'Much cats',
  },
  {
    alternativeText: 'No dogs',
    url,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'No dogs',
  },
];

export const brokenImages = [
  {
    alternativeText: 'Much cats',
    url: brokenImageUrl,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'Much cats',
  },
];
