function sendMessage() {
  const input = document.querySelector('.chat-input input');
  if(input.value.trim() === '') return;
  const chatWindow = document.querySelector('.chat-window');
  const div = document.createElement('div');
  div.className = 'message';
  div.innerHTML = `<b>You:</b> ${input.value}`;
  chatWindow.appendChild(div);
  input.value = '';
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Make server and channel items clickable (already in HTML with alert)
