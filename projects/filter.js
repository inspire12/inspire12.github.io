const form = document.querySelector('#filters');
const items = [...document.querySelectorAll('.item')];
function refresh() {
  const query = new URLSearchParams(location.search);
  const org = form.elements.org;
  org.value = query.get('org') || '';
  if (org.selectedIndex < 0) org.value = '';
  const tag = form.elements.tag;
  tag.value = query.get('tag') || '';
  if (tag.selectedIndex < 0) tag.value = '';
  form.elements.featured.checked = query.get('featured') === '1';
  for (const item of items) {
    const matchesTag = !tag.value || item.dataset.tags.split('|').includes(tag.value);
    const matchesOrg = !org.value || item.dataset.org === org.value;
    item.hidden = !matchesOrg || !matchesTag || (form.elements.featured.checked && item.dataset.featured !== 'true');
  }
  const total = items.filter(item => !item.hidden).length;
  document.querySelector('#count').textContent = total ? total + '개 프로젝트' : '선택한 조건에 맞는 프로젝트가 없습니다.';
}
form.addEventListener('change', () => {
  const url = new URL(location.href);
  url.search = '';
  if (form.elements.org.value) url.searchParams.set('org', form.elements.org.value);
  if (form.elements.tag.value) url.searchParams.set('tag', form.elements.tag.value);
  if (form.elements.featured.checked) url.searchParams.set('featured', '1');
  history.pushState(null, '', url);
  refresh();
});
window.addEventListener('popstate', refresh);
form.hidden = false;
refresh();
