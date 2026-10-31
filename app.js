/**
 * app.js — SPA «Итоговый тест по вводному инструктажу по ГО и ЧС»
 * Vanilla JS ES6+, без фреймворков
 */

/* ════════════════════════════════════════════════════════════
   1. БАНК ВОПРОСОВ (20 вопросов)
   Источники: ФЗ № 68, ФЗ № 28, КоАП РФ, Постановления Правительства
   correctIndex — индекс правильного ответа (0-based)
════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    text: 'Каким Федеральным законом установлены права и обязанности граждан РФ в области защиты от чрезвычайных ситуаций?',
    options: [
      'ФЗ № 68 «О защите населения и территорий от ЧС природного и техногенного характера»',
      'ФЗ № 28 «О гражданской обороне»',
      'ФЗ № 69 «О пожарной безопасности»',
      'Трудовой кодекс РФ'
    ],
    correctIndex: 0
  },
  {
    text: 'Что из перечисленного относится к ОБЯЗАННОСТЯМ граждан в области защиты от ЧС?',
    options: [
      'Требовать от государства выплаты компенсаций',
      'Изучать основные способы защиты от ЧС и соблюдать меры безопасности',
      'Разрабатывать планы эвакуации на предприятии',
      'Обеспечивать себя и коллег средствами индивидуальной защиты'
    ],
    correctIndex: 1
  },
  {
    text: 'Как называется единый сигнал оповещения для привлечения внимания населения перед передачей речевой информации?',
    options: [
      '«Красная тревога»',
      '«Сирена»',
      '«Внимание всем!»',
      '«Воздушная тревога»'
    ],
    correctIndex: 2
  },
  {
    text: 'Что необходимо сделать работнику после звука сирен и получения текстового сообщения по системе оповещения?',
    options: [
      'Немедленно покинуть здание и бежать домой',
      'Продолжить работу, не обращая внимания',
      'Внимательно прослушать сообщение и выполнить указанные в нём действия',
      'Спрятаться под рабочий стол'
    ],
    correctIndex: 2
  },
  {
    text: 'Какое из перечисленных сооружений относится к защитным сооружениям гражданской обороны?',
    options: [
      'Офисное здание',
      'Убежище',
      'Складское помещение',
      'Автомобильная стоянка'
    ],
    correctIndex: 1
  },
  {
    text: 'Какой вид эвакуации проводится, если зона воздействия поражающих факторов ЧС ограничена пределами здания и прилегающей территории?',
    options: [
      'Региональная',
      'Местная',
      'Локальная',
      'Государственная'
    ],
    correctIndex: 2
  },
  {
    text: 'Какой статьей КоАП РФ предусмотрена ответственность за невыполнение требований и мероприятий в области гражданской обороны?',
    options: [
      'Статья 20.5',
      'Статья 20.6',
      'Статья 20.6.1',
      'Статья 20.7'
    ],
    correctIndex: 3
  },
  {
    text: 'Для чего предназначен противогаз в системе ГО?',
    options: [
      'Для защиты органов дыхания, глаз и лица от отравляющих и аварийно химически опасных веществ',
      'Для защиты от радиации в полном объеме',
      'Для тушения пожаров',
      'Для работы на высоте'
    ],
    correctIndex: 0
  },
  {
    text: 'Какое действие необходимо выполнить перед надеванием противогаза?',
    options: [
      'Открыть окно',
      'Закрыть глаза и задержать дыхание',
      'Сделать глубокий вдох',
      'Снять верхнюю одежду'
    ],
    correctIndex: 1
  },
  {
    text: 'Что нужно сделать при химической аварии (например, выбросе аммиака), находясь в помещении?',
    options: [
      'Открыть все окна и двери для проветривания',
      'Включить принудительную вентиляцию на полную мощность',
      'Загерметизировать помещение (закрыть окна, двери, отключить вентиляцию)',
      'Спуститься в подвал без средств защиты'
    ],
    correctIndex: 2
  },
  {
    text: 'Как необходимо передвигаться по территории, зараженной аварийно химически опасными веществами (АХОВ)?',
    options: [
      'Бегом, чтобы быстрее покинуть зону',
      'Быстро, но не бегом, не поднимая пыль и не касаясь окружающих предметов',
      'Медленно, ползком по земле',
      'На автомобиле с открытыми окнами'
    ],
    correctIndex: 1
  },
  {
    text: 'Какое из перечисленных событий относится к чрезвычайной ситуации ТЕХНОГЕННОГО характера?',
    options: [
      'Наводнение',
      'Лесной пожар из-за молнии',
      'Взрыв на химическом заводе',
      'Землетрясение'
    ],
    correctIndex: 2
  },
  {
    text: 'Как обозначаются защитные сооружения гражданской обороны (убежища и укрытия)?',
    options: [
      'Красными флагами',
      'Табличками белого цвета с черными надписями «УБЕЖИЩЕ» или «УКРЫТИЕ»',
      'Зелеными указателями',
      'Никак не обозначаются, это секретная информация'
    ],
    correctIndex: 1
  },
  {
    text: 'Разрешено ли использовать лифт для эвакуации из здания при чрезвычайной ситуации?',
    options: [
      'Да, если он исправен',
      'Да, если вы находитесь на верхнем этаже',
      'Нет, категорически запрещено',
      'Разрешено только с разрешения охраны'
    ],
    correctIndex: 2
  },
  {
    text: 'Что должен знать работник в области ГО и ЧС согласно трудовому договору?',
    options: [
      'Только номер телефона директора',
      'Способы оповещения, места хранения СИЗ и порядок действий при ЧС',
      'Только правила пожарной безопасности',
      'Только способы оказания первой помощи'
    ],
    correctIndex: 1
  },
  {
    text: 'К какому типу ЧС относится разлив нефтепродуктов в результате аварии на ТЭЦ?',
    options: [
      'Природная',
      'Биологическая',
      'Техногенная',
      'Космическая'
    ],
    correctIndex: 2
  },
  {
    text: 'Что означает сигнал ГО, передаваемый в зашифрованном виде (например, «ЮПИТЕР пароль ОВРАГ»)?',
    options: [
      'Общую воздушную тревогу для всех граждан',
      'Предупреждение о приближении урагана',
      'Команду для должностных лиц организации о выполнении конкретных мероприятий',
      'Начало учебной тревоги'
    ],
    correctIndex: 2
  },
  {
    text: 'Каким образом работодатель обеспечивает работников средствами индивидуальной защиты (СИЗ) в области ГО?',
    options: [
      'Работники покупают СИЗ самостоятельно',
      'СИЗ выдаются только руководителям',
      'СИЗ выдаются работодателем при приеме на работу (в зависимости от зон возможного заражения)',
      'СИЗ выдают только во время войны'
    ],
    correctIndex: 2
  },
  {
    text: 'Какие из перечисленных факторов относятся к социальным причинам возникновения ЧС на предприятии?',
    options: [
      'Короткое замыкание электропроводки',
      'Умышленный поджог или пронос опасных веществ работником',
      'Износ оборудования',
      'Ошибка в проектной документации'
    ],
    correctIndex: 1
  },
  {
    text: 'Какой главный признак правильного надевания противогаза?',
    options: [
      'Шлем-маска плотно прилегает к лицу, а стекла очков находятся напротив глаз',
      'Маска надета поверх головного убора',
      'Фильтрующая коробка находится сзади на шее',
      'Резиновые завязки завязаны на бант'
    ],
    correctIndex: 0
  }
];

/* ════════════════════════════════════════════════════════════
   2. КОНФИГУРАЦИЯ
════════════════════════════════════════════════════════════ */

