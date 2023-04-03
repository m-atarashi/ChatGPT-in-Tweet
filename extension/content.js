"use strict"

const untilReady = () => {
  return new Promise((resolve) => {
    const intervalID = window.setInterval(() => {
      if (document.readyState === "complete") {
        window.clearInterval(intervalID)
        resolve()
      }
    }, 1000)
  })
}

;(async () => {
  await untilReady()
  const tweetTab = insertTweetTab()
  tweetTab.addEventListener("click", tweetChat)
})()

const IMG_PATH = "../../resources/img"

const insertTweetTab = () => {
  const clearTab = document.querySelector("nav > div + a")
  const tweetTab = clearTab.cloneNode()

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>`
  tweetTab.innerHTML = svg
  tweetTab.innerHTML += "Tweet this conversation"
  tweetTab.classList.add("chat-in-tweet")
  tweetTab.classList.add("tweet-conversation")

  clearTab.parentNode.insertBefore(tweetTab, clearTab)
  return tweetTab
}

const createElementFromDomString = (domString) => {
  const container = document.createElement("div")
  container.innerHTML = domString
  return container.firstChild
}

const getTitle = () => {
  return document.querySelector("title").innerText
}

const getPrologue = (size = 100) => {
  return document.body.innerText.substring(0, size)
}

const cleanupHTMLSource = () => {
  const title = getTitle()
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
  newBody.querySelectorAll("img.rounded-sm").forEach((e) => {
    e.setAttribute("src", `${IMG_PATH}/thumb.webp`)
    e.setAttribute("srcset", `${IMG_PATH}/thumb.webp`)
  })

  const newHTML = document.createElement("html")
  newHTML.appendChild(newHead)
  newHTML.appendChild(newBody)
  return newHTML.innerHTML
}

const tweetChat = () => {}
