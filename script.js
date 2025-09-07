// --- Helper Function for Timezone Data ---
// This is a comprehensive list of IANA time zone identifiers.
const timezones = [
    "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers",
    "Africa/Asmara", "Africa/Asmera", "Africa/Bamako", "Africa/Bangui",
    "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville",
    "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta",
    "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti",
    "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone",
    "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala",
    "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos",
    "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi",
    "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru",
    "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi",
    "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou",
    "Africa/Porto-Novo", "Africa/ الرباط", "Africa/Sao_Tome", "Africa/Tripoli",
    "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Atikokan",
    "America/Atka", "America/Bahia", "America/Bahia_Banderas", "America/Boa_Vista",
    "America/Bogota", "America/Bo_Grande", "America/Buenos_Aires", "America/Cambridge_Bay",
    "America/Campo_Grande", "America/Caracas", "America/Catamarca", "America/Cayenne",
    "America/Chihuahua", "America/Chicago", "America/Coral_Harbour", "America/Cordoba",
    "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao",
    "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver",
    "America/Detroit", "America/Didymoteicho", "America/Dilic", "America/Dominica",
    "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Ensenada",
    "America/Fort_Nelson", "America/Fort_Wayne", "America/Fortaleza", "America/Glace_Bay",
    "America/Godthab", "America/Goose_Bay", "America/Grand_Cayman", "America/Grenada",
    "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana",
    "America/Halifax", "America/Havana", "America/Hermosillo", "America/Hobar",
    "America/Indianapolis", "America/Inuvik", "America/Iqaluit", "America/Jamaica",
    "America/Jujuy", "America/Juneau", "America/Kentucky", "America/Kiritimati",
    "America/Knoxville", "America/Kralendijk", "America/La_Paz", "America/Lagos_de_Moreno",
    "America/Lima", "America/Los_Angeles", "America/Louisville", "America/Lower_Princes",
    "America/Maceio", "America/Managua", "America/Manaus", "America/Maracaibo",
    "America/Marigot", "America/Maseru", "America/Matamoros", "America/Mazatlan",
    "America/Mendoza", "America/Menominee", "America/Merida", "America/Metlakatla",
    "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey",
    "America/Montevideo", "America/Montreal", "America/Montserrat", "America/Nassau",
    "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha",
    "America/North_Dakota", "America/Nuuk", "America/Oahu", "America/Ojinaga",
    "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Paraguay",
    "America/Pennsylvanian", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain",
    "America/Porto_Alegre", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas",
    "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina",
    "America/Resistencia", "America/Rio_Branco", "America/Rio_de_Janeiro", "America/Resistencia",
    "America/Rocky_Mountain", "America/Roseau", "America/Santa_Isabel", "America/Santarem",
    "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund",
    "America/Shiprock", "America/Sitka", "America/Spirit_River", "America/St_Barthelemy",
    "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Maarten",
    "America/St_Montreal", "America/St_Thomas", "America/Swift_Current", "America/Tegucigalpa",
    "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto",
    "America/Tortola", "America/Vancouver", "America/Vera_Cruz", "America/Vila_Velha",
    "America/Virgin", "America/Whitehorse", "America/Winnipeg", "America/Yakutat",
    "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/Dumont_d'Urville",
    "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer",
    "Antarctica/Rothera", "Antarctica/South_Pole", "Antarctica/Syowa", "Antarctica/Troll",
    "Antarctica/Vostok", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr",
    "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Ashkhabad", "Asia/Atyrau",
    "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul",
    "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Calcutta", "Asia/Chita",
    "Asia/Choibalsan", "Asia/Colombo", "Asia/Dacca", "Asia/Damascus", "Asia/Dhaka",
    "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza",
    "Asia/Harbin", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd",
    "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul",
    "Asia/Kamchatka", "Asia/Karachi", "Asia/Kashgar", "Asia/Kathmandu", "Asia/Khandyga",
    "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau",
    "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Manzhouli", "Asia/Nicosia",
    "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh",
    "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda",
    "Asia/Riyadh", "Asia/Saigon", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul",
    "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Stage", "Asia/Suva",
    "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu",
    "Asia/Tokyo", "Asia/Tomsk", "Asia/Ujung_Pandang", "Asia/Ulaanbaatar", "Asia/Urumqi",
    "Asia/Ust-Nera", "Asia/Vladivostok", "Asia/Vientiane", "Asia/Yakutsk", "Asia/Yangon",
    "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda",
    "Atlantic/Canary", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik",
    "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide",
    "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Canberra", "Australia/Darwin",
    "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe",
    "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Etc/GMT",
    "Etc/GMT+1", "Etc/GMT+10", "Etc/GMT+11", "Etc/GMT+12", "Etc/GMT+13", "Etc/GMT+14",
    "Etc/GMT+2", "Etc/GMT+3", "Etc/GMT+4", "Etc/GMT+5", "Etc/GMT+6", "Etc/GMT+7",
    "Etc/GMT+8", "Etc/GMT+9", "Etc/GMT-1", "Etc/GMT-10", "Etc/GMT-11", "Etc/GMT-12",
    "Etc/GMT-13", "Etc/GMT-14", "Etc/GMT-2", "Etc/GMT-3", "Etc/GMT-4", "Etc/GMT-5",
    "Etc/GMT-6", "Etc/GMT-7", "Etc/GMT-8", "Etc/GMT-9", "Etc/UTC", "Europe/Amsterdam",
    "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade",
    "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest",
    "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen",
    "Europe/Dublin", "Europe/Mariehamn", "Europe/Zaporozhye", "Europe/Vilnius",
    "Europe/Volgograd", "Europe/Uzhhorod", "Europe/Tiraspol", "Europe/Tallinn",
    "Europe/Tampere", "Europe/Stockholm", "Europe/Sarajevo", "Europe/Samara",
    "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Saratov",
    "Europe/Rome", "Europe/Riga", "Europe/Paris", "Europe/Oslo", "Europe/Omsk",
    "Europe/Oldenburg", "Europe/Nicosia", "Europe/Moscow", "Europe/Minsk",
    "Europe/Luxembourg", "Europe/London", "Europe/Lisbon", "Europe/Kiev",
    "Europe/Kirov", "Europe/Kaliningrad", "Europe/Izhevsk", "Europe/Helsinki",
    "Europe/Istanbul", "Europe/Guernsey", "Europe/Gibraltar", "Europe/Glace_Bay",
    "Europe/Frankfurt", "Europe/Fort_Nelson", "Europe/Famagusta", "Europe/Estland",
    "Europe/Edinburgh", "Europe/EET", "Europe/Dublin", "Europe/Dresden", "Europe/Donetsk",
    "Europe/Chisinau", "Europe/Ceuta", "Europe/Bucharest", "Europe/Budapest", "Europe/Brussels",
    "Europe/Bratislava", "Europe/Berlin", "Europe/Belgrade", "Europe/Astrakhan",
    "Europe/Athens", "Europe/Amsterdam", "Indian/Antananarivo", "Indian/Chagos",
    "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen",
    "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion",
    "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham",
    "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury",
    "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos",
    "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu",
    "Pacific/Johnston", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein",
    "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru",
    "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago",
    "Pacific/Palau", "Pacific/Pohnpei", "Pacific/Ponape", "Pacific/Port_Moresby",
    "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Samoa", "Pacific/Tahiti",
    "Pacific/Tarawa", "Pacific/Tinian", "Pacific/Tongatapu", "Pacific/Truk",
    "Pacific/Wake", "Pacific/Wallis", "Pacific/Yap", "UTC"
];

