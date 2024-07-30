// JavaScript to update doctor information based on URL parameter
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const doctor = urlParams.get('doctor');
    
    const doctors = {
        'JohnDoe': {
            name: 'Dr. John Doe',
            specialization: 'General Consultation',
            image: 'doctor1.jpg'
        },
        'SarahWilliams': {
            name: 'Dr. Sarah Williams',
            specialization: 'Pediatric Care',
            image: 'doctor2.jpg'
        },
        'AlanBrown': {
            name: 'Dr. Alan Brown',
            specialization: 'Dermatology',
            image: 'doctor3.jpg'
        },
        'JaneSmith': {
            name: 'Dr. Jane Smith',
            specialization: 'Cardiology',
            image: 'doctor4.jpg'
        },
        'MichaelJohnson': {
            name: 'Dr. Michael Johnson',
            specialization: 'Orthopedics',
            image: 'doctor5.jpg'
        },
        'EmilyDavis': {
            name: 'Dr. Emily Davis',
            specialization: 'Ophthalmology',
            image: 'doctor6.jpg'
        },
        'MarkWilson': {
            name: 'Dr. Mark Wilson',
            specialization: 'Dental Care',
            image: 'doctor7.jpg'
        },
        'LindaTaylor': {
            name: 'Dr. Linda Taylor',
            specialization: 'Gynecology',
            image: 'doctor8.jpg'
        }
    };

    if (doctor && doctors[doctor]) {
        document.getElementById('doctor-name').textContent = doctors[doctor].name;
        document.getElementById('doctor-specialization').textContent = doctors[doctor].specialization;
        document.getElementById('doctor-image').src = doctors[doctor].image;
    }
});
