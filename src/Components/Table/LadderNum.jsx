import React from 'react';

function LadderNum({ladderN,headType}) {
    const ladN = ladderN.ladderNum 
    
    return (
        <div>
            {headType} №{ladN}
        </div>
    );
}

export default LadderNum;