const Button = ({children, m, ...props}) => {
  return <button className={`bg-white border-1 border-teal-500 text-teal-500 rounded px-4 py-2 cursor-pointer hover:bg-teal-500 hover:text-white transition-all active:scale-105 ${m}`} {...props}>{children}</button>
}

export default Button