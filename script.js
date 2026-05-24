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
    fetch('https://ipwho.is/')
        .then(res => res.json())
        .then(data => {
            const ipEl = document.getElementById('user-ip');
            const countryEl = document.getElementById('user-country');
            if(data.success) {
                if(ipEl) ipEl.textContent = data.ip;
                if(countryEl) countryEl.textContent = data.country;
            } else {
                if(ipEl) ipEl.textContent = 'Không rõ';
                if(countryEl) countryEl.textContent = 'Không rõ';
            }
        })
        .catch(() => {
            const ipEl = document.getElementById('user-ip');
            const countryEl = document.getElementById('user-country');
            if(ipEl) ipEl.textContent = 'Lỗi';
            if(countryEl) countryEl.textContent = 'Lỗi';
        });
    const todayStr = new Date().toISOString().slice(0,10).replace(/-/g, '');
    fetch(`https://api.counterapi.dev/v1/tuantu_profile/visits_${todayStr}/up`)
        .then(res => res.json())
        .then(data => {
            const countEl = document.getElementById('visit-count');
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
            const countEl = document.getElementById('visit-count');
            if(countEl) countEl.textContent = '---';
        });
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
            console.log("Autoplay bị chặn bởi trình duyệt, đợi người dùng click màn hình chào.");
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
