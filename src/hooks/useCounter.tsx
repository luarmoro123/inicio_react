import { useState } from 'react'

export const useCounter = () => {
    const [count, setCount] = useState(10)


    const increaseby = (value: number) => {
        setCount(Math.max(count + value, 0));
    };


    return {
        //propiedades
        count,
        //metodos
        increaseby
    }
}
