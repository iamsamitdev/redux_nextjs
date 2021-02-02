import Head from 'next/head'
import {connect} from 'react-redux'
import AddProductForm from '../src/components/addproductform/AddProductForm'
import ProductList from '../src/components/productlist/ProductList'
import MainLayout from '../src/layouts/MainLayout'
import { createProduct } from '../src/redux/actions/productActions'

const manage = (props) => {

    const { buyProduct , createProduct } = props

    const handleCreate = (data) => {
        createProduct(data)
    }

    return (
        <MainLayout>
            <Head>
                <title>จัดการร้าน</title>
            </Head>

            <h1 className="mb-5">เพิ่มสินค้าใหม่</h1>
            <AddProductForm 
                handleCreate={handleCreate} 
            />

            <h1 className="mb-5">รายการสินค้า</h1>
            <ProductList 
                products={props.product.products} 
                handleUpdate={()=>{}}
                handleDelete={()=>{}}
            />

        </MainLayout>
    )
}

const mapStateToProps = state => ({
    product: state.product
})

const mapDispatchToProps = {
    createProduct: createProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(manage)
