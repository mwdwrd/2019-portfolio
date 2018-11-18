// Removes Duplicates from Array
export function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

// Link Resolver for Prismic.io
export function linkResolver(doc) {
  if (doc.type === 'work') {
    return `/other/${doc.uid}`
  }
  return '/'
}

// Calculate Image Ratio
export function getImageRatio(width, height) {
  const diff = calcRatio(width, height)
  const ratio = width/diff + ':' + height/diff

  function calcRatio(a, b) {
    return (b == 0) ? a : calcRatio(b, a%b)
  }

  return ratio
}
