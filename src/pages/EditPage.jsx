import { createRef, useState } from "react";
import { useParams,useSearchParams } from "react-router-dom";
import './styles/EditPage.css';
import Text from "../components/Text";
import html2canvas from "html2canvas";


function EditPage(){
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const memeRef = createRef();
    const handleDownload = async() =>{
            if(!memeRef.current) return;
    
    
            const canvas = await html2canvas(memeRef.current, {useCORS:true});
            const dataUrl = canvas.toDataURL('image/jpeg');
    
    
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'text.componenet.jpg';
            link.click();
        };
    


    const addText = () =>{
        setCount(prev => prev+1);
    }

    return(
        <div className = "edit-page-container">
        <div className="meme-container" ref={memeRef}>
            <img className="meme-edit-image" src={params.get("url")} alt=""  />
            {Array(count).fill(0).map((_,i) => <Text key={i}/>)}
        </div>

        <button onClick={addText}>Add text</button>
        <button onClick={handleDownload}>Save</button>
            <p>double click to activate the edit field and also to grab and move</p>
        </div>
    )
};

export default EditPage;
