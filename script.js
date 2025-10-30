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

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        // ID de la fiche à afficher, stocké dans l'attribut data-project
        const projectId = this.getAttribute('data-project')
        
        // Cacher la liste des projets
        document.getElementById('project-list').classList.add('hidden')
        
        // Afficher la fiche détaillée correspondante
        const projectSheet = document.getElementById(projectId)
        if (projectSheet) {
            projectSheet.classList.remove('hidden')
            // Optionnel: Faire défiler vers le haut de la nouvelle section
            projectSheet.scrollIntoView({ behavior: 'smooth' })
        }
    })
})

document.getElementById('back-to-projects-btn').addEventListener('click', function() {
    
    document.querySelectorAll('.project-detail-page').forEach(sheet => {
        sheet.classList.add('hidden')
    })

    document.getElementById('project-list').classList.remove('hidden')

    document.getElementById('projet').scrollIntoView({ behavior: 'smooth' })
})