import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loading = () => {
  return (
      <div className='vh-100 d-flex align-items-center justify-content-center'>
        <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="blocks-loading"
            wrapperClassName="blocks-wrapper"
            wrapperStyle={{}}
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
    </div>
  )
}

export default Loading