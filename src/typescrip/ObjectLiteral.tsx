
interface Person {
    age: number,
    firstName: string,
    lastName: string,
    address: Address
}
interface Address {
    country: string,
    houseNo: number
    street?: string
}



const ObjectLiteral = () => {
    const peersona: Person = {
        age: 19,
        firstName: 'luis',
        lastName: 'morales',
        address: {
            country: 'mexico',
            houseNo: 277
        }
    }




    return (
        <>
            <div>ObjectLiteral</div>

            <pre>
                {
                    JSON.stringify(peersona, null, 2)
                }
            </pre>
        </>

    )
}

export default ObjectLiteral