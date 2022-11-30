const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
let messagesRobot = [
  'К сожалению, все операторы сейчас заняты. Больше не пишите, они не освободятся.',
  'Здравствуйте и до свидания!',
  'Ваши проблемы нас не волнуют!',
  'Мы не хотим иметь с Вами дело!',
  'Спросите у своей мамы!',
];

function RandMessagesRobot(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
})

chatWidgetInput.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    if (chatWidgetInput.value) {

      let date = new Date();

      messages.innerHTML += `
      <div class="message">
        <div class="message__time">` + date.toTimeString().slice(0, 5) + `</div>
        <div class="message__text">`+ chatWidgetInput.value + `</div>
      </div>
      `;

      const message = Array.from(document.querySelectorAll('.message'));

      message.forEach((item) => {
        if (!item.classList.contains('message_client')) {
          if (message.indexOf(item) % 2 == 0) {
            item.classList.add('message_client');
          }
        }
      })

      chatWidgetInput.value = '';

      messages.innerHTML += `
      <div class="message">
        <div class="message__time">` + date.toTimeString().slice(0, 5) + `</div>
        <div class="message__text">`+ RandMessagesRobot(messagesRobot) + `</div>
      </div>
      `;
    } else {
      alert('Поле не должно быть пустым!')
    }
  }
});
