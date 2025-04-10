document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');  
  const currentTheme = localStorage.getItem('theme');  
  if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      icon.classList.replace('fa-moon', 'fa-sun');  }  
  themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');      
      if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
          icon.classList.replace('fa-moon', 'fa-sun');
      } else {
          localStorage.setItem('theme', 'light');
          icon.classList.replace('fa-sun', 'fa-moon');
      }
  });
    const progressBars = document.querySelectorAll('.progress');  
  const animateProgressBars = () => {
      progressBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = '0';          
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      bar.style.width = width + '%';
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.5 });
          
          observer.observe(bar);
      });
  };  
  animateProgressBars(); 
  const contactForm = document.getElementById('contact-form');  
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();      
      let isValid = true;         
      const name = document.getElementById('name');
      const nameError = document.getElementById('name-error');
      if (name.value.trim() === '') {
          nameError.textContent = 'Name is required';
          isValid = false;
      } else {
          nameError.textContent = '';
      }      
      const email = document.getElementById('email');
      const emailError = document.getElementById('email-error');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() === '') {
          emailError.textContent = 'Email is required';
          isValid = false;
      } else if (!emailRegex.test(email.value)) {
          emailError.textContent = 'Please enter a valid email';
          isValid = false;
      } else {
          emailError.textContent = '';
      }         
      const message = document.getElementById('message');
      const messageError = document.getElementById('message-error');
      if (message.value.trim() === '') {
          messageError.textContent = 'Message is required';
          isValid = false;
      } else {
          messageError.textContent = '';
      }
      
      if (isValid) {          
          alert('Message sent successfully!');
          contactForm.reset();
      }
  });
});