// ========================================
// CONFIGURATION - EDIT THESE VALUES
// ========================================
const CONFIG = {
    // Birthday date - CHANGE THIS to your date (Format: YYYY-MM-DDTHH:MM:SS)
    birthdayDate: '2026-03-15T00:00:00',
    
    // WhatsApp number - CHANGE THIS to your number (include country code)
    whatsappNumber: '91XXXXXXXXXX',
    
    // WhatsApp message
    whatsappMessage: 'Happy Birthday My Love ❤️ I will always choose you.',
    
    // Total memories count
    totalMemories: 6,
    
    // Balloon labels for memories
    balloonLabels: ['First Date', 'Our Trip', 'Best Day', 'That Moment', 'Sweet Time', 'Forever'],
    
    // YouTube Video ID for birthday song
    youtubeVideoId: '1GWKhpN1KyA'
};

// YouTube Player
let youtubePlayer;

// ========================================
// COUNTDOWN PAGE FUNCTIONS
// ========================================
function startCountdown() {
    const countdownDate = new Date(CONFIG.birthdayDate).getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        if (distance < 0) {
            clearInterval(timer);
            // Redirect to birthday page
            window.location.href = 'birthday.html';
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsAnimation');
    if (!heartsContainer) return;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.bottom = '-50px';
        heart.style.animation = 'floatUp 5s linear';
        heart.style.opacity = '0.7';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

// ========================================
// BIRTHDAY CAKE PAGE FUNCTIONS
// ========================================
function enterCake() {
    document.getElementById('cakeStep1').classList.remove('active');
    document.getElementById('cakeStep2').classList.add('active');
}

function blowCandles() {
    const flame = document.getElementById('flameToExtinguish');
    const candleSimple = document.getElementById('candleSimple');
    
    if (!flame) return;
    
    // Add blowing animation to flame
    flame.classList.add('blowing');
    
    // Create smoke effect after flame starts blowing
    setTimeout(() => {
        const smoke = document.createElement('div');
        smoke.className = 'smoke';
        smoke.innerHTML = '💨';
        smoke.style.position = 'absolute';
        smoke.style.top = '-30px';
        smoke.style.left = '50%';
        smoke.style.transform = 'translateX(-50%)';
        smoke.style.fontSize = '2em';
        candleSimple.appendChild(smoke);
        
        // Remove smoke after animation
        setTimeout(() => smoke.remove(), 2000);
    }, 800);
    
    // Play birthday song immediately - YouTube version
    setTimeout(() => {
        if (youtubePlayer && youtubePlayer.playVideo) {
            try {
                youtubePlayer.setVolume(80);
                // Start from 1 minute (60 seconds) forward
                youtubePlayer.seekTo(60, true);
                youtubePlayer.playVideo();
                console.log('YouTube birthday song playing from 1 minute!');
            } catch (e) {
                console.log('YouTube autoplay error:', e);
                // Retry after delay
                setTimeout(() => {
                    try {
                        youtubePlayer.seekTo(60, true);
                        youtubePlayer.playVideo();
                    } catch (err) {
                        console.log('YouTube playback failed');
                    }
                }, 500);
            }
        }
    }, 1500);
    
    // Show Step 3 (Cut Cake button) after 2 seconds
    setTimeout(() => {
        document.getElementById('cakeStep2').classList.remove('active');
        document.getElementById('cakeStep3').classList.add('active');
    }, 2000);
}

function cutCake() {
    // Show confetti when cutting
    createConfettiAnimation();
    
    // Show Step 4 (Cut cake image and special images)
    setTimeout(() => {
        document.getElementById('cakeStep3').classList.remove('active');
        document.getElementById('cakeStep4').classList.add('active');
    }, 500);
    
    // Redirect to memories.html after 20 seconds
    setTimeout(() => {
        // Fade out effect
        document.querySelector('.container').style.animation = 'fadeOut 1s ease-out';
        
        setTimeout(() => {
            window.location.href = 'memories.html';
        }, 1000);
    }, 20000); // Changed to 20 seconds
}

function goToMemories() {
    window.location.href = 'memories.html';
}

function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    if (!sparklesContainer) return;
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 20 + 10) + 'px';
        sparkle.style.animation = 'sparkleFloat 3s ease-out forwards';
        sparkle.style.pointerEvents = 'none';
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 3000);
    }, 500);
}

