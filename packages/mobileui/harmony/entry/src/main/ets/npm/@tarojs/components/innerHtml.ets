import htmlParser from './utils/htmlParser'
import { createChildItem } from './render'

import type { TaroElement } from '../runtime'

@Builder
export default function TaroInnerHtml (node: TaroElement) {
  if (node.innerHTML) {
    createChildItem(htmlParser(node.innerHTML))
  }
}
