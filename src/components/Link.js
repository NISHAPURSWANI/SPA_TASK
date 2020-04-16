import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoMdCloseCircle } from 'react-icons/io';
import { IoMdCreate } from 'react-icons/io';
import ReactPlayer from 'react-player'


class Link extends Component {
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
    this.state={
        border:'',
        testBorder:'',
      }
      this.state={
        border1:'',
        testBorder1:'',
      }
      this.state={
        border2:'',
        testBorder2:'',
      }
      //cs
      this.state={
        border11:'',
        testBorder11:'',
      }
      this.state={
        border12:'',
        testBorder12:'',
      }
      this.state={
        border13:'',
        testBorder13:'',
      }
      //fs
      this.state={
        border21:'',
        testBorder21:'',
      }
      this.state={
        border22:'',
        testBorder22:'',
      }
      this.state={
        border23:'',
        testBorder23:'',
        classFLow:''
      }
}
btrclicked=()=>{
    this.setState({
        
    testBorder :'solid red',
    testBorder1: '',
    testBorder2: ''
    
    });
}
btgclicked=()=>{
  this.setState({
    testBorder1: 'solid green',
    testBorder : '',
    testBorder2: ''

  });
}
btbclicked=()=>{
  this.setState({
    testBorder2: ' solid blue',
    testBorder: '',
    testBorder1: ''

  });
}
  //cs
  bttnrclicked=()=>{
    this.setState({
        
    testBorder11 :'solid red',
    testBorder12: '',
    testBorder13: ''
    
    });
}
bttngclicked=()=>{
  this.setState({
    testBorder12: 'solid green',
    testBorder11 : '',
    testBorder13: ''

  });
}
bttnbclicked=()=>{
  this.setState({
    testBorder13: ' solid blue',
    testBorder11: '',
    testBorder12: ''

  });

}
  //fs
  bttrclicked=()=>{
    this.setState({
        
    testBorder21:'solid red',
    testBorder22: '',
    testBorder23: ''
    
    });
}
bttgclicked=()=>{
  this.setState({
    testBorder22: 'solid green',
    testBorder21: '',
    testBorder23: ''
  });
}
bttbclicked=()=>{
  this.setState({
    testBorder23: ' solid blue',
    testBorder21: '',
    testBorder22: ''

  });
}
classFLow=()=>{
  var lessonDetails = this.state.items.lessonDetails;
  var lesson = lessonDetails[0];
  var objectiveDetails = lesson.objectiveDetails;
  var objective = objectiveDetails[0];

  this.setState({
    lessonFlow: objective.classFlow,
  });
  console.log(this.state.lessonFlow);

}

/*viewActivity=()=>{
  var lessonDetails = this.state.items.lessonDetails;
  var lesson = lessonDetails[0];
  var objectiveDetails = lesson.objectiveDetails;
  var activitiesDetails = lesson.activitiesDetails;
  var activities = activitiesDetails.title;

  this.setState({
    lesson: activitiesDetails.title,
  });
  console.log(this.state.lesson);

}*/

  render() {
    const Fstyle ={
      background: '#FCCB00'
    }
    const Wstyle ={
      background: 'white'
    }
    const Dstyle ={
      background:'#D1E1D9',
      height: 75,
      width: 150,
      textAlign:'center',
    }
    const Mstyle ={
      background: 'white'
    }
    const btn1={
      border:'none',
      padding:'5px 10px',
    }
    const btnr={     
      background:'red',
      border:'none',
      borderRadius:'50%',
      padding:'5px 5px',
    }
    const btng={      
      background:'green',
      border:'none',
      borderRadius:'50%',
      padding:'5px 5px',
    }
    const btnb={     
      background:'blue',
      border:'none',
      borderRadius:'50%',
      padding:'5px 5px',
    }
    const Vstyle ={
      background:'D1E1D9',
      height: 75,
      width: 75,
      borderRadius: '50%',
      textAlign:'center'
    }
    const Cstyle ={
      background:'D1E1D9',
      height: 75,
      width: 75,
      borderRadius: '50%',
      textAlign:'center'
    }

  return (
<Container>
  <Row>
    <Col sm={2} style={Fstyle}>
      Menu<br></br>
      Video Link 1<br></br>
      Video Link 2<br></br>
      Video Link 3<br></br>
      <br></br>
      <div style={{border:this.state.testBorder}}>
      <div style = {{border:this.state.testBorder1}}>
      <div style ={{border:this.state.testBorder2} }>

      <div style={Dstyle}>
        <br></br>
        Time signature
        <br></br>
        <br></br>
        <button style={{border:this.state.testBorder}} onClick={()=>this.btrclicked()} style={btnr}><div> <IoMdCheckmarkCircle/> </div></button>{' '}
        <button style={{border:this.state.testBorder1}} onClick={()=>this.btgclicked()} style={btng}><IoMdCloseCircle/></button>{' '}
        <button style={{border:this.state.testBorder2}} onClick={()=>this.btbclicked()} style={btnb}><IoMdCreate/></button>{' '}
        </div></div></div>
      </div>
      <br></br>
      <div style={{border:this.state.testBorder11}}>
      <div style = {{border:this.state.testBorder12}}>
      <div style ={{border:this.state.testBorder13}}>

      <div style={Dstyle}>
        <br></br>
        CS Finger scale{' '}
        <br></br>RH (15 mins)
        <br></br>
        <button style={{border:this.state.testBorder11}} onClick={()=>this.bttnrclicked()} style={btnr}><div> <IoMdCheckmarkCircle/> </div></button>{' '}
        <button style={{border:this.state.testBorder12}} onClick={()=>this.bttngclicked()} style={btng}><IoMdCloseCircle/></button>{' '}
        <button style={{border:this.state.testBorder13}} onClick={()=>this.bttnbclicked()} style={btnb}><IoMdCreate/></button>{' '}
        </div></div></div>

      </div>
      <br></br>
      <div style={{border:this.state.testBorder21}}>
      <div style = {{border:this.state.testBorder22}}>
      <div style ={{border:this.state.testBorder23}}>

      <div style={Dstyle}>
        <br></br>
        ES Finger scale{' '}
        <br></br>LH (15 mins)
        <br></br>
        <button style={{border:this.state.testBorder21}} onClick={()=>this.bttrclicked()} style={btnr}><div> <IoMdCheckmarkCircle/> </div></button>{' '}
        <button style={{border:this.state.testBorder22}} onClick={()=>this.bttgclicked()} style={btng}><IoMdCloseCircle/></button>{' '}
        <button style={{border:this.state.testBorder22}} onClick={()=>this.bttbclicked()} style={btnb}><IoMdCreate/></button>{' '}
        </div></div></div>

      </div>
      <br></br>
      <br></br>


    </Col>
    <Col sm={8} style={Wstyle}>
      Video Area
      <ReactPlayer url='https://vimeo.com/340877183/1be346d578' playing />
    </Col>
    <Col sm={2} style={Mstyle}>
      <br></br>
      {' '}<div style={Vstyle}> <img src="//joeschmoe.io/api/v1/jess"></img></div><br></br>
    <button>View Activity</button>
    <br></br>
    <br></br>
    {' '}<div style={Cstyle}><img src="//joeschmoe.io/api/v1/jon"></img> </div><br></br>
    <button  onClick={() => this.classFLow()}>View Classroom</button>


    </Col>
  </Row>
</Container>
  );
}
}
export default Link;

