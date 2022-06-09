import {useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {Switch} from "@mui/material";
import {multiLevelDummy} from "../constants";
import {CustomMenuItem} from "./CheckBoxSelectFieldStyles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function MultipleSelectCheckmarks() {
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const buildOptions = options => {
        console.log('%cFile: CheckBoxSelectField.jsx, Function: buildOptions, Line 57 options: ', 'color: pink', options);
        let aux = [], level = 0;
        options.forEach(item => {
            level = 0;
            // Creating the level to be able to keep hierarchy
            aux = [...aux, {id: item.id, name: item.name, img: item.img, level}];
            if (item.hasOwnProperty('children') && item.children.length > 0) {
                item.children.forEach(subItem => {
                level = 1;
                    aux = [...aux, {id: subItem.id, name: subItem.name, img: subItem.img, level}];
                    if (subItem.hasOwnProperty('children') && subItem.children.length > 0) {
                        subItem.children.forEach(subItemChild => {
                        level = 2;
                            aux = [...aux, {id: subItemChild.id, name: subItemChild.name, img: subItemChild.img, level}];
                            if (subItemChild.hasOwnProperty('children') && subItemChild.children.length > 0) {
                                subItemChild.children.forEach(whatever => {
                                level = 3;
                                    aux = [...aux, {id: whatever.id, name: whatever.name, img: whatever.img, level}];
                                })
                            }
                        })
                    }
                })
            }
        })
        console.log('%cFile: CheckBoxSelectField.jsx, Function: buildOptions, Line 84 aux: ', 'color: pink', aux);
        console.log('%cFile: CheckBoxSelectField.jsx, Function: buildOptions, Line 85 personName: ', 'color: pink', personName);
        return aux.map((item) => (
            // <MenuItem key={item.id} value={item.name} style={{paddingLeft: `${item.level * 30}px`}}>
            //      <ListItemText primary={item.name} />
            //      {/*<Checkbox checked={personName.indexOf(name) > -1} />*/}
            //      {/*<Switch checked={personName.indexOf(name) > -1} />*/}
            //  </MenuItem>
            <CustomMenuItem key={item.id} value={item.name} level={item.level}>
                <ListItemText primary={item.name} />
                <Checkbox checked={personName.indexOf(item.name) > -1} />
                <Switch checked={personName.indexOf(item.name) > -1} />
            </CustomMenuItem>
            )
        )
    }

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Multi-level-selection</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {buildOptions(multiLevelDummy)}
                </Select>
            </FormControl>
        </div>
    );
}