/*
Configuração e instruções do UserScript:
- O script verifica se está funcionando ao detectar o campo de texto ativo e, caso não o encontre, solicita que o usuário clique em algum.
- Para configurar, siga os passos:
    1. Configure o "// @match" com:
         - o endereço do sistema da Shoppe,
         - o endereço do seu servidor privado (ngrok),
         - e o endereço do appsheet.com (deixe o terceiro como está).
         OBS: Todos os endereços devem terminar com /*.
    2. Configure o "// @connect" com:
         - o hostname do seu servidor privado,
         - e o hostname do appsheet.com.
    3. Configure o AppSheet conforme as instruções (copie o fetch do inspetor e substitua na variável fetchString).
*/

// =====================
// CONFIGURAÇÃO INICIAL
// =====================

const fetchString = `
fetch("https://www.appsheet.com/api/template/319d5010-684a-4c17-a8e7-04ef3a91d6e3/table/BASE%20DE%20DADOS%20CHAPECO./row?tzOffset=180&settings=%7B%22_RowNumber%22%3A%220%22%2C%22_EMAIL%22%3A%22%22%2C%22_NAME%22%3A%22%22%2C%22_LOCATION%22%3A%22%22%2C%22Options%20Heading%22%3A%22%22%2C%22Option%201%22%3A%22%22%2C%22Option%202%22%3A%22%22%2C%22Country%20Option%22%3A%22%22%2C%22Language%20Option%22%3A%22%22%2C%22Option%205%22%3A%22%22%2C%22Option%206%22%3A%22%22%2C%22Option%207%22%3A%22%22%2C%22Option%208%22%3A%22%22%2C%22Option%209%22%3A%22%22%2C%22_THISUSER%22%3A%22onlyvalue%22%7D&apiLevel=2&isPreview=false&checkCache=true&locale=pt-BR&location=null%2C%20null&appTemplateVersion=1.000003&localVersion=1.000003&timestamp=2024-11-18T05%3A13%3A57.728Z&requestStartTime=2024-11-18T05%3A13%3A57.785Z&lastSyncTime=2024-11-18T05%3A10%3A59.8457703Z&appStartTime=2024-11-18T05%3A11%3A01.550Z&dataStamp=2024-11-18T05%3A13%3A57.729Z&clientId=5962a91d-ebaf-4a5a-a27b-afb2fdec75fb&build=aaaaaaaaaaaaaaaaaaaa-1731565100066-5dc7204854b&requestId=46987875&syncToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjMxOWQ1MDEwLTY4NGEtNGMxNy1hOGU3LTA0ZWYzYTkxZDZlMyIsImFwcFZlcnNpb24iOiIxLjAwMDAwMyIsInVzZXJJZCI6IjkwMjg1NDc5MSIsImlhdCI6MTczMTkwNjY1MSwiZXhwIjoxNzM5NjgyNjUxLCJpc3MiOiJodHRwczovL3d3dy5hcHBzaGVldC5jb20iLCJhdWQiOiJodHRwczovL3d3dy5hcHBzaGVldC5jb20ifQ.P83hTQfNNRT1Zzj7P3VsHup68-pBvTAguNHLL6TuIOI", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "_ga=GA1.1.349634858.1731906640; .AspNetCore.Antiforgery.VyLW6ORzMgk=CfDJ8J23KgW7Re9KqtLmKxSmQOxzk1lXM4NKaSxhY0ybkrWftQyd-02c07uWRQzd0sTUSPSjdI8Minn67u4nCH4v05aOEBqzqJr-9QUjqojg-BW4cZAqX0n7hLWsQctKqTIyKY6NeOIGewi39k4HijsDasI; loginCsrfToken=5iHhzT2GBmZpwO8P6MFGcw; .JEENEEATH=3D91007059F8041040C46F8BC16C97DBB8F945A33D87E590017BC7A1096823F49E16266822232610D566383D252A1D7EEA4D182733284158FD2428789C61BED4EB9A969CA1F71A140562420200FCC99D115A60364DEDB5E947A08E3839F779014EDC4533A322DF5C3B812E1BDC07D357A82696BE62E2433966ABB30BFDF49B2EF10E3B2E1817989B9FADFA299B5E0B2211709C57D81BD65AF5C7D7A2BE564682590E18322C07B71F2EDD1362060A64DC9AF06ECBB5E145FCB4B68C40A51B397CC224931AC18A66F530E693FF45951540B256E216A39D967A22EAF95B72FAB485EAE6F95FE7D7C4C2C9D6E82D61C033FBC34687A19216B092E29146F5B6A5B9BE7E7A912C5AC42736D89049170C91B5939465711BB8DA184FEB67F037BC31CFCC83D524DF9DBE97474A5EBE218C271EDA; JeeneeUserInfo={%22UserInfo%22:{%22Id%22:902854791%2C%22Name%22:%22%22%2C%22AuthUserId%22:%22104217449180439189709%22%2C%22AuthUserEmail%22:%22franthescoli.ramos@shopeemobile-external.com%22%2C%22AuthSource%22:%22google%22%2C%22UserRole%22:%22User%22}%2C%22Metadata%22:{%22Path%22:%22/%22%2C%22Domain%22:%22appsheet.com%22%2C%22Expires%22:%222024-12-16T05:10:52.364Z%22%2C%22Secure%22:true%2C%22SupportAccess%22:false}}; _ga_6EP004WL14=GS1.1.1731906639.1.1.1731906801.0.0.0",
    "Referer": "https://www.appsheet.com/start/319d5010-684a-4c17-a8e7-04ef3a91d6e3?platform=desktop",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"row\":[\"1301\",\"TESTE1\",\"11/18/2024\"],\"pii\":[false,false,false]}",
  "method": "POST"
});
`;

