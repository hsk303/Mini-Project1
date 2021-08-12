import "./Modal.css";
function Modal(props){

    if(!props.data ){
        return <div>No data yet</div>
    }
    return(

        <div className={`modal ${(props.visible) ? "" : "hide"}`}>
        <button className="btn" onClick={()=>{props.visibility(false)}}>x</button>
         <p>Cloud Cover-{props.data.cloudcover}</p>
         <p>Seeing-{props.data.seeing}</p>
         <p>Timepoint-{props.data.timepoint}</p>
         <p>Temperature-{props.data.temp2m}</p>
        </div>
    );
}
export default Modal;