/**
 * URL развёрнутого Google Apps Script Web App.
 * Замените на реальный URL после деплоя (см. README.md).
 */
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwDvPMIdFGF9Cm51KsQGFK_ZJnkKEv5WDKQ_b4rosjQjDG2HGXgGMEJ47-pBkyJm_yHyQ/exec'; // Сюда вставите новую ссылку

/** Порог прохождения: 85% = 17 правильных из 20 */
const PASS_THRESHOLD = 0.85;
const TOTAL_QUESTIONS = QUESTIONS.length; // 20

/* ════════════════════════════════════════════════════════════
   3. СОСТОЯНИЕ ПРИЛОЖЕНИЯ
════════════════════════════════════════════════════════════ */
const state = {
  currentScene: 1,
  consentGiven: false,
  userData: {
    fullName:     '',
    organization: '',
    position:     '',
    department:   '',
    birthDate:    '',
    hireDate:     ''
  },
  answers: [],
  currentQuestionIndex: 0
};

/* ════════════════════════════════════════════════════════════
   4. DOM-ССЫЛКИ
════════════════════════════════════════════════════════════ */
const sceneMap = {
  1: document.getElementById('scene-welcome'),
  2: document.getElementById('scene-consent'),
  3: document.getElementById('scene-form'),
  4: document.getElementById('scene-quiz'),
  5: document.getElementById('scene-result')
};

