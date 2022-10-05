// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll('.like-glyph')
hearts.forEach(item => {
  item.addEventListener('click', likeCallBack)
})

function likeCallBack(e){
  let heartObj = e.target;
  mimicServerCall()
    .then(() => {
        if(heartObj.innerText === EMPTY_HEART){
          heartObj.innerText = FULL_HEART
        }else {
          heartObj.innerText = EMPTY_HEART
      }
    })
    .catch((error) => {
          let alertMessage = alert(error)
          setTimeout(()=>alertMessage, 3000)
        })
      }




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
