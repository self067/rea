import React from 'react';

function Footer(){
  return (
    <footer>
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-2 col-12">
                <a href="#">Главная</a>
                <a href="#">Тарифы</a>
            </div>
            <div class="col-md-2 col-sm-3 col-12">
                <a href="#">Вопросы-ответы</a>
                <a href="#">Личный кабинет</a>
            </div>
            <div class="col-md-3 col-sm-4 col-12">
                <a href="#">Новости</a>
                <a href="#">Договор публичной оферты</a>
            </div>
            <div class="col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-0 col-12 col-offset-0">
                <p>Мы в социальных сетях:</p>
                <a href=""><img src="images/footer/face.svg" alt=""/></a>
                <a href=""><img src="images/footer/google.svg" alt=""/></a>
                <a href=""><img src="images/footer/insta.svg" alt=""/></a>
            </div>
        </div>
        <div class="line"></div>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-12">
                <p>2019. Все права защищены</p>
            </div>
            <div class="col-md-6 col-sm-6 col-12 web">
                <img src="./images/footer/academy.png" alt=""/>
            </div>
        </div>
    </div>
</footer>

  );
}

export default Footer;
