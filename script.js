function sendEmail(e) {
    e.preventDefault();

    const button = document.querySelector('.submit-button');
    const buttonText = button.querySelector('.button-text');
    const loadingSpinner = button.querySelector('.loading-spinner');

    buttonText.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    button.disabled = true;

    const formData = {
        user_name: document.getElementById('name').value,
        user_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send(
        'service_w4amou8',
        'template_14iq03r',
        formData
    )
    .then(function(response) {
        showNotification('Pesan berhasil terkirim!', 'success');
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        showNotification('Gagal mengirim pesan. Silakan coba lagi.', 'error');
    })
    .finally(function() {
        buttonText.classList.remove('hidden');
        loadingSpinner.classList.add('hidden');
        button.disabled = false;
    });

    return false;
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active')); // Menghapus kelas aktif dari semua item
            item.classList.add('active'); // Menambahkan kelas aktif pada item yang dipilih
        });
    });
});
