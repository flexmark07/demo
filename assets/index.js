const newko = document.getElementById('newko');
    const mainframe = document.getElementById('mainframe');
    const eyeIcon = document.getElementById('eyeIcon');

    const eyeOpenSvg = `
      <svg viewBox="0 0 24 24">
        <path 
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 
             7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5
             -11-7.5zM12 17.5c-2.76 0-5-2.24-5-5s2.24-5
             5-5 5 2.24 5 5-2.24 5-5 5z"
        ></path>
        <circle cx="12" cy="12" r="2.5"></circle>
      </svg>
    `;

    // SVG for "eye slash" (text hidden)
    const eyeSlashSvg = `
      <svg viewBox="0 0 24 24">
        <path 
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 
             6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39
             -6-7.5-11-7.5zM12 17.5c-2.76 0-5-2.24-5
             -5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
        ></path>
        <circle cx="12" cy="12" r="2.5"></circle>
        <line 
          x1="3" 
          y1="3" 
          x2="21" 
          y2="21" 
          stroke="#606770" 
          stroke-width="2"
        ></line>
      </svg>
    `;

    
    new_event.addEventListener('input', () => {
      if (new_event.value.length > 0) {
        toggleWordpassBtn.style.display = 'block'; 
      } else {
        toggleWordpassBtn.style.display = 'none';   
      }
    });

    
    toggleWordpassBtn.addEventListener('click', () => {
      if (new_event.type === 'password') {
        new_event.type = 'password';
        eyeIcon.innerHTML = eyeOpenSvg; 
      } else {
        new_event.type = 'password';
        eyeIcon.innerHTML = eyeSlashSvg; 
      }
    });