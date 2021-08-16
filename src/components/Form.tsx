import React,{useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {states} from './statesList';

import '../styles/Registration.scss';
import { useSelector } from "react-redux";
import { RootState } from "../Store/userList/store";


export interface Inputs  {
  firstName: string;
  lastName: string;
  email :string;
  dob: string;
  phone : number;
  state : string;
  city: string;
  gender:string;
  language: string |string[];

};
const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  



const schema = yup.object().shape({
  firstName: yup.string().max(25).required("firstname can't be empty and not more than 25 letters"),
  lastName: yup.string().max(25).required("lastname can't be empty and not more than 25 letters"),
  email: yup.string().email().max(25).required("enter a valid email"),
  dob : yup.date().required("enter a valid date"),
  phone:yup.string()
  .required("required")
  .matches(phoneRegex, 'Phone number is not valid')
  .min(10, "to short")
  .max(10, "to long"),
  state: yup.string().required("select a state"),
  city:yup.string().required("select a city"),
  gender:yup.string().required("select a gender").nullable(false),
  language:yup.array().required("select atleast one language")

});


export const Registration = () =>{
  const [selectedState, setSelectedState] = useState("telangana");
  const employees = useSelector((state:RootState) => state.employees)
  console.log(employees);



  const { register, handleSubmit, formState : {errors}} = useForm<Inputs>({
    resolver: yupResolver(schema)
    
  });

  const submitForm = (data :any) => {
    console.log(data)
  };

  return(
    <div>
      <form className="RegistrationForm" onSubmit={handleSubmit(submitForm)}>
        <div>
        <label>FirstName</label>
        <input type="text"  className="form-control" {...register("firstName")}/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
        <label>Lastname</label>
        <input type="text"  className="form-control" {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
        <label>email</label>
        <input type="email"   className="form-control" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
        <label>dob</label>
        <input type="date"   className="form-control" {...register("dob")} />
        {errors.dob && <p>{errors.dob.message}</p>}
        </div>
        <div>
        <label>phone</label>
        <input type="tel"  {...register("phone")} className="form-control"  />
        {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <select className="custom-select  my-3"  {...register("state")} onChange ={(event) => {
            setSelectedState(event.target.value) 
        }} >
         {
              states.map((object)=>{
                  return <option key={object.id}>{object.state}</option>
              })
          }
        </select>{errors.state && <p>{errors.state.message}</p>}<br/>
        <select {...register("city")}>
            {
                states.map((object)=>{
                    if(object.state===selectedState){
                        return(
                            object.cities.map((city)=>{
                                return <option key={city}>{city}</option>
                            })
                        )
                    }
                })
            }
        </select>
        {errors.city && <p>{errors.city.message}</p>}
        
        
        <div>
          <input type="radio" value="male"  {...register("gender")} className="mx-2"/><span>Male</span>
          <input type="radio" value="female"  {...register("gender")}className="mx-2"/><span>Female</span>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>
        <div>
          <input type="checkbox" value="telugu"  {...register("language")}/><span>Telugu</span><br/>
  
          <input type="checkbox" value="hindi"  {...register("language")} /> <span>Hindi</span><br/>  
          {errors.language && <p>{errors.language.message}</p>} 
        </div>
        <input type="submit" className="btn btn-primary"/>
      </form>
    </div>
  )
}






