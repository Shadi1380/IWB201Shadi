document.addEventListener('DOMContentLoaded', function() {
  const propertyDetails = document.getElementById('property-details');
  const captchaText = document.getElementById('captchaText');

  // Data for properties
  const propertiesData = [
      {
          "property": "عقار 1",
          "propertyType": "شفة",
          "rentPrice": "ل.س 1000000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "200 متر مربع",
              "address": "شارع العابد",
              "description": "نبذة عن العقار 1",
              "pho": ["/pho/Ho-1.jpg", "/pho/Ho-11.jpg", "/pho/Ho-111.jpg"]
          }
      },
      {
          "property": "عقار 2",
          "propertyType": "شفة",
          "rentPrice": "ل.س 9500000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "180 متر مربع",
              "address": "الغواص",
              "description": "نبذة عن العقار 2",
              "pho": ["/pho/Ho-2.jpg", "/pho/Ho-22.jpg", "/pho/Ho-222.jpg"]
          }
      },
      {
          "property": "عقار 3",
          "propertyType": "شفة",
          "rentPrice": "ل.س 1000000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "200 متر مربع",
              "address": "شارع العابد",
              "description": "نبذة عن العقار 3",
              "pho": ["/pho/Ho-3.jpg", "/pho/Ho-33.jpg", "/pho/Ho-333.jpg"]
          }
      },
      {
          "property": "عقار 4",
          "propertyType": "شفة",
          "rentPrice": "ل.س 1100000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "200 متر مربع",
              "address": "شارع عدنان المالكي",
              "description": "نبذة عن العقار 4",
              "pho": ["/pho/Ho-4.jpg", "/pho/Ho-44.jpg", "/pho/Ho-444.jpg"]
          }
      },
      {
          "property": "عقار 5",
          "propertyType": "شفة",
          "rentPrice": "ل.س 8000000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "250 متر مربع",
              "address": "الزاهرة الجديدة",
              "description": "نبذة عن العقار 5",
              "pho": ["/pho/Ho-5.jpg", "/pho/Ho-55.jpg", "/pho/Ho-555.jpg"]
          }
      },
      {
          "property": "عقار 6",
          "propertyType": "شفة",
          "rentPrice": "ل.س 7500000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "200 متر مربع",
              "address": "دف الشوك",
              "description": "نبذة عن العقار 6",
              "pho": ["/pho/Ho-6.jpg", "/pho/Ho-66.jpg", "/pho/Ho-666.jpg"]
          }
      },
      {
          "property": "عقار 7",
          "propertyType": "شفة",
          "rentPrice": "ل.س 6000000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "200 متر مربع",
              "address": "التضامن-مسبقة الصنع",
              "description": "نبذة عن العقار 7",
              "pho": ["/pho/Ho-7.jpg", "/pho/Ho-77.jpg", "/pho/Ho-777.jpg"]
          }
      },
      {
          "property": "عقار 8",
          "propertyType": "شفة",
          "rentPrice": "ل.س 1000000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "200 متر مربع",
              "address": "باب مصلى",
              "description": "نبذة عن العقار 8",
              "pho": ["/pho/Ho-8.jpg", "/pho/Ho-88.jpg", "/pho/Ho-888.jpg"]
          }
      },
      {
          "property": "عقار 9",
          "propertyType": "شفة",
          "rentPrice": "ل.س 6500000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "200 متر مربع",
              "address": "يلدا",
              "description": "نبذة عن العقار 9",
              "pho": ["/pho/Ho-9.jpg", "/pho/Ho-99.jpg", "/pho/Ho-999.jpg"]
          }
      },
      {
          "property": "عقار 10",
          "propertyType": "شفة",
          "rentPrice": "ل.س 9500000 مليون ليرة",
          "rentDuration": "شهر",
          "details": {
              "area": "200 متر مربع",
              "address": "شارع خالد بن الوليد",
              "description": "نبذة عن العقار 10",
              "pho": ["/pho/Ho-10.jpg", "/pho/Ho-100.jpg", "/pho/Ho-1000.jpg"]
          }
      }
  ];

  propertiesData.forEach((property, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${property.property}</td>
        <td>${property.propertyType}</td>
        <td>${property.rentPrice}</td>
        <td>${property.rentDuration}</td>
        <td><button class="show-details-btn" data-index="${index}">إظهار التفاصيل</button></td>
        <td><label for="property-radio"> </label>
        <input type="radio" name="property-choice" class="property-radio" data-index="${index}"></td>
      `;
      propertyDetails.appendChild(row);

      const detailsRow = document.createElement('tr');
      detailsRow.classList.add('expanded-details');
      detailsRow.innerHTML = `
        <td colspan="10">
          <div class="details-content" id="details-content-${index}">
            <p><strong>المساحة:</strong> ${property.details.area}</p>
            <p><strong>العنوان:</strong> ${property.details.address}</p>
            <p><strong>الوصف:</strong> ${property.details.description}</p>
            <div class="images-container" id="images-container-${index}"></div>
          </div>
        </td>
      `;
      propertyDetails.appendChild(detailsRow);

      const imagesContainer = document.getElementById(`images-container-${index}`);
      property.details.pho.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        imagesContainer.appendChild(img);
      });
  });

  const showDetailsButtons = document.querySelectorAll('.show-details-btn');
  const expandedDetails = document.querySelectorAll('.expanded-details');

  showDetailsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      expandedDetails.forEach((details, i) => {
        if (index === i) {
          details.classList.toggle('active');
        } else {
          details.classList.remove('active');
        }
      });
    });
  });

  // Captcha generation
  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    captchaText.textContent = captcha;
}

generateCaptcha();

// Button to regenerate captcha
document.querySelector('#formContainer button[onclick="generateCaptcha()"]').addEventListener('click', generateCaptcha);

const form = document.getElementById('userDataForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredCaptcha = document.getElementById('captcha').value;
    if (enteredCaptcha !== captchaText.textContent) {
        alert('رمز التحقق غير صحيح. حاول مرة أخرى.');
        generateCaptcha();
    } else {
      
        // إضافة رسالة التأكيد بعد إرسال النموذج بنجاح هنا
        const selectedPropertyIndex = document.querySelector('input[name="property-choice"]:checked').getAttribute('data-index');
        const selectedProperty = propertiesData[selectedPropertyIndex];
        const message = `تم إستئجار العقار التالي:
العقار: ${selectedProperty.property}
نوع العقار: ${selectedProperty.propertyType}
سعر الإيجار: ${selectedProperty.rentPrice}
مدة الإيجار: ${selectedProperty.rentDuration}
المساحة: ${selectedProperty.details.area}
العنوان: ${selectedProperty.details.address}
الوصف: ${selectedProperty.details.description}`;

        alert(message);

        form.reset();
        generateCaptcha();
    }
});

document.querySelector('.BU').addEventListener('click', () => {
    const selectedProperty = document.querySelector('input[name="property-choice"]:checked');
    if (selectedProperty) {
        document.getElementById('formContainer').style.display = 'block';
    } else {
        alert('يرجى اختيار عقار أولاً.');
    }
});

window.cancelForm = function() {
    document.getElementById('formContainer').style.display = 'none';
};
});

