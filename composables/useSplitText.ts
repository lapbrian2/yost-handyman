import { onMounted, type Ref } from 'vue'

interface SplitOptions {
  type?: 'chars' | 'words' | 'lines'
  staggerMs?: number
  randomize?: boolean
}

export function useSplitText(target: Ref<HTMLElement | null>, options: SplitOptions = {}) {
  const { type = 'chars', staggerMs = 75, randomize = true } = options

  // Execute split — works whether called at setup time or inside onMounted
  const doSplit = () => {
    if (!target.value) return
    const el = target.value
    const text = el.textContent || ''
    if (!text.trim()) return
    el.classList.add('-splitted')

    if (type === 'chars') {
      splitChars(el, text, staggerMs, randomize)
    } else if (type === 'words') {
      splitWords(el, text, staggerMs)
    } else if (type === 'lines') {
      splitLines(el, text, staggerMs)
    }
  }

  // If target already has a value (called from onMounted), execute immediately
  if (target.value) {
    doSplit()
  } else {
    // Otherwise wait for mount
    onMounted(doSplit)
  }
}

function splitChars(el: HTMLElement, text: string, stagger: number, randomize: boolean) {
  el.innerHTML = ''
  const line = document.createElement('span')
  line.classList.add('-s-line')
  line.style.setProperty('--line-index', '0')

  let charIndex = 0
  for (const char of text) {
    if (char === '\n') continue
    const span = document.createElement('span')
    span.classList.add('-s-char')
    span.textContent = char === ' ' ? '\u00A0' : char
    span.dataset.splitContent = span.textContent
    span.style.setProperty('--char-index', String(charIndex))
    span.style.setProperty('--char-random', String(randomize ? Math.random() * 10 : charIndex))
    line.appendChild(span)
    charIndex++
  }

  el.appendChild(line)
}

function splitWords(el: HTMLElement, text: string, stagger: number) {
  el.innerHTML = ''
  const words = text.trim().split(/\s+/)
  const line = document.createElement('span')
  line.classList.add('-s-line')
  line.style.setProperty('--line-index', '0')

  words.forEach((word, i) => {
    const span = document.createElement('span')
    span.classList.add('-s-word')
    span.textContent = word
    span.style.setProperty('--word-index', String(i))
    span.style.setProperty('--t-delay', String(i))
    line.appendChild(span)

    if (i < words.length - 1) {
      const space = document.createElement('span')
      space.classList.add('-s-word')
      space.textContent = '\u00A0'
      line.appendChild(space)
    }
  })

  el.appendChild(line)
}

function splitLines(el: HTMLElement, text: string, stagger: number) {
  el.innerHTML = ''
  const lines = text.trim().split('\n').filter(Boolean)

  lines.forEach((lineText, i) => {
    const line = document.createElement('span')
    line.classList.add('-s-line')
    line.style.setProperty('--line-index', String(i))

    const words = lineText.trim().split(/\s+/)
    words.forEach((word, wi) => {
      const span = document.createElement('span')
      span.classList.add('-s-word')
      span.textContent = word
      span.style.setProperty('--word-index', String(wi))
      span.style.setProperty('--t-delay', String(wi + i * 3))
      line.appendChild(span)

      if (wi < words.length - 1) {
        const space = document.createElement('span')
        space.classList.add('-s-word')
        space.textContent = '\u00A0'
        line.appendChild(space)
      }
    })

    el.appendChild(line)
  })
}
