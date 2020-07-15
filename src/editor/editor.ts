// import { parser } from '../main'
import './editor.scss'

// const MIN_ROWS = 20

const editorTextarea: HTMLTextAreaElement | null = document.querySelector(
  'textarea.editor'
)
const editorOutput: HTMLElement | null = document.querySelector(
  '.editor.output'
)
const editorLines: HTMLElement | null = document.querySelector('.editor-lines')

if (editorTextarea != null && editorOutput != null && editorLines != null) {
  const oninput = (): void =>
    formatText(editorTextarea, editorOutput, editorLines)
  oninput()
  editorTextarea.oninput = oninput
}

function formatText(
  textarea: HTMLTextAreaElement,
  output: HTMLElement,
  lines: HTMLElement
): void {
  const text = textarea.value
  const formattedText = text
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/\n/g, '<br/>')

  output.innerHTML = formattedText

  resizeEditor(textarea, lines)
}

function resizeEditor(textarea: HTMLTextAreaElement, lines: HTMLElement): void {
  textarea.style.height = 'auto'
  const textareaMinHeight = 0.8 * window.innerHeight
  const textareaTextHeight = textarea.scrollHeight

  textarea.style.height =
    Math.max(textareaMinHeight, textareaTextHeight).toFixed(0) + 'px'
  lines.style.height = textarea.style.height

  const lineHeight = parseFloat(
    window.getComputedStyle(textarea).getPropertyValue('line-height')
  )
  const linesCount = Math.round(textareaTextHeight / lineHeight)
  lines.innerHTML = Array.from(
    { length: linesCount },
    (_, i) => `${i + 1}`
  ).join('<br/>')
}
