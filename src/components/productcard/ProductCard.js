import React from 'react'

const ProductCard = (props) => {

    const { handleBuy, handleUpdate, handleDelete } = props

    // desctructing
    const { imgUrl, title, description, quantity, price } = props.product

    return (
        <div className="card">
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description && description.substring(0, 80)} ...</p>
                <div className="row mb-3">
                    <div className="col-md-6">เหลือ <b>{quantity}</b> ชิ้น</div>
                    <div className="col-md-6 text-end"><b>{price}</b> บาท</div>
                </div>
                <div className="d-grid gap-2 col-12 mx-auto">
                
                {
                    handleBuy && <button className="btn btn-info text-light py-2" type="button" onClick={handleBuy}>สั่งซื้อ</button>
                }
                </div>

                {
                    (handleUpdate && handleDelete) && (
                    <div>
                        <div className='row'>
                            <div className='col-md-6 mb-2'>
                                <div className="d-grid gap-2 col-12 mx-auto">
                                    <button className="btn btn-warning" type="button">แก้ไข</button>
                                </div>
                            </div>
                            <div className='col-md-6 mb-2'>
                                <div className="d-grid gap-2 col-12 mx-auto">
                                    <button className="btn btn-danger" type="button">ลบข้อมูล</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                    
                
            </div>
        </div>
    )
}

export default ProductCard
