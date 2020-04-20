let data = [
    {
        photo: 'images/beach.jpg',
        title: 'Beach in Blue Bay Marine Park',
        description: 'The Blue Bay Marine Park is a must see! There you will find rare corals and fish species in a depth of 5.5 metres. There is more than 50 different species of corals that have been identified, and more than 80% are alive.'
    }, {
        photo: 'images/wave.jpg',
        title: 'Waves in Mauritius',
        description: 'Mauritius is a great surf destination if everything comes together. If not however, it is a destination where there are more than enough options for a great non-surfing holiday.'
    }, {
        photo: 'images/volcano.jpg',
        title: 'Trou aux Cerfs', 
        description: 'One of the famous natural tourist attractions in Mauritius is the Trou aux Cerfs dormant volcano located about 1 kilometer from the town of Curepipe. Interestingly, Trou aux Cerfs is also called ‘Murr’s Volcano’.'
    }, {
        photo: 'images/black-river.jpg',
        title: 'Black River Gorges National Park',
        description: 'Discover the Black River Gorges Nature Park, where you will see many endangered species of plants and animals and will get a breathtaking view of Alexandra waterfalls.'
    }, {
        photo: 'images/seven-coloured-earths.jpg', 
        title: 'Seven Coloured Earths',
        description: 'The seven Coloured Earths are a geological formation and prominent tourist attraction found in the Chamarel plain of the Rivière Noire District. It is a relatively small area of sand dunes comprising sand of seven distinct colours.'
    }, {
        photo: 'images/la-vanille.jpg',
        title: 'La Vanille Nature Park',
        description: 'At La Vanille Nature Park you will discover the flora and fauna endemic to Mauritius. In the shade of palm trees and giant bamboo you can observe animals like Nile Crocodiles, tenrecs, eels, iguanas and turtles from Madagascar and Seychelles.'
    }, {
        photo: 'images/monkey.jpg', 
        title: 'Macaque monkeys in Mauritius',
        description: 'Long tailed macaque monkeys (often called the crab-eating macaque in south-east Asia) live well on the island of Mauritius, and are considered non-native. You can meet them freely walking among people in some places.'
    }
];

let currentPhoto = 0;

function loadPhoto(photoNumber) {
    $('#photo').attr('src', data[photoNumber].photo);
    $('#photo-title').text(data[photoNumber].title);
    $('#photo-description').text(data[photoNumber].description);
    highlight(photoNumber);
}

function highlight (indexNumber) {
    $('.thumbnail-container.highlight').removeClass('highlight');
    $(`.thumbnail-container[data-index=${indexNumber}]`).addClass('highlight').append(`<div class='arrow-up'></div>`);
}

function displayThumbnail(imgData, index) {
    img = $(`<img class='thumbnail'>`).attr('src', imgData.photo);
    thumbnailTitle = $(`<h3 class='thumbnail-title'><div class='arrow-down'></div>${imgData.title}</h3>`);  
    div = $(`<div class='thumbnail-container'></div>`).attr('data-index', `${index}`).append(thumbnailTitle).append(img);

    $('.container2').append(div);
}

data.forEach(displayThumbnail);

$('#arrow-right').click(function() {
    currentPhoto++;
    if (currentPhoto >= data.length) {
        currentPhoto = 0;
    };
    loadPhoto(currentPhoto);
});

$('#arrow-left').click(function() {
    currentPhoto--;
    if (currentPhoto < 0) {
        currentPhoto = (data.length-1);
    };
    loadPhoto(currentPhoto);
});

$('.thumbnail-container').click(function() {
    let indexClicked = $(this).attr('data-index');
    let indexNumber = parseInt(indexClicked);
    currentPhoto = indexNumber;

    loadPhoto(indexNumber);
});

loadPhoto(currentPhoto);
