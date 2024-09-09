document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de inicio de sesión
    const loginButton = document.querySelector('.btn-success');

    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe

            // Crear una ventana emergente personalizada
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
                <p>Acabas de experimentar un ejemplo de cómo un ataque de phishing podría engañarte. Toma medidas para estar siempre alerta ante posibles fraudes en línea.</p>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">
                    <button id="courseBtn" style="background-color: #9bc74b; color: #1c1e22; padding: 10px 20px; border: none; cursor: pointer; border-radius: 6px;">Ir al Curso de Ingeniería Social</button>
                    <button id="projectBtn" style="background-color: #00c55e; color: #1c1e22; padding: 10px 20px; border: none; cursor: pointer; border-radius: 6px;">Ver mi Proyecto</button>
                    <button id="phishingBtn" style="background-color: #ff4b4b; color: #fcfbfa; padding: 10px 20px; border: none; cursor: pointer; border-radius: 6px;">Volver al Phishing</button>
                </div>
            `;

            document.body.appendChild(messageBox);

            // Redirigir al curso de ingeniería social
            document.getElementById('courseBtn').addEventListener('click', function() {
                window.location.href = 'https://platzi.com/cursos/ingenieria-social/';
            });

            // Redirigir al proyecto
            document.getElementById('projectBtn').addEventListener('click', function() {
                window.location.href = 'Proyecto-curso-ingenieria-social.pdf'; // Cambia esta URL a tu proyecto real
            });

            // Volver al phishing
            document.getElementById('phishingBtn').addEventListener('click', function() {
                document.body.removeChild(messageBox); // Cerrar la ventana emergente
            });
        });
    }
});
