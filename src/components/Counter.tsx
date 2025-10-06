
import { useCounter } from '../hooks/useCounter'

const Counter = () => {
    const { count, increaseby } = useCounter()


    return (
        <>
            <h3 className="text-2xl">Contador: <small className="font-bold"> {count}</small></h3>

            <div>
                <button className="p-2 bg-blue-500 w-10 mx-2 text-white rounded-xl hover:bg-blue-700 " type="button" onClick={() => increaseby(+1)}>+1</button>
                <button className="p-2 bg-blue-500 w-10 mx-2 text-white rounded-xl hover:bg-blue-700 " type="button" onClick={() => increaseby(-1)}>-1</button>
            </div>

        </>

    )
}

export default Counter