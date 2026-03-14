

function InputContact({ label, type, name, placeholder }) {
  return (
    <div className="relative mb-8 h-16">
      <label className="absolute -top-3 left-5 text-[13px] bg-background p-1 z-10">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="absolute top-0 left-0 w-full h-full text-text border-2 border-solid border-[rgba(0,0,0,0.3)] bg-none outline-none rounded-xl p-6 z-1"
      />
    </div>
  )
}

export default InputContact