// Populate timezone dropdowns
function populateTimezoneDropdowns() {
    const fromTimezoneSelect = document.getElementById('from-timezone');
    const toTimezoneSelect = document.getElementById('to-timezone');

    timezones.forEach(tz => {
        const option1 = document.createElement('option');
        option1.value = tz;
        option1.textContent = tz.replace(/_/g, ' '); // Make it more readable
        fromTimezoneSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = tz;
        option2.textContent = tz.replace(/_/g, ' '); // Make it more readable
        toTimezoneSelect.appendChild(option2);
    });

    // Set default values for convenience (e.g., user's local timezone and UTC)
    try {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezones.includes(userTimezone)) {
            fromTimezoneSelect.value = userTimezone;
        } else {
            fromTimezoneSelect.value = 'UTC'; // Fallback
        }
    } catch (e) {
        fromTimezoneSelect.value = 'UTC'; // Fallback if Intl.DateTimeFormat is not supported
    }
    toTimezoneSelect.value = 'UTC';

    // Pre-fill input fields with current date and time
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    document.getElementById('human-input-date').value = formattedDateTime;
    document.getElementById('timezone-input-datetime').value = formattedDateTime;
}

// --- Conversion Functions ---

// 1. Epoch to Human-Readable Date
function convertEpochToHuman() {
    const epochInput = document.getElementById('epoch-input').value;
    const epochOutput = document.getElementById('epoch-output');
    // Helper function to get day of year
    Date.prototype.getDayOfYear = function() {
        const start = new Date(this.getFullYear(), 0, 0);
        const diff = this - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    };

    // Helper function to get week of year
    Date.prototype.getWeek = function() {
        const date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1
        const week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + 
            (week1.getDay() + 6) % 7) / 7);
    };
    if (!epochInput) {
        alert('Please enter an Epoch timestamp.');
        return;
    }

    const timestamp = parseInt(epochInput, 10);

    if (isNaN(timestamp)) {
        alert('Invalid Epoch timestamp. Please enter a valid number.');
        return;
    }

    // JavaScript Date objects are based on milliseconds since epoch.
    // Epoch timestamps are usually in seconds.
    const date = new Date(timestamp * 1000);

    // Format: YYYY-MM-DD HH:MM:SS
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const dayOfYear = date.getDayOfYear();
    const weekOfYear = date.getWeek();

    epochOutput.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} - ${dayOfWeek}, Day ${dayOfYear} of ${date.getFullYear()}, Week ${weekOfYear}`;

}

// 2. Human-Readable Date to Epoch
function convertHumanToEpoch() {
    const humanInputDate = document.getElementById('human-input-date').value;
    const humanOutputEpoch = document.getElementById('human-output-epoch');

    if (!humanInputDate) {
        alert('Please select a Date & Time.');
        return;
    }

    // The input type="datetime-local" provides a string like "YYYY-MM-DDTHH:MM:SS"
    // We need to convert this to a Date object.
    // JavaScript's Date constructor can parse this format directly.
    const date = new Date(humanInputDate);

    if (isNaN(date.getTime())) {
        alert('Invalid Date & Time format. Please ensure it is selected correctly.');
        return;
    }

    // getTime() returns milliseconds since the epoch.
    // We convert it back to seconds for the epoch timestamp.
    const epochTimestamp = Math.floor(date.getTime() / 1000);
    humanOutputEpoch.value = epochTimestamp;
}

// 3. Timezone Converter
function convertTimezone() {
    const inputDatetimeStr = document.getElementById('timezone-input-datetime').value;
    const fromTimezone = document.getElementById('from-timezone').value;
    const toTimezone = document.getElementById('to-timezone').value;
    const timezoneOutputDatetime = document.getElementById('timezone-output-datetime');

    if (!inputDatetimeStr) {
        alert('Please enter a Date & Time.');
        return;
    }
    if (!fromTimezone || !toTimezone) {
        alert('Please select both "From" and "To" timezones.');
        return;
    }

    // When using `new Date(datetimeString)` where `datetimeString` is in 'YYYY-MM-DDTHH:MM:SS'
    // format without a timezone specifier, JavaScript interprets it as **local time**.
    // To correctly handle conversion based on a specified 'from' timezone,
    // we need to construct the date more carefully or use a library.
    // For pure JS, we can leverage `toLocaleString` with options.

    // First, parse the input datetime assuming it's local to the browser or user input device.
    // Then, we'll use `toLocaleString` to format it according to the specified timezones.

    // Create a Date object from the input string. This assumes the input is
    // already in a format JavaScript can parse into a specific moment in time.
    // For `datetime-local`, it's often treated as local time of the browser.
    const inputDate = new Date(inputDatetimeStr);

    if (isNaN(inputDate.getTime())) {
        alert('Invalid Date & Time format. Please ensure it is selected correctly.');
        return;
    }

    // To ensure accuracy across different environments, it's best to treat
    // the input `datetime-local` as a local time and then explicitly convert.
    // However, a simpler approach for this UI might be to let the user
    // input what they see, and convert based on that interpretation.

    // The most robust way to handle this in plain JS, without external libraries,
    // is to create a date object and then use `toLocaleString` with options.
    // The `datetime-local` input doesn't inherently specify its timezone.
    // We assume the user entering "2025-09-07 10:36:46" and selecting "America/New_York"
    // means "10:36:46 AM in New York on that date".

    // Let's construct a string that `toLocaleString` can interpret for a specific timezone.
    // This involves getting the components and then building the string.
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth(); // 0-indexed
    const day = inputDate.getDate();
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const seconds = inputDate.getSeconds();

    // Create a date object that represents the *moment* the user entered.
    // This is tricky in pure JS without libraries because `new Date("YYYY-MM-DDTHH:MM:SS")`
    // is interpreted as local time.
    // A more accurate way to do this is to create the date object and then
    // set its components, but that might also be interpreted as local time.

    // A reliable method: Construct the date by explicitly setting components,
    // then interpret that moment and convert its timezone.
    // The `datetime-local` input usually gives `YYYY-MM-DDTHH:MM:SS`.
    // We can parse this into a JS Date object.

    // Convert the input `datetime-local` string to a Date object.
    // JavaScript's `Date.parse()` or `new Date()` handles this format.
    // `new Date('YYYY-MM-DDTHH:MM:SS')` creates a date in the *local* timezone of the browser.
    const dateObj = new Date(inputDatetimeStr);

    if (isNaN(dateObj.getTime())) {
        alert('Invalid Date & Time value.');
        return;
    }

    // Now, use `toLocaleString` to format this `dateObj` into the `toTimezone`.
    // `toLocaleString` uses the browser's default timezone unless specified.
    // We need to specify the `timeZone` option.
    // The format `YYYY-MM-DD HH:MM:SS` is desired.
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Use 24-hour format
        timeZone: toTimezone
    };

    // Format the date object to the target timezone.
    // `toLocaleString` returns a string which we'll then parse to ensure the format.
    // This is a bit of a workaround to get the exact YYYY-MM-DD HH:MM:SS format.
    let formattedString = dateObj.toLocaleString('en-US', options); // 'en-US' ensures locale-specific formatting rules are applied consistently

    // `toLocaleString` might return "09/07/2025, 18:49:50" or similar depending on locale.
    // We need to reformat this into "YYYY-MM-DD HH:MM:SS".
    // A more direct way to get the desired format is to manually construct it from the components.
    // However, to ensure we're using the *converted* time, we need to rely on `toLocaleString` first.

    // Let's reconstruct the date with `toLocaleString` and then reformat it.
    const utcDate = new Date(dateObj.getTime()); // This is the same moment in time

    // We need to represent this moment in the `toTimezone`.
    // `toLocaleString` with `timeZone` option does this.
    const convertedDate = new Date(
        utcDate.toLocaleString('en-US', { timeZone: toTimezone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    );
    // The above `toLocaleString` call itself returns a string, not a Date object.
    // We need to parse that string IF it's in a recognizable format.
    // `en-US` locale with `hour12: false` options usually produces `MM/DD/YYYY, HH:MM:SS`.
    // Let's make sure we get the components correctly.

    // A more robust approach using `toLocaleString` to get components and then build:
    const parts = dateObj.toLocaleString('en-US', {
        timeZone: toTimezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).match(/(\d{1,2})\/(\d{1,2})\/(\d{4}), (\d{1,2}):(\d{1,2}):(\d{1,2})/); // Regex to capture M/D/YYYY, H:M:S

    if (parts) {
        const monthNum = parts[1];
        const dayNum = parts[2];
        const yearNum = parts[3];
        const hourNum = parts[4];
        const minuteNum = parts[5];
        const secondNum = parts[6];
        timezoneOutputDatetime.value = `${yearNum}-${monthNum}-${dayNum} ${hourNum}:${minuteNum}:${secondNum}`;
    } else {
        // Fallback if regex fails (shouldn't happen with standard en-US format)
        alert('Error formatting timezone conversion.');
        timezoneOutputDatetime.value = 'Error';
    }
}


// --- Clipboard Copy Function ---
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.select(); // Select the text in the input field
        document.execCommand('copy'); // Execute the copy command
        alert('Copied to clipboard!');
    }
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', populateTimezoneDropdowns);