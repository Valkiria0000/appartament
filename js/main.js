$(document).ready(function () {
   let currentFloor = 2;
   let counterUp = $('.counter-up');/*кнопка увеличения этажа*/
   let counterDown = $('.counter-down');/*кнопка уменьшения этажа*/
   let floorPath = $('.main-image-home path');
   let modal = $('.modal');
   let modalCloseButton = $('.modal-dialog-button');
   let buttonPrimery = $('.button-primery');
  
   //функция при наведении мыши на этаж
   floorPath.on('mouseover', function () {
      floorPath.removeClass('current-floor');/*удаляем активный класс у этажей*/
      currentFloor = $(this).attr('data-floor');/*получаем значение текущего этажа*/
      $('.floor').text(currentFloor);/*записываем значение этажа в счетчик справа*/
   });

   floorPath.on('click', toggleModal);/*при клике на этаж - вызвать окно*/
   modalCloseButton.on('click', toggleModal);/*при клике на кнопку - закрывать окно*/
   buttonPrimery.on('click', toggleModal);
      /*отслеживаем клик по кнопке вверх*/
   counterUp.on('click', function () {
      /*проверяем значение этажа, оно не должно быть больше 18*/
     if (currentFloor < 18) { 
        currentFloor++;/*прибавляем один этаж*/
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});/*форматируем переменную с этажом, чтобы было 01 а не 1*/
      $('.floor').text(usCurrentFloor);/*записываем значение этажа в счетчик справа*/
      floorPath.removeClass('current-floor');/*удаляем активный класс у этажей*/
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');/*подсвечиваем текущий этаж*/
   }
   });

   counterDown.on('click', function () {
      if (currentFloor > 2) { 
         currentFloor--;
       usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
       $('.counter-floar').text(usCurrentFloor);
       floorPath.removeClass('current-floor');
       $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
     
    } });

    function toggleModal() { /*функция открыть и закрыть окно*/
      modal.toggleClass('is-open');
   }
   
 });

   
  