let fetchConfig = {};

// ------------------------------
// PARSING DA STRING DE FETCH
// ------------------------------
function loadDataFromString(fetchString) {
  let url = fetchString.match(/fetch\("(.+)", \{/)?.[1];
  if (!url) return;
  
  url = new URL(url);
  let match = url.pathname.match(/\/template\/(.+?)\/table\/(.+?)\//);
  if (!match) return;
  
  const [templateId, tableId] = match.slice(1);
  if (!templateId || !tableId) return;
  
  fetchConfig.templateId = templateId;
  fetchConfig.tableId = tableId;
  
  const params = new URLSearchParams(url.search.replace(/^\?/, ''));
  const paramsObject = Object.fromEntries(params.entries());
  fetchConfig.clientId = paramsObject.clientId;
  fetchConfig.buildId = paramsObject.build;
  fetchConfig.params = { ...paramsObject, ...fetchConfig.params };
  
  if (!GM_getValue('AppSheetCookie')) {
    const cookieString = fetchString.match(/"cookie": "(.+?)",/)?.[1];
    if (cookieString) {
      console.log('Cookie inicial definido pela string do fetch.');
      GM_setValue('AppSheetCookie', cookieString);
    }
  }
  console.log('Dados encontrados na string do fetch:', fetchConfig);
}

if (fetchString) {
  try {
    loadDataFromString(fetchString);
  } catch (error) {
    console.error('Failed to parse fetch string', error);
  }
}

// =====================
// TRUSTED TYPES & LOGGING
// =====================

const overwrite_default = false; // Caso já exista uma política default, não sobrescreva
const prefix = GM_info.script.name;
const passThroughFunc = (string, sink) => string;
const TTPName = "passthrough";
let TTP_default, TTP = { createHTML: passThroughFunc, createScript: passThroughFunc, createScriptURL: passThroughFunc };
let needsTrustedHTML = false;

function initializeTrustedTypes() {
  try {
    if (typeof window.isSecureContext !== 'undefined' && window.isSecureContext) {
      if (window.trustedTypes && window.trustedTypes.createPolicy) {
        needsTrustedHTML = true;
        if (trustedTypes.defaultPolicy) {
          console.log("TT Default Policy exists");
          TTP = overwrite_default
            ? window.trustedTypes.createPolicy("default", TTP)
            : window.trustedTypes.createPolicy(TTPName, TTP);
          TTP_default = trustedTypes.defaultPolicy;
          console.log("Created custom passthrough policy, use Policy '" + TTPName + "':", TTP);
        } else {
          TTP_default = TTP = window.trustedTypes.createPolicy("default", TTP);
        }
        console.log("Trusted-Type Policies: TTP:", TTP, "TTP_default:", TTP_default);
      }
    }
  } catch (e) {
    console.log(e);
  }
}
initializeTrustedTypes();

const logsEnabled = false;
function log(...args) {
  if (!logsEnabled) return;
  if (prefix) args = [prefix + ":", ...args];
  console.log(...args);
}

// =====================
// UTILITÁRIOS
// =====================

const getMatchUrl = (index) => GM_info.script.matches[index].replace(/\/?\*$/, '');
const SPX_SITE_URL = getMatchUrl(0);
const APPSHEET_URL = getMatchUrl(1);

function randomNumericId(length) {
  return Math.floor(Math.random() * 10 ** length)
    .toString()
    .padStart(length, '0');
}

function currentDateString() {
  const pad = n => n.toString().padStart(2, '0');
  const date = new Date();
  return `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`;
}

// ===========================================
// FUNÇÃO PARA CRIAR UMA LINHA NO AppSheet
// ===========================================

async function createRow(codeString, dateString = currentDateString(), lineNumber = '0') {
  const { templateId, tableId, clientId, buildId } = fetchConfig;
  const baseUrl = 'https://www.appsheet.com';
  const apiBaseUrl = baseUrl + '/api';
  const requestUrl = `${apiBaseUrl}/template/${templateId}/table/${tableId}/row`;
  const currentISO = new Date().toISOString();

  const params = {
    tzOffset: '180',
    settings: JSON.stringify({
      _RowNumber: '0',
      _EMAIL: '',
      _NAME: '',
      _LOCATION: '',
      'Options Heading': '',
      'Option 1': '',
      'Option 2': '',
      'Country Option': '',
      'Language Option': '',
      'Option 5': '',
      'Option 6': '',
      'Option 7': '',
      'Option 8': '',
      'Option 9': '',
      _THISUSER: 'onlyvalue'
    }),
    apiLevel: '2',
    isPreview: 'false',
    checkCache: 'true',
    locale: 'pt-BR',
    location: 'null, null',
    appTemplateVersion: '1.000010',
    localVersion: '1.000010',
    ...fetchConfig.params,
    timestamp: currentISO,
    requestStartTime: currentISO,
    lastSyncTime: currentISO,
    appStartTime: currentISO,
    dataStamp: currentISO,
    clientId: clientId,
    build: buildId,
    requestId: randomNumericId(9)
  };

  const headers = {
    accept: '*/*',
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/json",
    pragma: "no-cache",
    priority: "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    Referer: `${baseUrl}/start/${templateId}?newUser=true&onboarding=true&platform=desktop`,
    "Referrer-Policy": "strict-origin-when-cross-origin",
    cookie: cookie
  };

  const url = requestUrl + '?' + new URLSearchParams(params);
  const body = JSON.stringify({
    row: [lineNumber, codeString, dateString],
    pii: [false, false, false]
  });

  return new Promise((resolve, reject) => {
    console.log('Realizando requisição HTTP:', { url, headers, body, cookie });
    GM_xmlhttpRequest({
      method: 'POST',
      url: url,
      headers: headers,
      data: body,
      cookie: cookie,
      onload: resolve,
      onerror: reject
    });
  });
}

// =====================
// ANIMAÇÃO & ALERTAS
// =====================

const animationDurationMs = 300;
const animate = (...items) => items.map(item => item + ' var(--animation-duration) var(--animation-timing)').join(', ');
const nextTick = (callback) => requestAnimationFrame(() => requestAnimationFrame(callback));

const colors = {
  red: 'rgb(200, 50, 50)',
  green: 'rgb(50, 200, 160)',
  blue: 'rgb(50, 160, 230)',
  yellow: 'rgb(230, 160, 40)',
  white: 'rgb(250, 252, 255)',
  black: 'rgb(10, 12, 15)'
};

function addStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = /*css*/ `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    .spx-userscript-alert, .spx-userscript-alert * {
      font-family: 'Open Sans', sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
    }

    .spx-userscript-alert {
      --animation-duration: ${animationDurationMs}ms;
      --animation-timing: ease-in-out;
      position: fixed;
      right: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 30px;
      padding: 30px;
      min-width: 300px;
      max-width: 500px;
      background: black;
      border-radius: 12px;
      overflow: hidden;
      transition: ${animate('margin-right', 'transform', 'opacity')};
      z-index: 1000000;
    }

    .spx-userscript-alert:before, .spx-userscript-alert:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      pointer-events: none;
    }

    .spx-userscript-alert:before {
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, var(--color), transparent);
      opacity: 0.2;
    }

    .spx-userscript-alert:after {
      width: 100%;
      height: 3px;
      background: var(--color);
      border-radius: 1.5px;
      transition: width var(--duration) linear;
    }

    .spx-userscript-hidden {
      margin-right: 0;
      transform: translateX(100%) scale(0.75);
      opacity: 0;
    }

    .spx-userscript-hidden:after, .spx-userscript-stay:after {
      width: 0;
    }

    .spx-userscript-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 20px;
      font-weight: 600;
      color: white;
      z-index: 2;
    }

    .spx-userscript-title svg {
      width: 24px;
      height: 24px;
    }

    .spx-userscript-title svg, .spx-userscript-title svg * {
      color: var(--color);
    }

    .spx-userscript-message, .spx-userscript-message * {
      font-size: 16px;
      font-weight: 400;
      color: white;
      z-index: 2;
    }

    .spx-userscript-message b {
      font-weight: 600;
    }

    .spx-userscript-message a, .spx-userscript-message a * {
      color: ${colors.blue};
      text-decoration: underline;
    }

    .spx-userscript-buttons {
      display: flex;
      justify-content: end;
      width: 100%;
      margin-top: 10px;
      gap: 20px;
    }

    .spx-userscript-buttons button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      height: 45px;
      font-size: 14px;
      font-weight: 600;
      color: var(--fg-color);
      background: var(--bg-color);
      border-radius: 4px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(styleElement);
}
addStyles();

const alertTypes = {
  success: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
    color: colors.green
  },
  error: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
    color: colors.red
  },
  warning: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
    color: colors.yellow
  },
  info: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    color: colors.white
  },
  prompt: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>',
    color: colors.blue
  }
};

function sanitize(string) {
  const element = document.createElement('div');
  element.textContent = string;
  return element.innerHTML;
}

let lastAlertElement = null;

function closeAlert(alertElement) {
  alertElement.classList.add('spx-userscript-hidden');
  setTimeout(() => nextTick(() => alertElement.remove()), animationDurationMs);
}

function parseMarkdown(string) {
  return string
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
}

function showAlert({ type = '', title = '', message = '', buttons = [], durationMs = 5000 }) {
  if (lastAlertElement) closeAlert(lastAlertElement);
  const { icon, color } = alertTypes[type];
  const alertElement = document.createElement('div');
  alertElement.className = 'spx-userscript-alert spx-userscript-hidden';
  alertElement.style.setProperty('--color', color);

  const stay = durationMs === Infinity;
  if (stay) {
    alertElement.classList.add('spx-userscript-stay');
  } else {
    alertElement.style.setProperty('--duration', durationMs + 'ms');
  }

  const hasButtons = buttons && buttons.length;
  alertElement.innerHTML = TTP.createHTML(/*html*/ `
    <div class="spx-userscript-title">
      ${icon + sanitize(title)}
    </div>
    ${message ? /*html*/ `
    <div class="spx-userscript-message">
      ${parseMarkdown(sanitize(message))}
    </div>
    ` : ''}
    ${hasButtons ? /*html*/ `
    <div class="spx-userscript-buttons">
      ${buttons.map(({ text, bgColor, fgColor }) => /*html*/ `
        <button style="--bg-color: ${bgColor}; --fg-color: ${fgColor}">${sanitize(text)}</button>
      `).join('')}
    </div>
    ` : ''}
  `);
  document.body.appendChild(alertElement);

  if (hasButtons) {
    const buttonElements = Array.from(alertElement.querySelectorAll('button'));
    buttonElements.forEach((buttonElement, index) => {
      const { onClick } = buttons[index];
      buttonElement.addEventListener('click', onClick, true);
    });
  }

  nextTick(() => alertElement.classList.remove('spx-userscript-hidden'));
  lastAlertElement = alertElement;
  if (!stay) {
    setTimeout(() => closeAlert(alertElement), durationMs);
  }
  return alertElement;
}

unsafeWindow.showAlert = showAlert;

// =====================
// MANIPULAÇÃO DE INPUTS
// =====================

const outlineColor = colors.blue;
let inputElement = null;

function addInputHighlight(color = outlineColor) {
  inputElement.style.outline = '2px solid ' + color;
  inputElement.style.outlineOffset = '-2px';
}

function removeInputHighlight() {
  inputElement.removeAttribute('style');
}

let lastBlinkTimeout;
function blinkInputHighlight(blinkColor = colors.green, durationMs = 200) {
  addInputHighlight(blinkColor);
  clearTimeout(lastBlinkTimeout);
  lastBlinkTimeout = setTimeout(() => addInputHighlight(outlineColor), durationMs);
}

function addInputListener() {
  inputElement.addEventListener('keydown', inputListenerCallback, true);
  inputElement.addEventListener('keyup', inputListenerCallback, true);
}

function removeInputListener() {
  inputElement.removeEventListener('keydown', inputListenerCallback, true);
  inputElement.removeEventListener('keyup', inputListenerCallback, true);
}

function isTextInput(element) {
  return element.matches('input, textarea');
}

function setInputElement(element) {
  if (inputElement === element) {
    console.log('Campo de texto já definido');
    return;
  }
  inputElement = element;
  addInputHighlight();
  addInputListener();
}

function findInputElement({ useActiveElement = true } = {}) {
  if (!fetchConfig.clientId) {
    return showAlert({
      type: 'warning',
      title: 'Ação necessária',
      message: 'O sistema não está totalmente configurado.\nComunique seu superior para configurar o [**AppSheet**](https://www.appsheet.com/).',
      durationMs: Infinity
    });
  }
  const activeElement = document.activeElement;
  if (useActiveElement && activeElement && isTextInput(activeElement)) {
    return setInputElement(activeElement);
  }
  showAlert({
    type: 'prompt',
    title: 'Ação necessária',
    message: 'Clique no campo de texto para iniciar a execução do script.',
    durationMs: Infinity
  });
  const onFocusCallback = ({ target }) => {
    if (!isTextInput(target)) return;
    setInputElement(target);
    document.removeEventListener('click', onFocusCallback, true);
    document.removeEventListener('focusin', onFocusCallback, true);
  };
  document.addEventListener('click', onFocusCallback, true);
  document.addEventListener('focusin', onFocusCallback, true);
}

function removeInputElement({ findAnother = true } = {}) {
  if (!inputElement) return;
  removeInputHighlight();
  removeInputListener();
  inputElement = null;
  if (findAnother) findInputElement({ useActiveElement: false });
}

// ================================
// FUNÇÕES PARA SALVAR CÓDIGOS
// ================================

const codes = new Set();

async function inputListenerCallback(event) {
  const brCode = event.target.value.trim().toUpperCase();
  const isValid = brCode.startsWith('BR') && brCode.length === 15;
  if (!isValid || codes.has(brCode)) return;
  codes.add(brCode);
  blinkInputHighlight();
  await saveBrCode(brCode);
}

async function saveIntoAppSheet(brCode) {
  try {
    const response = await createRow(brCode);
    const json = JSON.parse(response.responseText);
    if (json.Success) {
      showAlert({
        type: 'success',
        title: 'Código BR salvo',
        message: `O código "**${brCode}**" foi enviado para a planilha de Volumosos com sucesso.`,
        durationMs: 4000
      });
    } else {
      console.error(json);
      throw new Error('Erro ao salvar o código BR');
    }
  } catch (error) {
    console.error(error);
    showAlert({
      type: 'error',
      title: 'Erro ao salvar o código BR',
      message:
        'Talvez o cookie tenha expirado?\nAcesse o [**AppSheet**](https://www.appsheet.com/) para obter um novo cookie.'
    });
    addSpxFocusListeners();
  }
}

function isAppSheetEnabled() {
  return localStorage.getItem('appsheetEnabled') === 'true';
}

async function sendToLitte(brCode) {
  const url = `https://litte.com.br/api/store-volumosos?brCode=${brCode}`;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  const body = JSON.stringify({ code: brCode });
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: "PUT",
      url,
      headers,
      data: body,
      onload: (response) => {
        console.log("Resposta do Litte API:", response);
        const status = response.status === 200 ? "ok" : "error";
        resolve({ status });
      },
      onerror: (error) => {
        console.error("Erro ao enviar para Litte API:", error);
        resolve({ status: "error" });
      }
    });
  });
}

