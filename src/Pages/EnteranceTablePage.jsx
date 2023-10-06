import React from "react";
import Instruction from "../Components/Instruction/Instruction";
import FullTable from "../Components/Table/FullTable";
import {useSelector} from "react-redux";
import {tableSelector} from "../store/selectors";
import TableSettings from "../Components/Settings/TableSettings";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import TableHeadSettings from "../Components/Settings/TableHeadSettings";
import LadderNameSettings from "../Components/Settings/LadderNameSettings";
import SizeSettings from "../Components/Settings/SizeSettings";
import ChoseEntarance from "../Components/Settings/ChoseEntarance";

import styles from "./style.module.css";

import print from "./printhide.module.css";

function EnteranceTablePage() {
    const {allTableSize, currentTableSize} = useSelector(tableSelector);

    const height = allTableSize[currentTableSize].height;
    const width = allTableSize[currentTableSize].width;


    return (
        <div className={styles.container_horizontal}>
            <FullTable/>
            <div className={print.print_hide + " " + styles.settings}>
                <TableSettings/>
                <div>...................</div>
                <EntaranceInput/>
                <div>...................</div>
                <TableHeadSettings/>
                <div>...................</div>
                <LadderNameSettings/>
                <div>...................</div>
                <SizeSettings/>
                <div>...................</div>
                <ChoseEntarance/>
            </div>

            <Instruction orientering="vertical" height={height} width={width}/>
        </div>
    );
}

export default EnteranceTablePage;
