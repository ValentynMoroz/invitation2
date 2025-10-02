import TypingText from "../components/typingText";

function HomePage() {
  return (
    <>
      <section
        className="sticky top-0 min-h-[75vh] pb-10 mx-auto max-w-[450px] pt-[35%]   bg-[#132c1c]  bg-cover  bg-center overflow-hidden  
">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/invitation2/photo/1.jpg')] bg-cover bg-center z-0 " />

        <TypingText text={"Сергій\nВікторія"} />
      </section>

      <section
        className="py-10 relative max-w-[450px] mx-auto bg-[#132c1c] text-[#F7F3E8] font-sans text-center
 
">
        {" "}
        <img
          src="/invitation2/photo/flowers-bg.png"
          alt=""
          className={` 
           
           sticky top-[0px] translate-y-[-120px]  left-0 w-full z-30 pointer-events-none`}
        />
        <img
          src="/invitation2/photo/flowers-bg.png"
          alt=""
          className={` absolute top-[-80px]  left-0 w-full z-20 pointer-events-none`}
        />
        <div className="px-5 mt-[-110px]">
          <h2 className="text-4xl mb-4 text-[#F7F3E8] mt-10 font-greatVibes">Дорогі рідні та близькі</h2>
          <p className="mb-2"> Ми щасливі повідомити вас про найголовнішу подію в нашому житті - наше весілля.</p>
          <p className="mb-8"> Для нас буде величезним подарунком, якщо ви зможете розділити цей день разом з нами!</p>
          <p className="text-3xl font-bold text-[#F7F3E8] mb-4">28.08.2025</p>
          <p>Ми будемо раді бачити Вас у колі наших гостей.</p>
        </div>
      </section>
      <section className="relative pb-10 pt-20 mx-auto max-w-[450px] bg-[#F5F0E8] ">
        <svg className="absolute top-[-35px] left-0 w-full z-40" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path
            d="M0,10
         C5,7 7,10 10,10
         C15,7 20,3 25,10
         C25,7 30,10 35,10
         C40,6 45,8 50,10
         C55,6 55,8 60,4
         C70,10 75,8 80,10
         C85,6 95,8 100,10
         L100,20 L0,20 Z"
            fill="#F5F0E8"
          />
        </svg>

        <div className="relative px-2 text-center mx-auto max-w-[450px] overflow-hidden ">
          <img
            src="/invitation2/photo/flowers-bg.png"
            alt=""
            className="w-[200px] absolute top-[80px]  left-[-80px]  z-20 rotate-90"
          />
          <img
            src="/invitation2/photo/flowers-bg.png"
            alt=""
            className="w-[200px] absolute bottom-[140px]  right-[-80px]  z-20 rotate-270"
          />
          <h2 className="font-greatVibes text-6xl">Timing</h2>
          <p>Програма торжества</p>
          <ul className="flex flex-col gap-10 mt-10 w-[80%] mx-auto">
            <li className="flex flex-col gap-2">
              <p className="text-[#0B3F33] text-4xl">17:00</p>
              <h3>Приїзд гостей</h3>
              <p className="text-[14px]">
                В цей час відкриється welcome-зона з шампанським, смаколиками та фотозоною, щоб ви могли насолодитися
                атмосферою свята ще до царемонії.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <p className="text-[#0B3F33] text-4xl">17:30</p>
              <h3>Царемонія</h3>
              <p className="text-[14px]">В цей прекрасний момент ми обміняємося клятвами і скажемо оди одному Так</p>
            </li>
            <li className="flex flex-col gap-2">
              <p className="text-[#0B3F33] text-4xl">18:00</p>
              <h3>Фотозйомка</h3>
              <p className="text-[14px]">
                Фотографи сфотографують вашу елегантність і кожен кадр стане частиною нашої спільної історії
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <p className="text-[#0B3F33] text-4xl">18:55</p>
              <h3>Початок банкета</h3>
              <p className="text-[14px]">
                Ми піднімемо перші келихи за любов і сімю, почуємо добре слово від близьких і розділимо цей вечір разом
                з вами
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <p className="text-[#0B3F33] text-4xl">00:00</p>
              <h3>Закінчення бенкету</h3>
              <p className="text-[14px]">
                Ми розріжемо весільний торт - солодкий символ нашої нової сімї а далі в небі засяє салют, щоб разом з
                вами відсвяткувати начало нашого майбутнього!
              </p>
            </li>
          </ul>
        </div>
        <svg className="absolute bottom-[-40px] left-0 w-full z-40" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path
            d="M0,10
       C5,7 7,10 10,10
       C15,7 20,3 25,10
       C25,7 30,10 35,10
       C40,6 45,8 50,10
       C55,6 55,8 60,4
       C70,10 75,8 80,10
       C85,6 95,8 100,10
       L100,20 L0,20 Z"
            fill="#F5F0E8"
            transform="scale(1,-1) translate(0,-20)"
          />
        </svg>
      </section>
      <section className="relative mx-auto max-w-[450px] text-[#F7F3E8]  bg-[#132c1c]  ">
        <div className="  text-center ">
          <div className=" relative bg-[url('/invitation2/photo/bg_location.jpeg')] h-80 bg-cover bg-[center_bottom_-70px]  pt-22 after:w-full after:h-full after:bg-black after:content-[''] after:absolute after:inset-0 after:opacity-20 ">
            <div className="relative  z-10">
              <h2 className="font-greatVibes text-6xl z-10 ">Dress code</h2>
              <p>Зовнішній вигляд</p>
              <p>Ми будемо вдячні, якщо Ви дотримаєтеся кольорової гами</p>
            </div>
          </div>
          <div className=" mt-10 relative z-20  h-80 bg-[url('/invitation2/photo/bg-house.png')] bg-cover after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-40 ">
            {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
            <svg
              className="mx-auto w-full absolute z-10 top-[-75px] after:w-full after:h-full after:bg-black after:content-[''] after:absolute after:inset-0 after:opacity-40"
              viewBox="0 0 100 20"
              preserveAspectRatio="none">
              <path d="M0,3 C30,15 60,0 100,2 L100,20 L0,20 Z" fill="#132c1c" />
            </svg>
            <svg
              className="mx-auto w-full absolute z-10 top-[-75px] after:w-full after:h-full after:bg-black after:content-[''] after:absolute after:inset-0 after:opacity-40"
              viewBox="0 0 100 20"
              preserveAspectRatio="none">
              <path d="M0,3 C30,15 60,0 100,2 L100,20 L0,20 Z" fill="black" fillOpacity="0.4" />
            </svg>{" "}
            <div className="relative z-30">
              <h2 className="font-greatVibes text-6xl">Location</h2>
              <p>Місце проведення</p>
              <p className="mt-10">
                Чекаємо Вас за адресою: <br /> м.Київ, вул. Центральна 32
              </p>
            </div>
          </div>
        </div>
        <svg className="absolute bottom-[-20px] left-0 w-full z-40" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path
            d="M0,10
       C5,7 7,10 10,10
       C15,7 20,3 25,10
       C25,7 30,10 35,10
       C40,6 45,8 50,10
       C55,6 55,8 60,4
       C70,10 75,8 80,10
       C85,6 95,8 100,10
       L100,20 L0,20 Z"
            fill="#F5F0E8"
          />
        </svg>
      </section>
      <section className=" py-10 relative text-center mx-auto max-w-[450px] bg-[#F5F0E8] ">
        <div className=" px-2 ">
          <h2 className=" font-greatVibes text-6xl">Details</h2>
          <p>Наші побажання</p>
          <p className="w-[80%] mx-auto ">
            Якщо ви захочете подарить нам букет то пропонуємо не мучити квіти довгою дорогою и замінити їх бутилочкою
            будб якого напою.
          </p>
          <p className="w-[90%] mx-auto">
            Ми не хочемо затрудняти вас вибором подарка, тому будемо раді Вашому вкладу в бюджет молодої сім'ї.
          </p>
        </div>
      </section>
      <section className="pb-10  pt-44 mx-auto max-w-[450px] text-center relative bg-[#132c1c] text-[#F5F0E8] ">
        <div className=" px-2 ">
          <img
            src="/invitation2/photo/flowers-bg.png"
            alt=""
            className="absolute top-[-40px]  left-0 w-full z-20 pointer-events-none scale-y-[-1]"
          />
          <h2 className="font-greatVibes text-6xl">Questionnaire</h2>
          <p>Анкета гостя</p>
          <div className="mt-5">
            <p className="text-4xl font-extralight  text-[#F7F3E8] mb-4">28.08.2025</p>
            <p className="text-4xl font-extralight   text-[#F7F3E8] mb-4">17:00</p>

            <p></p>
          </div>
          <p>Будь ласка підтвердіть свою присутність написнувши кнопку нижче.</p>
          <button
            className="bg-gradient-to-r from-[#1b5a3e] to-[#132c1c] w-60 mt-10
               text-white font-bold py-3 px-6
               rounded-lg
               border border-[#1b5a3e]
               shadow-xl shadow-black/75
               transform transition-all duration-500
               hover:translate-y-[-3px] hover:shadow-lg hover:shadow-white/15">
            Заповнити анкету{" "}
          </button>
        </div>
      </section>
      <section className=" bg-[#132c1c] mx-auto mt-[-1px] max-w-[450px] overflow-hidden">
        <div className="relative  h-32  ">
          <img className=" absolute" src="/invitation2/photo/flowers-bg.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default HomePage;
