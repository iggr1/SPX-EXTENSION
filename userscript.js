
/*
______________________________________________________________________________

- Como saber se o script está funcionando?
R:
Após configurar o UserScript e abrir o sistema da Shoppe:
O script irá tentar encontrar automaticamente o campo de texto ativo.
Caso o script não encontre o campo, ele irá pedir para o usuário clicar em um.

- Passos para configurar:

1. Configurar o "// @match" do tampermonkey:
    - o primeiro match sendo o endereço do sistema da shoppe
    - o segundo match sendo o endereço do seu servidor privado (ngrok)
    - o terceiro pode deixar como está, pois é o endereço do appsheet.com
    OBS: Todos os endereços devem terminar com /*

2. Configurar o "// @connect" do tampermonkey:
    - o primeiro connect sendo o hostname do seu servidor privado, exemplos:
        - Se o seu servidor privado fosse https://google.com/* então o hostname seria google.com,
        - Se o seu servidor privado fosse https://abc.ngrok-free.app/* o hostname seria abc.ngrok-free.app
    - o segundo pode deixar como está.

3. Configurar o appsheet:
    - abrir o site do appsheet dentro da planilha desejada
    - abrir o inspetor, ir para a aba "network", adicionar o filtro "row" e deixar o inspetor aberto
    - na interface do site: clicar nos botões e preencher os campos para criar um novo item na planilha
    - voltar para a aba network e observar o último item "row" que irá aparecer na lista de requisições
    - esperar a requisição ser concluída (esperar sair de "pending") e clicar com o botão direito do mouse nela
    - escolher a opção "copy as fetch (Node.js)" no menu, isso irá copiar os dados para a área de transferencia
    - abrir este userscript e colar o resultado dentro da string "fetchString" abaixo \/ dentro das áspas.
*/

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

