import React from "react";

const Nweet=({nweetObj, isOwner})=>{
    const onDeleteClick=()=>{
        const ok=window.confirm("Are you sure you want to delete this nweet?");
        
        if(ok){
            //delete
        }
    }
    return (
        <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
                <>
                    <button onClick={onDeleteClick}>Delete Nweet</button>
                    <button>Edit Nweet</button>
                </>
            )}
        </div>
    );
};

export default Nweet;