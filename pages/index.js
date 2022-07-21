const Flexboxone = () => {
  const words = [
    "Name",
    "Número",
    "Turma",
    "Ano",
    "Género",
    "Benedita I. A. Vedes",
    "3",
    "B",
    "Primeiro",
    "Femenino",
  ];
  return (
    <div className="flex grid grid-cols-5 gap-3 p-3 justify-center m-4 md:bg-yellow-200 lg:bg-blue-200 sm:bg-green-200 xl:bg-orange-200">
      {words.map((word, idx) => (
        <div
          key={idx}
          className="flex justify-center w-34 border border-indigo-600"
        >
          {word}
        </div>
      ))}
    </div>
  );
};
export default Flexboxone;
