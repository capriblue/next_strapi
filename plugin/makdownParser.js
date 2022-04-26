import { unified } from "unified";
import remarkParse  from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeSanitize, {defaultSchema} from "rehype-sanitize";
import rehypeMathjax from "rehype-mathjax";

export default async function markdownParser(markdownText) {
    const isdev = process.env.NODE_ENV == "development" ? true : false
    if (isdev) {// 開発環境ではmarkdown-wasmを利用
        const markdown = require("markdown-wasm/dist/markdown.node.js")
        const htmlText = markdown.parse(markdownText)
        return String(htmlText)
    } else {
        const htmlText = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeSanitize, {
            ...defaultSchema,
            attributes: {
                ...defaultSchema.attributes,
                div: [
                    ...(defaultSchema.attributes.div || []),
                    ['className', 'math', 'math-display']
                ],
                span: [
                    ...(defaultSchema.attributes.span || []),
                    ['className', 'math', 'math-inline']
                ],
                code: [
                    ...(defaultSchema.attributes.code || []),
                    ['className', 'hljs-addition', 'hljs-attr', 'hljs-attribute', 'hljs-built_in', 'hljs-bullet', 'hljs-char', 'hljs-code', 'hljs-comment', 'hljs-deletion', 'hljs-doctag', 'hljs-emphasis', 'hljs-formula', 'hljs-keyword', 'hljs-link', 'hljs-literal', 'hljs-meta', 'hljs-name', 'hljs-number', 'hljs-operator', 'hljs-params', 'hljs-property', 'hljs-punctuation', 'hljs-quote', 'hljs-regexp', 'hljs-section', 'hljs-selector-attr', 'hljs-selector-class', 'hljs-selector-id', 'hljs-selector-pseudo', 'hljs-selector-tag', 'hljs-string', 'hljs-strong', 'hljs-subst', 'hljs-symbol', 'hljs-tag', 'hljs-template-tag', 'hljs-template-variable', 'hljs-title', 'hljs-type', 'hljs-variable'
                ],
            ]
            }
        })
        .use(rehypeMathjax)
        .use(rehypeStringify)
        .process(markdownText)
    return String(htmlText)
    }

}