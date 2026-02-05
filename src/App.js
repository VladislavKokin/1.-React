import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App {
  constructor(root) {
    this.root = root
    this.count = 0
    
    const logo = document.createElement('div')

    const viteLink = document.createElement('a')
    viteLink.href = 'https://vite.dev'
    viteLink.className = 'logo'
    viteLink.target = '_blank'

    const viteImg = document.createElement('img')
    viteImg.src = viteLogo
    viteImg.className = "logo"
    viteImg.alt = "Vite logo"

    viteLink.appendChild(viteImg)

    const reactLink = document.createElement('a')
    reactLink.href = 'https://react.dev'
    reactLink.target = '_blank'

    const reactImg = document.createElement('img')
    reactImg.src = reactLogo
    reactImg.className = 'logo react'
    reactImg.alt = 'React logo'

    reactLink.appendChild(reactImg)

    logo.append(viteLink, reactLink)

    const title = document.createElement('h1')
    title.textContent = 'Vite + React'

    const card = document.createElement('div')
    card.className = 'card'

    const button = document.createElement('button')
    button.textContent = `count is ${this.count}`

    button.addEventListener('click', () => {
      this.count += 1
      button.textContent = `count is ${this.count}`
    })

    const p = document.createElement('p')
    p.textContent = 'Edit <code>src/App.jsx</code> and save to test HMR'

    card.append(button, p)

    const docs = document.createElement('p')
    docs.className = 'read-the-docs'
    docs.textContent = 'Click on the Vite and React logos to learn more'

    const date = document.createElement('p')
    date.className = 'read-the-docs'
    date.textContent = new Date().toLocaleDateString('ru-RU')

    this.root.append(
      logo,
      title,
      card,
      docs,
      date
    )
  }
}