const btnStart       = document.getElementById('btn-start');
const btnConsentCont = document.getElementById('btn-consent-continue');
const btnFormSubmit  = document.getElementById('btn-form-submit');
const btnNext        = document.getElementById('btn-next');
const btnNextLabel   = document.getElementById('btn-next-label');
const btnRetry       = document.getElementById('btn-retry');

const consentCheckbox = document.getElementById('consent-checkbox');

const inputFullname   = document.getElementById('input-fullname');
const inputOrg        = document.getElementById('input-org');
const inputPosition   = document.getElementById('input-position');
const inputDepartment = document.getElementById('input-department');
const inputBirthdate  = document.getElementById('input-birthdate');
const inputHiredate   = document.getElementById('input-hiredate');

const quizCounter      = document.getElementById('quiz-counter');
const progressBarFill  = document.getElementById('progress-bar-fill');
const progressBarTrack = document.getElementById('progress-bar-track');
const questionCard     = document.getElementById('question-card');
const questionNumber   = document.getElementById('question-number');
const questionText     = document.getElementById('question-text');
const optionsList      = document.getElementById('options-list');

const resultIconWrap = document.getElementById('result-icon-wrap');
const resultTitle    = document.getElementById('result-title');
const resultText     = document.getElementById('result-text');
const scoreNumber    = document.getElementById('score-number');
const scoreRingFill  = document.getElementById('score-ring-fill');
const statCorrect    = document.getElementById('stat-correct');
const statPercent    = document.getElementById('stat-percent');
const statStatus     = document.getElementById('stat-status');
const submitStatus   = document.getElementById('submit-status');

