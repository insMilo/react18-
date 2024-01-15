import PieList from './PieList'
import EchartsPie from './Echarts'
export default function () {
    return (
    <div  className='app'>
        <PieList lists={
        [
            <EchartsPie width={'30%'}/>,
            <EchartsPie width={'40%'}/>,
            <EchartsPie width={'30%'}/>
        ]
        }/>

    </div>
    );
}