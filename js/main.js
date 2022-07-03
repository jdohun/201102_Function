
/*function Switch(){
  this.classList.toggle("odd");
  this.classList.toggle("even");
}

function LineSwitch(){
  let node = this.parentElement.firstElementChild;
  while(node != null){
    node.classList.toggle("odd");
    node.classList.toggle("even");
    node = node.nextElementSibling;
  }
}

$(".even").click(LineSwitch);
$(".odd").click(LineSwitch);*/

$(document).ready(()=>{
  let board = $("body").append("<div class='Board'></div>");
  let i = 0;
  let j = 0;
  for(i = 0; i < 20; ++i){
    let row = $(".Board").append("<div class='row'></div>");
    for(j = 0; j < 20; ++j){
      if(i%2 == 0){
        if(j%2 ==0){
          $(".row:last-child").append("<div class='cell odd'></div>");
        }
        else{
          $(".row:last-child").append("<div class='cell even'></div>");
        }
      }
      else{
        if(j%2 == 0){
          $(".row:last-child").append("<div class='cell even'></div>");
        }
        else{
          $(".row:last-child").append("<div class='cell odd'></div>");
        }
      }
    }
  }
})

function FirstCellSwitch() {
  let node = this.parentElement.parentElement.firstElementChild;
  while(node != null) {
    node.firstElementChild.classList.toggle("odd");
    node.firstElementChild.classList.toggle("even");
    node = node.nextElementSibling;
  }
}

$(".even").click(FirstCellSwitch);
$(".odd").click(FirstCellSwitch);