/* ════════════════════════════════════════════════════════════
   5. УПРАВЛЕНИЕ СЦЕНАМИ
════════════════════════════════════════════════════════════ */
function showScene(n) {
  Object.entries(sceneMap).forEach(([idx, scene]) => {
    if (!scene) return;
    if (Number(idx) === n) {
      scene.classList.add('active');
      scene.removeAttribute('aria-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scene.classList.remove('active');
      scene.setAttribute('aria-hidden', 'true');
    }
  });
  state.currentScene = n;
}

/* ════════════════════════════════════════════════════════════
   6. СЦЕНА 2: СОГЛАСИЕ НА ОБРАБОТКУ ПДн
════════════════════════════════════════════════════════════ */
function updateConsentButton() {
  const checked = consentCheckbox.checked;
  state.consentGiven = checked;
  btnConsentCont.disabled = !checked;
  btnConsentCont.setAttribute('aria-disabled', String(!checked));
}
consentCheckbox.addEventListener('change', updateConsentButton);

/* ════════════════════════════════════════════════════════════
   7. СЦЕНА 3: ВАЛИДАЦИЯ ФОРМЫ
════════════════════════════════════════════════════════════ */
const formFields = [
  inputFullname, inputOrg, inputPosition,
  inputDepartment, inputBirthdate, inputHiredate
];

function validateForm() {
  const allFilled = formFields.every(f => f.value.trim() !== '');
  btnFormSubmit.disabled = !allFilled;
  btnFormSubmit.setAttribute('aria-disabled', String(!allFilled));
}

formFields.forEach(field => {
  field.addEventListener('input', validateForm);
  field.addEventListener('change', validateForm);
});

function collectFormData() {
  state.userData.fullName     = inputFullname.value.trim();
  state.userData.organization = inputOrg.value.trim();
  state.userData.position     = inputPosition.value.trim();
  state.userData.department   = inputDepartment.value.trim();
  state.userData.birthDate    = inputBirthdate.value;
  state.userData.hireDate     = inputHiredate.value;
}

/* ════════════════════════════════════════════════════════════
   8. СЦЕНА 4: ЛОГИКА ТЕСТА
════════════════════════════════════════════════════════════ */
function startQuiz() {
  state.answers = [];
  state.currentQuestionIndex = 0;
  renderQuestion(0);
}

function renderQuestion(index) {
  const q = QUESTIONS[index];
  const num = index + 1;

  quizCounter.textContent = `Вопрос ${num} из ${TOTAL_QUESTIONS}`;
  const pct = (index / TOTAL_QUESTIONS) * 100;
  progressBarFill.style.width = pct + '%';
  progressBarTrack.setAttribute('aria-valuenow', String(index));

  questionNumber.textContent = 'Вопрос ' + String(num).padStart(2, '0');
  questionText.textContent = q.text;

  optionsList.innerHTML = '';
  q.options.forEach((optText, optIdx) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    label.setAttribute('for', `opt-${index}-${optIdx}`);

    const radio = document.createElement('input');
    radio.type      = 'radio';
    radio.name      = `q${index}`;
    radio.id        = `opt-${index}-${optIdx}`;
    radio.value     = String(optIdx);
    radio.className = 'option-radio';
    if (state.answers[index] === optIdx) radio.checked = true;

    radio.addEventListener('change', () => onOptionSelect(index, optIdx));

    const marker = document.createElement('span');
    marker.className = 'option-marker';
    marker.setAttribute('aria-hidden', 'true');

    const textSpan = document.createElement('span');
    textSpan.className   = 'option-text';
    textSpan.textContent = optText;

    label.appendChild(radio);
    label.appendChild(marker);
    label.appendChild(textSpan);
    optionsList.appendChild(label);
  });

  updateNextButton(index);
  btnNextLabel.textContent = (index === TOTAL_QUESTIONS - 1) ? 'Завершить тест' : 'Далее';
}

function onOptionSelect(qIdx, optIdx) {
  state.answers[qIdx] = optIdx;
  updateNextButton(qIdx);
}

function updateNextButton(index) {
  const answered = state.answers[index] !== undefined;
  btnNext.disabled = !answered;
  btnNext.setAttribute('aria-disabled', String(!answered));
}

function goToNextQuestion() {
  const cur = state.currentQuestionIndex;

  if (cur < TOTAL_QUESTIONS - 1) {
    questionCard.classList.add('leaving');
    setTimeout(() => {
      questionCard.classList.remove('leaving');
      state.currentQuestionIndex = cur + 1;
      renderQuestion(state.currentQuestionIndex);
    }, 250);
  } else {
    showResults();
  }
}

/* ════════════════════════════════════════════════════════════
   9. СЦЕНА 5: РЕЗУЛЬТАТЫ
════════════════════════════════════════════════════════════ */
function calculateResult() {
  let correct = 0;
  QUESTIONS.forEach((q, idx) => {
    if (state.answers[idx] === q.correctIndex) correct++;
  });
  const percent = Math.round((correct / TOTAL_QUESTIONS) * 100);
  const passed  = (correct / TOTAL_QUESTIONS) >= PASS_THRESHOLD;
  return { correct, percent, passed };
}

