// --- Helper Function for Timezone Data ---
// Major international timezones
const timezones = [
    "UTC",
    "America/New_York",      // EST/EDT
    "America/Chicago",       // CST/CDT
    "America/Denver",        // MST/MDT
    "America/Los_Angeles",   // PST/PDT
    "America/Sao_Paulo",     // Brazil
    "Europe/London",         // GMT/BST
    "Europe/Paris",          // Central European
    "Europe/Moscow",         // Moscow
    "Asia/Dubai",           // UAE
    "Asia/Shanghai",        // China
    "Asia/Tokyo",          // Japan
    "Asia/Singapore",      // Singapore
    "Australia/Sydney",    // Eastern Australia
    "Pacific/Auckland"     // New Zealand
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

    if (!inputDatetimeStr || !fromTimezone || !toTimezone) {
        alert('Please fill in all fields');
        return;
    }

    try {
        // 1. 首先，解析输入的日期时间字符串
        const [datePart, timePart] = inputDatetimeStr.split(' ');
        const [year, month, day] = datePart.split('-');
        const [hour, minute, second] = timePart.split(':');
        
        // 2. 创建一个Date对象，但要考虑源时区
        const sourceDate = new Date(Date.UTC(
            parseInt(year),
            parseInt(month) - 1,
            parseInt(day),
            parseInt(hour),
            parseInt(minute),
            parseInt(second)
        ));

        if (isNaN(sourceDate.getTime())) {
            throw new Error('Invalid date format');
        }

        // 3. 获取源时区的时间偏移
        const sourceDateStr = sourceDate.toLocaleString('en-US', {
            timeZone: fromTimezone,
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        // 4. 创建正确的源时区时间
        const sourceDateTime = new Date(sourceDateStr + ' UTC');

        // 5. 转换到目标时区
        const targetFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: toTimezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        // 6. 格式化结果
        const parts = targetFormatter.formatToParts(sourceDateTime);
        const result = {};
        parts.forEach(part => {
            result[part.type] = part.value;
        });

        // 7. 构造最终输出
        timezoneOutputDatetime.value = `${result.year}-${result.month}-${result.day} ${result.hour}:${result.minute}:${result.second}`;
    } catch (error) {
        alert('Error converting timezone: ' + error.message);
        timezoneOutputDatetime.value = '';
    }
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', populateTimezoneDropdowns);