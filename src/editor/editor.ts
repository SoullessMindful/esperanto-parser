import { parser } from '../main'
import './editor.scss'

document.write(JSON.stringify(parser.run('hello world')))
