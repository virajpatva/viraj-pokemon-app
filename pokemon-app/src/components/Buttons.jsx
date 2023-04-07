import React from "react";
function Buttons({ offset, setOffset, pageLimit }) {

  return (
    <>
      <div >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (Number(offset) - Number(pageLimit) > 0) {
              setOffset(Number(offset) - Number(pageLimit))
            } else {
              console.error("previous page not possible , jumped to 0th page")
              setOffset(0);
            }

          }}
        >
          <button className="offset-btn" type=" submit">Previous</button>
        </form>

      </div>
      <div >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOffset(Number(offset) + Number(pageLimit))
          }}
        >
          <button className="offset-btn" type=" submit">Next</button>
        </form>

      </div>
    </>

  )
}

export default Buttons;