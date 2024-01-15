export default function PieList(props) {
    const { lists } = props
    return<>
        <div style={{width: '100%',   display: 'flex',flexWrap: 'wrap'}}>
            {
                lists.map((item, i) => {
                    return <div key={i}>{item}</div>
                })
            }
        </div>
    </>
}