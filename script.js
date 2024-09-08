// Esperar a que el DOM se cargue completamente antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Animación para los botones y hover en la caja de login
    const loginButton = document.querySelector('.login-btn');

    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Crear un mensaje de alerta personalizado
            let messageBox = document.createElement('div');
            messageBox.style.position = 'fixed';
            messageBox.style.top = '50%';
            messageBox.style.left = '50%';
            messageBox.style.transform = 'translate(-50%, -50%)';
            messageBox.style.backgroundColor = '#1c1e22';
            messageBox.style.padding = '20px';
            messageBox.style.border = '2px solid #9bc74b';
            messageBox.style.color = '#fcfbfa';
            messageBox.style.textAlign = 'center';
            messageBox.style.zIndex = '1000';
            messageBox.style.width = '80%';
            messageBox.style.maxWidth = '400px';
            messageBox.style.borderRadius = '12px';
            messageBox.innerHTML = `
                <h2>¿Caíste?</h2>
                <p>Increíble, acabas de experimentar lo que sucede por no verificar cuidadosamente el contenido antes de interactuar con él. Este es un claro ejemplo de lo fácil que es caer en ataques como el phishing o la ingeniería social. ¡No dejes que te vuelva a pasar!

</p>
                <button id="lessonBtn" style="background-color: #9bc74b; color: #1c1e22; padding: 10px 20px; border: none; cursor: pointer; border-radius: 6px;">Repasar lección</button>
            `;

            document.body.appendChild(messageBox);

            // Redirigir al curso de ingeniería social
            document.getElementById('lessonBtn').addEventListener('click', function() {
                window.location.href = 'https://platzi.com/cursos/ingenieria-social/';
            });
        });
    }
});
