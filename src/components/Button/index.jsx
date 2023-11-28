export default function Button(props) {
  return (
    <button
      className='block bg-emerald-500 hover:bg-emerald-600 text-gray-900 w-full mt-4 p-3 rounded transition-colors'
    >
      {props.children}
    </button>
  )
}