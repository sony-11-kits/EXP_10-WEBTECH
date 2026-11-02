
const http = require('http');

const server = http.createServer((req, res) => {

    const url = new URL(req.url, 'http://localhost:3000');
    const page = url.pathname;

    let content = '';

    if (page === '/' || page === '/home') {
        content = `
            <section class="hero">
                <p class="tagline">THE UNIVERSE HAS A MESSAGE FOR YOU</p>
                <h1>ASTRA <span>TIDE</span></h1>
                <div class="gold-line"></div>
                <h2>Explore the Universe. Discover Yourself.</h2>
                <p class="intro">
                    Discover your zodiac, explore cosmic energies
                    and find inspiration in the stars.
                </p>
                <a class="gold-button" href="/horoscope">
                    EXPLORE YOUR HOROSCOPE
                </a>
            </section>

            <section class="features">
                <div class="feature">
                    <h3>12 Zodiac Signs</h3>
                    <p>Discover your celestial identity.</p>
                </div>
                <div class="feature">
                    <h3>Daily Predictions</h3>
                    <p>Find inspiration for your day.</p>
                </div>
                <div class="feature">
                    <h3>Cosmic Guidance</h3>
                    <p>Explore the mysteries of the universe.</p>
                </div>
            </section>
        `;
    }

    else if (page === '/about') {
        content = `
            <section class="hero">
                <p class="tagline">OUR COSMIC STORY</p>
                <h1>ABOUT <span>ASTRA TIDE</span></h1>
                <div class="gold-line"></div>
                <p class="intro">
                    ASTRA TIDE is an astrology-inspired platform
                    created to explore zodiac signs, daily horoscope
                    predictions, lucky colours and cosmic connections.
                </p>
                <a class="gold-button" href="/home">BACK TO HOME</a>
            </section>
        `;
    }

    else if (page === '/horoscope') {
        content = `
            <section class="hero">
                <p class="tagline">YOUR COSMIC FORECAST</p>
                <h1>DAILY <span>HOROSCOPE</span></h1>
                <div class="gold-line"></div>
                <p class="intro">
                    A little cosmic inspiration for your journey.
                </p>
            </section>

            <section class="horoscope-grid">
                <div class="zodiac-card">
                    <h2>Aries</h2>
                    <p>Today is a good day to explore new opportunities.</p>
                    <span>Lucky Colour: Red</span>
                </div>

                <div class="zodiac-card">
                    <h2>Taurus</h2>
                    <p>Focus on stability and personal growth.</p>
                    <span>Lucky Colour: Green</span>
                </div>

                <div class="zodiac-card">
                    <h2>Gemini</h2>
                    <p>Communication may bring new opportunities.</p>
                    <span>Lucky Colour: Yellow</span>
                </div>

                <div class="zodiac-card">
                    <h2>Cancer</h2>
                    <p>Trust your intuition and spend time with loved ones.</p>
                    <span>Lucky Colour: Silver</span>
                </div>

                <div class="zodiac-card">
                    <h2>Leo</h2>
                    <p>Let your confidence guide your creative ideas.</p>
                    <span>Lucky Colour: Gold</span>
                </div>

                <div class="zodiac-card">
                    <h2>Virgo</h2>
                    <p>Organize your plans and focus on your goals.</p>
                    <span>Lucky Colour: Navy Blue</span>
                </div>
            </section>
        `;
    }

    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8'
        });

        return res.end(`
            <h1>404 - Page Not Found</h1>
            <a href="/home">Return Home</a>
        `);
    }

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ASTRA TIDE | Cosmic Astrology</title>

            <style>
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    background: #050505;
                    color: #eee4cc;
                    font-family: Georgia, serif;
                }

                nav {
                    padding: 25px 8%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #51421f;
                }

                .brand {
                    color: #d6b65c;
                    font-size: 23px;
                    letter-spacing: 4px;
                    font-weight: bold;
                }

                nav a {
                    color: #e5d4a4;
                    text-decoration: none;
                    margin-left: 22px;
                    font-size: 15px;
                }

                nav a:hover {
                    color: #d6b65c;
                }

                .hero {
                    text-align: center;
                    padding: 85px 20px 65px;
                }

                .tagline {
                    color: #b99b52;
                    letter-spacing: 4px;
                    font-size: 12px;
                }

                h1 {
                    font-size: clamp(38px, 7vw, 68px);
                    letter-spacing: 7px;
                    color: #d6b65c;
                    margin: 25px 0;
                }

                h1 span {
                    color: #f4e5b4;
                }

                .gold-line {
                    width: 85px;
                    height: 2px;
                    background: #d6b65c;
                    margin: 25px auto;
                }

                .hero h2 {
                    color: #e7d4a0;
                    font-size: 25px;
                }

                .intro {
                    color: #c7bda7;
                    font-size: 17px;
                    line-height: 1.9;
                    max-width: 650px;
                    margin: 20px auto 35px;
                }

                .gold-button {
                    display: inline-block;
                    padding: 15px 28px;
                    border: 1px solid #d6b65c;
                    color: #d6b65c;
                    text-decoration: none;
                    letter-spacing: 2px;
                    font-size: 13px;
                }

                .gold-button:hover {
                    background: #d6b65c;
                    color: #050505;
                }

                .features, .horoscope-grid {
                    max-width: 1050px;
                    margin: 20px auto 70px;
                    padding: 20px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 22px;
                }

                .feature, .zodiac-card {
                    background: #101010;
                    border: 1px solid #51421f;
                    padding: 30px 20px;
                    text-align: center;
                    border-radius: 5px;
                }

                .feature h3, .zodiac-card h2 {
                    color: #d6b65c;
                    font-size: 22px;
                }

                .feature p, .zodiac-card p {
                    color: #c7bda7;
                    line-height: 1.8;
                }

                .zodiac-card span {
                    color: #d6b65c;
                    font-size: 14px;
                }

                .request-info {
                    border-top: 1px solid #51421f;
                    text-align: center;
                    padding: 22px;
                    color: #9e916f;
                    font-size: 13px;
                    line-height: 1.8;
                }

                footer {
                    text-align: center;
                    color: #a58b4c;
                    padding: 20px;
                    font-size: 12px;
                    letter-spacing: 2px;
                }

                @media (max-width: 500px) {
                    nav {
                        flex-direction: column;
                        gap: 18px;
                    }

                    nav a {
                        margin: 0 8px;
                    }

                    .hero {
                        padding-top: 55px;
                    }
                }
            
                 /* ASTRA TIDE GOLDEN GLOW EFFECTS */