function showResults() {
  const { correct, percent, passed } = calculateResult();

  showScene(5);

  resultIconWrap.textContent = passed ? '🎉' : '😔';

  resultTitle.className   = 'result-title ' + (passed ? 'success' : 'failure');
  resultTitle.textContent = passed
    ? 'Поздравляем! Тест сдан успешно.'
    : 'Тест не сдан.';

  resultText.textContent = passed
    ? 'Вы успешно прошли итоговый тест по ГО и ЧС. Ваши результаты сохранены в системе.'
    : `Вы ответили правильно на ${correct} из ${TOTAL_QUESTIONS} вопросов. ` +
      'Рекомендуем освежить знания по материалам вводного инструктажа и попробовать ещё раз. ' +
      'У вас обязательно получится!';

  scoreNumber.textContent = String(correct);
  statCorrect.textContent = `${correct} из ${TOTAL_QUESTIONS}`;
  statPercent.textContent = percent + '%';
  statStatus.textContent  = passed ? 'Сдал / Сдала' : 'Не сдан';
  statStatus.className    = 'stat-value stat-status ' + (passed ? 'success' : 'failure');

  const offset = 314 - (percent / 100) * 314;
  scoreRingFill.className = 'score-ring-fill ' + (passed ? 'success' : 'failure');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scoreRingFill.style.strokeDashoffset = String(offset);
    });
  });

  progressBarFill.style.width = '100%';
  progressBarTrack.setAttribute('aria-valuenow', String(TOTAL_QUESTIONS));

  submitStatus.textContent = '';
  submitStatus.className   = 'submit-status';

  const payload = {
    fullName:       state.userData.fullName,
    organization:   state.userData.organization,
    position:       state.userData.position,
    department:     state.userData.department,
    birthDate:      state.userData.birthDate,
    hireDate:       state.userData.hireDate,
    correctAnswers: correct,
    totalQuestions: TOTAL_QUESTIONS,
    percent:        percent,
    passed:         passed,
    timestamp:      new Date().toISOString()
  };

  sendResultsToGoogleSheets(payload);
}

/* ════════════════════════════════════════════════════════════
   10. ОТПРАВКА ДАННЫХ В GOOGLE SHEETS
════════════════════════════════════════════════════════════ */
async function sendResultsToGoogleSheets(payload) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_DEPLOYED_APPS_SCRIPT_URL') {
    console.warn('[Quiz] Google Apps Script URL не настроен. Данные не отправлены.');
    submitStatus.textContent = '⚠ URL Google Sheets не настроен (см. README.md)';
    submitStatus.className   = 'submit-status error';
    return;
  }

  submitStatus.textContent = '⏳ Сохранение результатов...';
  submitStatus.className   = 'submit-status sending';

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });
    console.log('[Quiz] Данные отправлены в Google Sheets:', payload);
    submitStatus.textContent = '✅ Результаты сохранены в системе';
    submitStatus.className   = 'submit-status sent';
  } catch (error) {
    console.error('[Quiz] Ошибка отправки данных:', error);
    submitStatus.textContent = '⚠ Не удалось сохранить результаты. Обратитесь к ответственному за ГО и ЧС.';
    submitStatus.className   = 'submit-status error';
  }
}

/* ════════════════════════════════════════════════════════════
   11. СБРОС И ПЕРЕЗАПУСК
════════════════════════════════════════════════════════════ */
function resetApp() {
  state.consentGiven         = false;
  state.userData             = { fullName: '', organization: '', position: '', department: '', birthDate: '', hireDate: '' };
  state.answers              = [];
  state.currentQuestionIndex = 0;

  [inputFullname, inputOrg, inputPosition, inputDepartment, inputBirthdate, inputHiredate]
    .forEach(f => { f.value = ''; });
  validateForm();

  consentCheckbox.checked = false;
  updateConsentButton();

  scoreRingFill.style.strokeDashoffset = '314';
  scoreRingFill.className = 'score-ring-fill';

  showScene(1);
}

/* ════════════════════════════════════════════════════════════
   12. ОБРАБОТЧИКИ СОБЫТИЙ
════════════════════════════════════════════════════════════ */
btnStart.addEventListener('click', () => showScene(2));

btnConsentCont.addEventListener('click', () => {
  if (state.consentGiven) showScene(3);
});

btnFormSubmit.addEventListener('click', () => {
  collectFormData();
  startQuiz();
  showScene(4);
});

btnNext.addEventListener('click', () => {
  if (!btnNext.disabled) goToNextQuestion();
});

btnRetry.addEventListener('click', resetApp);

document.getElementById('user-form').addEventListener('submit', e => e.preventDefault());

/* ════════════════════════════════════════════════════════════
   13. ИНИЦИАЛИЗАЦИЯ
════════════════════════════════════════════════════════════ */
function init() {
  showScene(1);
  updateConsentButton();
  validateForm();
  btnNext.disabled = true;
  btnNext.setAttribute('aria-disabled', 'true');
  console.log('[Quiz] Приложение инициализировано. Вопросов:', TOTAL_QUESTIONS);
}

document.addEventListener('DOMContentLoaded', init);