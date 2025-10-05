(function(){
  // Target date: 03.11.2025 16:40:20 (assuming DD.MM.YYYY as user wrote)
  // We'll create a Date using local timezone.
  const target = new Date(2025, 10, 3, 16, 40, 20); // months are 0-based: 10 = November

  const $d = document.getElementById('days');
  const $h = document.getElementById('hours');
  const $m = document.getElementById('minutes');
  const $s = document.getElementById('seconds');
  const title = document.getElementById('title');

  function pad(n){ return String(n).padStart(2,'0'); }

  function update(){
    const now = new Date();
    let diff = Math.max(0, target - now);
    if(diff <= 0){
      // expired
      $d.textContent = '00';
      $h.textContent = '00';
      $m.textContent = '00';
      $s.textContent = '00';
      title.textContent = 'It\'s time.';
      clearInterval(timer);
      return;
    }
    const secs = Math.floor(diff/1000);
    const days = Math.floor(secs / 86400);
    const hours = Math.floor((secs % 86400) / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;

    $d.textContent = pad(days);
    $h.textContent = pad(hours);
    $m.textContent = pad(minutes);
    $s.textContent = pad(seconds);
  }

  update();
  const timer = setInterval(update, 1000);
})();
