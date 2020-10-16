import React, { Component, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { saveAssessment } from "../shared/services/assessment.service";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//React-hook-form
function AssessmentNew() {
  const { register, handleSubmit, control } = useForm();
  const [selectedDate, setselectedDate] = useState();
  //handle submit data
  const onSubmit = (data) => {
    saveAssessment(data);
    //TODO: <Redirect to="/" />;
  };

  //todo: form validation
  //todo: generate form dynamically from a question database.
  //todo: Map questions into component instead of hardcoding jsx
  return (
    <div>
      <h1>Cat Assessment</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="Catname">Cat Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Instrument">Instrument </label>
          <input
            type="text"
            className="form-control"
            name="instrument"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="altercations">
            Physical altercations with other cats
          </label>
          <select className="form-control" name="altercations" ref={register}>
            <option value="0">1-3</option>
            <option value="1">4 or more</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="previousContact">
            Previous contact with Cat Judicial System
          </label>
          <select
            className="form-control"
            name="previousContact"
            ref={register}
          >
            <option value="0">no</option>
            <option value="1">yes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ownerAltercation">
            Physical altercations with owner(scratching, biting, etc..)
          </label>
          <select
            className="form-control"
            name="ownerAltercation"
            ref={register}
          >
            <option value="0">0-10 altercations</option>
            <option value="1">10+ altercations</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="playWellDogs">Plays well with dogs</label>
          <select className="form-control" name="playWellDogs" ref={register}>
            <option value="0">yes</option>
            <option value="1">no</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hissesStrangers">Hisses at strangers</label>
          <select
            className="form-control"
            name="hissesStrangers"
            ref={register}
          >
            <option value="0">no</option>
            <option value="1">yes</option>
          </select>
        </div>
        <div className="form-group">
          <label>Enter Birthday: </label>
          <Controller
            control={control}
            name="birthday"
            className="form-control"
            defaultValue=""
            render={(props) => (
              <ReactDatePicker
                className="input"
                placeholderText="Select date"
                //dateFormat="mm/dd/yyyy"
                onChange={(e) => props.onChange(e)}
                selected={props.value}
              />
            )}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AssessmentNew;
