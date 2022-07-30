const Flexboxtwo = () => {
  const NamesList = () => (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name}> {name} </li>
        ))}
      </ul>
    </div>
  );
  return <div className="bg-blue-100">My Flexbooxtwo.{NamesList}</div>;
};
export default Flexboxtwo;

/*
 <div className="flex flex-col gap-10">
          {library?.sections.map((section, idx) => {
            return (
              <div key={idx}>
                <div className="flex justify-center font-bold p-2">
                  {section.name}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
                  {section.books.map((book, idx) => (
                    <Book
                      key={idx}
                      book={book}
                      removeBookFromLibrary={removeBookFromLibrary}
                      sectionName={section.name}
                      libraryId={id}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
*/
