document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
            opacity: { value: 0.5, random: false, anim: { enable: false } },
            size: { value: 5, random: true, anim: { enable: false } },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    const urls = [
        { name: "Nettleweb", url: "https://nettleweb.pages.dev/" },
        { name: "Half Life", url: "https://x8bitrain.github.io/webXash/" },
        { name: "Knockoff Windows 98", url: "https://98.js.org/" },
        { name: "Kiwi Clicker", url: "https://kiwiclickeronline.github.io/" },
        { name: "Quake", url: "http://www.quakejs.com" },
        { name: "Retroarch", url: "https://web.libretro.com/" },
        { name: "Modern Cookie Clicker", url: "https://cookieclickercity.com/" },
        { name: "Better Unblocked Games", url: "https://definitelyscience.com/" },
        { name: "Doom but tiny", url: "https://js-dos.com/games/doom.exe.html" },
        { name: "MS-Dos Games", url: "https://js-dos.com/games/" },
        { name: "Meme Soundboard", url: "https://www.myinstants.com/en/search/?name=MEME" },
        { name: "Roms For Retroarch", url: "https://r-roms.github.io/" },
        { name: "Flash Games", url: "https://flashmuseum.org/" },
        { name: "Minecraft 1.8.8", url: "https://eaglercraft.com/mc/1.8.8/" },
        { name: "Virtual machines", url: "https://computernewb.com/collab-vm/" },
        { name: "OutGoingMail Games", url: "https://outgoingmail.github.io/" },
        { name: "Html5 Games", url: "https://html5games.com/" },
        { name: "Poly Track", url: "https://www.kodub.com/apps/polytrack" },
        { name: "Retro Games", url: "https://emulatoronline.com/" },
        { name: "Line Rider", url: atob("aHR0cHM6Ly9saW5lcmlkZXIuY29tLw==") },
        { name: "Little Alchemy 2", url: atob("aHR0cHM6Ly9saXR0bGVhbGNoZW15Mi5jb20v") },
        { name: "GameSnacks (boring)", url: "https://gamesnacks.com/"},
        { name: "Lagged Games", url: "https://lagged.com/"},
        { name: "Slope", url: "./slope/index.html"},
        { name: "Mario 64", url: "./super-mario-64/index.html"},
    ];
    
    const academicUrls = [
        { name: "Google Classroom", url: "https://classroom.google.com" },
        { name: "Khan Academy", url: "https://www.khanacademy.org" },
        { name: "Duolingo", url: "https://www.duolingo.com" },
        { name: "Phet Labs", url: "https://phet.colorado.edu/" }
    ];

    const buttonContainer = document.getElementById('buttonContainer');
    const iframeContainer = document.getElementById('iframeContainer');
    const exitButton = document.getElementById('exitButton');
    const academicButton = document.getElementById('academicButton');
    const backToGameSitesButton = document.getElementById('backToGameSitesButton');
    const searchBar = document.getElementById('searchBar');
    const randomButton = document.getElementById('randomButton');
    const toggleThemeButton = document.getElementById('toggleTheme');

    let currentUrls = urls;

    const noEmbedUrls = [
    ];

    function renderButtons(data) {
        buttonContainer.innerHTML = '';
        data.forEach(item => {
            const button = document.createElement('button');
            button.textContent = item.name;
            button.className = 'game-button';
            button.onclick = function() {
                const urlToOpen = item.url;

                if (noEmbedUrls.includes(urlToOpen) || currentUrls === academicUrls) {
                    window.open(urlToOpen, '_blank');
                } else {
                    iframeContainer.style.display = 'block';
                    iframeContainer.src = urlToOpen;
                    exitButton.style.display = 'block';
                    document.querySelector('h1').style.display = 'none'; 
                    document.querySelector('.controls').style.display = 'none'; 
                    document.querySelector('.button-container').style.display = 'none';
                    document.querySelector('footer').style.display = 'none';
                    academicButton.style.display = 'none';
                    backToGameSitesButton.style.display = 'none';
                }
            };
            buttonContainer.appendChild(button);
        });
    }

    renderButtons(urls);

    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredUrls = currentUrls.filter(item =>
            item.name.toLowerCase().includes(searchTerm)
        );
        renderButtons(filteredUrls);
    });

    academicButton.onclick = function() {
        currentUrls = academicUrls;
        renderButtons(currentUrls);
        academicButton.style.display = 'none';
        backToGameSitesButton.style.display = 'block';
        searchBar.placeholder = 'Search academic sites...';
        searchBar.value = ''; 
        randomButton.style.display = 'none'; 
    };

    backToGameSitesButton.onclick = function() {
        currentUrls = urls;
        renderButtons(currentUrls);
        backToGameSitesButton.style.display = 'none';
        academicButton.style.display = 'block';
        searchBar.placeholder = 'Search games...';
        searchBar.value = ''; 
        randomButton.style.display = 'block'; 
    };

    exitButton.onclick = function() {
        iframeContainer.style.display = 'none';
        iframeContainer.src = '';
        exitButton.style.display = 'none';

        document.querySelector('h1').style.display = 'block'; 
        document.querySelector('.controls').style.display = 'flex'; 
        document.querySelector('.button-container').style.display = 'flex'; 
        document.querySelector('footer').style.display = 'block';
        
        if (currentUrls === urls) { 
            academicButton.style.display = 'block';
            backToGameSitesButton.style.display = 'none';
        } else { 
            academicButton.style.display = 'none';
            backToGameSitesButton.style.display = 'block';
        }
    };

    toggleThemeButton.onclick = function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    randomButton.onclick = function() {
        if (currentUrls.length > 0) {
            const randomIndex = Math.floor(Math.random() * currentUrls.length);
            const randomItem = currentUrls[randomIndex];
            
            const urlToOpen = randomItem.url;
            if (noEmbedUrls.includes(urlToOpen) || currentUrls === academicUrls) {
                window.open(urlToOpen, '_blank');
            } else {
                iframeContainer.style.display = 'block';
                iframeContainer.src = urlToOpen;
                exitButton.style.display = 'block';
                document.querySelector('h1').style.display = 'none';
                document.querySelector('.controls').style.display = 'none';
                document.querySelector('.button-container').style.display = 'none';
                document.querySelector('footer').style.display = 'none';
                academicButton.style.display = 'none';
                backToGameSitesButton.style.display = 'none';
            }
        }
    };

    iframeContainer.onload = function() {
    };
});