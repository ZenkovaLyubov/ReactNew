const RecordView = ({ data, user }) => {
  return (
    <>
      {data.map((e, i) =>
        e.user === user ? (
          <div key={i}>
            <p>{e.body}</p>
            <hr />
          </div>
        ) : null
      )}
    </>
  )
}
export default RecordView
