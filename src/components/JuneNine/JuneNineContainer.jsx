*{
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}
.container{
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.wrapper{
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100%;
  background-color: rgb(214, 212, 214);
}
.buttonportion{
  background-color: rgb(255, 255, 255);
  padding: 10px 7px 0px 0px;
border-bottom:1px solid rgb(190, 187, 187);
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
}
.buttonportion:active{
  background-color: #2fc772;
  color: white;
}

.cardPortion{
  position: fixed;
  left: 40%;
  top: 30%;
  bottom: 100%;
  background-color: forestgreen !important;
}
.aaa{
  font-size: 25px;
}
.bbb{
  font-size: 16px;
  font-weight: 500;
}

/*--container---*/

.abcard{
  width: 350px;
  height: 160px;
  background-color: rgb(255, 255, 255);
}


/*--Abcard--*/

.headerdiv{
  margin-bottom: 20px;
  background-color: #2fc772;
}
.headerdiv p{
  padding: 5px;
  color: white;
  font-weight: 500;
}
.subcontentwrapper{
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  margin-left: 15%;
}
.AbCardContent{
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin-right: 20px;
}
.ps{
  margin-left: 10px;
  font-size: 13px;
 
}
.p1{
  margin-bottom: 5px;
  font-weight: 500;
}
.p2{
  margin-top: -5px;
  font-size: 13px;
}