function createConfettiAnimation() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ff6b9d', '#c71585', '#fff', '#ffd700'];
    
    for (let i = 0; i < 200; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngle: 0,
            tiltAngleIncrement: Math.random() * 0.1 + 0.05
        });
    }
    
    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach((p, i) => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
            ctx.stroke();
            
            p.tiltAngle += p.tiltAngleIncrement;
            p.y += p.d;
            p.tilt = Math.sin(p.tiltAngle) * 15;
            
            if (p.y > canvas.height) {
                confettiPieces[i] = {
                    x: Math.random() * canvas.width,
                    y: -20,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngle: p.tiltAngle,
                    tiltAngleIncrement: p.tiltAngleIncrement
                };
            }
        });
        
        requestAnimationFrame(drawConfetti);
    }
    
    drawConfetti();
}

function createBalloons() {
    const balloonEmojis = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];
    
    balloonEmojis.forEach((emoji, index) => {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.innerHTML = emoji;
            balloon.style.position = 'fixed';
            balloon.style.left = (Math.random() * 80 + 10) + '%';
            balloon.style.bottom = '-100px';
            balloon.style.fontSize = (Math.random() * 40 + 40) + 'px';
            balloon.style.animation = 'balloonFloat 8s ease-out forwards';
            balloon.style.zIndex = '998';
            balloon.style.pointerEvents = 'none';
            document.body.appendChild(balloon);
            
            setTimeout(() => balloon.remove(), 8000);
        }, index * 300);
    });
}

// ========================================
// MEMORIES PAGE FUNCTIONS - MULTI-BALLOON FAST LOOP
// ========================================
let currentMemoryIndex = 0;
const totalCinematicMemories = 5;
let balloonsActive = false;
let balloonInterval = null;

// Google Drive Image URLs - Updated with Sharing Links
const memoryImages = [
    'https://drive.google.com/thumbnail?id=1o2cUOpoSBVPHbKN_Tef4fFS8HdCAn5q_&sz=w1000',
    'https://drive.google.com/thumbnail?id=1M70EMXZ_ARlak9elTEpmqLZPhhkRMefK&sz=w1000',
    'https://drive.google.com/thumbnail?id=1hGmPbp5bQ3RlOjQBcJgo_ZmpZ30TlQ0l&sz=w1000',
    'https://drive.google.com/thumbnail?id=12tDwK-KPS9CzcDG9zzshbuE2fobzaZ3X&sz=w1000',
    'https://drive.google.com/thumbnail?id=1tghSM_axQtPVC1hZHbx_4LAszytmONRP&sz=w1000'
];

const memoryMessages = [
    'This picture was taken randomly, but it turned out to be my best one. I genuinely love seeing you in a pink dress — you look amazing.',
    'In this picture, she looks like someone who never hesitates to do anything for me. I felt so happy — it was the first time she tied my shoelaces.',
    'You look unbelievably cute in that saree — like the most adorable person ever. It feels like the saree was made just for you. I truly appreciate your mom\'s decision to make you wear it. And the fact that you came 17 km wearing that saree just for me makes my heart so happy.',
    'She had class and was feeling sleepy, and she looked so cute — all tired. It made me want to take care of her and help her relax. 💕',
    'Yeh yaad aaya madam jiii Laila me lailaa 😂😂'
];

function startMemoriesPage() {
    createMemorySparkles();
    startBalloonLoop();
    
    // Start background music with delay
    setTimeout(() => {
        if (typeof YT !== 'undefined' && YT.Player) {
            initMemoriesMusic();
        } else {
            // Retry after YouTube API loads
            window.addEventListener('load', () => {
                setTimeout(initMemoriesMusic, 2000);
            });
        }
    }, 1000);
}

function initMemoriesMusic() {
    if (document.getElementById('youtubePlayerMemories') && !memoriesYoutubePlayer) {
        try {
            memoriesYoutubePlayer = new YT.Player('youtubePlayerMemories', {
                height: '0',
                width: '0',
                videoId: 'BMOAP6ilxkQ',
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    loop: 1,
                    playlist: 'BMOAP6ilxkQ'
                },
                events: {
                    onReady: function(event) {
                        event.target.setVolume(30);
                        event.target.playVideo();
                        console.log('Memories background music playing');
                    },
                    onError: function(event) {
                        console.log('Music error:', event.data);
                    }
                }
            });
        } catch (e) {
            console.log('Error initializing music:', e);
        }
    }
}

function startBalloonLoop() {
    if (currentMemoryIndex >= totalCinematicMemories) {
        return; // All memories shown
    }
    
    balloonsActive = true;
    const container = document.getElementById('balloonContainer');
    container.classList.remove('hidden');
    
    // Create initial batch of balloons
    createBalloonBatch();
    
    // Continue creating balloons every 1.5 seconds
    balloonInterval = setInterval(() => {
        if (balloonsActive) {
            createBalloonBatch();
        }
    }, 1500);
}

