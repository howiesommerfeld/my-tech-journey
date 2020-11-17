export function seo(data = {}) {
  data.title = data.title || 'From App Developer Graduate to Startup Founder; This Is My Tech Journey';
  data.metaDescription = data.metaDescription || "This is the documentation of my professional journey to date as a technical starup founder. It aims to serve as a portfolio of my career thus, a guide for aspiring entrepreneurs and a place for my learnings and experiences to live. ";

  document.title = data.title;
  document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function mapArrayIntoChunksOfLen(arr, len) {
  var chunks = [], i = 0, n = arr.length;
  while (i < n) {
      chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}