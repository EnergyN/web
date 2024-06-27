document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('input');
    const output = document.querySelector('.output');

    const commands = {
        'help': 'CMDs: help, discord, hack',
        'discord': 'Redirecting to Discord...',
        'hack': 'Redirecting to cheats page...',
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            output.innerHTML += `<div>$ ${command}</div>`;
            
            if (command === 'hack') {
                output.innerHTML += `<div>${commands[command]}</div>`;
                setTimeout(() => {
                    window.location.href = 'web/hack.html';
                }, 1000);
            } else if (command === 'discord') {
                output.innerHTML += `<div>${commands[command]}</div>`;
                setTimeout(() => {
                    window.location.href = 'https://discord.gg/rZQbnwNuYA';  // Podaj prawidłowy URL Twojego serwera Discord
                }, 1000);
            } else if (commands[command]) {
                output.innerHTML += `<div>${commands[command]}</div>`;
            } else {
                output.innerHTML += `<div>Command not found: ${command}</div>`;
            }

            output.scrollTop = output.scrollHeight;
            input.value = '';
        }
    });
});
