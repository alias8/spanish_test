// Pre-generates an MP3 for every number word in the quiz using the ElevenLabs
// text-to-speech API, saved to public/audio/<value>.mp3. Run it once after adding
// numbers; existing files are skipped, so re-runs only pay for new words.
//
// The API key stays on this machine: the browser only ever loads the MP3 files.
//
//   npm run generate-audio            # generate anything missing
//   LIMIT=2 npm run generate-audio    # try a couple of words first
//
// Env (.env): elevenlabs=<api key>
// Optional:   ELEVENLABS_VOICE_ID, ELEVENLABS_MODEL_ID
import { createServer } from 'vite'
import { mkdir, writeFile, access } from 'node:fs/promises'
import path from 'node:path'

const API_KEY = process.env.elevenlabs ?? process.env.ELEVENLABS_API_KEY
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? 'EXAVITQu4vr4xnSDxMaL' // "Sarah", a default voice free accounts can use via the API
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID ?? 'eleven_flash_v2_5'
const LIMIT = process.env.LIMIT ? Number(process.env.LIMIT) : Infinity
const OUT_DIR = path.resolve('public/audio')

if (!API_KEY) {
  console.error('Missing API key: add elevenlabs=<key> to .env')
  process.exit(1)
}

// Load src/data.ts through Vite so its extensionless TS imports resolve.
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { SCREENS } = await vite.ssrLoadModule('/src/data.ts')
await vite.close()

const words = new Map()
for (const screen of SCREENS) {
  if (screen.kind !== 'numbers') continue
  for (const { value, spanish } of [...screen.col1, ...screen.col2]) words.set(value, spanish)
}

await mkdir(OUT_DIR, { recursive: true })

const exists = file => access(file).then(() => true, () => false)
const todo = []
for (const [value, spanish] of words) {
  if (!(await exists(path.join(OUT_DIR, `${value}.mp3`)))) todo.push([value, spanish])
}
const batch = todo.slice(0, LIMIT)
const chars = batch.reduce((sum, [, spanish]) => sum + spanish.length, 0)
console.log(`${words.size} words, ${todo.length} missing, generating ${batch.length} (${chars} characters)`)

for (const [value, spanish] of batch) {
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
    {
      method: 'POST',
      headers: { 'xi-api-key': API_KEY, 'Content-Type': 'application/json' },
      // language_code forces Spanish pronunciation; single words like "dos" or "mil"
      // are otherwise ambiguous for language detection.
      body: JSON.stringify({ text: spanish, model_id: MODEL_ID, language_code: 'es' }),
    },
  )
  if (!res.ok) {
    console.error(`Failed on ${value} (${spanish}): ${res.status} ${await res.text()}`)
    process.exit(1)
  }
  await writeFile(path.join(OUT_DIR, `${value}.mp3`), Buffer.from(await res.arrayBuffer()))
  console.log(`  ${value} ${spanish}`)
}
