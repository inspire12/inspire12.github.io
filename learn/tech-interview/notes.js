(() => {
  const prefix = 'inspire12.tech-interview.v1/';
  const format = 'inspire12.tech-interview.notes';
  const questions = { main: '본질문', 'follow-1': '꼬리질문 1', 'follow-2': '꼬리질문 2' };
  const fields = ['answer', 'feedback'];
  const key = (topic, question, field) => prefix + [topic, question, field].join('/');
  const read = (topic, question, field) => localStorage.getItem(key(topic, question, field)) ?? '';
  const storageError = '브라우저에 저장할 수 없습니다. 탭을 닫기 전에 입력한 글을 복사해 두세요.';

  function openLinkedNote() {
    const note = document.getElementById(location.hash.slice(1));
    if (note?.matches('details[data-question]')) {
      note.open = true;
      note.scrollIntoView({ block: 'start' });
    }
  }

  function enableEditor(panel, topic) {
    const question = panel.dataset.question;
    const status = panel.querySelector('[role="status"]');
    const inputs = [...panel.querySelectorAll('textarea[data-field]')];
    const unsaved = new Set();
    function restore() {
      try {
        for (const input of inputs) {
          if (unsaved.has(input)) continue;
          const saved = read(topic, question, input.dataset.field);
          if (input.value !== saved) input.value = saved;
        }
        status.textContent = unsaved.size ? storageError : '';
      } catch {
        status.textContent = storageError;
      }
    }
    for (const input of inputs) {
      input.addEventListener('input', () => {
        try {
          const storageKey = key(topic, question, input.dataset.field);
          if (input.value) localStorage.setItem(storageKey, input.value);
          else localStorage.removeItem(storageKey);
          unsaved.delete(input);
          const message = unsaved.size ? storageError : '이 브라우저에 저장했습니다.';
          if (status.textContent !== message) status.textContent = message;
        } catch {
          unsaved.add(input);
          status.textContent = storageError;
        }
      });
    }
    window.addEventListener('storage', event => {
      if (event.key === null || fields.some(field => event.key === key(topic, question, field))) restore();
    });
    window.addEventListener('pageshow', restore);
    restore();
    panel.hidden = false;
  }

  function enableArchive(archive) {
    const topics = new Map([...document.querySelectorAll('.chapter-list a[data-topic]')].map(link => [
      link.dataset.topic, { title: link.querySelector('strong').textContent, url: link.href }
    ]));
    const count = archive.querySelector('[data-count]');
    const list = archive.querySelector('ul');
    const status = archive.querySelector('[role="status"]');
    const download = archive.querySelector('button');
    const upload = archive.querySelector('input[type=file]');

    function records() {
      const saved = [];
      for (const topic of topics.keys()) {
        for (const question of Object.keys(questions)) {
          const answer = read(topic, question, 'answer');
          const feedback = read(topic, question, 'feedback');
          if (answer || feedback) saved.push({ topic, question, answer, feedback });
        }
      }
      return saved;
    }

    function refresh() {
      try {
        const saved = records();
        list.replaceChildren();
        for (const row of saved) {
          const info = topics.get(row.topic);
          const link = document.createElement('a');
          link.href = info.url + '#note-' + row.question;
          link.textContent = info.title + ' · ' + questions[row.question];
          const state = [row.answer && '답변', row.feedback && '평가'].filter(Boolean).join(' · ');
          const li = document.createElement('li');
          li.append(link, document.createTextNode(' (' + state + ')'));
          list.append(li);
        }
        count.textContent = saved.length ? '기록한 질문 ' + saved.length + '개' : '아직 작성한 기록이 없습니다.';
        download.disabled = !saved.length;
      } catch {
        count.textContent = '브라우저 저장소를 읽을 수 없습니다.';
        download.disabled = true;
      }
    }

    download.addEventListener('click', () => {
      try {
        const backup = { format, version: 1, records: records() };
        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'tech-interview-notes-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.append(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } catch {
        status.textContent = '백업 파일을 만들 수 없습니다. 브라우저의 저장소 설정을 확인해 주세요.';
      }
    });

    function validBackup(data) {
      if (data?.format !== format || data.version !== 1 || !Array.isArray(data.records)) return false;
      const seen = new Set();
      return data.records.every(row => {
        if (!row || !topics.has(row.topic) || typeof row.question !== 'string' || !Object.hasOwn(questions, row.question) ||
            !fields.every(field => typeof row[field] === 'string')) return false;
        const id = row.topic + '/' + row.question;
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      });
    }

    upload.addEventListener('change', async () => {
      const file = upload.files[0];
      if (!file) return;
      upload.value = '';
      let backup;
      try {
        backup = JSON.parse(await file.text());
        if (!validBackup(backup)) throw new Error();
      } catch {
        status.textContent = '복원할 수 없습니다. 기술 면접 목차에서 내려받은 JSON 백업 파일을 선택해 주세요.';
        return;
      }
      let added = 0;
      let kept = 0;
      try {
        for (const row of backup.records) {
          for (const field of fields) {
            if (!row[field]) continue;
            if (read(row.topic, row.question, field)) { kept++; continue; }
            localStorage.setItem(key(row.topic, row.question, field), row[field]);
            added++;
          }
        }
        status.textContent = '복원한 칸 ' + added + '개 · 기존 기록을 유지한 칸 ' + kept + '개';
      } catch {
        status.textContent = '저장 공간을 확인해 주세요. 지금까지 복원한 칸은 ' + added + '개입니다. 같은 파일로 이어서 복원할 수 있습니다.';
      }
      refresh();
    });
    refresh();
    window.addEventListener('pageshow', refresh);
    window.addEventListener('storage', event => {
      if (event.key === null || event.key.startsWith(prefix)) refresh();
    });
    archive.hidden = false;
    if (location.hash === '#my-records') archive.scrollIntoView({ block: 'start' });
  }

  const article = document.querySelector('article[data-topic]');
  if (article) {
    for (const panel of article.querySelectorAll('details[data-question]')) enableEditor(panel, article.dataset.topic);
    openLinkedNote();
    window.addEventListener('hashchange', openLinkedNote);
  }
  const archive = document.querySelector('#my-records');
  if (archive) enableArchive(archive);
})();