async function saveBrCode(brCode) {
  if (!isAppSheetEnabled()) {
    console.log("Envio para o AppSheet está desativado.");
    return;
  }
  showAlert({ type: "info", title: "Salvando..." });
  try {
    await saveIntoAppSheet(brCode);
    const litteResponse = await sendToLitte(brCode);
    if (litteResponse.status === "ok") {
      showAlert({
        type: "success",
        title: "Código BR salvo",
        message: `O código **${brCode}** foi enviado para o Litte API com sucesso.`,
        durationMs: 4000
      });
    } else {
      throw new Error("Erro ao enviar para o Litte API");
    }
  } catch (error) {
    console.error(error);
    showAlert({
      type: "error",
      title: "Erro ao salvar o código BR",
      message: "Ocorreu um erro ao salvar o código no AppSheet ou no Litte API. Verifique os logs para mais detalhes."
    });
  }
}

// ================================
// BOTÃO DE SWITCH (ATIVA/DESATIVA AppSheet)
// ================================

let switchButtonElement;
function createSwitchButton() {
  const switchContainer = document.createElement('div');
  switchContainer.style.position = 'fixed';
  switchContainer.style.bottom = '20px';
  switchContainer.style.right = '20px';
  switchContainer.style.zIndex = '10000';
  switchContainer.style.display = 'flex';
  switchContainer.style.alignItems = 'center';
  switchContainer.style.gap = '10px';
  switchContainer.style.padding = '10px 20px';
  switchContainer.style.borderRadius = '25px';
  switchContainer.style.background = '#fff';
  switchContainer.style.boxShadow = 'rgb(0, 0, 0, 0.6) 0px 5px 10px';

  const label = document.createElement('span');
  label.textContent = 'Bipando Volumosos?';
  label.style.fontSize = '14px';
  label.style.color = '#000';

  const switchInput = document.createElement('input');
  switchInput.type = 'checkbox';
  switchInput.id = 'appsheet-switch';
  switchInput.style.width = '40px';
  switchInput.style.height = '20px';
  switchInput.style.cursor = 'pointer';

  const isEnabled = localStorage.getItem('appsheetEnabled') === 'true';
  switchInput.checked = isEnabled;
  switchInput.addEventListener('change', () => {
    localStorage.setItem('appsheetEnabled', switchInput.checked.toString());
  });

  switchContainer.appendChild(label);
  switchContainer.appendChild(switchInput);
  document.body.appendChild(switchContainer);
  switchButtonElement = switchContainer;
}

