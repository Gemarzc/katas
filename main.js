document.addEventListener('DOMContentLoaded', () => {
  const elementToRemove = document.querySelector('.fn-remove-me')

  if (elementToRemove) {
    elementToRemove.remove()
  }
})
