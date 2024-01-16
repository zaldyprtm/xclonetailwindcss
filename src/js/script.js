
    function openSignupModal() {
      var modal = document.getElementById('signupModal');
      var bdy = document.querySelector('body');
      modal.style.display = 'flex';
      bdy.style.backgroundColor = 'gray';
    }

    function closeSignupModal() {
      var modal = document.getElementById('signupModal');
      var bdy = document.querySelector('body');
      modal.style.display = 'none';
      bdy.style.backgroundColor = 'black';
    }

    function signup() {
      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      // Lakukan validasi data atau kirim data ke server sesuai kebutuhan

      // Contoh: Menampilkan alert dengan data yang diisi
      alert('Username: ' + username + '\nEmail: ' + email + '\nPassword: ' + password);

      // Tutup modal setelah sign up berhasil
      var modal = document.getElementById('signupModal');
      modal.style.display = 'none';
    }
