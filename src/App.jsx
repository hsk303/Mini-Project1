import {useState, useEffect} from 'react';
import List from './List';
import Modal from './Modal';
function App(){
    let [allData,setData]= useState([]);
    let [modalVisible,setmodalVisible]=useState(false);
    let [currEle,setcurrEle]=useState(-1);

    useEffect(()=>{
        fetch("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
        ).then((res)=>{
            return res.json();
        }).then((json)=>{
            console.log(json);
            setData(json.dataseries);
        });
    
    },[]);

    return(
        <div>
            <Modal data={(allData.length>0 && currEle!=-1)? allData[currEle] : {}} visible={modalVisible} visibility={setmodalVisible} />
            <List visiblehandler={setmodalVisible} data={allData} elehandler={setcurrEle}/>
        </div>
    );
}

export default App;
