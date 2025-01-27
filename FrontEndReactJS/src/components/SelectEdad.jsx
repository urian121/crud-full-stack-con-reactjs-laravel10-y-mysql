const SelectEdad = ({ register }) => {
  const options = [];
  for (let i = 18; i <= 50; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <select
      className="form-select"
      {...register("edad", { required: true })}
      required
    >
      <option value="">Seleccione la Edad</option>
      {options}
    </select>
  );
};

export default SelectEdad;
