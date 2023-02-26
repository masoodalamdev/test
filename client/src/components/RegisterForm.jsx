import React, { useState, useEffect } from 'react'
import { Grid, Typography, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as employeeService from "../../services/employeeService";


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    fullName: '',
    fatherName: '',
    email: '',
    contact: '',
    cnic: '',
    city: '',
    address: '',
    gender: 'male',
    dob: new Date(),
    type: '',
    role: '',
    school: '',
    qualification: '',
    schoolContact: '',
    salary: '',
    experience: ''
}

const {qualification, role} = initialFValues

export default function EmployeeForm() {
    const [rolebaseForm, setRoleBaseForm] = useState()

const handleInputChange2 =(e)=>{
    const selected = e.target.value
    setRoleBaseForm(selected)
    initialFValues.role = selected
    initialFValues.qualification = selected
    // setRole(selected)
    // console.log(selected)
    // if (selected === "1000"){
    //     alert("ADMIN selected")
    // }else if (selected === "2000"){
    //     alert("SCHOOL selected")
    // }else if (selected === "3000"){
    //     alert("TEACHER selected")
    // }else{
    //     alert("STUDENT selected")
    // }
}

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 10 ? "" : "11 digits required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        if (validate()){
            // console.log(values, initialFValues)
            employeeService.insertEmployee(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    {rolebaseForm === "SCHOOL" && (
                         <Typography variant='h6'>Principal Info</Typography>
                    )}
                    {/* <Typography variant='h6'>{rolebaseForm} Info</Typography> */}
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        name="fatherName"
                        label="Father Name"
                        value={values.fatherName}
                        onChange={handleInputChange}
                        error={errors.fatherName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Contact No."
                        name="contact"
                        value={values.contact}
                        onChange={handleInputChange}
                        error={errors.contact}
                    />
                    <Controls.Input
                        label="CNIC No."
                        name="cnic"
                        value={values.cnic}
                        onChange={handleInputChange}
                        error={errors.cnic}
                    />
                     <Controls.Select
                        name="qualification"
                        label="Qualification"
                        value={values.qualification}
                        onChange={handleInputChange}
                        options={employeeService.getQualification()}
                        error={errors.qualification}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Address"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={6}>
                {rolebaseForm === "SCHOOL" && (
                         <Typography variant='h6'>School Info</Typography>
                    )}
                    <Controls.Select
                        name="role"
                        label="Role"
                        value={values.role}
                        onChange={handleInputChange2}
                        options={employeeService.getRole()}
                        error={errors.role}
                    />
                   
                 
                    {/* <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    /> */}
                    {/* <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    /> */}
                

                    {rolebaseForm === "ADMIN" && (
                        <div>
                             <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                        <Controls.DatePicker
                        name="dob"
                        label="Date of Birth"
                        value={values.dob}
                        onChange={handleInputChange}
                    />
                        </div>
                    )}
                    {rolebaseForm === "SCHOOL" && (
                        <div>
                       
                             <Controls.Input
                        name="school"
                        label="School Name"
                        value={values.school}
                        onChange={handleInputChange}
                        error={errors.school}
                    />
                   
                    <Controls.Input
                        label="School Contact No."
                        name="schoolContact"
                        value={values.schoolContact}
                        onChange={handleInputChange}
                        error={errors.schoolContact}
                    />
                                 <Controls.DatePicker
                        name="established"
                        label="Established"
                        value={values.established}
                        onChange={handleInputChange}
                    />
                           <Controls.Input
                        label="School Address"
                        name="schoolAddress"
                        value={values.schoolAddress}
                        onChange={handleInputChange}
                    />

                        </div>
                    )}
                    {rolebaseForm === "TEACHER" && (
                        <div>
                        <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                       <Controls.DatePicker
                        name="dob"
                        label="Date of Birth"
                        value={values.dob}
                        onChange={handleInputChange}
                    />
                             <Controls.Select
                        name="school"
                        label="School"
                        value={values.school}
                        onChange={handleInputChange2}
                        options={employeeService.getRole()}
                        error={errors.school}
                    />
                               <Controls.Input
                        label="Salary"
                        name="salary"
                        value={values.salary}
                        onChange={handleInputChange}
                    />
                    
                    <Controls.Select
                        name="experience"
                        label="Experience"
                        value={values.experience}
                        onChange={handleInputChange}
                        options={employeeService.getExperience()}
                        error={errors.experience}
                    />
                        </div>
                    )}
                    {rolebaseForm === "STUDENT" && (
                        <div>
                             <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                       <Controls.DatePicker
                        name="dob"
                        label="Date of Birth"
                        value={values.dob}
                        onChange={handleInputChange}
                    />
                        <Controls.Select
                        name="school"
                        label="School"
                        value={values.school}
                        onChange={handleInputChange2}
                        options={employeeService.getRole()}
                        error={errors.school}
                    />
                        </div>
                    )}
                    <div>
                    <Controls.Checkbox
                        name="tc"
                        label="I agree to Terms and Conditions"
                        value={values.tc}
                        onChange={handleInputChange}
                    />
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
