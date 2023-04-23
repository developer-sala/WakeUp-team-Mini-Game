const sala = document.querySelector('#sala');
let pos = { x: 0, y: 0 };
// 사용자가 어떤 키를 눌렀는지 정보를 저장하는 객체
let keys = {};

// 사용자가 키를 눌렀을때 실행
function move(event) {
  keys[event.key] = true;
}

function stop(event) {
  keys[event.key] = false;
}

document.addEventListener('keydown', move);
document.addEventListener('keyup', stop);

function play() {
  if (keys.ArrowRight) {
    pos.x += 5;
  }

  if (keys.ArrowLeft) {
    pos.x -= 5;
  }

  if (keys.ArrowUp) {
    pos.y -= 5;
  }

  if (keys.ArrowDown) {
    pos.y += 5;
  }
  sala.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

  requestAnimationFrame(play);
}
play();
