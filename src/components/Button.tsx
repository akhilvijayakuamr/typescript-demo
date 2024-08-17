
type Button = {
    children: string;
    className?: string;
    onClick?:()=>void;
}

export default function Button({children, className, onClick}:Button) {
  return (
    <button  type='submit' className={className} onClick={onClick}>
        {children}
    </button>
  )
}