function removeSwitchButton() {
  if (switchButtonElement) {
    switchButtonElement.remove();
  }
}

function checkSwitchButton() {
  const matches = location.href.includes('generalReceiveTaskOps/singleReceiveNew');
  console.log({ matches });
  if (matches) {
    createSwitchButton();
  } else {
    removeSwitchButton();
  }
}

// ================================
// GERENCIAMENTO DE COOKIE
// ================================

let cookie;

function removeCookie() {
  const confirmed = confirm('Deseja remover o cookie salvo?');
  if (!confirmed) return;
  GM_setValue('AppSheetCookie', '');
  cookie = null;
  removeInputElement({ findAnother: false });
  showAlert({
    type: 'warning',
    title: 'Cookie removido',
    message:
      'O cookie foi removido do armazenamento local.\nAcesse o site do [**AppSheet**](https://www.appsheet.com/) para obter um novo cookie.'
  });
  addSpxFocusListeners();
}

function setCookie() {
  if (!document.cookie) return console.error('Cookie não encontrado');
  const currentCookie = GM_getValue('AppSheetCookie');
  if (currentCookie === document.cookie) return console.log('Cookie já salvo');
  GM_setValue('AppSheetCookie', document.cookie);
  showAlert({
    type: 'success',
    title: 'Cookie salvo',
    message: 'O cookie atual foi salvo no armazenamento local.',
    buttons: [{
      text: 'Voltar',
      bgColor: colors.white,
      fgColor: colors.black,
      onClick: () => window.close()
    }],
    durationMs: 6000
  });
}

