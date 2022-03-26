import React from 'react'
import './Diet.css'
import NAvbar from '../HomePage-Components/NAvbar'

function Diet() {
  return (
    <>
    <NAvbar></NAvbar>
      <div className="diet">
          <div className="containerm">
    <div className="row">
        <div className="col-md-4">
            <div className="images"> <img className='imgs' src="https://i.pinimg.com/236x/fb/7c/26/fb7c266cc5c249fe4c3a801d6c1a46a1--mother-care-vector-vector.jpg" alt=""/> <i>Pregnant Lady Diet</i> </div>
        </div>
        <div className="col-md-4">
            <div className="images"> <img className='imgs'src="https://image.shutterstock.com/image-vector/baby-tender-embrace-mother-mothers-260nw-397361416.jpg" alt=""/> <i >Post Pregnancy Diet</i> </div>
        </div>
        <div className="col-md-4">
            <div className="images"> <img className='imgs' src="https://img.freepik.com/free-vector/flat-design-stages-baby-boy-illustration_23-2148986557.jpg?size=626&ext=jpg" alt=""/> <i>Infants</i> </div>
        </div>
    </div>
</div>
      </div>
      
      </>
  )
}

export default Diet