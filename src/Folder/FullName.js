
const Welcome = props =>{
    console.log(props) 
     return (
       <div style={{display:"inline-block",border:"5px",alignItems:"center"}}>
         <h1 style={{fontWeight:"bold",color:"blue",marginLeft:"150px"}}> Fullname: {props.name}</h1>
       <p style={{fontWeight:"bold",color:"purple",fontSize:"20px",marginLeft:"150px"}}>Bio:{props.bio}</p>
       <p style={{fontWeight:"bolder",color:"red",fontSize:"15px",marginLeft:"150px"}}>proffession:{props.pro}</p>
       </div>
     )
    }
export default Welcome;    