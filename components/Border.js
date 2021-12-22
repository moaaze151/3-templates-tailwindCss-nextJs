export default function Border() {
  return (
    <>
      {[...Array(100).keys()].map((e) => (
        <div
          key={e}
          className={`absolute  border-[16px] border-white border-b-[#ececec] top-[-32px]`}
          style={{ left: `${e * 32}px` }}
        ></div>
      ))}
    </>
  );
}
