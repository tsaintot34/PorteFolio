const toggleButtons = document.getElementsByClassName('toggle-btn')

for (let i = 0; i < toggleButtons.length; i++) {
    const button = toggleButtons[i]

    button.onclick = function(event) {
        event.preventDefault() 
        
        const targetKey = button.getAttribute('data-target')
        const targetId = targetKey + '-details'
        
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
            const isShown = targetElement.classList.contains('show')
            
            if (isShown) {
                targetElement.classList.remove('show')
                button.textContent = 'Voir plus [+]'
            } else {
                targetElement.classList.add('show')
                button.textContent = 'Voir moins [-]'
            }
        }
    }
}