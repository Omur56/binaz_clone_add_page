const name_select = document.querySelector('#name_select');
const container_input_client = document.querySelector('.container_input_client');
const city_select = document.querySelector('.city_select');
const area_input = document.querySelector('.area_input');
const additional_info_textarea = document.querySelector('.additional_info_textarea');
const price_input = document.querySelector('.price_input');
const district_select = document.querySelector('.district_select');
const submit_div = document.querySelector('.submit_div');
const town_select = document.querySelector('.town_select');
const addres_input = document.querySelector('.addres_input');
const image_input = document.querySelector('.image_input');
const name_input = document.querySelector('.name_input');
const email_input = document.querySelector('.email_input');
const phone_input = document.querySelector('.phone_input');
const text_info_img = document.querySelector('.text_info_img');
const submit_btn = document.querySelector('.submit_btn');
const warning_text = document.querySelector('.warning_text');
const form = document.querySelector('form');
const number_of_rooms = document.querySelector('.number_of_rooms');
const number_of_rooms_2 = document.querySelector('.number_of_rooms_2');
const number_of_rooms_3 = document.querySelector('.number_of_rooms_3');
const district_div = document.querySelector('.district_div');
const baku_selected = document.querySelector('#baku_selected');
const checkbox_excerpt = document.querySelector('.checkbox_excerpt');
const info_div_text = document.querySelector('.info_div_text');



phone_input.addEventListener('focus', (e) => {
if(phone_input.value == '') {
    info_div_text.style.display = 'flex';
}else{
    info_div_text.style.display = 'none';
}
});

phone_input.addEventListener('focusout', (e) => {
  if(phone_input.value == '') {
    info_div_text.style.display = 'none';
  }else{
    info_div_text.style.display = 'flex';
  }
});



container_input_client.addEventListener('change', () => {
    if(container_input_client.value == 'satıram') {
        checkbox_excerpt.style.display = 'block';
    }else {
        checkbox_excerpt.style.display = 'none';
    }
})

name_select.addEventListener('change', () => {
    if(name_select.value == '1'){
        number_of_rooms.style.display = 'block';
        number_of_rooms_2.style.display = 'block';
        number_of_rooms_3.style.display = 'block';
    }else {
        number_of_rooms.style.display = 'none';
        number_of_rooms_2.style.display = 'none';
        number_of_rooms_3.style.display = 'none';
    }
})


baku_selected.addEventListener('change', () => {

   if(baku_selected.value == '1') {
    district_div.style.display = 'block';
   }else {
    district_div.style.display = 'none';
   }
})


const all_input = document.querySelectorAll('input, textarea, select, button');


submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    all_input.forEach(input => {
        if(input.value == '') {
            input.style.border = '1px solid red';
            warning_text.style.display = 'block';
        }else {
            input.style.border = 'none';
            warning_text.style.display = 'none';
        }
    })

    const product = {
        Ad: name_input.value,
        email: email_input.value,
        Telefon: phone_input.value,
        Qiymət: price_input.value,
        Şəhər: city_select.value,
        Sahə: area_input.value,
        Əlavə_Məlumat: additional_info_textarea.value,
        Rayon: district_select.value,
        Şəhər: town_select.value,
        Ünvan: addres_input.value,
        Şəkil: image_input.value,
        Otaqların_sayı: number_of_rooms.value,
        Mərtəbə: number_of_rooms_2.value,
        Mərtəbə_sayı: number_of_rooms_3.value,
        Müştəri: container_input_client.value,
        Şəhər: baku_selected.value,
       Çıxarış_İpteka: checkbox_excerpt.value,
    }

    console.log(product);

    
    })


const submit_img = document.querySelector('.submit_img');


submit_btn.addEventListener('click', (e) => {
   
if( submit_btn.value == 'Təsdiqlə'  ) {
    submit_img.style.display = 'block';
  
    
}else {
    submit_img.style.display = 'block';
}
})



const counter = document.querySelector('.counter');

const max_length = 100;
const min_length = 0;

additional_info_textarea.addEventListener('input', () => {
    const currentLength = additional_info_textarea.value.length;
    const remaining = max_length - currentLength;
    const counter_2 = min_length - currentLength;
    counter.innerText = `${remaining} simvol qaldı`;
    counter.style.color = 'green';
    if(remaining <= min_length) {
        counter.innerText = `${counter_2} simvol qaldı`;
        counter.style.color = 'red';
    }
});



submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    
});