function spxGainedFocus(event) {
  if (cookie) return removeSpxFocusListeners();
  if (!isFocused(event)) return;
  cookie = GM_getValue('AppSheetCookie');
  if (cookie) {
    showAlert({
      type: 'success',
      title: 'Cookie encontrado',
      message: 'O cookie foi recebido com sucesso.',
      durationMs: 2000
    });
    removeSpxFocusListeners();
  }
}

function addSpxFocusListeners() {
  window.addEventListener('focus', spxGainedFocus, true);
  document.addEventListener('visibilitychange', spxGainedFocus, true);
}

function removeSpxFocusListeners() {
  window.removeEventListener('focus', spxGainedFocus, true);
  document.removeEventListener('visibilitychange', spxGainedFocus, true);
}

function isFocused(event) {
  return event.type === 'focus' || document.visibilityState === 'visible';
}

function appSheetGainedFocus(event) {
  if (isFocused(event)) setCookie();
}

function addAppSheetFocusListeners() {
  window.addEventListener('focus', appSheetGainedFocus, true);
  document.addEventListener('visibilitychange', appSheetGainedFocus, true);
}

function checkCookie() {
  cookie = GM_getValue('AppSheetCookie');
  if (!cookie) {
    showAlert({
      type: 'warning',
      title: 'Cookie não encontrado',
      message: 'Acesse o site do [**AppSheet**](https://www.appsheet.com/) para obter um novo cookie.',
      durationMs: Infinity
    });
    addSpxFocusListeners();
  }
}

