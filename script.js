document.addEventListener('DOMContentLoaded', () => {
    const _0x4f2a = ["Tmd1eeG7hW4gVHLhu4tuaCBUdeG6pW4gVMO6", "wqkgQuG6o24gcXV54buBbiB0aHXhu5ljIHbhu4EgTmd1eeG7hW4gVHLhu4tuaCBUdeG6pW4gVMO6"];
    try {
        const _n = document.getElementById('obf-name');
        if(_n) _n.textContent = decodeURIComponent(escape(atob(_0x4f2a[0])));
        const _c = document.getElementById('obf-copyright');
        if(_c) _c.textContent = decodeURIComponent(escape(atob(_0x4f2a[1])));
    } catch(e) {}
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
        if(ipEl) ipEl.textContent = '127.0.0.1 ';
        if(countryEl) countryEl.textContent = 'Việt Nam';
    } else {
        fetch('https://freeipapi.com/api/json')
            .then(res => res.json())
            .then(data => {
                if(data.ipAddress) {
                    if(ipEl) ipEl.textContent = data.ipAddress;
                    if(countryEl) countryEl.textContent = data.countryName;
                } else {
                    if(ipEl) ipEl.textContent = 'Không rõ';
                    if(countryEl) countryEl.textContent = 'Không rõ';
                }
            })
            .catch(() => {
                fetch('https://ipapi.co/json/')
                    .then(res => res.json())
                    .then(data => {
                        if(data.ip) {
                            if(ipEl) ipEl.textContent = data.ip;
                            if(countryEl) countryEl.textContent = data.country_name;
                        } else {
                            if(ipEl) ipEl.textContent = 'Không rõ';
                            if(countryEl) countryEl.textContent = 'Không rõ';
                        }
                    })
                    .catch(() => {
                        if(ipEl) ipEl.textContent = 'Lỗi';
                        if(countryEl) countryEl.textContent = 'Lỗi';
                    });
            });
    }
    const todayStr = new Date().toISOString().slice(0,10).replace(/-/g, '');
    const countEl = document.getElementById('visit-count');
    if (window.location.protocol === 'file:') {
        let localVisits = localStorage.getItem(`visits_${todayStr}`) || 0;
        localVisits = parseInt(localVisits) + 1;
        localStorage.setItem(`visits_${todayStr}`, localVisits);
        if(countEl) countEl.textContent = localVisits + " (Local)";
    } else {
        fetch(`https://api.counterapi.dev/v1/tuantu_profile/visits_${todayStr}/up`)
            .then(res => res.json())
            .then(data => {
                if(countEl) countEl.textContent = data.count;
                setInterval(() => {
                    fetch(`https://api.counterapi.dev/v1/tuantu_profile/visits_${todayStr}`)
                        .then(r => r.json())
                        .then(d => {
                            if(countEl) countEl.textContent = d.count;
                        }).catch(() => {});
                }, 15000);
            })
            .catch(() => {
                if(countEl) countEl.textContent = '---';
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
    const sdtInput  = document.getElementById('sdt-input');
    const sdtCheckBtn = document.getElementById('sdt-check-btn');
    const sdtResult   = document.getElementById('sdt-result');

    const VN_PREFIXES = {
        '032':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '033':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '034':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '035':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '036':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '037':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '038':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '039':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '086':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '096':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '097':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '098':{ carrier:'Viettel', type:'Di động', color:'#e53935', bg:'#3d0808', emoji:'' },
        '070':{ carrier:'MobiFone', type:'Di động', color:'#1565c0', bg:'#0a1929', emoji:'' },
        '076':{ carrier:'MobiFone', type:'Di động', color:'#1565c0', bg:'#0a1929', emoji:'' },
        '077':{ carrier:'MobiFone', type:'Di động', color:'#1565c0', bg:'#0a1929', emoji:'' },
        '078':{ carrier:'MobiFone', type:'Di động', color:'#1565c0', bg:'#0a1929', emoji:'' },
        '079':{ carrier:'MobiFone', type:'Di động', color:'#1565c0', bg:'#0a1929', emoji:'' },
        '089':{ carrier:'MobiFone', type:'Di động', color:'#1565c0', bg:'#0a1929', emoji:'' },
        '090':{ carrier:'MobiFone', type:'Di động', color:'#1565c0', bg:'#0a1929', emoji:'' },
        '093':{ carrier:'MobiFone', type:'Di động', color:'#1565c0', bg:'#0a1929', emoji:'' },
        '081':{ carrier:'VinaPhone', type:'Di động', color:'#2e7d32', bg:'#0a1f0a', emoji:'' },
        '082':{ carrier:'VinaPhone', type:'Di động', color:'#2e7d32', bg:'#0a1f0a', emoji:'' },
        '083':{ carrier:'VinaPhone', type:'Di động', color:'#2e7d32', bg:'#0a1f0a', emoji:'' },
        '084':{ carrier:'VinaPhone', type:'Di động', color:'#2e7d32', bg:'#0a1f0a', emoji:'' },
        '085':{ carrier:'VinaPhone', type:'Di động', color:'#2e7d32', bg:'#0a1f0a', emoji:'' },
        '091':{ carrier:'VinaPhone', type:'Di động', color:'#2e7d32', bg:'#0a1f0a', emoji:'' },
        '094':{ carrier:'VinaPhone', type:'Di động', color:'#2e7d32', bg:'#0a1f0a', emoji:'' },
        '088':{ carrier:'VinaPhone', type:'Di động', color:'#2e7d32', bg:'#0a1f0a', emoji:'' },
        '052':{ carrier:'Vietnamobile', type:'Di động', color:'#f57c00', bg:'#1e1200', emoji:'' },
        '056':{ carrier:'Vietnamobile', type:'Di động', color:'#f57c00', bg:'#1e1200', emoji:'' },
        '058':{ carrier:'Vietnamobile', type:'Di động', color:'#f57c00', bg:'#1e1200', emoji:'' },
        '092':{ carrier:'Vietnamobile', type:'Di động', color:'#f57c00', bg:'#1e1200', emoji:'' },
        '059':{ carrier:'Gmobile', type:'Di động', color:'#7b1fa2', bg:'#1a0a1e', emoji:'' },
        '099':{ carrier:'Gmobile', type:'Di động', color:'#7b1fa2', bg:'#1a0a1e', emoji:'' },
        '055':{ carrier:'Reddi (Mobicast)', type:'Di động', color:'#c62828', bg:'#200808', emoji:'' },
        '069':{ carrier:'Indochina Telecom', type:'Di động', color:'#00838f', bg:'#001a1c', emoji:'' },
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
        const fmt = `${num.slice(0,4)} ${num.slice(4,7)} ${num.slice(7,10)}`;
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
                        }).catch(() => {});
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
            html += `<div class="ch-node-card pending" id="ch-node-${nodeKey.replace(/\./g,'-')}">
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
            cards[nodeKey] = `<div class="ch-node-card ${statusClass}" id="ch-node-${nodeKey.replace(/\./g,'-')}">
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
                const avg = (times.reduce((a,b) => a+b, 0) / times.length * 1000).toFixed(1);
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
        } catch(e) {}
        return { ok: false, label: ' Không rõ' };
    }

    const songs = [
        "assets/audio/Beauty and a Beat.mp3",
        "assets/audio/Cỏ Dại Và Hoa Dành Dành.mp3",
        "assets/audio/DỐC ĐỜI.mp3",
        "assets/audio/HÀNH LÝ TRÊN TAY.mp3",
        "assets/audio/SAU NÀY EM CƯỚI AI RỒI.mp3",
        "assets/audio/VIỆT NAM TÔ.mp3"
    ];

    let currentPlaylist = [];
    let currentSongIndex = -1;
    function shuffleArray(array) {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    function initPlaylist() {
        currentPlaylist = shuffleArray(songs);
        currentSongIndex = 0;
    }
    function hideStartScreen() {
        if (startScreen && !startScreen.classList.contains('fade-out')) {
            startScreen.classList.add('fade-out');
            if (profileContainer) {
                profileContainer.classList.remove('hidden');
            }
        }
    }
    function playNextSong() {
        if (currentPlaylist.length === 0 || currentSongIndex >= currentPlaylist.length) {
            initPlaylist();
        }
        const songPath = currentPlaylist[currentSongIndex];
        bgMusic.src = songPath;
        bgMusic.volume = 0.5;
        
        bgMusic.play().then(() => {
            console.log("Đang phát bài hát ngẫu nhiên: " + songPath);
            hideStartScreen();
        }).catch(error => {
            console.log("Không thể tự động phát nhạc: ", error);
        });
        
        currentSongIndex++;
    }
    bgMusic.addEventListener('ended', playNextSong);
    initPlaylist();
    if (bgMusic) {
        bgMusic.src = currentPlaylist[currentSongIndex];
        bgMusic.volume = 0.5;
        currentSongIndex++;
        bgMusic.play().then(() => {
            console.log("Autoplay thành công!");
            hideStartScreen();
        }).catch(error => {
            console.log("HOANG SA AND TRUONG SA BELONGS TO VIET NAM ! ");
            console.log("FROM NGUYEN TRINH TUAN TU WHIT LOVE <3 ");
        });
    }
    startScreen.addEventListener('click', () => {
        hideStartScreen();
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().catch(error => {
                console.log("Lỗi khi phát nhạc sau tương tác: ", error);
            });
        }
    });
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let snowflakes = [];

    function initCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', initCanvas);
    initCanvas();

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
    function createSnowflakes() {
        for (let i = 0; i < 150; i++) { 
            snowflakes.push(new Snowflake());
        }
    }
    function animateSnowflakes() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < snowflakes.length; i++) {
            snowflakes[i].update();
            snowflakes[i].draw();
        }
        requestAnimationFrame(animateSnowflakes);
    }

    createSnowflakes();
    animateSnowflakes();
    document.addEventListener('click', function(e) {
        if (!startScreen.classList.contains('fade-out') || e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;

        const textElement = document.createElement('div');
        textElement.textContent = 'Tuấn Tú';
        textElement.className = 'floating-text-effect';
        
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
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                console.log(videoElementId + " manifest loaded successfully!");
            });
            hls.on(Hls.Events.ERROR, function(event, data) {
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
});

function warnStealer() {
    console.log(
        "%cĂN TRỘM SRC HAY HACK THÌ ĐI THẮP NÉN HƯƠNG ĐI KO LỘ ẢNH ĐẤY !",
        "color: #ff0000; font-size: 32px; font-weight: bold; background-color: #000; border: 4px solid #ff0000; padding: 15px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-shadow: 3px 3px 0px #330000; border-radius: 8px; line-height: 1.5;"
    );
}

// Cảnh báo ngay khi script tải
warnStealer();

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('keydown', function(e) {
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
