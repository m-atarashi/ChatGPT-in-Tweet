"use strict"

const IMG_PATH = "../../resources/img"

function cleanupHTMLSource() {
    const title = document.querySelector("title").innerHTML
    const newHead = document.createElement("head")
    newHead.innerHTML = [
        '<meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">',
        `<meta property="og:${title}" content="ChatGPT">`,
        `<meta property="og:image" content="${IMG_PATH}/apple-touch-icon.png">`,
        `<meta property="og:description" content="A conversational AI system that listens, learns, and challenges">`,
        `<meta property="og:url" content="${location.href}">`,
        `<title>${title}</title>`,
        `<link rel="apple-touch-icon" sizes="180x180" href="${IMG_PATH}/apple-touch-icon.png">`,
        `<link rel="icon" type="image/png" sizes="32x32" href="${IMG_PATH}/favicon-32x32.png">`,
        `<link rel="icon" type="image/png" sizes="16x16" href="${IMG_PATH}/favicon-16x16.png">`,
        '<link rel="stylesheet" href="../../resources/style/base.css">',
    ].join("")
    const newBody = document.createElement("body")
    newBody.innerHTML = document.querySelector(".items-center").outerHTML
    newBody.querySelectorAll("img.rounded-sm").forEach(e => {
      e.setAttribute("src", `${IMG_PATH}/thumb.webp`)
      e.setAttribute("srcset", `${IMG_PATH}/thumb.webp`)
    })

    const newHTML = document.createElement("html")
    newHTML.appendChild(newHead)
    newHTML.appendChild(newBody)
    return newHTML.innerHTML
}
