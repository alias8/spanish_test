# Spanish Number Test

A Spanish number spelling test built with React, TypeScript, and Vite.

## How it works

Numbers are displayed in a grid with their answers hidden. Type the Spanish word for any number in the input box — if it matches, the card reveals. Complete the screen when all numbers are found. Hover over any card for a hint button that reveals the answer.

Accent marks are optional: typing `dieciseis` is accepted as a correct answer for `dieciséis`.

## Screens

| Screen | Numbers |
|---|---|
| 1–20 | uno → veinte |
| 21–40 | veintiuno → cuarenta |
| Tens | diez, veinte, treinta … cien |
| 101–120 | ciento uno → ciento veinte |
| 121–140 | ciento veintiuno → ciento cuarenta |
| Hundreds | cien, doscientos … mil |
| Thousands | mil, dos mil … diez mil |
| Years | 20 common years from 1000–2050 |
| Tricky 100s | 20 numbers chosen for irregular or accented forms |

## Running locally

```bash
npm install
npm run dev
```

## Audio

Each number card has a 🔊 button that plays the Spanish word. The recordings are generated once with the
ElevenLabs text-to-speech API and committed to `public/audio/`, so the browser never needs the API key.

```bash
echo "elevenlabs=<your ElevenLabs API key>" > .env
npm run generate-audio            # generates any missing words
LIMIT=2 npm run generate-audio    # try a couple of words first
```

Optional: `ELEVENLABS_VOICE_ID` and `ELEVENLABS_MODEL_ID` to change the voice or model (free accounts can only use
the default voices through the API).