function loadDataFromString(fetchString) {
    let url = fetchString.match(/fetch\("(.+)", \{/)?.[1];

    if (!url) return;

    url = new URL(url);

    let match = url.pathname.match(/\/template\/(.+?)\/table\/(.+?)\//);

    if (!match) return;

    const [ templateId, tableId ] = match.slice(1);

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
    } catch(error) {
        console.error('Failed to parse fetch string', error);
    }
}

// https://greasyfork.org/en/scripts/433051-trusted-types-helper
const overwrite_default = false; // If a default policy already exists, it might be best not to overwrite it, but to try and set a custom policy and use it to manually generate trusted types. Try at your own risk
const prefix = GM_info.script.name;
var passThroughFunc = function(string, sink){
	return string; // Anything passing through this function will be returned without change
}
var TTPName = "passthrough";
var TTP_default, TTP = {createHTML: passThroughFunc, createScript: passThroughFunc, createScriptURL: passThroughFunc}; // We can use TTP.createHTML for all our assignments even if we don't need or even have Trusted Types; this should make fallbacks and polyfills easy
var needsTrustedHTML = false;
function doit(){
	try{
		if(typeof window.isSecureContext !== 'undefined' && window.isSecureContext){
			if (window.trustedTypes && window.trustedTypes.createPolicy){
				needsTrustedHTML = true;
				if(trustedTypes.defaultPolicy){
					log("TT Default Policy exists");
					if(overwrite_default)
						TTP = window.trustedTypes.createPolicy("default", TTP);
					else
						TTP = window.trustedTypes.createPolicy(TTPName, TTP); // Is the default policy permissive enough? If it already exists, best not to overwrite it
					TTP_default = trustedTypes.defaultPolicy;

					log("Created custom passthrough policy, in case the default policy is too restrictive: Use Policy '" + TTPName + "' in var 'TTP':", TTP);
				}
				else{
					TTP_default = TTP = window.trustedTypes.createPolicy("default", TTP);
				}
				log("Trusted-Type Policies: TTP:", TTP, "TTP_default:", TTP_default);
			}
		}
	}catch(e){
		log(e);
	}
}

const logsEnabled = false;

function log(...args){
    if(!logsEnabled) return;
	if("undefined" != typeof(prefix) && !!prefix)
		args = [prefix + ":", ...args];
	if("undefined" != typeof(debugging) && !!debugging)
		args = [...args, new Error().stack.replace(/^\s*(Error|Stack trace):?\n/gi, "").replace(/^([^\n]*\n)/, "\n")];
	console.log(...args);
}

doit();

const getMatchUrl = (index) => GM_info.script.matches[index].replace(/\/?\*$/, '');

const SPX_SITE_URL = getMatchUrl(0);
const SERVER_URL = getMatchUrl(1);
const APPSHEET_URL = getMatchUrl(2);

function randomNumericId(length) {
    return Math.floor(Math.random() * 10 ** length).toString().padStart(length, '0');
}

function currentDateString() {
    const pad = n => n.toString().padStart(2, '0');
    const date = new Date();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const year = date.getFullYear();
    return month + '/' + day + '/' + year;
}

let cookie;

async function createRow(codeString, dateString = currentDateString(), lineNumber = '0') {
    const { templateId, tableId, clientId, buildId } = fetchConfig;
    const baseUrl = 'https://www.appsheet.com';
    const apiBaseUrl = baseUrl + '/api';
    const requestUrl = apiBaseUrl + '/template/' + templateId + '/table/' + tableId + '/row';
    const currentISO = new Date().toISOString();

    const params = {
        'tzOffset': '180',
        'settings': JSON.stringify({
            '_RowNumber': '0',
            '_EMAIL': '',
            '_NAME': '',
            '_LOCATION': '',
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
            '_THISUSER': 'onlyvalue'
        }),
        'apiLevel': '2',
        'isPreview': 'false',
        'checkCache': 'true',
        'locale': 'pt-BR',
        'location': 'null, null',
        'appTemplateVersion': '1.000010',
        'localVersion': '1.000010',
        ...fetchConfig.params,
        'timestamp': currentISO,
        'requestStartTime': currentISO,
        'lastSyncTime': currentISO,
        'appStartTime': currentISO,
        'dataStamp': currentISO,
        'clientId': clientId,
        'build': buildId,
        'requestId': randomNumericId(9)
    };

    const headers = {
        'accept': '*/*',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-requested-with': 'XMLHttpRequest',
        'Referer': baseUrl + '/start/' + templateId + '?newUser=true&onboarding=true&platform=desktop',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'cookie': cookie
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
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
        color: colors.green
    },
    error: {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
        color: colors.red
    },
    warning: {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
        color: colors.yellow
    },
    info: {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
        color: colors.white
    },
    prompt: {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>',
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

    stay ?
        alertElement.classList.add('spx-userscript-stay') :
        alertElement.style.setProperty('--duration', durationMs + 'ms');

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
        const buttonElements = [ ...alertElement.querySelectorAll('button') ];

        for (let i = 0; i < buttonElements.length; i++) {
            const buttonElement = buttonElements[i];
            const { onClick } = buttons[i];

            buttonElement.addEventListener('click', onClick, true);
        }
    }

    nextTick(() => alertElement.classList.remove('spx-userscript-hidden'));

    lastAlertElement = alertElement;

    if (stay) return alertElement;

    setTimeout(() => closeAlert(alertElement), durationMs);

    return alertElement;
}

unsafeWindow.showAlert = showAlert;

const outlineColor = colors.blue;

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
                'Talvez o cookie tenha expirado?\n' +
                'Acesse o [**AppSheet**](https://www.appsheet.com/) para obter um novo cookie.',
        });

        addSpxFocusListeners();
    }
}

const codes = new Set();

async function inputListenerCallback(event) {
    const brCode = event.target.value.trim().toUpperCase();
    const isValid = brCode.startsWith('BR') && brCode.length === 15;

    if (!isValid || codes.has(brCode)) return;

    codes.add(brCode);

    blinkInputHighlight();

    await saveBrCode(brCode);
}

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

    // Estado inicial do switch
    const isEnabled = localStorage.getItem('appsheetEnabled') === 'true';
    switchInput.checked = isEnabled;

    // Alterar o estado no armazenamento local
    switchInput.addEventListener('change', () => {
        const enabled = switchInput.checked;
        localStorage.setItem('appsheetEnabled', enabled.toString());
    });

    switchContainer.appendChild(label);
    switchContainer.appendChild(switchInput);
    document.body.appendChild(switchContainer);
}

