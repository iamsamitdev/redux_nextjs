import Head from 'next/head'
import {connect} from 'react-redux'
import ProductList from '../src/components/productlist/ProductList'
import MainLayout from '../src/layouts/MainLayout'
import { buyProduct } from '../src/redux/actions/productActions'

const Home = (props) => {

    const { buyProduct } = props

    console.log(props)
    
    const handleBuy = (index) => {
        buyProduct(index)
    }

    return (

        <MainLayout>
            <Head>
                <title>รายการสินค้า</title>
            </Head>
            <h1 className="mb-5">รายการสินค้า</h1>

            <ProductList 
                products={props.product.products} 
                handleBuy={handleBuy} 
            />

        </MainLayout>
    )
}
const mapStateToProps = state => ({
    product: state.product
})

const mapDispatchToProps = {
    buyProduct: buyProduct,
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Home)