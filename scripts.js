document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    const pusakaContainer = document.createElement('pusaka-container');

    pusakaContainer.setAttribute('data-agent-id', '775fe527');
    pusakaContainer.setAttribute('data-theme', 'dark');
    pusakaContainer.setAttribute('data-app-mode', 'chat');
    pusakaContainer.setAttribute('data-enable-autofocus', 'true');
    pusakaContainer.setAttribute('id',"chat-container")

    chatContainer.appendChild(pusakaContainer);

    // Tambahkan script Pusaka Container
    const script = document.createElement('script');
    script.src = 'https://app-container-prod.pusaka.ai/pusaka-container.mjs';
    script.type = 'module';

    document.head.appendChild(script);
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('https://herifauzan.github.io/AIO/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
