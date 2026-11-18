const Inputs = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div>
      <label className="font-semibold text-petroleo">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="mb-4 mt-2 w-full rounded-xl border-2 border-borda bg-creme-claro px-4 py-3 text-lg text-petroleo transition focus:border-verde focus:bg-white focus:outline-none"
      />
    </div>
  )
}

export default Inputs