// ================================
// ATALHOS DE TECLADO
// ================================

const actionsArray = [{
  keys: ['Control', 'Shift', 'Digit1'],
  callback: () => removeInputElement()
}, {
  keys: ['Control', 'Shift', 'Digit2'],
  callback: () => removeCookie()
}];

function setupKeyboardActions() {
  document.addEventListener('keydown', (event) => {
    let pressedKeys = new Set();
    if (event.ctrlKey) pressedKeys.add('Control');
    if (event.shiftKey) pressedKeys.add('Shift');
    if (event.altKey) pressedKeys.add('Alt');
    if (event.metaKey) pressedKeys.add('Meta');
    pressedKeys.add(event.key);
    pressedKeys.add(event.code);
    pressedKeys = Array.from(pressedKeys);
    const hasAll = (array, items) => items.every(item => array.includes(item));
    actionsArray.forEach(({ keys, callback }) => {
      if (hasAll(pressedKeys, keys)) callback();
    });
  }, true);
}

// ================================
// FUNÇÃO PRINCIPAL & TRACKING
// ================================

function trackActiveInput() {
  document.addEventListener('focusin', (event) => {
    const target = event.target;
    if (isTextInput(target)) {
      setInputElement(target);
    }
  });
}

function main() {
  setupKeyboardActions();
  const SPX_HOST = "spx.shopee.com.br"; // Domínio do primeiro @match
  const currentHost = location.host;
  if (currentHost === SPX_HOST) {
    console.log("Executando rastreamento de campos no SPX site.");
    trackActiveInput();
    checkCookie();
  } else if (currentHost.includes("appsheet")) {
    setCookie();
    addAppSheetFocusListeners();
  } else {
    checkCookie();
  }
  checkSwitchButton();
}

document.addEventListener('DOMContentLoaded', () => main());
window.addEventListener('popstate', () => {
  window.dispatchEvent(new Event('urlChange'));
});
window.addEventListener('urlChange', () => checkSwitchButton());
