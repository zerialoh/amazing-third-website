 //dark mode button       
function changeColor(color) {
            document.body.style.background = color;
        }
         
        function gfg_Run() {
            changeColor('black');
          
        } document.querySelector('button.dark').addEventListener('click', function(){
    document.querySelector('body').style.color='white';
        }       )

//light mode button        
        function changeColor(color) {
            document.body.style.background = color;
        }
         
        function gfg_Ruo() {
            changeColor('white');
        }       

 document.querySelector('button.light').addEventListener('click', function(){
    document.querySelector('body').style.color='black';
 } )