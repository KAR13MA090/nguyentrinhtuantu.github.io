document.addEventListener('DOMContentLoaded', () => {
    const _0x4f2a = ["Tmd1eeG7hW4gVHLhu4tuaCBUdeG6pW4gVMO6", "wqkgQuG6o24gcXV54buBbiB0aHXhu5ljIHbhu4EgTmd1eeG7hW4gVHLhu4tuaCBUdeG6pW4gVMO6"];
    try {
        const _n = document.getElementById('obf-name');
        if (_n) _n.textContent = decodeURIComponent(escape(atob(_0x4f2a[0])));
        const _c = document.getElementById('obf-copyright');
        if (_c) _c.textContent = decodeURIComponent(escape(atob(_0x4f2a[1])));
    } catch (e) { }
    const mapModal = document.getElementById('map-modal');
    const hstsBadge = document.getElementById('hsts-badge');
    if (hstsBadge && mapModal) {
        hstsBadge.addEventListener('click', () => {
            mapModal.classList.remove('hidden');
        });
    }
    const ipEl = document.getElementById('user-ip');
    const countryEl = document.getElementById('user-country');

    if (window.location.protocol === 'file:') {
        if (ipEl) ipEl.textContent = '127.0.0.1 ';
        if (countryEl) countryEl.textContent = 'Việt Nam';
    } else {
        fetch('https://freeipapi.com/api/json')
            .then(res => res.json())
            .then(data => {
                if (data.ipAddress) {
                    if (ipEl) ipEl.textContent = data.ipAddress;
                    if (countryEl) countryEl.textContent = data.countryName;
                } else {
                    if (ipEl) ipEl.textContent = 'Không rõ';
                    if (countryEl) countryEl.textContent = 'Không rõ';
                }
            })
            .catch(() => {
                fetch('https://ipapi.co/json/')
                    .then(res => res.json())
                    .then(data => {
                        if (data.ip) {
                            if (ipEl) ipEl.textContent = data.ip;
                            if (countryEl) countryEl.textContent = data.country_name;
                        } else {
                            if (ipEl) ipEl.textContent = 'Không rõ';
                            if (countryEl) countryEl.textContent = 'Không rõ';
                        }
                    })
                    .catch(() => {
                        if (ipEl) ipEl.textContent = 'Lỗi';
                        if (countryEl) countryEl.textContent = 'Lỗi';
                    });
            });
    }
    const todayStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const countEl = document.getElementById('visit-count');
    if (window.location.protocol === 'file:') {
        let localVisits = localStorage.getItem(`visits_${todayStr}`) || 0;
        localVisits = parseInt(localVisits) + 1;
        localStorage.setItem(`visits_${todayStr}`, localVisits);
        if (countEl) countEl.textContent = localVisits + " (Local)";
    } else {
        fetch(`https://api.counterapi.dev/v1/tuantu_profile/visits_${todayStr}/up`)
            .then(res => res.json())
            .then(data => {
                if (countEl) countEl.textContent = data.count;
                setInterval(() => {
                    fetch(`https://api.counterapi.dev/v1/tuantu_profile/visits_${todayStr}`)
                        .then(r => r.json())
                        .then(d => {
                            if (countEl) countEl.textContent = d.count;
                        }).catch(() => { });
                }, 15000);
            })
            .catch(() => {
                if (countEl) countEl.textContent = '---';
            });
    }
    const startScreen = document.getElementById('start-screen');
    const profileContainer = document.getElementById('profile-container');
    const bgMusic = document.getElementById('bg-music');
    const aboutBtn = document.getElementById('about-btn');
    const aboutModal = document.getElementById('about-modal');

    if (aboutBtn && aboutModal) {
        aboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            aboutModal.classList.remove('hidden');
        });
    }

    const skillBtn = document.getElementById('skill-btn');
    const skillModal = document.getElementById('skill-modal');

    if (skillBtn && skillModal) {
        skillBtn.addEventListener('click', (e) => {
            e.preventDefault();
            skillModal.classList.remove('hidden');
        });
    }

    const cvBtn = document.getElementById('cv-btn');
    const cvModal = document.getElementById('cv-modal');

    if (cvBtn && cvModal) {
        cvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cvModal.classList.remove('hidden');
        });
    }

    const projectBtn = document.getElementById('project-btn');
    const projectModal = document.getElementById('project-modal');

    if (projectBtn && projectModal) {
        projectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            projectModal.classList.remove('hidden');
        });
    }

    const checkSdtBtn = document.getElementById('check-sdt-btn');
    const checkSdtModal = document.getElementById('check-sdt-modal');

    if (checkSdtBtn && checkSdtModal) {
        checkSdtBtn.addEventListener('click', (e) => {
            e.preventDefault();
            checkSdtModal.classList.remove('hidden');
        });
    }
    const sdtInput = document.getElementById('sdt-input');
    const sdtCheckBtn = document.getElementById('sdt-check-btn');
    const sdtResult = document.getElementById('sdt-result');

    const VN_PREFIXES = {
        '032': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '033': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '034': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '035': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '036': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '037': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '038': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '039': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '086': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '096': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '097': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '098': { carrier: 'Viettel', type: 'Di động', color: '#e53935', bg: '#3d0808', emoji: '' },
        '070': { carrier: 'MobiFone', type: 'Di động', color: '#1565c0', bg: '#0a1929', emoji: '' },
        '076': { carrier: 'MobiFone', type: 'Di động', color: '#1565c0', bg: '#0a1929', emoji: '' },
        '077': { carrier: 'MobiFone', type: 'Di động', color: '#1565c0', bg: '#0a1929', emoji: '' },
        '078': { carrier: 'MobiFone', type: 'Di động', color: '#1565c0', bg: '#0a1929', emoji: '' },
        '079': { carrier: 'MobiFone', type: 'Di động', color: '#1565c0', bg: '#0a1929', emoji: '' },
        '089': { carrier: 'MobiFone', type: 'Di động', color: '#1565c0', bg: '#0a1929', emoji: '' },
        '090': { carrier: 'MobiFone', type: 'Di động', color: '#1565c0', bg: '#0a1929', emoji: '' },
        '093': { carrier: 'MobiFone', type: 'Di động', color: '#1565c0', bg: '#0a1929', emoji: '' },
        '081': { carrier: 'VinaPhone', type: 'Di động', color: '#2e7d32', bg: '#0a1f0a', emoji: '' },
        '082': { carrier: 'VinaPhone', type: 'Di động', color: '#2e7d32', bg: '#0a1f0a', emoji: '' },
        '083': { carrier: 'VinaPhone', type: 'Di động', color: '#2e7d32', bg: '#0a1f0a', emoji: '' },
        '084': { carrier: 'VinaPhone', type: 'Di động', color: '#2e7d32', bg: '#0a1f0a', emoji: '' },
        '085': { carrier: 'VinaPhone', type: 'Di động', color: '#2e7d32', bg: '#0a1f0a', emoji: '' },
        '091': { carrier: 'VinaPhone', type: 'Di động', color: '#2e7d32', bg: '#0a1f0a', emoji: '' },
        '094': { carrier: 'VinaPhone', type: 'Di động', color: '#2e7d32', bg: '#0a1f0a', emoji: '' },
        '088': { carrier: 'VinaPhone', type: 'Di động', color: '#2e7d32', bg: '#0a1f0a', emoji: '' },
        '052': { carrier: 'Vietnamobile', type: 'Di động', color: '#f57c00', bg: '#1e1200', emoji: '' },
        '056': { carrier: 'Vietnamobile', type: 'Di động', color: '#f57c00', bg: '#1e1200', emoji: '' },
        '058': { carrier: 'Vietnamobile', type: 'Di động', color: '#f57c00', bg: '#1e1200', emoji: '' },
        '092': { carrier: 'Vietnamobile', type: 'Di động', color: '#f57c00', bg: '#1e1200', emoji: '' },
        '059': { carrier: 'Gmobile', type: 'Di động', color: '#7b1fa2', bg: '#1a0a1e', emoji: '' },
        '099': { carrier: 'Gmobile', type: 'Di động', color: '#7b1fa2', bg: '#1a0a1e', emoji: '' },
        '055': { carrier: 'Reddi (Mobicast)', type: 'Di động', color: '#c62828', bg: '#200808', emoji: '' },
        '069': { carrier: 'Indochina Telecom', type: 'Di động', color: '#00838f', bg: '#001a1c', emoji: '' },
    };

    function formatVNPhone(raw) {
        let num = raw.replace(/[\s.\-()]/g, '');
        if (num.startsWith('+84')) num = '0' + num.slice(3);
        else if (num.startsWith('84') && num.length === 11) num = '0' + num.slice(2);
        return num;
    }

    function lookupPhone(raw) {
        const num = formatVNPhone(raw);
        if (!/^\d+$/.test(num)) return { valid: false, reason: 'Số điện thoại chứa ký tự không hợp lệ' };
        if (num.length !== 10) return { valid: false, reason: `Số phải có 10 chữ số (hiện tại: ${num.length} chữ số)` };
        if (!num.startsWith('0')) return { valid: false, reason: 'Số Việt Nam phải bắt đầu bằng 0' };

        const prefix3 = num.slice(0, 3);
        const info = VN_PREFIXES[prefix3];
        if (!info) return { valid: false, reason: `Đầu số ${prefix3} không nhận dạng được (chưa được cấp phép tại VN)` };

        // Format dạng đẹp: 0xxx xxx xxxx
        const fmt = `${num.slice(0, 4)} ${num.slice(4, 7)} ${num.slice(7, 10)}`;
        return { valid: true, num, fmt, prefix: prefix3, ...info };
    }

    function doCheckSdt() {
        const raw = sdtInput ? sdtInput.value.trim() : '';
        if (!raw) {
            if (sdtInput) { sdtInput.style.borderColor = '#f87171'; setTimeout(() => { sdtInput.style.borderColor = ''; }, 1500); }
            return;
        }
        const res = lookupPhone(raw);
        if (!res.valid) {
            sdtResult.innerHTML = `<div class="sdt-card invalid">
                <div class="sdt-status-badge invalid"><i class="fa-solid fa-circle-xmark"></i> Không hợp lệ</div>
                <div style="color:#f87171; font-size:0.95rem;">${res.reason}</div>
            </div>`;
            return;
        }
        sdtResult.innerHTML = `<div class="sdt-card valid">
            <div class="sdt-carrier-row">
                <div class="sdt-carrier-logo" style="background:${res.bg}; color:${res.color};">${res.emoji}</div>
                <div class="sdt-carrier-info">
                    <div class="sdt-carrier-name" style="color:${res.color};">${res.carrier}</div>
                    <div class="sdt-carrier-type">${res.type} • Đầu số ${res.prefix}</div>
                </div>
            </div>
            <div class="sdt-divider"></div>
            <div class="sdt-info-grid">
                <div class="sdt-info-item">
                    <div class="sdt-info-label">Số chuẩn hoá</div>
                    <div class="sdt-info-value sdt-formatted">${res.fmt}</div>
                </div>
                <div class="sdt-info-item">
                    <div class="sdt-info-label">Trạng thái</div>
                    <div class="sdt-status-badge valid" style="margin-top:2px;"><i class="fa-solid fa-circle-check"></i> Hợp lệ</div>
                </div>
                <div class="sdt-info-item">
                    <div class="sdt-info-label">Nhà mạng</div>
                    <div class="sdt-info-value">${res.carrier}</div>
                </div>
                <div class="sdt-info-item">
                    <div class="sdt-info-label">Loại</div>
                    <div class="sdt-info-value">${res.type}</div>
                </div>
                <div class="sdt-info-item">
                    <div class="sdt-info-label">Quốc tế</div>
                    <div class="sdt-info-value">+84 ${res.num.slice(1)}</div>
                </div>
                <div class="sdt-info-item">
                    <div class="sdt-info-label">Đầu số</div>
                    <div class="sdt-info-value">${res.prefix}</div>
                </div>
            </div>
        </div>`;
    }

    if (sdtCheckBtn) sdtCheckBtn.addEventListener('click', doCheckSdt);
    if (sdtInput) sdtInput.addEventListener('keydown', e => { if (e.key === 'Enter') doCheckSdt(); });


    const checkHostBtn = document.getElementById('check-host-btn');
    const checkHostModal = document.getElementById('check-host-modal');

    if (checkHostBtn && checkHostModal) {
        checkHostBtn.addEventListener('click', (e) => {
            e.preventDefault();
            checkHostModal.classList.remove('hidden');
        });
    }
    const chInput = document.getElementById('ch-input');
    const chCheckBtn = document.getElementById('ch-check-btn');
    const chResults = document.getElementById('ch-results');
    const chTypeBtns = document.querySelectorAll('.ch-type-btn');
    const chTcpPortRow = document.getElementById('ch-tcp-port-row');
    const chPortInput = document.getElementById('ch-port-input');
    let chSelectedType = 'ping';
    let chPollInterval = null;
    let chPollAttempts = 0;

    const countryFlags = {
        'US': '🇺🇸', 'DE': '🇩🇪', 'FR': '🇫🇷', 'GB': '🇬🇧', 'NL': '🇳🇱',
        'SG': '🇸🇬', 'JP': '🇯🇵', 'KR': '🇰🇷', 'IN': '🇮🇳', 'AU': '🇦🇺',
        'CA': '🇨🇦', 'BR': '🇧🇷', 'RU': '🇷🇺', 'UA': '🇺🇦', 'PL': '🇵🇱',
        'CZ': '🇨🇿', 'TR': '🇹🇷', 'IT': '🇮🇹', 'ES': '🇪🇸', 'SE': '🇸🇪',
        'FI': '🇫🇮', 'NO': '🇳🇴', 'DK': '🇩🇰', 'HU': '🇭🇺', 'RO': '🇷🇴',
        'BG': '🇧🇬', 'RS': '🇷🇸', 'SK': '🇸🇰', 'LT': '🇱🇹', 'LV': '🇱🇻',
        'EE': '🇪🇪', 'IL': '🇮🇱', 'AE': '🇦🇪', 'ZA': '🇿🇦', 'MX': '🇲🇽',
        'AR': '🇦🇷', 'CL': '🇨🇱', 'CN': '🇨🇳', 'HK': '🇭🇰', 'TW': '🇹🇼',
        'VN': '🇻🇳', 'TH': '🇹🇭', 'MY': '🇲🇾', 'ID': '🇮🇩', 'PH': '🇵🇭',
        'PK': '🇵🇰', 'BD': '🇧🇩', 'MD': '🇲🇩', 'GE': '🇬🇪', 'KZ': '🇰🇿',
        'IR': '🇮🇷', 'AT': '🇦🇹', 'CH': '🇨🇭', 'BE': '🇧🇪', 'PT': '🇵🇹',
        'GR': '🇬🇷', 'HR': '🇭🇷', 'SI': '🇸🇮', 'BA': '🇧🇦', 'MK': '🇲🇰',
        'AL': '🇦🇱', 'ME': '🇲🇪', 'BY': '🇧🇾', 'AM': '🇦🇲', 'AZ': '🇦🇿',
        'UZ': '🇺🇿', 'NZ': '🇳🇿', 'CY': '🇨🇾', 'MT': '🇲🇹', 'IS': '🇮🇸',
    };

    chTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            chTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            chSelectedType = btn.dataset.type;
            if (chSelectedType === 'tcp') {
                chTcpPortRow.classList.remove('hidden');
            } else {
                chTcpPortRow.classList.add('hidden');
            }
        });
    });

    if (chInput) {
        chInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') doCheckHost();
        });
    }

    if (chCheckBtn) {
        chCheckBtn.addEventListener('click', doCheckHost);
    }

    function doCheckHost() {
        const host = chInput ? chInput.value.trim() : '';
        if (!host) {
            chInput.style.borderColor = '#f87171';
            setTimeout(() => { chInput.style.borderColor = ''; }, 1500);
            return;
        }
        if (chPollInterval) { clearInterval(chPollInterval); chPollInterval = null; }
        chCheckBtn.disabled = true;
        chResults.innerHTML = `<div class="ch-loading"><div class="ch-spinner"></div><p>Đang gửi yêu cầu kiểm tra...</p></div>`;

        let apiUrl = `https://check-host.net/check-${chSelectedType}?host=${encodeURIComponent(host)}&max_nodes=20`;
        if (chSelectedType === 'tcp' && chPortInput) {
            apiUrl += `&port=${chPortInput.value || 80}`;
        }

        fetch(apiUrl, { headers: { 'Accept': 'application/json' } })
            .then(r => r.json())
            .then(data => {
                if (!data || !data.request_id) throw new Error('Không nhận được request_id');
                const reqId = data.request_id;
                const nodes = data.nodes || {};
                renderPendingNodes(nodes);
                chPollAttempts = 0;
                chPollInterval = setInterval(() => {
                    chPollAttempts++;
                    if (chPollAttempts > 20) {
                        clearInterval(chPollInterval);
                        chCheckBtn.disabled = false;
                        return;
                    }
                    fetch(`https://check-host.net/check-result/${reqId}`, { headers: { 'Accept': 'application/json' } })
                        .then(r => r.json())
                        .then(results => {
                            renderResults(nodes, results, chSelectedType);
                            const allDone = Object.values(results).every(v => v !== null);
                            if (allDone) {
                                clearInterval(chPollInterval);
                                chPollInterval = null;
                                chCheckBtn.disabled = false;
                            }
                        }).catch(() => { });
                }, 2500);
            })
            .catch(err => {
                chResults.innerHTML = `<div class="ch-error-msg"><i class="fa-solid fa-circle-exclamation"></i> Lỗi: Không thể kết nối tới check-host.net API. CORS hoặc mạng bị chặn.</div>`;
                chCheckBtn.disabled = false;
            });
    }

    function renderPendingNodes(nodes) {
        let html = `<div class="ch-summary-bar"><span class="ch-sum-item"><span class="ch-sum-dot pending"></span>Đang kiểm tra từ <span class="ch-sum-count">${Object.keys(nodes).length}</span> node...</span></div>`;
        html += `<div class="ch-nodes-grid">`;
        for (const [nodeKey, info] of Object.entries(nodes)) {
            const country = info[1] || '';
            const city = info[2] || '';
            const flag = countryFlags[country] || '';
            html += `<div class="ch-node-card pending" id="ch-node-${nodeKey.replace(/\./g, '-')}">
                <div class="ch-node-location"><span class="ch-flag">${flag}</span>${city}, ${country}</div>
                <div class="ch-node-value pending"> Đang kiểm tra...</div>
                <div class="ch-node-sub">${nodeKey}</div>
            </div>`;
        }
        html += `</div>`;
        chResults.innerHTML = html;
    }

    function renderResults(nodes, results, type) {
        let okCount = 0, errCount = 0, pendCount = 0;
        const cards = {};
        for (const [nodeKey, info] of Object.entries(nodes)) {
            const country = info[1] || '';
            const city = info[2] || '';
            const flag = countryFlags[country] || '';
            const result = results[nodeKey];
            let valueHtml = '', statusClass = 'pending';
            if (result === null || result === undefined) {
                valueHtml = `<div class="ch-node-value pending"> Đang chờ...</div>`;
                pendCount++;
            } else {
                const parsed = parseCheckResult(type, result);
                statusClass = parsed.ok ? 'ok' : 'error';
                valueHtml = `<div class="ch-node-value ${statusClass}">${parsed.label}</div>`;
                if (parsed.ok) okCount++; else errCount++;
            }
            cards[nodeKey] = `<div class="ch-node-card ${statusClass}" id="ch-node-${nodeKey.replace(/\./g, '-')}">
                <div class="ch-node-location"><span class="ch-flag">${flag}</span>${city}, ${country}</div>
                ${valueHtml}
                <div class="ch-node-sub">${nodeKey}</div>
            </div>`;
        }
        let summaryHtml = `<div class="ch-summary-bar">
            <span class="ch-sum-item"><span class="ch-sum-dot ok"></span>OK: <span class="ch-sum-count">${okCount}</span></span>
            <span class="ch-sum-item"><span class="ch-sum-dot error"></span>Lỗi: <span class="ch-sum-count">${errCount}</span></span>
            ${pendCount > 0 ? `<span class="ch-sum-item"><span class="ch-sum-dot pending"></span>Đang chờ: <span class="ch-sum-count">${pendCount}</span></span>` : ''}
        </div>`;
        chResults.innerHTML = summaryHtml + `<div class="ch-nodes-grid">${Object.values(cards).join('')}</div>`;
    }

    function parseCheckResult(type, result) {
        try {
            if (type === 'ping') {
                if (!result || !result[0] || !result[0][0]) return { ok: false, label: ' Timeout' };
                const arr = result[0];
                const times = arr.filter(r => r && r[0] === 'OK').map(r => r[1]);
                if (times.length === 0) return { ok: false, label: ' Không phản hồi' };
                const avg = (times.reduce((a, b) => a + b, 0) / times.length * 1000).toFixed(1);
                return { ok: true, label: ` ${avg} ms` };
            } else if (type === 'http') {
                if (!result || !result[0]) return { ok: false, label: ' Lỗi' };
                const r = result[0];
                const status = r[1];
                if (status && status >= 200 && status < 400) {
                    return { ok: true, label: ` HTTP ${status}` };
                }
                return { ok: false, label: ` HTTP ${status || 'Lỗi'}` };
            } else if (type === 'dns') {
                if (!result || !result[0] || !result[0].A) return { ok: false, label: ' Không resolve' };
                const ips = result[0].A || [];
                return { ok: true, label: ` ${ips[0] || 'OK'}` };
            } else if (type === 'tcp') {
                if (!result || !result[0]) return { ok: false, label: ' Đóng / Lỗi' };
                const r = result[0];
                if (r[0] === 'connected') {
                    const time = r[1] ? (r[1] * 1000).toFixed(1) + ' ms' : 'OK';
                    return { ok: true, label: ` ${time}` };
                }
                return { ok: false, label: ' Không kết nối được' };
            }
        } catch (e) { }
        return { ok: false, label: ' Không rõ' };
    }

    // ===================================================
    // HỆ THỐNG NHẬN DIỆN NGÀY LỄ & CHỦ ĐỀ YÊU NƯỚC (2/9)
    // ===================================================
    const HOLIDAY_CONFIGS = {
        '2-9': {
            id: '2-9',
            name: 'Quốc Khánh 2/9',
            bannerTitle: 'CHÀO MỪNG QUỐC KHÁNH 2/9 NƯỚC CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM',
            bannerDesc: 'Tự hào non sông gấm vóc • Đoàn kết - Độc lập - Tự do - Hạnh phúc',
            startBadge: 'CHÀO MỪNG QUỐC KHÁNH 2/9',
            startTitleHtml: '<span class="title-tu-hao">TỰ HÀO</span> <span class="title-viet-nam">VIỆT NAM !</span>',
            startSubtitle: 'Chào mừng đại lễ 2/9 • Chạm màn hình để bắt đầu'
        },
        '30-4': {
            id: '30-4',
            name: 'Kỷ Niệm 30/4 - 1/5',
            bannerTitle: 'CHÀO MỪNG NGÀY GIẢI PHÓNG MIỀN NAM 30/4 & QUỐC TẾ LAO ĐỘNG 1/5',
            bannerDesc: 'Kỷ niệm non sông thu về một mối • Hòa bình - Thống nhất - Phát triển',
            startBadge: 'CHÀO MỪNG ĐẠI LỄ 30/4 - 1/5',
            startTitleHtml: '<span class="title-tu-hao">NON SÔNG</span> <span class="title-viet-nam">LIỀN MỘT DẢI !</span>',
            startSubtitle: 'Kỷ niệm ngày toàn thắng • Chạm màn hình để bắt đầu'
        },
        '19-8': {
            id: '19-8',
            name: 'Cách Mạng Tháng Tám 19/8',
            bannerTitle: 'CHÀO MỪNG KỶ NIỆM CÁCH MẠNG THÁNG TÁM THÀNH CÔNG (19/8)',
            bannerDesc: 'Hào khí Cách mạng Tháng Tám bất diệt • Tự hào trang sử vẻ vang',
            startBadge: 'KỶ NIỆM CÁCH MẠNG THÁNG TÁM',
            startTitleHtml: '<span class="title-tu-hao">HÀO KHÍ</span> <span class="title-viet-nam">THÁNG TÁM !</span>',
            startSubtitle: 'Tự hào lịch sử hào hùng • Chạm màn hình để bắt đầu'
        },
        '22-12': {
            id: '22-12',
            name: 'Thành Lập QĐND Việt Nam 22/12',
            bannerTitle: 'KỶ NIỆM NGÀY THÀNH LẬP QUÂN ĐỘI NHÂN DÂN VIỆT NAM (22/12)',
            bannerDesc: 'Bộ đội Cụ Hồ • Vì nước quên thân, vì dân phục vụ',
            startBadge: 'KỶ NIỆM NGÀY 22/12',
            startTitleHtml: '<span class="title-tu-hao">QUÂN ĐỘI</span> <span class="title-viet-nam">NHÂN DÂN VIỆT NAM !</span>',
            startSubtitle: 'Anh bộ đội Cụ Hồ • Chạm màn hình để bắt đầu'
        }
    };

    function checkIsHolidayDate() {
        const now = new Date();
        const month = now.getMonth(); // 0 = Jan, 7 = Aug, 8 = Sep, 11 = Dec
        const date = now.getDate();

        // 1. Quốc Khánh 2/9 (từ 30/8 đến 4/9)
        if ((month === 7 && date >= 30) || (month === 8 && date <= 4)) {
            return { isHoliday: true, info: HOLIDAY_CONFIGS['2-9'] };
        }
        // 2. Kỷ niệm 30/4 - 1/5 (từ 29/4 đến 3/5)
        if ((month === 3 && date >= 29) || (month === 4 && date <= 3)) {
            return { isHoliday: true, info: HOLIDAY_CONFIGS['30-4'] };
        }
        // 3. Cách Mạng Tháng Tám 19/8 (từ 18/8 đến 20/8)
        if (month === 7 && date >= 18 && date <= 20) {
            return { isHoliday: true, info: HOLIDAY_CONFIGS['19-8'] };
        }
        // 4. Ngày 22/12 (từ 21/12 đến 23/12)
        if (month === 11 && date >= 21 && date <= 23) {
            return { isHoliday: true, info: HOLIDAY_CONFIGS['22-12'] };
        }
        return { isHoliday: false, info: null };
    }

    function getActiveThemeMode() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('theme') === 'patriotic' || urlParams.get('holiday') === '2-9') {
            return 'patriotic';
        }
        if (urlParams.get('theme') === 'regular' || urlParams.get('theme') === 'normal') {
            return 'regular';
        }

        const savedMode = localStorage.getItem('patriotic_mode_setting') || 'auto';
        if (savedMode === 'patriotic') return 'patriotic';
        if (savedMode === 'regular') return 'regular';

        const hol = checkIsHolidayDate();
        return hol.isHoliday ? 'patriotic' : 'regular';
    }

    // ===================================================
    // DANH SÁCH ÂM NHẠC: NGÀY THƯỜNG & NGÀY LỄ YÊU NƯỚC
    // ===================================================

    // Danh sách bài hát ngày bình thường (không có lễ)
    const REGULAR_SONGS = [
        {
            title: "DỐC ĐỜI",
            artist: "14 Casper & Bon",
            src: "assets/audio/DỐC ĐỜI.mp3",
            badge: "Chill",
            type: "regular"
        },
        {
            title: "HÀNH LÝ TRÊN TAY",
            artist: "Kiên Trịnh",
            src: "assets/audio/HÀNH LÝ TRÊN TAY.mp3",
            badge: "Acoustic",
            type: "regular"
        },
        {
            title: "TRỘM VÍA",
            artist: "Nguyễn Trịnh Tuấn Tú",
            src: "assets/audio/TRỘM VÍA.mp3",
            badge: "Pop",
            type: "regular"
        },
        {
            title: "Cỏ Dại Và Hoa Dành Dành",
            artist: "Nghệ sĩ trẻ",
            src: "assets/audio/Cỏ Dại Và Hoa Dành Dành.mp3",
            badge: "Indie",
            type: "regular"
        },
        {
            title: "Về Đi Thôi",
            artist: "Ngô Lan Hương",
            src: "assets/audio/NGÔ LAN HƯƠNG - Về Đi Thôi.mp3",
            badge: "Pop Ballad",
            type: "regular"
        },
        {
            title: "SAU NÀY EM CƯỚI AI RỒI",
            artist: "Nghệ sĩ trẻ",
            src: "assets/audio/SAU NÀY EM CƯỚI AI RỒI.mp3",
            badge: "Ballad",
            type: "regular"
        },
        {
            title: "Hẹn Lần Sau",
            artist: "Nghệ sĩ trẻ",
            src: "assets/audio/Hẹn Lần Sau.mp3",
            badge: "Chill",
            type: "regular"
        },
        {
            title: "Xuân Thì",
            artist: "Hà Anh Tuấn",
            src: "assets/audio/Xuân Thì.mp3",
            badge: "Acoustic",
            type: "regular"
        },
        {
            title: "Đó chỉ là thành phố của anh",
            artist: "Nghệ sĩ trẻ",
            src: "assets/audio/Đó chỉ là thành phố của anh.mp3",
            badge: "Lofi",
            type: "regular"
        },
        {
            title: "Đập vỡ cây đàn",
            artist: "Nghệ sĩ trẻ",
            src: "assets/audio/Đập vỡ cây đàn.mp3",
            badge: "Remix",
            type: "regular"
        },
        {
            title: "Beauty and a Beat",
            artist: "Justin Bieber ft. Nicki Minaj",
            src: "assets/audio/Beauty and a Beat.mp3",
            badge: "EDM",
            type: "regular"
        }
    ];

    // Danh sách bài hát Cách Mạng & Yêu Nước Nghệ Sĩ Trẻ (Tự động phát vào ngày lễ 2/9, 30/4...)
    const HOLIDAY_SONGS = [
        {
            title: "VIỆT NAM TÔI",
            artist: "Jack ft. K-ICM & Chấn Quốc",
            src: "assets/audio/VIỆT NAM TÔI.mp3",
            fallbackSrc: "assets/audio/VIỆT NAM TÔI.mp3",
            badge: "🇻🇳 Hào Khí Trẻ",
            type: "holiday"
        },
        {
            title: "Một Vòng Việt Nam",
            artist: "Tùng Dương / Trúc Nhân",
            src: "https://ia801509.us.archive.org/15/items/mot-vong-viet-nam/MotVongVietNam.mp3",
            fallbackSrc: "assets/audio/VIỆT NAM TÔI.mp3",
            badge: "🇻🇳 Tự Hào Dân Tộc",
            type: "holiday"
        },
        {
            title: "Khát Vọng Tuổi Trẻ",
            artist: "Tuổi Trẻ Việt Nam (Remix)",
            src: "https://ia801509.us.archive.org/15/items/khat-vong-tuoi-tre/KhatVongTuoiTre.mp3",
            fallbackSrc: "assets/audio/VIỆT NAM TÔI.mp3",
            badge: "🇻🇳 Nhiệt Huyết",
            type: "holiday"
        },
        {
            title: "Máu Đỏ Da Vàng",
            artist: "Erik ft. DTAP",
            src: "https://ia801509.us.archive.org/15/items/mau-do-da-vang/MauDoDaVang.mp3",
            fallbackSrc: "assets/audio/VIỆT NAM TÔI.mp3",
            badge: "🇻🇳 Bản Sắc Việt",
            type: "holiday"
        },
        {
            title: "Nối Vòng Tay Lớn",
            artist: "Rock / Modern EDM Version",
            src: "https://ia801509.us.archive.org/15/items/noi-vong-tay-lon/NoiVongTayLon.mp3",
            fallbackSrc: "assets/audio/VIỆT NAM TÔI.mp3",
            badge: "🇻🇳 Đại Đoàn Kết",
            type: "holiday"
        },
        {
            title: "Lá Cờ",
            artist: "Tạ Quang Thắng",
            src: "https://ia801509.us.archive.org/15/items/la-co-ta-quang-thang/LaCo.mp3",
            fallbackSrc: "assets/audio/VIỆT NAM TÔI.mp3",
            badge: "🇻🇳 Yêu Nước",
            type: "holiday"
        },
        {
            title: "Tiến Quân Ca",
            artist: "Quốc Ca Hào Hùng",
            src: "https://ia801509.us.archive.org/15/items/tien-quan-ca/TienQuanCa.mp3",
            fallbackSrc: "assets/audio/VIỆT NAM TÔI.mp3",
            badge: "🇻🇳 Quốc Ca",
            type: "holiday"
        },
        {
            title: "Hát Mãi Khúc Quân Hành",
            artist: "Bản Phối Trẻ Trung",
            src: "https://ia801509.us.archive.org/15/items/hat-mai-khuc-quan-hanh/HatMaiKhucQuanHanh.mp3",
            fallbackSrc: "assets/audio/VIỆT NAM TÔI.mp3",
            badge: "🇻🇳 Cách Mạng",
            type: "holiday"
        }
    ];

    // ===================================================
    // TRÌNH PHÁT NHẠC THÔNG MINH (SMART AUDIO ENGINE)
    // ===================================================
    let currentThemeMode = getActiveThemeMode();
    let currentPlaylist = [];
    let currentSongIndex = 0;
    let currentActiveTab = currentThemeMode === 'patriotic' ? 'holiday' : 'regular';

    // UI elements
    const holidayBanner = document.getElementById('holiday-top-banner');
    const startHolidayBadge = document.getElementById('start-holiday-badge');
    const startTitle = document.getElementById('start-title');
    const startSubtitle = document.getElementById('start-subtitle');

    // Floating player elements
    const fmpDisc = document.getElementById('fmp-disc');
    const fmpEq = document.getElementById('fmp-eq');
    const fmpBadge = document.getElementById('fmp-badge');
    const fmpSongTitle = document.getElementById('fmp-song-title');
    const fmpArtist = document.getElementById('fmp-artist');
    const fmpPlayIcon = document.getElementById('fmp-play-icon');
    const fmpPlayBtn = document.getElementById('fmp-play-btn');
    const fmpPrevBtn = document.getElementById('fmp-prev-btn');
    const fmpNextBtn = document.getElementById('fmp-next-btn');
    const fmpModeBtn = document.getElementById('fmp-mode-btn');
    const fmpModeIcon = document.getElementById('fmp-mode-icon');
    const fmpListBtn = document.getElementById('fmp-list-btn');
    const fmpDiscToggle = document.getElementById('fmp-disc-toggle');
    const fmpInfoArea = document.getElementById('fmp-info-area');

    // Playlist modal elements
    const playlistModal = document.getElementById('playlist-modal');
    const tabHolidayBtn = document.getElementById('tab-holiday-btn');
    const tabRegularBtn = document.getElementById('tab-regular-btn');
    const playlistContainer = document.getElementById('playlist-items-container');
    const modeOptAuto = document.getElementById('mode-opt-auto');
    const modeOptPatriotic = document.getElementById('mode-opt-patriotic');
    const modeOptRegular = document.getElementById('mode-opt-regular');

    function shuffleArray(array) {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function initPlaylist(mode) {
        if (mode === 'patriotic') {
            // Đưa bài VIỆT NAM TÔI lên đầu để chào mừng ngày lễ, các bài sau shuffle
            const firstSong = HOLIDAY_SONGS[0];
            const remaining = shuffleArray(HOLIDAY_SONGS.slice(1));
            currentPlaylist = [firstSong, ...remaining];
        } else {
            currentPlaylist = shuffleArray(REGULAR_SONGS);
        }
        currentSongIndex = 0;
    }

    function updateFloatingPlayerUI(song, isPlaying) {
        if (!song) return;
        if (fmpSongTitle) fmpSongTitle.textContent = song.title;
        if (fmpArtist) fmpArtist.textContent = song.artist;
        if (fmpBadge) {
            fmpBadge.textContent = song.badge || (song.type === 'holiday' ? '🇻🇳 Yêu Nước' : '🎵 Chill');
            fmpBadge.className = `fmp-badge ${song.type === 'holiday' ? 'patriotic' : ''}`;
        }
        if (fmpPlayIcon) {
            fmpPlayIcon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
        }
        if (fmpDisc) {
            if (isPlaying) fmpDisc.classList.add('spinning');
            else fmpDisc.classList.remove('spinning');
        }
        if (fmpEq) {
            if (isPlaying) fmpEq.classList.add('active');
            else fmpEq.classList.remove('active');
        }
        if (fmpModeIcon) {
            fmpModeIcon.textContent = currentThemeMode === 'patriotic' ? '🇻🇳' : '🎵';
        }
        renderPlaylistItems();
    }

    function playSongByIndex(index, forcePlay = true) {
        if (!currentPlaylist || currentPlaylist.length === 0) {
            initPlaylist(currentThemeMode);
        }
        if (index < 0) index = currentPlaylist.length - 1;
        if (index >= currentPlaylist.length) index = 0;
        currentSongIndex = index;

        const song = currentPlaylist[currentSongIndex];
        if (!song) return;

        bgMusic.src = song.src;
        bgMusic.volume = 0.55;

        if (forcePlay) {
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    updateFloatingPlayerUI(song, true);
                    hideStartScreen();
                }).catch(err => {
                    console.log("Cần tương tác để phát nhạc: ", err);
                    updateFloatingPlayerUI(song, false);
                });
            }
        } else {
            updateFloatingPlayerUI(song, false);
        }
    }

    function playNextSong() {
        let nextIdx = currentSongIndex + 1;
        if (nextIdx >= currentPlaylist.length) {
            initPlaylist(currentThemeMode);
            nextIdx = 0;
        }
        playSongByIndex(nextIdx, true);
    }

    function playPrevSong() {
        let prevIdx = currentSongIndex - 1;
        if (prevIdx < 0) {
            prevIdx = currentPlaylist.length - 1;
        }
        playSongByIndex(prevIdx, true);
    }

    function togglePlayPause() {
        if (!bgMusic) return;
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                const currentSong = currentPlaylist[currentSongIndex];
                updateFloatingPlayerUI(currentSong, true);
            }).catch(e => console.log("Lỗi play:", e));
        } else {
            bgMusic.pause();
            const currentSong = currentPlaylist[currentSongIndex];
            updateFloatingPlayerUI(currentSong, false);
        }
    }

    function handleSongError() {
        const currentSong = currentPlaylist[currentSongIndex];
        console.warn("Lỗi tải bài hát: ", currentSong ? currentSong.title : 'N/A');
        if (currentSong && currentSong.fallbackSrc && bgMusic.src !== currentSong.fallbackSrc) {
            bgMusic.src = currentSong.fallbackSrc;
            bgMusic.play().catch(() => playNextSong());
        } else {
            // Tự động chuyển bài tiếp theo
            setTimeout(playNextSong, 500);
        }
    }

    if (bgMusic) {
        bgMusic.addEventListener('ended', playNextSong);
        bgMusic.addEventListener('error', handleSongError);
        bgMusic.addEventListener('play', () => {
            const currentSong = currentPlaylist[currentSongIndex];
            updateFloatingPlayerUI(currentSong, true);
        });
        bgMusic.addEventListener('pause', () => {
            const currentSong = currentPlaylist[currentSongIndex];
            updateFloatingPlayerUI(currentSong, false);
        });
    }

    function applyHolidayTheme(mode) {
        currentThemeMode = mode;
        const isPatriotic = mode === 'patriotic';
        document.body.classList.toggle('patriotic-theme', isPatriotic);

        const hol = checkIsHolidayDate();
        const holInfo = (hol.isHoliday && hol.info) ? hol.info : HOLIDAY_CONFIGS['2-9'];

        if (holidayBanner) {
            if (isPatriotic) {
                holidayBanner.classList.remove('hidden');
                const titleEl = holidayBanner.querySelector('.holiday-title');
                const descEl = holidayBanner.querySelector('.holiday-desc');
                if (titleEl) titleEl.textContent = holInfo.bannerTitle;
                if (descEl) descEl.textContent = holInfo.bannerDesc;
            } else {
                holidayBanner.classList.add('hidden');
            }
        }

        if (startHolidayBadge) {
            if (isPatriotic) {
                startHolidayBadge.classList.remove('hidden');
                startHolidayBadge.innerHTML = `<span class="star-icon">★</span> <span>${holInfo.startBadge}</span> <span class="star-icon">★</span>`;
            } else {
                startHolidayBadge.classList.add('hidden');
            }
        }

        if (startTitle) {
            if (isPatriotic) {
                startTitle.innerHTML = holInfo.startTitleHtml || '<span class="title-tu-hao">TỰ HÀO</span> <span class="title-viet-nam">VIỆT NAM !</span>';
            } else {
                startTitle.innerHTML = 'HELLO WORLD !';
            }
        }
        if (startSubtitle) {
            startSubtitle.textContent = isPatriotic ? holInfo.startSubtitle : 'Chạm vào màn hình để bắt đầu';
        }

        // Cập nhật nút option trong modal
        const savedSetting = localStorage.getItem('patriotic_mode_setting') || 'auto';
        if (modeOptAuto) modeOptAuto.classList.toggle('active', savedSetting === 'auto');
        if (modeOptPatriotic) modeOptPatriotic.classList.toggle('active', savedSetting === 'patriotic');
        if (modeOptRegular) modeOptRegular.classList.toggle('active', savedSetting === 'regular');

        if (fmpModeIcon) {
            fmpModeIcon.textContent = isPatriotic ? '🇻🇳' : '🎵';
        }

        // Đổi playlist phù hợp
        initPlaylist(mode);
        playSongByIndex(0, !bgMusic.paused);
        resetCanvasParticles();
    }

    function renderPlaylistItems() {
        if (!playlistContainer) return;
        const listToRender = currentActiveTab === 'holiday' ? HOLIDAY_SONGS : REGULAR_SONGS;
        const currentSong = currentPlaylist[currentSongIndex];

        playlistContainer.innerHTML = listToRender.map((song, idx) => {
            const isPlaying = currentSong && currentSong.title === song.title && !bgMusic.paused;
            const isCurrent = currentSong && currentSong.title === song.title;
            const isPatriotic = song.type === 'holiday';

            return `
                <div class="playlist-item ${isCurrent ? 'playing' : ''} ${isPatriotic ? 'patriotic' : ''}" data-tab="${song.type}" data-index="${idx}">
                    <div class="pi-index">${isCurrent && isPlaying ? '<i class="fa-solid fa-volume-high"></i>' : (idx + 1)}</div>
                    <div class="pi-info">
                        <div class="pi-title">${song.title}</div>
                        <div class="pi-artist">${song.artist}</div>
                    </div>
                    <span class="pi-badge ${isPatriotic ? 'patriotic' : ''}">${song.badge || (isPatriotic ? '🇻🇳 Yêu Nước' : '🎵 Chill')}</span>
                    <div class="pi-play-btn">
                        <i class="fa-solid ${isCurrent && isPlaying ? 'fa-pause' : 'fa-play'}"></i>
                    </div>
                </div>
            `;
        }).join('');

        // Gắn sự kiện click từng bài
        playlistContainer.querySelectorAll('.playlist-item').forEach(item => {
            item.addEventListener('click', () => {
                const tab = item.dataset.tab;
                const idx = parseInt(item.dataset.index, 10);
                const targetSong = (tab === 'holiday' ? HOLIDAY_SONGS : REGULAR_SONGS)[idx];

                if (tab !== (currentThemeMode === 'patriotic' ? 'holiday' : 'regular')) {
                    // Chuyển sang playlist của tab đó
                    currentPlaylist = tab === 'holiday' ? [...HOLIDAY_SONGS] : [...REGULAR_SONGS];
                }

                const foundIdx = currentPlaylist.findIndex(s => s.title === targetSong.title);
                if (foundIdx !== -1) {
                    if (currentSongIndex === foundIdx && !bgMusic.paused) {
                        togglePlayPause();
                    } else {
                        playSongByIndex(foundIdx, true);
                    }
                }
            });
        });
    }

    // Gắn sự kiện cho các nút điều khiển Player
    if (fmpPlayBtn) fmpPlayBtn.addEventListener('click', togglePlayPause);
    if (fmpNextBtn) fmpNextBtn.addEventListener('click', playNextSong);
    if (fmpPrevBtn) fmpPrevBtn.addEventListener('click', playPrevSong);

    if (fmpModeBtn) {
        fmpModeBtn.addEventListener('click', () => {
            const nextMode = currentThemeMode === 'patriotic' ? 'regular' : 'patriotic';
            localStorage.setItem('patriotic_mode_setting', nextMode);
            applyHolidayTheme(nextMode);
        });
    }

    const openPlaylist = () => {
        if (playlistModal) {
            currentActiveTab = currentThemeMode === 'patriotic' ? 'holiday' : 'regular';
            if (tabHolidayBtn) tabHolidayBtn.classList.toggle('active', currentActiveTab === 'holiday');
            if (tabRegularBtn) tabRegularBtn.classList.toggle('active', currentActiveTab === 'regular');
            renderPlaylistItems();
            playlistModal.classList.remove('hidden');
        }
    };

    if (fmpListBtn) fmpListBtn.addEventListener('click', openPlaylist);
    if (fmpDiscToggle) fmpDiscToggle.addEventListener('click', openPlaylist);
    if (fmpInfoArea) fmpInfoArea.addEventListener('click', openPlaylist);

    if (tabHolidayBtn) {
        tabHolidayBtn.addEventListener('click', () => {
            currentActiveTab = 'holiday';
            tabHolidayBtn.classList.add('active');
            if (tabRegularBtn) tabRegularBtn.classList.remove('active');
            renderPlaylistItems();
        });
    }

    if (tabRegularBtn) {
        tabRegularBtn.addEventListener('click', () => {
            currentActiveTab = 'regular';
            tabRegularBtn.classList.add('active');
            if (tabHolidayBtn) tabHolidayBtn.classList.remove('active');
            renderPlaylistItems();
        });
    }

    if (modeOptAuto) {
        modeOptAuto.addEventListener('click', () => {
            localStorage.setItem('patriotic_mode_setting', 'auto');
            applyHolidayTheme(getActiveThemeMode());
        });
    }
    if (modeOptPatriotic) {
        modeOptPatriotic.addEventListener('click', () => {
            localStorage.setItem('patriotic_mode_setting', 'patriotic');
            applyHolidayTheme('patriotic');
        });
    }
    if (modeOptRegular) {
        modeOptRegular.addEventListener('click', () => {
            localStorage.setItem('patriotic_mode_setting', 'regular');
            applyHolidayTheme('regular');
        });
    }

    function hideStartScreen() {
        if (startScreen && !startScreen.classList.contains('fade-out')) {
            startScreen.classList.add('fade-out');
            if (profileContainer) {
                profileContainer.classList.remove('hidden');
            }
        }
    }

    // Khởi tạo Playlist & Theme ban đầu
    applyHolidayTheme(currentThemeMode);

    if (startScreen) {
        startScreen.addEventListener('click', () => {
            hideStartScreen();
            if (bgMusic && bgMusic.paused) {
                bgMusic.play().then(() => {
                    const currentSong = currentPlaylist[currentSongIndex];
                    updateFloatingPlayerUI(currentSong, true);
                }).catch(error => {
                    console.log("Lỗi khi phát nhạc sau tương tác: ", error);
                });
            }
        });
    }

    // ===================================================
    // CANVAS HIỆU ỨNG LỄ HỘI (PHÁO HOA + SAO VÀNG / TUYẾT)
    // ===================================================
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let snowflakes = [];
    let fireworks = [];
    let goldenStars = [];

    function initCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', initCanvas);
    initCanvas();

    // Tuyết rơi ngày thường
    class Snowflake {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height - height;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * 1.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 1;
            this.opacity = Math.random() * 0.6 + 0.2;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;

            if (this.y > height) {
                this.y = -10;
                this.x = Math.random() * width;
                this.size = Math.random() * 3 + 1;
            }
            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.shadowBlur = this.size;
            ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
            ctx.fill();
        }
    }

    // Pháo hoa lễ hội rực rỡ
    class FireworkSpark {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 1;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.alpha = 1;
            this.decay = Math.random() * 0.02 + 0.012;
            this.gravity = 0.06;
            this.size = Math.random() * 2.5 + 1.5;
        }
        update() {
            this.vx *= 0.98;
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= this.decay;
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(this.alpha, 0);
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 6;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.restore();
        }
    }

    class FireworkRocket {
        constructor() {
            this.x = Math.random() * (width - 100) + 50;
            this.y = height;
            this.targetY = Math.random() * (height * 0.45) + 60;
            this.speed = Math.random() * 3 + 5;
            this.color = ['#ff0033', '#ffd700', '#ff6b00', '#ffffff', '#eab308'][Math.floor(Math.random() * 5)];
            this.sparks = [];
            this.exploded = false;
            this.dead = false;
        }
        update() {
            if (!this.exploded) {
                this.y -= this.speed;
                if (this.y <= this.targetY) {
                    this.explode();
                }
            } else {
                for (let i = this.sparks.length - 1; i >= 0; i--) {
                    this.sparks[i].update();
                    if (this.sparks[i].alpha <= 0) {
                        this.sparks.splice(i, 1);
                    }
                }
                if (this.sparks.length === 0) {
                    this.dead = true;
                }
            }
        }
        explode() {
            this.exploded = true;
            const sparkCount = Math.floor(Math.random() * 25) + 35;
            for (let i = 0; i < sparkCount; i++) {
                this.sparks.push(new FireworkSpark(this.x, this.y, this.color));
            }
        }
        draw() {
            if (!this.exploded) {
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 8;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.restore();
            } else {
                for (const spark of this.sparks) {
                    spark.draw();
                }
            }
        }
    }

    // Sao vàng 5 cánh lấp lánh ngày lễ
    class GoldenStar {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height - height;
            this.size = Math.random() * 6 + 4;
            this.speedY = Math.random() * 1 + 0.4;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.angle = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.04;
            this.opacity = Math.random() * 0.6 + 0.3;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.y * 0.015) * 0.4;
            this.angle += this.rotSpeed;
            if (this.y > height + 20) {
                this.y = -20;
                this.x = Math.random() * width;
            }
            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.beginPath();
            const spikes = 5;
            const outerRadius = this.size;
            const innerRadius = this.size / 2.2;
            let rot = (Math.PI / 2) * 3;
            let x = 0, y = 0;
            const step = Math.PI / spikes;

            ctx.moveTo(0, -outerRadius);
            for (let i = 0; i < spikes; i++) {
                x = Math.cos(rot) * outerRadius;
                y = Math.sin(rot) * outerRadius;
                ctx.lineTo(x, y);
                rot += step;

                x = Math.cos(rot) * innerRadius;
                y = Math.sin(rot) * innerRadius;
                ctx.lineTo(x, y);
                rot += step;
            }
            ctx.lineTo(0, -outerRadius);
            ctx.closePath();

            ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(255, 215, 0, 0.9)";
            ctx.fill();
            ctx.restore();
        }
    }

    function resetCanvasParticles() {
        snowflakes = [];
        fireworks = [];
        goldenStars = [];

        if (currentThemeMode === 'patriotic') {
            for (let i = 0; i < 40; i++) {
                goldenStars.push(new GoldenStar());
            }
        } else {
            for (let i = 0; i < 150; i++) {
                snowflakes.push(new Snowflake());
            }
        }
    }

    let lastFireworkTime = 0;
    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);

        if (currentThemeMode === 'patriotic') {
            // Hiệu ứng pháo hoa
            const now = Date.now();
            if (now - lastFireworkTime > 1100 && fireworks.length < 5) {
                fireworks.push(new FireworkRocket());
                lastFireworkTime = now;
            }

            for (let i = fireworks.length - 1; i >= 0; i--) {
                fireworks[i].update();
                fireworks[i].draw();
                if (fireworks[i].dead) {
                    fireworks.splice(i, 1);
                }
            }

            // Sao vàng bay
            for (let i = 0; i < goldenStars.length; i++) {
                goldenStars[i].update();
                goldenStars[i].draw();
            }
        } else {
            // Tuyết rơi ngày thường
            for (let i = 0; i < snowflakes.length; i++) {
                snowflakes[i].update();
                snowflakes[i].draw();
            }
        }

        requestAnimationFrame(animateCanvas);
    }

    resetCanvasParticles();
    animateCanvas();

    // ===================================================
    // HIỆU ỨNG CLICK CHUỘT (TỰ HÀO DÂN TỘC / NGÀY THƯỜNG)
    // ===================================================
    const PATRIOTIC_SLOGANS = [
        "🇻🇳 Việt Nam Muôn Năm!",
        "⭐️ Tự Hào Việt Nam ⭐️",
        "🇻🇳 Quốc Khánh 2/9 Bất Diệt!",
        "★ Hoàng Sa & Trường Sa là của VN! ★",
        "Nguyễn Trịnh Tuấn Tú ❤️ Việt Nam",
        "🇻🇳 Độc Lập - Tự Do - Hạnh Phúc",
        "🇻🇳 Tôi Yêu Tổ Quốc Tôi!"
    ];

    const REGULAR_SLOGANS = [
        "Tuấn Tú",
        "Hello World!",
        "✨ Welcome!",
        "⚡ Code with Passion",
        "Tuấn Tú Profile"
    ];

    document.addEventListener('click', function (e) {
        if (!startScreen.classList.contains('fade-out') || e.target.tagName.toLowerCase() === 'a' || e.target.closest('a') || e.target.closest('button') || e.target.closest('.floating-music-player')) return;

        const isPatriotic = currentThemeMode === 'patriotic';
        const sloganList = isPatriotic ? PATRIOTIC_SLOGANS : REGULAR_SLOGANS;
        const randomText = sloganList[Math.floor(Math.random() * sloganList.length)];

        const textElement = document.createElement('div');
        textElement.textContent = randomText;
        textElement.className = `floating-text-effect ${isPatriotic ? 'patriotic' : ''}`;

        textElement.style.left = `${e.clientX}px`;
        textElement.style.top = `${e.clientY}px`;

        document.body.appendChild(textElement);

        setTimeout(() => {
            textElement.remove();
        }, 1500);
    });
    document.querySelectorAll('.custom-close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.custom-modal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    });
    document.querySelectorAll('.custom-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
    const vtv1Url = "https://liveh12.vtvprime.vn/hls/VTV1/index.m3u8";
    const vtv3Url = "https://liveh12.vtvprime.vn/hls/VTV3/index.m3u8";

    function setupHlsPlayer(videoElementId, streamUrl) {
        const video = document.getElementById(videoElementId);
        if (!video) return;

        if (typeof Hls !== 'undefined' && Hls.isSupported()) {
            const hls = new Hls({
                maxMaxBufferLength: 10,
                enableWorker: true,
                lowLatencyMode: true
            });
            hls.loadSource(streamUrl);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                console.log(videoElementId + " manifest loaded successfully!");
            });
            hls.on(Hls.Events.ERROR, function (event, data) {
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.log("Lỗi mạng đầu phát " + videoElementId + ", đang thử tải lại...");
                            hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            console.log("Lỗi giải mã đầu phát " + videoElementId + ", đang khôi phục...");
                            hls.recoverMediaError();
                            break;
                        default:
                            break;
                    }
                }
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = streamUrl;
        }
    }
    const weatherEl = document.getElementById('weather-datetime');
    let hanoiWeather = "Đang tải...";
    let hcmWeather = "Đang tải...";

    function getWeatherDescription(code) {
        const codes = {
            0: { desc: 'Trời quang', icon: '<i class="fa-solid fa-sun weather-icon-sun" style="color: #f59e0b; margin-left: 5px;"></i>' },
            1: { desc: 'Ít mây', icon: '<i class="fa-solid fa-cloud-sun" style="color: #e2e8f0; margin-left: 5px;"></i>' },
            2: { desc: 'Mây rải rác', icon: '<i class="fa-solid fa-cloud-sun" style="color: #cbd5e1; margin-left: 5px;"></i>' },
            3: { desc: 'Nhiều mây', icon: '<i class="fa-solid fa-cloud" style="color: #94a3b8; margin-left: 5px;"></i>' },
            45: { desc: 'Sương mù', icon: '<i class="fa-solid fa-smog" style="color: #cbd5e1; margin-left: 5px;"></i>' },
            48: { desc: 'Sương mù', icon: '<i class="fa-solid fa-smog" style="color: #cbd5e1; margin-left: 5px;"></i>' },
            51: { desc: 'Mưa phùn nhẹ', icon: '<i class="fa-solid fa-cloud-rain" style="color: #60a5fa; margin-left: 5px;"></i>' },
            53: { desc: 'Mưa phùn vừa', icon: '<i class="fa-solid fa-cloud-rain" style="color: #3b82f6; margin-left: 5px;"></i>' },
            55: { desc: 'Mưa phùn dày', icon: '<i class="fa-solid fa-cloud-rain" style="color: #2563eb; margin-left: 5px;"></i>' },
            61: { desc: 'Mưa nhẹ', icon: '<i class="fa-solid fa-cloud-showers-heavy" style="color: #60a5fa; margin-left: 5px;"></i>' },
            63: { desc: 'Mưa vừa', icon: '<i class="fa-solid fa-cloud-showers-heavy" style="color: #3b82f6; margin-left: 5px;"></i>' },
            65: { desc: 'Mưa to', icon: '<i class="fa-solid fa-cloud-showers-heavy" style="color: #1d4ed8; margin-left: 5px;"></i>' },
            80: { desc: 'Mưa rào nhẹ', icon: '<i class="fa-solid fa-cloud-showers-heavy" style="color: #60a5fa; margin-left: 5px;"></i>' },
            81: { desc: 'Mưa rào vừa', icon: '<i class="fa-solid fa-cloud-showers-heavy" style="color: #3b82f6; margin-left: 5px;"></i>' },
            82: { desc: 'Mưa rào mạnh', icon: '<i class="fa-solid fa-cloud-showers-heavy" style="color: #1d4ed8; margin-left: 5px;"></i>' },
            95: { desc: 'Mưa dông', icon: '<i class="fa-solid fa-cloud-bolt weather-icon-thunder" style="color: #facc15; margin-left: 5px;"></i>' },
            96: { desc: 'Mưa dông kèm đá', icon: '<i class="fa-solid fa-cloud-bolt weather-icon-thunder" style="color: #eab308; margin-left: 5px;"></i>' },
            99: { desc: 'Mưa dông kèm đá', icon: '<i class="fa-solid fa-cloud-bolt weather-icon-thunder" style="color: #ca8a04; margin-left: 5px;"></i>' }
        };
        return codes[code] || { desc: 'Thời tiết ổn định', icon: '<i class="fa-solid fa-temperature-half" style="color: #f87171; margin-left: 5px;"></i>' };
    }

    function updateDateTime() {
        const now = new Date();
        const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        const dayName = days[now.getDay()];
        const dateStr = String(now.getDate()).padStart(2, '0');
        const monthStr = String(now.getMonth() + 1).padStart(2, '0');
        const yearStr = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds} - ${dayName}, ${dateStr}/${monthStr}/${yearStr}`;
        if (weatherEl) {
            weatherEl.innerHTML = `Hà Nội: ${hanoiWeather} • TP. HCM: ${hcmWeather} • ${timeString}`;
        }
    }

    function adjustWeatherCode(code, precipitation, cloudCover) {
        if ([51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99].includes(code) && parseFloat(precipitation) === 0) {
            if (cloudCover <= 20) return 0;
            if (cloudCover <= 70) return 1;
            return 3;
        }
        return code;
    }

    function fetchWeather() {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=21.0285,10.8230&longitude=105.8542,106.6296&current=temperature_2m,weather_code,precipitation,cloud_cover&timezone=auto')
            .then(res => res.json())
            .then(data => {
                const isArray = Array.isArray(data);
                const hnData = isArray ? data[0] : data;
                const hcmData = isArray ? data[1] : null;

                if (hnData && hnData.current) {
                    const correctedCode = adjustWeatherCode(
                        hnData.current.weather_code,
                        hnData.current.precipitation,
                        hnData.current.cloud_cover
                    );
                    const info = getWeatherDescription(correctedCode);
                    hanoiWeather = `${Math.round(hnData.current.temperature_2m)}°C ${info.icon}`;
                }
                if (hcmData && hcmData.current) {
                    const correctedCode = adjustWeatherCode(
                        hcmData.current.weather_code,
                        hcmData.current.precipitation,
                        hcmData.current.cloud_cover
                    );
                    const info = getWeatherDescription(correctedCode);
                    hcmWeather = `${Math.round(hcmData.current.temperature_2m)}°C ${info.icon}`;
                }
                updateDateTime();
            })
            .catch(() => {
                hanoiWeather = '<i class="fa-solid fa-circle-exclamation" style="color: #ef4444; margin-left: 5px;"></i> N/A';
                hcmWeather = '<i class="fa-solid fa-circle-exclamation" style="color: #ef4444; margin-left: 5px;"></i> N/A';
                updateDateTime();
            });
    }

    fetchWeather();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    setInterval(fetchWeather, 600000);

    setupHlsPlayer('vtv1-player', vtv1Url);
    setupHlsPlayer('vtv3-player', vtv3Url);
    applySiteSettings();
    initAdminVisitorLogger();
    showAdminPopupMessage();
});

function initAdminVisitorLogger() {
    const visitorKey = 'visitor_history';
    const ipEl = document.getElementById('user-ip');
    const countryEl = document.getElementById('user-country');
    const storeVisitor = data => {
        try {
            const history = JSON.parse(localStorage.getItem(visitorKey) || '[]');
            const now = new Date().toISOString();
            const exists = history.some(item => item.ip === data.ip && item.date.startsWith(now.slice(0, 10)));
            if (!exists) {
                history.unshift({
                    ip: data.ip || 'Không rõ',
                    isp: data.org || 'Không rõ',
                    city: data.city || 'Không rõ',
                    region: data.region || 'Không rõ',
                    country: data.country_name || data.country || 'Không rõ',
                    date: now
                });
                localStorage.setItem(visitorKey, JSON.stringify(history.slice(0, 200)));
            }
        } catch (err) {
            console.warn('Không thể lưu lịch sử truy cập', err);
        }
    };

    if (window.location.protocol === 'file:' || !ipEl || !countryEl) {
        return;
    }

    fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
            if (data.ip) {
                if (ipEl) ipEl.textContent = data.ip;
                if (countryEl) countryEl.textContent = `${data.country_name || 'Không rõ'} • ${data.org || 'ISP không rõ'}`;
                storeVisitor(data);
            }
        })
        .catch(() => {
            fetch('https://freeipapi.com/api/json')
                .then(res => res.json())
                .then(data => {
                    if (data.ipAddress) {
                        if (ipEl) ipEl.textContent = data.ipAddress;
                        if (countryEl) countryEl.textContent = `${data.countryName || 'Không rõ'} • ${data.isp || 'ISP không rõ'}`;
                        storeVisitor({
                            ip: data.ipAddress,
                            country_name: data.countryName,
                            org: data.isp,
                            city: data.city || '',
                            region: data.region || ''
                        });
                    }
                })
                .catch(() => {
                    if (ipEl) ipEl.textContent = 'Không rõ';
                    if (countryEl) countryEl.textContent = 'Không rõ';
                });
        });
}

function showAdminPopupMessage() {
    const message = localStorage.getItem('admin_popup_message');
    if (!message) return;

    const popup = document.createElement('div');
    popup.className = 'admin-popup-notice';
    popup.innerHTML = `
        <div class="admin-popup-inner">
            <div class="admin-popup-title">Thông báo Admin</div>
            <div class="admin-popup-body">${message}</div>
            <button type="button" class="admin-popup-close">Đã hiểu</button>
        </div>
    `;
    document.body.appendChild(popup);
    popup.querySelector('.admin-popup-close').addEventListener('click', () => {
        popup.remove();
    });
}

function clearAdminPopupMessage() {
    localStorage.removeItem('admin_popup_message');
}

function getAdminVisitorHistory() {
    try {
        return JSON.parse(localStorage.getItem('visitor_history') || '[]');
    } catch (err) {
        return [];
    }
}

function getAdminPopupMessage() {
    return localStorage.getItem('admin_popup_message') || '';
}

function setAdminPopupMessage(message) {
    if (message) {
        localStorage.setItem('admin_popup_message', message);
    } else {
        clearAdminPopupMessage();
    }
}

function addAdminActivityLog(entry) {
    try {
        const logs = JSON.parse(localStorage.getItem('admin_activity_logs') || '[]');
        logs.unshift({ text: entry, time: new Date().toLocaleString('vi-VN') });
        localStorage.setItem('admin_activity_logs', JSON.stringify(logs.slice(0, 100)));
    } catch (err) {
        console.warn('Không thể lưu log admin', err);
    }
}

function applySiteSettings() {
    try {
        const s = JSON.parse(localStorage.getItem('site_settings') || '{}');
        const root = document.documentElement.style;
        if (s.fontFamily) root.setProperty('--font-family', s.fontFamily);
        if (s.nameFontSize) root.setProperty('--name-font-size', s.nameFontSize);
        if (s.bgSize) root.setProperty('--bg-size', s.bgSize);
        if (s.bgImage) {
            // set body background image (admins should use safe URLs)
            document.body.style.backgroundImage = `url('${s.bgImage}')`;
        }
    } catch (e) {
        console.warn('Không thể áp dụng site settings', e);
    }
}

function warnStealer() {
    console.log("%cHOANG SA AND TRUONG SA BELONGS TO VIET NAM !\nFROM NGUYEN TRINH TUAN TU WITH LOVE <3", "color: #ff0000; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(255,0,0,0.5);");
}

// Cảnh báo ngay khi script tải
warnStealer();

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || e.keyCode === 123) {
        warnStealer();
        e.preventDefault();
        return false;
    }
    if (e.key === 'F5' || e.keyCode === 116) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && (e.key === 'r' || e.key === 'R')) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        warnStealer();
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        warnStealer();
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        warnStealer();
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        warnStealer();
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        return false;
    }
});
