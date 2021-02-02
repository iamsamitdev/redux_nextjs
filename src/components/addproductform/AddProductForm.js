import {useState, useEffect} from 'react'

const AddProductForm = (props) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [imgUrl, setImgUrl] = useState('')


    const handleChangeFile = e => {
        const reader = new FileReader()
    
        reader.onload = e => {
          setImgUrl(e.target.result)
        }
    
        if(e.target.files[0]){
          reader.readAsDataURL(e.target.files[0])
        }
      }
    
    const handleCreate = () =>{
        // console.log(title, description, price, quantity, imgUrl);
        if(title !== '' && description !== '' && price !== '' && imgUrl !== ''){
            props.handleCreate({title, description, price, quantity, imgUrl})
        }
    }

    return (
        <div className="card p-5 mb-5">
            <form>
                <div className="row mb-3">
                    <label htmlFor="Title" className="col-sm-2 col-form-label">ชื่อสินค้า</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={e=>setTitle(e.target.value)} className="form-control" id="Title"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="Description" className="col-sm-2 col-form-label">รายละเอียด</label>
                    <div className="col-sm-10">
                        <textarea rows="5" onChange={e=>setDescription(e.target.value)} className="form-control" id="Description" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="Price" className="col-sm-2 col-form-label">ราคา</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={e=>setPrice(e.target.value)} className="form-control" id="Price" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="Quantity" className="col-sm-2 col-form-label">จำนวนชิ้น</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={e=>setQuantity(e.target.value)} className="form-control" id="Quantity" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="Images" className="col-sm-2 col-form-label">รูปภาพ</label>
                    <div className="col-sm-10">
                        <input type="file" accept='images/*' onChange={handleChangeFile} className="form-control" id="Images" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">&nbsp;</label>
                    <div className="col-sm-10">
                        <button type="button" onClick={handleCreate} className="btn btn-primary">บันทึกรายการ</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default AddProductForm