body {
    background:
        radial-gradient(ellipse at 50% 15%, #30230d 0%, #100d08 35%, #030303 75%);
}

.brand {
    text-shadow: 0 0 12px #d6b65c, 0 0 25px #a77b20;
}

h1 {
    text-shadow:
        0 0 12px rgba(214, 182, 92, 0.8),
        0 0 35px rgba(214, 182, 92, 0.4);
}

.gold-line {
    box-shadow: 0 0 12px #d6b65c, 0 0 25px #d6b65c;
}

.gold-button {
    box-shadow: 0 0 12px rgba(214, 182, 92, 0.3);
    transition: 0.3s ease;
}

.gold-button:hover {
    box-shadow: 0 0 15px #d6b65c, 0 0 35px #d6b65c;
}

.feature, .zodiac-card {
    box-shadow: 0 0 12px rgba(214, 182, 92, 0.08);
    transition: 0.3s ease;
}

.feature:hover, .zodiac-card:hover {
    transform: translateY(-6px);
    border-color: #e4c46b;
    box-shadow: 0 0 15px rgba(214, 182, 92, 0.4),
                0 0 30px rgba(214, 182, 92, 0.15);
}

nav {
    box-shadow: 0 3px 20px rgba(214, 182, 92, 0.12);
}

a {
    transition: 0.3s ease;
}

a:hover {
    text-shadow: 0 0 12px #d6b65c;
}
 </style>

            


        </head>

        <body>
            <nav>
                <div class="brand">ASTRA TIDE</div>
                <div>
                    <a href="/home">HOME</a>
                    <a href="/about">ABOUT</a>
                    <a href="/horoscope">HOROSCOPE</a>
                </div>
            </nav>

            ${content}

            <div class="request-info">
                Request URL: ${page}<br>
                Request Method: ${req.method}
            </div>

            <footer>
                ASTRA TIDE | EXPLORE THE COSMOS
            </footer>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('ASTRA TIDE server running at http://localhost:3000');
});
