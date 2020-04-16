import React,{Component} from 'react';
//import './App.css';

  class Front extends Component{
    
    componentDidMount() {
  
        fetch("https://api.jsonbin.io/b/5e94bc0be41a7f4da62c9a78",{
          method: 'GET',
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': '',
            'secret-key' : '$2b$10$l3N49XjHmtdRuEiD48jlbuG7Z.QH4Z9TmBA2En4RgcUE9RSQPiIOq'
          })
        })
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result, 'response JSON');
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    constructor(props) {
      super(props);
      this.state = {
        bgColor1: "",
        bgColor2: "",
        bgColor3: "",
        bgColor4: "",
        bgColor5: "",
        bgColor6: "",
        bgColor7: "",
        error: null,
        isLoaded: false,
        items: [],
        recitalTitle: '',
        firstLessonTitle: '',
        secondLessonTitle: '',
        thirdLessonTitle: '',
        fourthLessonTitle: '',
        fifthLessonTitle: '',
        sixthLessonTitle: '',
        seventhLessonTitle: '',
        lessonTitleGeneral: ''
        
      }
    }
    bg1Clicked = (e) => {
      var lessonDetails = this.state.items.lessonDetails;
      var lesson = lessonDetails[1];
      this.setState({
        background:'',
        bgColor1: "green",
        bgColor2: "white",
        bgColor3:  "orange",
        bgColor4: "orange",
        bgColor5: "orange",
        bgColor6: "orange",
        bgColor7: "orange",
        lessonTitleGeneral : lesson.lessonTitle
        
        
      });
      console.log("Inside changebg");
    }
    bg2Clicked = (e) => {
      var lessonDetails = this.state.items.lessonDetails;
      var lesson = lessonDetails[2];
      this.setState({
        bgColor1: "green",
        bgColor2: "green",
        bgColor3:  "white",
        bgColor4: "orange",
        bgColor5: "orange",
        bgColor6: "orange",
        bgColor7: "orange",
        lessonTitleGeneral : lesson.lessonTitle
      });
      console.log("Inside changebg");
    }
    bg3Clicked = (e) => {
      var lessonDetails = this.state.items.lessonDetails;
      var lesson = lessonDetails[3];
        this.setState({
          bgColor1: "green",
          bgColor2: "green",
          bgColor3:  "green",
          bgColor4: "white",
          bgColor5: "orange",
          bgColor6: "orange",
          bgColor7: "orange",
          lessonTitleGeneral : lesson.lessonTitle
        });
        console.log("Inside changebg");
      }
      bg4Clicked = (e) => {
        var lessonDetails = this.state.items.lessonDetails;
        var lesson = lessonDetails[4];
        this.setState({
          bgColor1: "green",
          bgColor2: "green",
          bgColor3:  "green",
          bgColor4: "green",
          bgColor5: "white",
          bgColor6: "orange",
          bgColor7: "orange",
          lessonTitleGeneral : lesson.lessonTitle
        });
        console.log("Inside changebg");
      }
      bg5Clicked = (e) => {
        var lessonDetails = this.state.items.lessonDetails;
        var lesson = lessonDetails[5];
        this.setState({
          bgColor1: "green",
          bgColor2: "green",
          bgColor3:  "green",
          bgColor4: "green",
          bgColor5: "green",
          bgColor6: "white",
          bgColor7: "orange",
          lessonTitleGeneral : lesson.lessonTitle
        });
        console.log("Inside changebg");
        
      } 
      bg6Clicked = (e) => {
        var lessonDetails = this.state.items.lessonDetails;
        var lesson = lessonDetails[6];
        this.setState({
          bgColor1: "green",
          bgColor2: "green",
          bgColor3:  "green",
          bgColor4: "green",
          bgColor5: "green",
          bgColor6: "green",
          bgColor7: "white",
          lessonTitleGeneral : lesson.lessonTitle
        });
        console.log("Inside changebg");
        
      } 
      bg7Clicked = (e) => {
        this.setState({
          bgColor1: "green",
          bgColor2: "green",
          bgColor3:  "green",
          bgColor4: "green",
          bgColor5: "green",
          bgColor6: "green",
          bgColor7: "green",
          lessonTitleGeneral : ''
        });
        console.log("Inside changebg");
        
      } 
     
    render(){

          const mystyle ={
            textAlign: 'center',
            background: '#B0ADB7',
            color:'#260561',
            marginTop: 0
          }
          const btnx={        
            border:'none',
            borderRadius:'60%',
            padding:'5px 10px',
           
          }
          const btn1={
            border:'none',
            padding:'5px 10px',
            float:'right'
          }
          const Cstyle ={
            height: 75,
            width: 75,
              }
      return (
        <div style={mystyle} >
            <h1>Lavender's Blue</h1>
           <div style={Cstyle}><img src="//joeschmoe.io/api/v1/josh"></img> </div>

            {this.state.items.recitalTitle}
          <p>Lessons</p>
        <button style={{backgroundColor: this.state.bgColor1}}  onClick={() => this.bg1Clicked()}  > 1</button>{' '}
        <button style={{backgroundColor: this.state.bgColor2}} onClick={() => this.bg2Clicked()}  > 2 </button>{' '}
        <button style={{backgroundColor: this.state.bgColor3}} onClick={() => this.bg3Clicked()} > 3 </button>{' '}
        <button style={{backgroundColor: this.state.bgColor4}} onClick={() => this.bg4Clicked()}> 4 </button>{' '}
        <button style={{backgroundColor: this.state.bgColor5}}onClick={() => this.bg5Clicked()}> 5 </button>{' '}
        <button style={{backgroundColor: this.state.bgColor6}}onClick={() => this.bg6Clicked()}> 6 </button>{' '}
        <button style={{backgroundColor: this.state.bgColor7}}onClick={() => this.bg7Clicked()}> 7 </button>{' '}
         
         <br></br>
         {this.state.lessonTitleGeneral}
        <button style={btn1}>Exit Session</button>
         
        </div>
      );
    }
  
  
}
export default Front;