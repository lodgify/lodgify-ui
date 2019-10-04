const url =
  'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg';

export const images = [
  {
    url,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'Two cats',
  },
  {
    url,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'Two more cats',
  },
  {
    url,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'Much cats',
  },
  {
    url,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'No dogs',
  },
];

export const adaptedImages = [
  {
    original:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    originalAlt: 'Two cats',
    originalTitle: 'Two cats',
    sizes: '100w',
    srcSet:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=400&h=400&mode=max 320w',
  },
  {
    original:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    originalAlt: 'Two more cats',
    originalTitle: 'Two more cats',
    sizes: '100w',
    srcSet:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=400&h=400&mode=max 320w',
  },
  {
    original:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    originalAlt: 'Much cats',
    originalTitle: 'Much cats',
    sizes: '100w',
    srcSet:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=400&h=400&mode=max 320w',
  },
  {
    original:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    originalAlt: 'No dogs',
    originalTitle: 'No dogs',
    sizes: '100w',
    srcSet:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=400&h=400&mode=max 320w',
  },
];

export const adaptedImagesAndBlockPlaceholders = [
  {
    url,
    sizes: '100w',
    srcSet: `${url}?w=400&h=400&mode=max 320w,
        ${url}?w=800&h=800&mode=max 768w,
        ${url}?w=1024&h=1000&mode=max 1024w`,
    title: 'Two cats',
  },
  {
    renderItem: 'some function',
  },
];
