

interface ButtonProps {
  text: string;                   // Texto que mostrará el botón            // Estado de deshabilitado opcional
}
const ButtonCuston:React.FC<ButtonProps> = ({
    text
}) => {
  return (
   <>
        <button className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700"> 
            {text}
        </button>
   </>
  )
}

export default ButtonCuston