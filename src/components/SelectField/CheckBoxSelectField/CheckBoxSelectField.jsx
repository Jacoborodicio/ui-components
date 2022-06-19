import {useEffect, useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {Switch} from "@mui/material";
import {multiLevelDummy} from "../../constants";
import {CollapseIcon, CustomMenuItem} from "./CheckBoxSelectFieldStyles";

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
    const [builtOptions, setBuiltOptions] = useState([]);
    useEffect(() => buildOptions(multiLevelDummy), []);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const recursiveBuildOptions = (input, aux, size, index = 0, childrenIndex = 0, level = 0) => {
        console.log('%cFile: CheckBoxSelectField.jsx, Function: recursiveBuildOptions, Line 40 index, size: ', 'color: pink', index, size);
        console.log('%cFile: CheckBoxSelectField.jsx, Function: recursiveBuildOptions, Line 40 input: ', 'color: pink', input);
        if (index === size) {
            console.log('%c equals!!!', 'color: #ecb1f2; font-style:italic');
            return aux;
        }
        let tempItem = input[index];
        console.log('%cFile: CheckBoxSelectField.jsx, Function: recursiveBuildOptions, Line 42 tempItem: ', 'color: pink', tempItem);
        let tempObject = {id: tempItem.id, name: tempItem.name, img: tempItem.img, level, collapsed: false, visible: true}
        aux = [...aux, {...tempObject}];
        console.log('%cFile: CheckBoxSelectField.jsx, Function: recursiveBuildOptions, Line 45 aux: ', 'color: pink', aux);
        if (tempItem.hasOwnProperty('children')) {
            console.log('%c TIENE HIJOS', 'color: #ecb1f2; font-style:italic');
            recursiveBuildOptions(input[index].children, aux, size + input[index].children.length, index, level + 1)
        } else {
            recursiveBuildOptions(input.slice(1), aux, size, index + 1, 0, level === 0 ? level : level - 1);
        }
    }

    const buildOptions = options => {
        // TODO: Remove doom logic by replacing it with recursive version
        // let aux = [];
        let fromRecursive = recursiveBuildOptions(options,[], options.length - 1);
        console.log('%cFile: CheckBoxSelectField.jsx, Function: buildOptions, Line 58 fromRecursive: ', 'color: pink', fromRecursive);
        // input:
        // options.forEach(item => {
        //     let level = 0;
        //     // Creating the level to be able to keep hierarchy
        //     if (item.hasOwnProperty('children') && item.children.length > 0) {
        //         aux = [...aux, {id: item.id, name: item.name, img: item.img, level, collapsed: false, visible: true}];
        //         item.children.forEach(subItem => {
        //         level = 1;
        //             if (subItem.hasOwnProperty('children') && subItem.children.length > 0) {
        //                 aux = [...aux, {id: subItem.id, name: subItem.name, img: subItem.img, level, collapsed: false, visible: true}];
        //                 subItem.children.forEach(subItemChild => {
        //                 level = 2;
        //                     if (subItemChild.hasOwnProperty('children') && subItemChild.children.length > 0) {
        //                         aux = [...aux, {id: subItemChild.id, name: subItemChild.name, img: subItemChild.img, level, collapsed: false, visible: true}];
        //                         subItemChild.children.forEach(whatever => {
        //                         level = 3;
        //                             aux = [...aux, {id: whatever.id, name: whatever.name, img: whatever.img, level, visible: true}];
        //                         })
        //                     } else aux = [...aux, {id: subItemChild.id, name: subItemChild.name, img: subItemChild.img, level, visible: true}];
        //                 })
        //             } else aux = [...aux, {id: subItem.id, name: subItem.name, img: subItem.img, level, visible: true}];
        //         })
        //     } else aux = [...aux, {id: item.id, name: item.name, img: item.img, level, visible: true}];
        // })

        // setBuiltOptions(aux);
        setBuiltOptions(fromRecursive)
    }

    const renderOptions = options => {
        return options.map((item) => {
           return item.visible ? (<CustomMenuItem key={item.id} value={item.name} level={item.level}>
                <ListItemText primary={item.name}/>
                {item.hasOwnProperty('collapsed') &&
                    <CollapseIcon collapsed={item.collapsed} onClick={(event) => handleCollapse(item.id, event)}/>}
                <Checkbox checked={personName.indexOf(item.name) > -1}/>
                <Switch checked={personName.indexOf(item.name) > -1}/>
            </CustomMenuItem>) : undefined;
        }
        );
    }

    const handleCollapse = (id, event) => {
        console.log('%cFile: CheckBoxSelectField.jsx, Function: handleCollapse, Line 82 event.target: ', 'color: pink', event.target);
        // TODO: Improve logic, just do it like that for now to play with styling
        // The current idea before the refactoring is just to loop from the current position changing the visible value
        // until we found an item with the same or lower level as the current item (this means that is not inside the current group)
        let auxBuiltOptions = [...builtOptions.map(item => item)]; // TODO: Check if the map is needed -> ref: shallow copy
        let currentIndex = auxBuiltOptions.findIndex(item => item.id === id);
        if (!currentIndex && currentIndex !== 0) return;
        let currentLevel = auxBuiltOptions[currentIndex].level;
        auxBuiltOptions[currentIndex].collapsed = !auxBuiltOptions[currentIndex].collapsed;
        for (let i = currentIndex + 1; i <= auxBuiltOptions.length - 1; i++) {
            if (auxBuiltOptions[i].level > auxBuiltOptions[currentIndex].level) {
                auxBuiltOptions[i].visible = !auxBuiltOptions[currentIndex].collapsed;
            }
        }
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
                    {renderOptions(builtOptions)}
                </Select>
            </FormControl>
        </div>
    );
}