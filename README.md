# Top Flight Trivia

A free, browser-based English football knowledge quiz. Test your memory on club
nicknames, stadiums, kits, and history. No sign-up, no ads, no tracking.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://lemuelowusuansah.github.io/Top-Flight-Trivia/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Made with Vanilla JS](https://img.shields.io/badge/Made%20with-Vanilla%20JS-f7df1e)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Overview

Top Flight Trivia is a lightweight trivia game about English top-flight football.
It runs entirely in the browser with zero dependencies, zero build step, and zero
backend. Four files and a question bank.

Players enter their name, pick a category, and answer five randomly-selected
questions per round. Names and personal bests are stored locally via
`localStorage`, so returning players are greeted by name.

> Disclaimer: This is an unofficial fan-made trivia game. It is not affiliated
> with, endorsed by, or sponsored by any football club, league, or governing
> body. All club, player, and stadium names are used for factual reference only.
> No logos, crests, or copyrighted imagery are used.

## Features

- Animated splash screen with a 2.5 second intro loader
- Name-based login persisted to localStorage
- Six categories: Nicknames, Stadiums, Jerseys, History, Modern Era, Mixed Bag
- 90 curated questions, 15 per category, randomly sampled each round
- Answer options shuffled on every playthrough
- Best-score tracking stored locally per player
- Mobile responsive layout
- Keyboard accessible: Enter to submit, Tab to navigate
- No tracking, no ads, no cookies
- Legally safe: factual text only, no trademarks or imagery

## Quick Start

### Play locally

No build step required.

    git clone https://github.com/LemuelOwusuAnsah/Top-Flight-Trivia.git
    cd Top-Flight-Trivia
    xdg-open src/index.html      # Linux
    # open src/index.html        # macOS
    # start src/index.html       # Windows

Or serve it with any static server:

    python3 -m http.server 8000
    # visit http://localhost:8000/src/

### Play online

Live demo: https://lemuelowusuansah.github.io/Top-Flight-Trivia/

## How to Play

1. Wait for the splash screen to finish (about 2.5 seconds)
2. Enter your name and press Kick Off
3. Choose one of six trivia categories
4. Answer five questions by clicking the option you believe is correct
5. View your score at full time and try to beat your personal best

## Project Structure

    Top-Flight-Trivia/
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml          Auto-deploy to GitHub Pages
    ├── assets/
    │   └── favicon.svg
    ├── src/
    │   ├── index.html              Single entry point
    │   ├── css/
    │   │   └── style.css           All styling
    │   └── js/
    │       ├── game.js             Game logic and state
    │       └── questions.js        Question bank
    ├── tests/
    │   └── smoke.test.js           Basic sanity checks
    ├── .editorconfig
    ├── .gitignore
    ├── .prettierrc
    ├── CHANGELOG.md
    ├── CONTRIBUTING.md
    ├── LICENSE
    ├── package.json
    └── README.md

## Tech Stack

| Layer     | Choice                          | Rationale                                 |
| --------- | ------------------------------- | ----------------------------------------- |
| Markup    | HTML5                           | Universal, no tooling                     |
| Styling   | Vanilla CSS custom properties   | No preprocessor needed at this scale      |
| Logic     | Vanilla JavaScript (ES2020)     | Zero dependencies, low maintenance        |
| Storage   | localStorage                    | No backend, no authentication, no DB      |
| Hosting   | GitHub Pages                    | Free, fast, HTTPS by default              |
| CI/CD     | GitHub Actions                  | Auto-deploy on push to main               |

No frameworks, no bundlers, no npm install. Just the web platform.

## Roadmap

- [x] Core quiz loop
- [x] Category system
- [x] localStorage persistence
- [ ] Timer mode (15 seconds per question)
- [ ] Difficulty tiers (Easy, Medium, Hard)
- [ ] 50/50 lifeline
- [ ] Progressive Web App (installable)
- [ ] Sound effects
- [ ] Share-score button
- [ ] Localised versions

## Contributing

Contributions are welcome, especially new questions. See CONTRIBUTING.md for
guidelines.

Short version: fork, add questions to src/js/questions.js, open a pull request.

## License

MIT License. Copyright (c) 2026 Lemuel.

You are free to use, modify, and share this project. Attribution appreciated
but not required.

## Acknowledgements

- Built with plain HTML, CSS, and JavaScript
- Question bank curated from publicly available football records
- Inspired by pub-quiz culture and the beautiful game