function createBalloonBatch() {
    const container = document.getElementById('balloonContainer');
    const numBalloons = Math.floor(Math.random() * 3) + 2; // 2-4 balloons per batch
    
    for (let i = 0; i < numBalloons; i++) {
        setTimeout(() => {
            if (balloonsActive) {
                createSingleBalloon();
            }
        }, i * 300); // Stagger balloon creation
    }
}

function createSingleBalloon() {
    const container = document.getElementById('balloonContainer');
    const balloon = document.createElement('div');
    balloon.className = 'floating-balloon';
    balloon.innerHTML = '🎈';
    
    // Random horizontal position (10% to 90%)
    const leftPosition = Math.random() * 80 + 10;
    balloon.style.left = leftPosition + '%';
    
    // Random animation duration (6-8 seconds)
    const duration = Math.random() * 2 + 6;
    balloon.style.animationDuration = duration + 's';
    
    // Random delay (0-1 second)
    const delay = Math.random() * 1;
    balloon.style.animationDelay = delay + 's';
    
    balloon.onclick = () => popAndShowMemory(balloon);
    container.appendChild(balloon);
    
    // Remove balloon after animation completes
    setTimeout(() => {
        if (balloon.parentNode) {
            balloon.remove();
        }
    }, (duration + delay) * 1000);
}

function popAndShowMemory(balloon) {
    if (!balloonsActive) return; // Prevent multiple clicks
    
    // Stop balloon loop
    balloonsActive = false;
    clearInterval(balloonInterval);
    
    // Pop clicked balloon
    balloon.classList.add('popping');
    balloon.onclick = null;
    
    // Hide all balloons
    setTimeout(() => {
        const container = document.getElementById('balloonContainer');
        container.classList.add('hidden');
        container.innerHTML = ''; // Clear all balloons
        
        // Show memory
        showFullscreenMemory();
    }, 600);
}

function showFullscreenMemory() {
    const memoryDiv = document.getElementById('fullscreenMemory');
    const memoryImage = document.getElementById('memoryImage');
    const memoryMessage = document.getElementById('memoryMessage');
    
    // Set image with error handling
    memoryImage.src = memoryImages[currentMemoryIndex];
    memoryImage.onerror = function() {
        // Fallback: try alternative URL format
        const imageId = memoryImages[currentMemoryIndex].match(/id=([^&]+)/)[1];
        this.src = `https://drive.google.com/uc?export=view&id=${imageId}`;
    };
    memoryMessage.textContent = memoryMessages[currentMemoryIndex];
    
    // Show fullscreen memory
    memoryDiv.classList.add('active');
    
    // Hide after 10 seconds
    setTimeout(() => {
        hideFullscreenMemory();
    }, 10000);
}

function hideFullscreenMemory() {
    const memoryDiv = document.getElementById('fullscreenMemory');
    
    // Fade out animation
    memoryDiv.classList.add('fadeout');
    
    setTimeout(() => {
        memoryDiv.classList.remove('active', 'fadeout');
        currentMemoryIndex++;
        
        // Check if more memories to show
        if (currentMemoryIndex < totalCinematicMemories) {
            // Show balloons again after 1 second
            setTimeout(() => {
                startBalloonLoop();
            }, 1000);
        } else {
            // All memories shown, show final message
            showFinalMessage();
        }
    }, 1000);
}

function showFinalMessage() {
    const finalMsg = document.getElementById('finalMessage');
    finalMsg.classList.remove('hidden');
    finalMsg.classList.add('active');
    
    // Redirect after 3 seconds
    setTimeout(() => {
        window.location.href = 'letters.html';
    }, 3000);
}

function createMemorySparkles() {
    const sparklesContainer = document.getElementById('memorySparkles');
    if (!sparklesContainer) return;
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 20 + 15) + 'px';
        sparkle.style.animation = 'sparkleFloat 3s ease-out forwards';
        sparkle.style.pointerEvents = 'none';
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 3000);
    }, 600);
}

function goToLetters() {
    window.location.href = 'letters.html';
}

// ========================================
// LETTERS PAGE FUNCTIONS - VIDEO LETTERS
// ========================================
let openedLetters = new Set();
const totalLetters = 4;
let lettersYoutubePlayer;
let memoriesYoutubePlayer;

