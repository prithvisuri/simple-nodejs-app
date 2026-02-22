// ── Helper: format JSON nicely ─────────────────────────
function prettyJSON(obj) {
    return JSON.stringify(obj, null, 2);
}

// ── Show loading state ─────────────────────────────────
function showLoading(resultEl) {
    resultEl.classList.remove('hidden');
    resultEl.innerHTML = '<span class="loading">⏳ Fetching...</span>';
}

// ── Fetch /api/info ────────────────────────────────────
async function fetchInfo() {
    const resultEl = document.getElementById('result-info');
    showLoading(resultEl);
    try {
        const res = await fetch('/api/info');
        const data = await res.json();
        resultEl.textContent = prettyJSON(data);
    } catch (err) {
        resultEl.textContent = `❌ Error: ${err.message}`;
    }
}

// ── Fetch /api/users ───────────────────────────────────
async function fetchUsers() {
    const resultEl = document.getElementById('result-users');
    showLoading(resultEl);
    try {
        const res = await fetch('/api/users');
        const data = await res.json();
        resultEl.textContent = prettyJSON(data);
    } catch (err) {
        resultEl.textContent = `❌ Error: ${err.message}`;
    }
}
