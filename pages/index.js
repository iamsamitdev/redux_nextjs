import {useState} from 'react'
import {connect} from 'react-redux'
import MainLayout from '../src/layouts/MainLayout'
import {decrementCounter, incrementCounter} from '../src/redux/actions/counterActions'

const Home = (props) => {

  console.log(props)
  // let counter = 0

  // const { value, dispatch } = props

  // React hook
  // const [counter, setCounter] = useState(0)

  return (
    <MainLayout>

      {/* <h1>Counter: {counter}</h1> */}
      {/* <button onClick={()=>setCounter(counter+1)}>+ Count up</button>&nbsp; */}
      {/* <button onClick={()=>setCounter(counter-1)}>- Count down</button> */}
      {/* <button onClick={()=>{counter++; console.log(counter)}}>+ Counter up</button> */}

      {/* <h1>Counter: {value}</h1>
      <button onClick={()=>dispatch({type: 'INCREMENT_COUNTER'})}>+ Count up</button>&nbsp;
      <button onClick={()=>dispatch({type: 'DECREMENT_COUNTER'})}>- Count down</button> */}

      <h1>Counter: {props.counter}</h1>
      <button onClick={props.incrementCounter}>+ Count up</button>&nbsp;
      <button onClick={props.decrementCounter}>- Count down</button>

    </MainLayout>
  )
}

// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = state => ({
  counter: state.counter.value
})

// mapDispatchToProps
// ส่งค่าไปยัง store เป็น object
const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
}

// export default Home
// export default connect(state=>state.counter)(Home)
export default connect(mapStateToProps,mapDispatchToProps)(Home)


