import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchprogram } from "../../../store/Program";
import { useNavigate, useParams } from "react-router-dom";

export default function ProgramDetails() {
  const program = useSelector((state) => state.ProgramSlice.program);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchprogram(id));
  }, [dispatch]);
  return (
    <div>
      <h1>{program?.title}</h1>
      <div className="d-flex justify-content-center py-4">
        <img src={program?.imageURL} alt="" style={{ width: "40rem" }} />
      </div>
    </div>
  );
}