// YouTube Background Music for Letters Page
const lettersMusicVideoId = 'BMOAP6ilxkQ';
const memoriesMusicVideoId = 'BMOAP6ilxkQ'; // Same song for memories

// Load YouTube Player API - Only for Birthday and Memories
function onYouTubeIframeAPIReady() {
    // Birthday page player
    if (document.querySelector('.birthday-page')) {
        youtubePlayer = new YT.Player('youtubePlayer', {
            height: '0',
            width: '0',
            videoId: CONFIG.youtubeVideoId,
            playerVars: {
                autoplay: 0,
                controls: 0,
                disablekb: 1,
                fs: 0,
                modestbranding: 1,
                playsinline: 1
            },
            events: {
                onReady: function(event) {
                    console.log('YouTube player ready');
                }
            }
        });
    }
}

// Google Drive Video URLs
const letterVideos = [
    'https://drive.google.com/file/d/1i3yy0I84Eam6X1ZjGgCdZScj8yzj0PT5/preview',
    'https://drive.google.com/file/d/19mbx80c6pCCRLyqPkALvj4edug_TDCvw/preview',
    'https://drive.google.com/file/d/1IjvywkCPx6cr3SkQb-2OoCBw3eFDLAYr/preview',
    'https://drive.google.com/file/d/1BMSy47lq20Ax80QlCERMng9t3BV1Hlvp/preview'
];

const letterMessages = [
    'After watching this video, I literally ran to meet you — it truly felt like something was pulling me towards you.',
    'This video reminds me of all the beautiful moments when we went everywhere together for Ganpati Bappa\'s darshan. It was so lovely. Thank you for always being ready to take me out and explore with me.',
    'She only sent this once, so I had to save it from another phone 😅 This is that video.',
    'My little penguin 😂 It feels like this cute penguin has come straight to earth just for me! 💕'
];

function startLettersPage() {
    createHeartParticles();
}

function openLetter(letterNumber) {
    const modal = document.getElementById('letterModal');
    const videoElement = document.getElementById('letterVideo');
    const messageElement = document.getElementById('videoMessage');
    
    // Set video source - Use iframe for Google Drive
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = `
        <iframe 
            src="${letterVideos[letterNumber - 1]}" 
            class="letter-video"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
    `;
    
    // Set message
    messageElement.textContent = letterMessages[letterNumber - 1];
    
    // Show modal
    modal.classList.add('active');
    
    // Mark letter as opened
    openedLetters.add(letterNumber);
    
    // Check if all letters opened
    if (openedLetters.size === totalLetters) {
        setTimeout(() => {
            document.getElementById('finalLetterBtn').classList.remove('hidden');
        }, 500);
    }
}

function closeLetterModal() {
    const modal = document.getElementById('letterModal');
    modal.classList.remove('active');
    
    // Stop video by clearing iframe
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = '<video id="letterVideo" class="letter-video" controls></video>';
}

function showFinalLetter() {
    // Hide envelopes section
    document.getElementById('envelopesSection').style.animation = 'fadeOut 1s ease-out';
    
    setTimeout(() => {
        document.getElementById('envelopesSection').classList.add('hidden');
        document.getElementById('finalLetterSection').classList.remove('hidden');
    }, 1000);
}

function createHeartParticles() {
    const container = document.getElementById('heartParticles');
    if (!container) return;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
        heart.style.animation = 'heartFloat 4s ease-out forwards';
        heart.style.pointerEvents = 'none';
        heart.style.opacity = '0';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }, 800);
}

function goToWhatsApp() {
    const encodedMessage = encodeURIComponent(CONFIG.whatsappMessage);
    window.location.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

// ========================================
// DYNAMIC CSS ANIMATIONS
// ========================================
const dynamicStyle = document.createElement('style');
dynamicStyle.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
    
    @keyframes sparkleFloat {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1.5) rotate(180deg);
        }
    }
    
    @keyframes balloonFloat {
        0% {
            bottom: -100px;
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            bottom: 110%;
            opacity: 0;
        }
    }
    
    @keyframes heartFloat {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        20% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(1.5) rotate(15deg);
        }
    }
`;
document.head.appendChild(dynamicStyle);

// ========================================
// PAGE INITIALIZATION
// ========================================
window.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on and initialize accordingly
    if (document.querySelector('.countdown-page')) {
        startCountdown();
        createFloatingHearts();
    }
    
    if (document.querySelector('.birthday-page')) {
        createSparkles();
    }
    
    if (document.querySelector('.memories-page')) {
        startMemoriesPage();
    }
    
    if (document.querySelector('.letters-page')) {
        startLettersPage();
    }
});
