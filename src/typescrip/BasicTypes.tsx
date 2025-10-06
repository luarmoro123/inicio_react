export const BasicTypes = () => {
    const name = "luis"
    const age = 38;
    const isActive = true
    const power: string[] = ['react', 'react Native']





    return (
        <>
            <h3>
                Tipos basicos
            </h3>
            {name} - {age} - {isActive ? 'Vivo' : 'Muesto'}
            <p>{power.join(',')}</p>
        </>
    )
}