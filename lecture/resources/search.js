const search = document.querySelector('#resource-search');
const sections = [...document.querySelectorAll('#catalog section')];
const contents = [...document.querySelectorAll('.contents a')];
const count = document.querySelector('#result-count');

function normalize(value) {
  return value.normalize('NFKC').toLowerCase().trim();
}

const resources = [...document.querySelectorAll('.resource-list > li')].map(item => {
  const headings = sections.filter(section => section.contains(item))
    .map(section => document.getElementById(section.getAttribute('aria-labelledby')).textContent);
  return { item, text: normalize([...headings, item.textContent].join(' ')) };
});

function filterResources() {
  const words = normalize(search.value).split(/\s+/).filter(Boolean);
  let visible = 0;
  for (const { item, text } of resources) {
    item.hidden = !words.every(word => text.includes(word));
    if (!item.hidden) visible++;
  }
  for (const section of sections) {
    section.hidden = !section.querySelector('.resource-list > li:not([hidden])');
  }
  for (const link of contents) {
    link.closest('li').hidden = document.getElementById(link.hash.slice(1)).hidden;
  }
  count.textContent = words.length ? `검색 결과 ${visible}개 / 전체 ${resources.length}개` : `전체 자료 ${resources.length}개`;
  document.querySelector('#empty').hidden = visible > 0;
}

search.addEventListener('input', filterResources);
document.querySelector('#clear-search').addEventListener('click', () => {
  search.value = '';
  filterResources();
  search.focus();
});
filterResources();
document.querySelector('#search-box').hidden = false;
