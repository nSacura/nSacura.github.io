(() => {
  const loaderClass = 'custom-scroll-loading'

  const getLoader = element => {
    const sibling = element.nextElementSibling
    return sibling?.classList.contains(loaderClass) ? sibling : null
  }

  const remove = element => {
    getLoader(element)?.remove()
  }

  const add = element => {
    remove(element)

    const loader = document.createElement('div')
    loader.className = loaderClass
    loader.setAttribute('role', 'status')
    loader.setAttribute('aria-label', '正在加载')

    const image = document.createElement('img')
    image.className = 'custom-scroll-loading__image'
    image.src = '/img/loading.gif'
    image.alt = '正在加载'

    loader.append(image)
    element.insertAdjacentElement('afterend', loader)
  }

  window.btf.setLoading = { add, remove }
})()