// Chame esta função após o DOM ser carregado
document.addEventListener('DOMContentLoaded', () => {
// Função "check" que será chamada em cada evento.
// Atualmente, ela não faz nada (aguarde novas instruções).
function check() {
  // Ainda não faz nada
  if (location.href.includes('generalReceiveTaskOps/singleReceiveNew')) createSwitchButton();
}

// Detecta mudanças na URL sem recarregar a página
(function(history) {
  // Guarda os métodos originais
  const pushState = history.pushState;
  const replaceState = history.replaceState;

  // Sobrescreve o pushState para disparar um evento customizado
  history.pushState = function(...args) {
    const result = pushState.apply(history, args);
    window.dispatchEvent(new Event('urlChange'));
    return result;
  };

  // Sobrescreve o replaceState para disparar um evento customizado
  history.replaceState = function(...args) {
    const result = replaceState.apply(history, args);
    window.dispatchEvent(new Event('urlChange'));
    return result;
  };
})(window.history);

// Ouve o evento popstate para capturar navegações do navegador (voltar/avançar)
window.addEventListener('popstate', () => {
  window.dispatchEvent(new Event('urlChange'));
});

// Ao ocorrer a mudança de URL, chama a função "check"
window.addEventListener('urlChange', () => {
  check();
});

// Chama a função "check" quando o script carrega (após o DOM estar pronto)
document.addEventListener('DOMContentLoaded', () => {
  check();
});
});

// Use este valor no envio de códigos para verificar o estado
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
        // Envia para o AppSheet
        await saveIntoAppSheet(brCode);

        // Envia para o Litte API
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



let inputElement = null;

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
    if (inputElement === element) return console.log('Campo de texto já definido');

    inputElement = element;

    addInputHighlight();
    addInputListener();

    // showAlert({
           //  type: 'success',
            // title: 'Campo encontrado',
            // message: 'Para trocar o campo de texto; recarregue a página\nou precione **CTRL + SHIFT + 1**'
        //});
}

function findInputElement({ useActiveElement = true } = {}) {
    if (!fetchConfig.clientId) {
        return showAlert({
            type: 'warning',
            title: 'Ação necessária',
            message:
                'O sistema não está totalmente configurado.\n' +
                'Comunique seu superior para configurar o [**AppSheet**](https://www.appsheet.com/).',
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

function removeCookie() {
    const confirmed = confirm('Deseja remover o cookie salvo?');

    if (!confirmed) return;

    GM_setValue('AppSheetCookie', '');

    cookie = null;

    removeInputElement({ findAnother: false});

    showAlert({
        type: 'warning',
        title: 'Cookie removido',
        message:
            'O cookie foi removido do armazenamento local.\n' +
            'Acesse o site do [**AppSheet**](https://www.appsheet.com/) para obter um novo cookie.'
    });

    addSpxFocusListeners();
}

const actionsArray = [{
    keys: ['Control', 'Shift', 'Digit1'],
    callback: () => removeInputElement()
}, {
    keys: ['Control', 'Shift', 'Digit2'],
    callback: () => removeCookie()
}];

function setupKeyboardActions() {
    const hasAll = (array, items) => items.every(item => array.includes(item));

    document.addEventListener('keydown', (event) => {
        let pressedKeys = new Set();

        if (event.ctrlKey) pressedKeys.add('Control');
        if (event.shiftKey) pressedKeys.add('Shift');
        if (event.altKey) pressedKeys.add('Alt');
        if (event.metaKey) pressedKeys.add('Meta');

        pressedKeys.add(event.key);
        pressedKeys.add(event.code);
        pressedKeys = Array.from(pressedKeys);

        const actions = actionsArray.filter(({ keys }) => hasAll(pressedKeys, keys));

        for (const { callback } of actions) callback();
    }, true);
}

function isFocused(event) {
    return event.type === 'focus' || document.visibilityState === 'visible';
}

function spxGainedFocus(event) {
    if (cookie) return removeSpxFocusListeners();
    if (!isFocused(event)) return;

    cookie = GM_getValue('AppSheetCookie');

    if (cookie) {
        const successDurationMs = 2000;

        showAlert({
            type: 'success',
            title: 'Cookie encontrado',
            message: 'O cookie foi recebido com sucesso.',
            durationMs: successDurationMs
        });

        //setTimeout(() => findInputElement(), successDurationMs);

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

function appSheetGainedFocus(event) {
    if (isFocused(event)) setCookie();
}

function addAppSheetFocusListeners() {
    window.addEventListener('focus', appSheetGainedFocus, true);
    document.addEventListener('visibilitychange', appSheetGainedFocus, true);
}

function checkCookie() {
    cookie = GM_getValue('AppSheetCookie');

    if (cookie) {
        //findInputElement();
    } else {
        showAlert({
            type: 'warning',
            title: 'Cookie não encontrado',
            message: 'Acesse o site do [**AppSheet**](https://www.appsheet.com/) para obter um novo cookie.',
            durationMs: Infinity
        });

        addSpxFocusListeners();
    }
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
}

function trackActiveInput() {
    document.addEventListener('focusin', (event) => {
        const target = event.target;
        if (isTextInput(target)) {
            setInputElement(target);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => main());
