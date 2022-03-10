export function Container({ children, newClasses }) {
  return (
    <div className={`container grid grid-cols-12 gap-4 mx-auto ${newClasses ? newClasses : ''}`}>
      {children}
    </div>
  );
}
