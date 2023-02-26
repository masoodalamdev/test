import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');
  const [school, setSchool] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  
  };
  const handleChange2 = (event) => {
    setSchool(event.target.value);
  
  };
  const School = [
    {
        "_id": "63ed3092f5d60c62dbcbd59f",
        "name": "school",
        "email": "school@example.com",
        "password": "$2b$10$IoKEqldIRD1x4rZtDEsb1..AeK1LPbjoouQRV6ZFsN8AjD3Uy4I8C",
        "role": "SCHOOL",
        "tc": true,
        "__v": 0
    },
    {
        "_id": "63ee4004858e83f218fdab63",
        "name": "school2",
        "email": "school2@example.com",
        "password": "$2b$10$j3DS3Krl7aUNxmaC1H6Ugumzv0uLNABzHMYnUrA/NtWD8OjMSAsJi",
        "role": "SCHOOL",
        "tc": true,
        "__v": 0
    },
    {
        "_id": "63ee400e858e83f218fdab67",
        "name": "school3",
        "email": "school3@example.com",
        "password": "$2b$10$m9YgcoUMEr86xva.NzVpF.YBT/foCiZtgO3SmVsI01aYqCurZztnC",
        "role": "SCHOOL",
        "tc": true,
        "__v": 0
    },
    {
        "_id": "63ee7369c2f45c73a6dbee23",
        "name": "school4",
        "email": "school4@example.com",
        "password": "$2b$10$uNRjxA2By5k/CRRBuM6Itug0vifEACHlkIyHY1MnNBq.12Jc1EPzu",
        "__v": 0
    },
    {
        "_id": "63ee7de0e422f5778466dc34",
        "name": "school5",
        "email": "school5@gmail.com",
        "password": "$2b$10$bvEIqim/zGTzXuXN2mEQXuwvD4FSt5DwV1S/1MPC/PjG2J9JiTd4m",
        "__v": 0
    },
    {
        "_id": "63ee7e39e422f5778466dc38",
        "name": "school6",
        "email": "school6@example.com",
        "password": "$2b$10$K7LaVTUSAa2boQUfb1fBi.sv4weXTZnc3ZSs6EtDkJxEpeXWvSAXO",
        "__v": 0
    },
    {
        "_id": "63ee7ea3e422f5778466dc3c",
        "name": "school7",
        "email": "school7@gmail.com",
        "password": "$2b$10$0eDGhAxcZ3HJB7Ep5n0ExOqPD3ycjOx0CEoh9srCEcCHsWjj2fnKu",
        "__v": 0
    },
    {
        "_id": "63ee7ec5e422f5778466dc40",
        "name": "school8",
        "email": "school8@gmail.com",
        "password": "$2b$10$HBSMcNeq626QmPWQM4YE0e51CP62cU0YSUAo8VVpxQ8bx9ScEMEr.",
        "__v": 0
    },
    {
        "_id": "63ee7f58e8dec3a04d539895",
        "name": "school9",
        "email": "school9@gmail.com",
        "password": "$2b$10$8Q4nJ25eOTdxPDqBSHyOmeWlBWDLwXa9hHbBWHn49XN/PcClSVAEq",
        "__v": 0
    },
    {
        "_id": "63ee7f72e8dec3a04d539899",
        "name": "school10",
        "email": "school10@gmail.com",
        "password": "$2b$10$ERu0kUOGMxDe9fKJx8.IsezS5ckz9aDym64XLXZSNxLke2IdcIrDu",
        "__v": 0
    },
    {
        "_id": "63ee8058e8dec3a04d53989d",
        "name": "The Edinburg Native School",
        "email": "theedinschool@gmail.com",
        "password": "$2b$10$rijEWyGlNmv1VT9CMO3mbuEC9IPo1Zsl/R4rqsDL6D7RD6Q4Tn/fm",
        "__v": 0
    }
]

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten10</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <p>Selected Value is {age}</p>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={school}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {School.map((item, index)=> {
            return (
          <MenuItem value={item.name}>{item.name}</MenuItem>
             
            )
          })}





     
        </Select>
      </FormControl>
      <p>Selected Value is {school}</p>

    </div>
  );
}
