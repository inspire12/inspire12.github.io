const form = document.querySelector('#filters');
const groups = [...document.querySelectorAll('[data-team]')];
const items = [...document.querySelectorAll('.item')];
const org = form.elements.org;
const tag = form.elements.tag;
const featured = form.elements.featured;
const knownTags = new Set([...tag.options].map(option => option.value));
const legacyTags = new Set(items.flatMap(item => item.dataset.legacyTags.split('|')));

function refresh() {
  const query = new URLSearchParams(location.search);
  const legacyOrg = query.get('org') || '';
  const team = query.get('team') || (legacyOrg === 'monymony' ? legacyOrg : '');
  org.value = team ? 'team:' + team : legacyOrg;
  if (org.selectedIndex < 0) org.value = '';

  tag.querySelector('[data-legacy]')?.remove();
  const requestedTag = query.get('tag') || '';
  const usesLegacyTag = !knownTags.has(requestedTag) && legacyTags.has(requestedTag);
  if (usesLegacyTag) {
    const option = new Option(requestedTag, requestedTag);
    option.dataset.legacy = '';
    tag.add(option);
  }
  tag.value = knownTags.has(requestedTag) || usesLegacyTag ? requestedTag : '';

  featured.checked = query.get('featured') === '1';
  const selectedTeam = org.value.startsWith('team:') ? org.value.slice(5) : '';
  let total = 0;
  for (const group of groups) {
    let visible = 0;
    for (const item of group.querySelectorAll('.item')) {
      const matchesOrg = selectedTeam ? group.dataset.team === selectedTeam : !org.value || item.dataset.org === org.value;
      const tags = usesLegacyTag ? item.dataset.legacyTags : item.dataset.tags;
      const matchesTag = !tag.value || tags.split('|').includes(tag.value);
      item.hidden = !matchesOrg || !matchesTag || (featured.checked && item.dataset.featured !== 'true');
      if (!item.hidden) visible++;
    }
    group.hidden = visible === 0;
    total += visible;
  }
  document.querySelector('#count').textContent = total ? total + '개 프로젝트' : '선택한 조건에 맞는 프로젝트가 없습니다.';
}

form.addEventListener('change', () => {
  const url = new URL(location.href);
  url.search = '';
  const scope = org.value;
  if (scope.startsWith('team:')) url.searchParams.set('team', scope.slice(5));
  else if (scope) url.searchParams.set('org', scope);
  if (tag.value) url.searchParams.set('tag', tag.value);
  if (featured.checked) url.searchParams.set('featured', '1');
  history.pushState(null, '', url);
  refresh();
});
window.addEventListener('popstate', refresh);
form.hidden = false;
refresh();
