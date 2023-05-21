import React from 'react';

function LadderNum({ladderN,headType}) {
    
    
    return (
        <div className='base ladder_num'>
            {headType}{ladderN}
        </div>
    );
}

export default LadderNum;