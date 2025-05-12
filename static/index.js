document.getElementById('toContent_a').onclick = e => {
    e.preventDefault();
    const textVal = document.getElementById('text').value;
    document.querySelector('.user_text').textContent = textVal;
    document.getElementById('content_a').classList.remove('active');
    document.getElementById('content_b').classList.add('active');
    document.querySelector('.heading').style.display = 'none';
  };

  document.getElementById('show_detail').onchange = function() {
    document.getElementById('user_key').type =
      this.checked ? 'text' : 'password';
  };