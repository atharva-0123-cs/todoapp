
const handleStatusChange = (topic_id) => {

}

const StatusBar = ({status , id}) => {
    <input
    type="checkbox"
    checked={status}
    onChange={() => handleStatusChange(id)}
    className="w-5 h-5 text-indigo-600 bg-gray-100 rounded border-gray-300 focus:ring-indigo-500"
  />
}

export default StatusBar;